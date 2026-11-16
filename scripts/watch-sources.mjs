#!/usr/bin/env node
// Detects upstream changes the README has not been refreshed against.
//
//   node scripts/watch-sources.mjs            compare against the saved state, print a report
//   node scripts/watch-sources.mjs --update   save the current upstream state (run after a refresh)
//
// The saved state (.github/source-state.json) means "the README was last refreshed against this".
// Only names and headings are tracked, never version numbers that churn daily.
// Needs Node 20+. Set GITHUB_TOKEN to avoid the unauthenticated GitHub API rate limit.

import { readFile, writeFile, appendFile } from "node:fs/promises";

const STATE_FILE = new URL("../.github/source-state.json", import.meta.url);
const REPORT_FILE = new URL("../upstream-report.md", import.meta.url);

const gh = async (path) => {
  const headers = {
    Accept: "application/vnd.github+json",
    "User-Agent": "awesome-list-source-watcher",
  };
  if (process.env.GITHUB_TOKEN)
    headers.Authorization = `Bearer ${process.env.GITHUB_TOKEN}`;
  const res = await fetch(`https://api.github.com/${path}`, { headers });
  if (!res.ok) throw new Error(`GitHub API ${res.status} for ${path}`);
  return res.json();
};

const text = async (url) => {
  const res = await fetch(url, {
    headers: { "User-Agent": "awesome-list-source-watcher" },
  });
  if (!res.ok) throw new Error(`HTTP ${res.status} for ${url}`);
  return res.text();
};

const mdFiles = async (repo, treeish) => {
  const tree = await gh(
    `repos/${repo}/git/trees/${encodeURIComponent(treeish)}?recursive=1`,
  );
  if (tree.truncated)
    throw new Error(`Tree listing truncated for ${repo} ${treeish}`);
  return tree.tree
    .filter((e) => e.type === "blob" && e.path.endsWith(".md"))
    .map((e) => e.path);
};

// Each source returns a flat list of strings. Added and removed strings are what gets reported.
const SOURCES = {
  "AEM release notes: feature headings": {
    url: "https://experienceleague.adobe.com/en/docs/experience-manager-cloud-service/content/release-notes/release-notes/release-notes-current",
    hint: 'Each entry is "status section > feature". A feature moving between sections is a status change (for example Limited Availability to GA).',
    async read() {
      const raw = await text(
        "https://raw.githubusercontent.com/AdobeDocs/experience-manager-cloud-service.en/main/help/release-notes/release-notes-cloud/release-notes-current.md",
      );
      // Commented-out blocks are unpublished; ignore them.
      const md = raw.replace(/<!--[\s\S]*?-->/g, "");
      const clean = (h) =>
        h
          .replace(/\{#[^}]*\}/g, "")
          .replace(/\[!DNL ([^\]]+)\]/g, "$1")
          .trim();
      const items = [];
      const version = md.match(/current feature release \((\d{4}\.\d+\.\d+)\)/);
      items.push(
        `Current feature release: ${version ? version[1] : "unknown"}`,
      );
      let section = "";
      for (const line of md.split("\n")) {
        const m = line.match(/^(#{2,4}) (.+)$/);
        if (!m) continue;
        if (m[1].length < 4) section = clean(m[2]);
        else items.push(`${section} > ${clean(m[2])}`);
      }
      return items;
    },
  },
  "AI in AEM documentation pages": {
    url: "https://experienceleague.adobe.com/en/docs/experience-manager-cloud-service/content/ai-in-aem/overview",
    hint: "New or removed pages usually mean a new capability or a doc restructure.",
    read: () =>
      mdFiles(
        "AdobeDocs/experience-manager-cloud-service.en",
        "main:help/ai-in-aem",
      ),
  },
  "adobe/skills: plugins": {
    url: "https://github.com/adobe/skills",
    async read() {
      const raw = await text(
        "https://raw.githubusercontent.com/adobe/skills/main/.claude-plugin/marketplace.json",
      );
      return JSON.parse(raw).plugins.map((p) => p.name);
    },
  },
  "adobe/skills: AEM skills": {
    url: "https://github.com/adobe/skills/tree/main/plugins/aem",
    hint: "Only top-level skills of each AEM plugin are tracked.",
    async read() {
      const paths = await mdFiles("adobe/skills", "main:plugins/aem");
      return paths
        .map((p) => p.match(/^(.+)\/skills\/([^/]+)\/SKILL\.md$/))
        .filter(Boolean)
        .map((m) => `${m[1]}: ${m[2]}`);
    },
  },
  "Adobe AI Registry: MCP servers": {
    url: "https://github.com/AdobeDocs/ai-registry-docs/tree/main/mcp-servers",
    async read() {
      const files = await gh(
        "repos/AdobeDocs/ai-registry-docs/contents/mcp-servers",
      );
      return files.map((f) => f.name.replace(/\.md$/, ""));
    },
  },
  "Adobe LLM Apps documentation pages": {
    url: "https://experienceleague.adobe.com/en/docs/llm-apps/using/overview",
    hint: "Read from the public French mirror, because the English source repository is private.",
    read: () => mdFiles("AdobeDocs/llm-apps.fr-FR", "main:help"),
  },
  "npm packages: major versions": {
    url: "https://www.npmjs.com/org/adobe",
    async read() {
      const names = [
        "@adobe/llm-apps-runtime",
        "@adobe/aem-cli",
        "@adobe/aio-cli",
      ];
      return Promise.all(
        names.map(async (name) => {
          const meta = JSON.parse(
            await text(
              `https://registry.npmjs.org/${name.replace("/", "%2F")}`,
            ),
          );
          return `${name} v${meta["dist-tags"].latest.split(".")[0]}`;
        }),
      );
    },
  },
};

const update = process.argv.includes("--update");
const current = {};
const errors = [];
for (const [name, source] of Object.entries(SOURCES)) {
  try {
    current[name] = [...new Set(await source.read())].sort();
  } catch (err) {
    errors.push(`${name}: ${err.message}`);
  }
}

if (update) {
  if (errors.length) {
    console.error(
      `Not saving state, some sources failed:\n- ${errors.join("\n- ")}`,
    );
    process.exit(1);
  }
  await writeFile(STATE_FILE, `${JSON.stringify(current, null, 2)}\n`);
  console.log(`Saved state for ${Object.keys(current).length} sources.`);
  process.exit(0);
}

let saved = {};
try {
  saved = JSON.parse(await readFile(STATE_FILE, "utf8"));
} catch {
  console.error("No saved state found. Run with --update after a refresh.");
  process.exit(1);
}

const sections = [];
for (const [name, items] of Object.entries(current)) {
  const before = new Set(saved[name] ?? []);
  const after = new Set(items);
  const added = items.filter((i) => !before.has(i));
  const removed = [...before].filter((i) => !after.has(i));
  if (!added.length && !removed.length) continue;
  const { url, hint } = SOURCES[name];
  sections.push(
    [
      `### ${name}`,
      "",
      `Source: ${url}`,
      ...(hint ? ["", hint] : []),
      "",
      ...added.map((i) => `- Added: ${i}`),
      ...removed.map((i) => `- Removed: ${i}`),
    ].join("\n"),
  );
}

const changed = sections.length > 0;
const report = [
  changed
    ? "Upstream sources changed since the README was last refreshed. Review each item against the live page before editing, then run `node scripts/watch-sources.mjs --update` and commit the state file with the refresh."
    : "No upstream changes since the last refresh.",
  ...sections,
  ...(errors.length
    ? [
        "### Sources that could not be read",
        errors.map((e) => `- ${e}`).join("\n"),
      ]
    : []),
].join("\n\n");

await writeFile(REPORT_FILE, `${report}\n`);
console.log(report);
if (process.env.GITHUB_OUTPUT) {
  await appendFile(
    process.env.GITHUB_OUTPUT,
    `changed=${changed}\nerrors=${errors.length > 0}\n`,
  );
}
// A source that cannot be read is a failure only when nothing else was found to report.
process.exit(errors.length && !changed ? 1 : 0);
