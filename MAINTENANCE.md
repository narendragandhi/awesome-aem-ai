# Maintenance Guide

Internal playbook for keeping this list useful, lint-clean, and visible. Freshness is the entire value proposition of this list — a stale awesome-list is a dead one.

## Update Cycle (monthly, ~1 hour)

### 1. Research what changed

Check these sources, newest first:

| Source | What to look for |
| ------ | ---------------- |
| [Current release notes](https://experienceleague.adobe.com/en/docs/experience-manager-cloud-service/content/release-notes/release-notes/release-notes-current) | New AI features, GA/Early Adopter status changes |
| [AI in AEM docs](https://experienceleague.adobe.com/en/docs/experience-manager-cloud-service/content/ai-in-aem/overview) | Agent restructures, new MCP servers, renamed doc paths |
| [aem.live AI coding agents](https://www.aem.live/developer/ai-coding-agents) | New recommended tools, skills, MCP servers |
| [Adobe Developer Blog](https://blog.developer.adobe.com/) | Architecture/strategy posts (e.g., "Agentic Evolution of AEM") |
| [news.adobe.com](https://news.adobe.com/) | Product announcements, especially around Summit (March/April) |
| [adobe/skills](https://github.com/adobe/skills) | New skills, install method changes |
| npm/GitHub search for "aem mcp" | New community MCP servers |

Watch for **doc URL migrations** — Adobe reorganizes Experience League paths when products restructure (e.g., `/agents/production/` became `/agents/brand-experience/experience-production/` when agents were consolidated). Old URLs usually redirect, but update them anyway.

### 2. Update the README

- Rewrite the **What's New** section with the current month — it is the freshness signal.
- Update affected sections; move superseded items rather than just appending.
- Verify every new link returns 200:

  ```bash
  curl -s -o /dev/null -w "%{http_code}" -L --max-time 20 "<url>"
  ```

### 3. Lint before committing

```bash
npx prettier --write README.md   # fixes table pipe alignment
npx awesome-lint                  # must report 0 errors
```

## awesome-lint Rules (learned the hard way)

The list passes [awesome-lint](https://github.com/sindresorhus/awesome-lint) as of July 2026. Keep it that way — these are the rules that bite:

1. **No duplicate links.** Any URL (including `#anchor` links) may appear only ONCE in the entire README. Before adding a link, check it isn't already present:

   ```bash
   grep -oE '\]\(([^)]+)\)' README.md | sort | uniq -c | sort -rn | awk '$1>1'
   ```

   If a resource is relevant in two sections, link it once and reference it in plain text elsewhere ("see AI Agents above").

2. **Contents must be the first section**, and every ToC item must match its heading text exactly, in order. Do NOT list "Contributing" or "License" in the ToC.

3. **No `## License` section in the README.** The `LICENSE` file (CC0) is what counts; GitHub must detect it (check `gh api repos/narendragandhi/awesome-aem-ai --jq .license`). A footer note is fine.

4. **List item format is strict.** Unordered list items that start with a link, bold text, or code must be `[Name](https://url) - Description.` — https URL, hyphen separator, trailing period. Anchor-only links are invalid in list items. Numbered lists with bold leads get flagged too. **When in doubt, use a table — tables are exempt from this rule.**

5. **Table pipes must be aligned.** Never hand-edit table widths; run prettier.

6. **Repo requirements:** `awesome` and `awesome-list` GitHub topics, a description, the awesome badge in the H1, and repo age over 30 days.

## Contribution Funnel

- Issue templates live in `.github/ISSUE_TEMPLATE/` (resource submission + dead link).
- When adding someone's tool, open an issue on THEIR repo saying they've been featured, with a link here. Authors star and share — this is the main growth loop.
- Review submissions against the quality checklist in [CONTRIBUTING.md](CONTRIBUTING.md).

## Promotion

Announcement post templates and channel notes live in the local, untracked `PROMOTION.md` (git-ignored). Post after each meaningful update, tied to a timely hook — once per channel per update.

## sindresorhus/awesome Submission (pending)

The list is lint-clean and eligible. Steps (must be done personally — they verify human participation):

1. Confirm `npx awesome-lint https://github.com/narendragandhi/awesome-aem-ai` reports 0 errors.
2. Review 2 other open PRs on [sindresorhus/awesome](https://github.com/sindresorhus/awesome) and note the links to your review comments.
3. Fork and add to `readme.md` at the bottom of the most fitting category:
   `- [AEM AI](https://github.com/narendragandhi/awesome-aem-ai#readme) - AI resources, MCP servers, agents, and skills for Adobe Experience Manager.`
4. Open the PR with the title exactly `Add AEM AI`, complete every item in the PR checklist honestly, and link the 2 reviews from step 2.
5. Expect a wait of weeks to months; respond quickly to reviewer feedback.

## Repo Settings Reference

- **Topics:** awesome, awesome-list, aem, adobe-experience-manager, ai, ai-agents, mcp, mcp-server, edge-delivery-services, claude-code, llm (`gh api -X PUT repos/narendragandhi/awesome-aem-ai/topics`)
- **License:** CC0-1.0 (LICENSE file, GitHub-detected)
- **Badges:** awesome badge + last-commit badge (auto-updates) + PRs-welcome badge
