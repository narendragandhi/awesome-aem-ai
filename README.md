# Awesome AEM AI [![Awesome](https://awesome.re/badge.svg)](https://awesome.re)

> A curated list of AI resources, tools, MCP servers, agents, and skills for Adobe Experience Manager (AEM) and Edge Delivery Services (EDS).


## Contents

- [Official Resources](#official-resources)
- [Architecture](#architecture)
- [MCP Servers](#mcp-servers)
- [AI Agents](#ai-agents)
- [Claude Code Skills](#claude-code-skills)
- [IDE Extensions & Plugins](#ide-extensions--plugins)
- [AI Features by AEM Product](#ai-features-by-aem-product)
- [Edge Delivery Services AI](#edge-delivery-services-ai)
- [Development Tools](#development-tools)
- [Tutorials & Learning](#tutorials--learning)
- [Community Projects](#community-projects)
- [Videos & Presentations](#videos--presentations)
- [Contributing](#contributing)

---

## Official Resources

### Adobe Documentation
- [Adobe Sensei](https://www.adobe.com/sensei.html) - Adobe's AI and machine learning framework
- [Using MCP with AEM as a Cloud Service](https://experienceleague.adobe.com/en/docs/experience-manager-cloud-service/content/ai-in-aem/using-mcp-with-aem-as-a-cloud-service) - Official MCP integration guide
- [AEM Agents Overview](https://experienceleague.adobe.com/en/docs/experience-manager-cloud-service/content/ai-in-aem/agents/overview) - Official AI agents documentation

### Adobe AI Products
- [Adobe Firefly](https://www.adobe.com/products/firefly.html) - Generative AI for creative workflows
- [Adobe GenStudio](https://business.adobe.com/products/genstudio.html) - AI-powered content supply chain
- [Content Hub](https://experienceleague.adobe.com/docs/experience-manager-cloud-service/content/assets/content-hub/product-overview.html) - AI-enhanced asset management
- [AI Assistant in AEM](https://experienceleague.adobe.com/en/docs/experience-manager-cloud-service/content/ai-in-aem/ai-assistant/ai-assistant-in-aem-admin) - Integrated AI assistant for product knowledge and support

---

## Architecture

### Adobe Experience Platform Agent Orchestrator

The [Agent Orchestrator](https://experienceleague.adobe.com/en/docs/experience-cloud-ai/experience-cloud-ai/agents/agent-orchestrator) is the agentic layer powering AEM AI agents. It coordinates specialized agents across workflows and applications.

```
┌─────────────────────────────────────────────────────────────────────┐
│                    AI Assistant (Conversational UI)                  │
├─────────────────────────────────────────────────────────────────────┤
│                         Reasoning Engine                             │
│   • Interprets natural language prompts                              │
│   • Creates step-by-step execution plans                             │
│   • Adjusts dynamically, retries alternative approaches              │
├─────────────────────────────────────────────────────────────────────┤
│                    Adobe Experience Platform Agents                  │
│  ┌──────────────┐ ┌──────────────┐ ┌──────────────┐ ┌─────────────┐ │
│  │  Discovery   │ │   Content    │ │  Experience  │ │ Development │ │
│  │    Agent     │ │ Optimization │ │  Production  │ │   Support   │ │
│  └──────────────┘ └──────────────┘ └──────────────┘ └─────────────┘ │
├─────────────────────────────────────────────────────────────────────┤
│                         Knowledge Base                               │
│   • Adobe product documentation                                      │
│   • Customer metadata & business objects                             │
│   • Analytics data                                                   │
└─────────────────────────────────────────────────────────────────────┘
```

**Documentation:** [Agent Orchestrator](https://experienceleague.adobe.com/en/docs/experience-cloud-ai/experience-cloud-ai/agents/agent-orchestrator) | [Platform Learn Tutorial](https://experienceleague.adobe.com/en/docs/platform-learn/tutorials/ai-assistant/agent-orchestrator-overview)

### Key Components

| Component | Description | Documentation |
|-----------|-------------|---------------|
| **Conversational Interface** | Natural language interaction via AI Assistant | [Docs](https://experienceleague.adobe.com/en/docs/experience-cloud-ai/experience-cloud-ai/agents/agent-orchestrator) |
| **Reasoning Engine** | Interprets goals, creates plans, adjusts dynamically | [Docs](https://experienceleague.adobe.com/en/docs/experience-cloud-ai/experience-cloud-ai/agents/agent-orchestrator) |
| **Knowledge Base** | Secure access to documentation, metadata, analytics | [Docs](https://experienceleague.adobe.com/en/docs/experience-cloud-ai/experience-cloud-ai/agents/agent-orchestrator) |
| **LLM Service** | Azure OpenAI or Meta Llama models | [Docs](https://experienceleague.adobe.com/en/docs/experience-cloud-ai/experience-cloud-ai/agents/agent-orchestrator) |

### Built-in Functional Agents

| Agent | Purpose | Scope |
|-------|---------|-------|
| **Product Knowledge Agent** | Retrieves and answers from Adobe documentation | Documentation queries |
| **Operational Insights Agent** | Translates questions to queries against data stores | Analytics & reporting |
| **Product Support Agent** | Troubleshooting for AEM, Platform, CJA, Journey Optimizer | Support tickets |

### Experience Modernization Agent Architecture

The [Experience Modernization Agent](https://experienceleague.adobe.com/en/docs/experience-manager-cloud-service/content/ai-in-aem/agents/modernization/overview) automates migration to Edge Delivery Services:

```
┌─────────────────────────────────────────────────────────────────────┐
│                   Experience Modernization Console                   │
│                      (Web Interface)                                 │
├─────────────────────────────────────────────────────────────────────┤
│                        AI Coding Agent                               │
│  ┌──────────────────────────────────────────────────────────────┐   │
│  │                    Migration Skills                           │   │
│  │  • Page decomposition & section identification                │   │
│  │  • Block mapping against library                              │   │
│  │  • Design system extraction (colors, fonts, CSS)              │   │
│  │  • Bulk content import                                        │   │
│  └──────────────────────────────────────────────────────────────┘   │
├─────────────────────────────────────────────────────────────────────┤
│                      Integration Layer                               │
│  ┌─────────────┐  ┌─────────────┐  ┌─────────────┐  ┌────────────┐  │
│  │   GitHub    │  │    Figma    │  │  Live AEM   │  │   Source   │  │
│  │ Integration │  │ MCP Server  │  │   Preview   │  │  Website   │  │
│  └─────────────┘  └─────────────┘  └─────────────┘  └────────────┘  │
├─────────────────────────────────────────────────────────────────────┤
│                    Edge Delivery Services                            │
│              (Production-ready output)                               │
└─────────────────────────────────────────────────────────────────────┘
```

**Workflow:**
1. Analyze source pages → Identify visual sections
2. Map sections → Match against block library
3. Extract design system → Generate CSS (colors, fonts, styles)
4. Create PRs → GitHub integration for review
5. Deploy → Direct to Edge Delivery Services

**Documentation:** [Overview](https://experienceleague.adobe.com/en/docs/experience-manager-cloud-service/content/ai-in-aem/agents/modernization/overview) | [Getting Started](https://experienceleague.adobe.com/en/docs/experience-manager-cloud-service/content/ai-in-aem/agents/modernization/getting-started)

### Security & Governance

- **Enterprise-grade trust layer** - Built-in data access controls
- **Consent management** - Respects data-usage policies
- **Human oversight** - Agents follow user input and product-level access controls
- **Transparent workflow** - Exposes reasoning logic, queries, and conversation history
- **Audit trail** - All agent actions are logged and explainable

**Documentation:** [AI in Experience Cloud](https://experienceleague.adobe.com/en/docs/experience-cloud-ai/experience-cloud-ai/home)

### Architecture Resources

| Resource | Description | Link |
|----------|-------------|------|
| **AEM Cloud Service Architecture** | Core AEM architecture overview | [Docs](https://experienceleague.adobe.com/en/docs/experience-manager-cloud-service/content/overview/architecture) |
| **EDS Architecture** | Edge Delivery Services deep dive | [Docs](https://www.aem.live/docs/architecture) |
| **Adobe Developers Live 2025** | AEM Agents session recording | [Video](https://experienceleague.adobe.com/en/docs/events/adobe-developers-live-recordings/2025/aem-agents) |
| **Experience Cloud Blueprints** | Reference architecture diagrams | [Docs](https://experienceleague.adobe.com/en/docs/blueprints-learn/architecture/architecture-overview/experience-cloud) |

---

## MCP Servers

Model Context Protocol (MCP) servers that integrate with AEM and EDS.

### Official Adobe MCP Server

Adobe provides official MCP servers hosted at `https://mcp.adobeaemcloud.com/adobe/mcp/`:

| Server | Endpoint | Description |
|--------|----------|-------------|
| **Content Server** | `/content` | Full CRUD operations for pages, fragments, and assets |
| **Content Read-Only** | `/content-readonly` | Read-only access for retrieval operations |

**Key Features:**
- Natural language interaction with AEM content
- OAuth authentication via Adobe ID
- Respects user's AEM permissions
- Supports Claude, Cursor, ChatGPT, and Microsoft Copilot Studio

[Official Documentation](https://experienceleague.adobe.com/en/docs/experience-manager-cloud-service/content/ai-in-aem/using-mcp-with-aem-as-a-cloud-service)

### Community MCP Servers

| Name | Description | Links |
|------|-------------|-------|
| **aem-mcp-server** | Full-featured MCP server for AEM - chat with your AEM instance via natural language | [npm](https://www.npmjs.com/package/aem-mcp-server) / [GitHub](https://github.com/indrasishbanerjee/aem-mcp-server) |
| **aem-sites-mcp** | Sites-specific MCP server for page operations | [GitHub](https://github.com/pradeep-moolemane/aem-mcp) |

### Edge Delivery Services

*Community contributions welcome! Submit EDS MCP servers via PR.*

---

## AI Agents

### Official Adobe Agents

Adobe provides five official AI agents for AEM as a Cloud Service (Beta Program):

| Agent | Description | Documentation |
|-------|-------------|---------------|
| **Experience Production Agent** | Automates high-effort, high-volume tasks by converting manual processes into AI-assisted workflows | [Docs](https://experienceleague.adobe.com/en/docs/experience-manager-cloud-service/content/ai-in-aem/agents/overview) |
| **Content Optimization Agent** | Refine assets through natural language - create renditions, adjust visual properties, change backgrounds | [Docs](https://experienceleague.adobe.com/en/docs/experience-manager-cloud-service/content/ai-in-aem/agents/overview) |
| **Discovery Agent** | Intelligent search across Assets, Content Fragments, and Adaptive Forms | [Docs](https://experienceleague.adobe.com/en/docs/experience-manager-cloud-service/content/ai-in-aem/agents/overview) |
| **Development Agent** | Streamlines code creation, debugging, deployment, and optimization for developers | [Docs](https://experienceleague.adobe.com/en/docs/experience-manager-cloud-service/content/ai-in-aem/agents/overview) |
| **Governance Agent** | Safeguards brand integrity and compliance by enforcing security and brand policies | [Docs](https://experienceleague.adobe.com/en/docs/experience-manager-cloud-service/content/ai-in-aem/agents/overview) |

**Availability:** AEM as a Cloud Service and Edge Delivery Services only (Beta Program required)

---

## Claude Code Skills

### Official Adobe EDS Skills

Install official Adobe skills from [adobe/helix-website](https://github.com/adobe/helix-website/tree/main/.claude/skills):

```bash
# Install via gh-upskill
gh extension install trieloff/gh-upskill
gh upskill adobe/helix-website --all
```

15 skills available: `content-driven-development`, `page-import`, `building-blocks`, `content-modeling`, `testing-blocks`, `code-review`, `docs-search`, `block-inventory`, `block-collection-and-party`, `page-decomposition`, `identify-page-structure`, `scrape-webpage`, `generate-import-html`, `preview-import`, `authoring-analysis`

### AEM Core Skills (This Repository)

Pre-built AEM backend skills available in `.claude/skills/`:

| Skill | Description | File |
|-------|-------------|------|
| **aem-htl** | HTL/Sightly templating, data binding, contexts, i18n | [View](.claude/skills/aem-htl.md) |
| **aem-sling-models** | Sling Models, injectors, delegation, exporters | [View](.claude/skills/aem-sling-models.md) |
| **aem-osgi** | OSGi services, configs, schedulers, events | [View](.claude/skills/aem-osgi.md) |
| **aem-clientlibs** | Client libraries, dependencies, optimization | [View](.claude/skills/aem-clientlibs.md) |
| **aem-testing** | Unit tests, AEM Mocks, integration tests | [View](.claude/skills/aem-testing.md) |
| **eds-blocks** | EDS block development, patterns, utilities | [View](.claude/skills/eds-blocks.md) |

### Installation

```bash
# Copy this repo's skills to your AEM project
cp -r .claude/skills/ /path/to/your/aem-project/.claude/skills/
```

### Skills Tools

| Tool | Description | Install |
|------|-------------|---------|
| [gh-upskill](https://github.com/trieloff/gh-upskill) | Install skills from any GitHub repo | `gh extension install trieloff/gh-upskill` |
| [openskills](https://www.npmjs.com/package/openskills) | Universal skills loader for AI agents | `npx openskills install` |
| [claude-skills-cli](https://www.npmjs.com/package/claude-skills-cli) | Create and validate Claude skills | `npx claude-skills-cli init` |

### Documentation

- [Claude Code Skills Docs](https://code.claude.com/docs/en/skills) - Official skill creation guide
- [Agent Skills Repository](https://github.com/anthropics/skills) - 64k+ stars, example skills and specification

---

## IDE Extensions & Plugins

### VS Code Extensions

| Extension | Description | Marketplace |
|-----------|-------------|-------------|
| **AEM Sync** | Sync file changes to AEM automatically | [Link](https://marketplace.visualstudio.com/items?itemName=Yinkai15.aemsync) |
| **VSCode AEM Sync** | Sync files, folders, nodes to AEM | [Link](https://marketplace.visualstudio.com/items?itemName=yamato-ltd.vscode-aem-sync) |
| **AEM Copilot** | GitHub Copilot for AEM Edge Delivery Services | [Link](https://marketplace.visualstudio.com/items?itemName=neerajgrg93.aem-copilot) |
| **AEM Explorer** | Integrates AEM to VS Code for development | [Link](https://marketplace.visualstudio.com/items?itemName=misonou.aemexplorer) |

### IntelliJ Plugins

| Plugin | Description | Marketplace |
|--------|-------------|-------------|
| **AEM IDE** | Comprehensive AEM development tools | [Link](https://plugins.jetbrains.com/plugin/9863-aem-ide) |

---

## AI Features by AEM Product

### AEM Sites

| Feature | Description | Documentation |
|---------|-------------|---------------|
| **Generate Variations** | AI-powered content variations for Content Fragments and EDS | [Docs](https://experienceleague.adobe.com/en/docs/experience-manager-cloud-service/content/ai-in-aem/generate-variations/generate-variations-integrated-editor) |
| **Generative AI Overview** | GenAI for content creation and personalization | [Docs](https://experienceleague.adobe.com/en/docs/experience-manager-cloud-service/content/generative-ai/generative-ai-in-aem) |

### AEM Assets

| Feature | Description | Documentation |
|---------|-------------|---------------|
| **Smart Tags** | Automatic AI tagging for images and videos | [Docs](https://experienceleague.adobe.com/en/docs/experience-manager-cloud-service/content/assets/manage/smart-tags) |
| **Smart Crop** | AI-powered focal point detection and cropping | [Docs](https://experienceleague.adobe.com/en/docs/experience-manager-learn/assets/dynamic-media/images/smart-crop-feature-video-use) |
| **Dynamic Media AI** | Smart imaging and video optimization | [Docs](https://experienceleague.adobe.com/en/docs/experience-manager-learn/assets/dynamic-media/dynamic-media-overview-feature-video-use) |
| **Content Optimization Agent** | Natural language asset refinement | [Docs](https://experienceleague.adobe.com/en/docs/experience-manager-cloud-service/content/ai-in-aem/agents/content-optimization/overview) |

### AEM Forms

| Feature | Description | Documentation |
|---------|-------------|---------------|
| **Generative AI for Forms** | AI-powered form generation and panel creation | [Docs](https://experienceleague.adobe.com/en/docs/experience-manager-cloud-service/content/forms/forms-overview/early-access-ea-features) |
| **AI Assistant** | Product knowledge and authoring assistance | [Docs](https://experienceleague.adobe.com/en/docs/experience-manager-cloud-service/content/ai-in-aem/ai-assistant/ai-assistant-in-aem) |
| **Discovery Agent** | Intelligent search across Adaptive Forms | [Docs](https://experienceleague.adobe.com/en/docs/experience-manager-cloud-service/content/ai-in-aem/agents/discovery/overview) |

### AEM Guides

| Feature | Description | Documentation |
|---------|-------------|---------------|
| **AI Assistant** | Smart help and authoring features | [Docs](https://experienceleague.adobe.com/en/docs/experience-manager-guides/using/user-guide/ai-assistant-aem/ai-assistant) |
| **Smart Suggestions** | AI-powered content reuse recommendations | [Docs](https://experienceleague.adobe.com/en/docs/experience-manager-guides/using/user-guide/ai-assistant-aem/authoring-ai-based-smart-suggestions) |

### AEM Screens

| Feature | Description | Documentation |
|---------|-------------|---------------|
| **Data-Driven Personalization** | Rules-based personalization for digital signage based on location, time, audience data | [Docs](https://experienceleague.adobe.com/en/docs/experience-manager-screens/user-guide/aem-screens-introduction) |
| **Smart Image Cropping** | AI-powered focal point detection for screen dimensions (inherited from Assets) | [Docs](https://experienceleague.adobe.com/en/docs/experience-manager-screens/using/authoring/setting-up-acls) |
| **Adobe Analytics Integration** | Understanding signage performance with analytics | [Docs](https://experienceleague.adobe.com/en/docs/experience-manager-screens/using/administering/configuring-adobe-analytics-aem-screens) |
| **Adobe Target A/B Testing** | AI-assisted testing for digital signage content | [Docs](https://experienceleague.adobe.com/en/docs/experience-manager-screens/using/administering/configuring-adobe-analytics-aem-screens) |

> **Note:** AEM Screens inherits AI capabilities from AEM Sites and Assets (Smart Tags, Smart Crop, etc.) for content that is published to digital signage displays.

### Migration & Modernization

| Feature | Description | Documentation |
|---------|-------------|---------------|
| **Experience Modernization Agent** | AI-assisted migration to Edge Delivery Services | [Docs](https://experienceleague.adobe.com/en/docs/experience-manager-cloud-service/content/ai-in-aem/agents/modernization/overview) |
| **Site Migration Skill** | Automated content and style migration | [Docs](https://experienceleague.adobe.com/en/docs/experience-manager-cloud-service/content/ai-in-aem/agents/production/site-migration) |
| **AEM Modernization Tools** | Convert legacy AEM to modern patterns | [Docs](https://experienceleague.adobe.com/en/docs/experience-manager-learn/cloud-service/migration/moving-to-aem-as-a-cloud-service/aem-modernization-tools) |

---

## Edge Delivery Services AI

### Official Documentation (aem.live)

| Resource | Description | Link |
|----------|-------------|------|
| **Developer Tutorial** | Get started with EDS in 10-20 minutes | [Tutorial](https://www.aem.live/developer/tutorial) |
| **AI Coding Agents** | Guide to using AI tools with EDS | [Guide](https://www.aem.live/developer/ai-coding-agents) |
| **Block Collection** | Curated production-ready blocks | [Blocks](https://www.aem.live/developer/block-collection) |
| **CLI Reference** | aem up, aem import commands | [CLI](https://www.aem.live/developer/cli-reference) |
| **Block Party** | Community-built blocks showcase | [Block Party](https://www.aem.live/developer/block-party/) |
| **Universal Editor Blocks** | Blocks for UE authoring | [UE Blocks](https://www.aem.live/developer/universal-editor-blocks) |
| **Architecture** | Deep dive into EDS architecture | [Architecture](https://www.aem.live/docs/architecture) |

### Adobe Helix Claude Skills

Official skills from [adobe/helix-website](https://github.com/adobe/helix-website/tree/main/.claude/skills):

**Orchestration Skills:**
- `content-driven-development` - Complete workflow for building/modifying blocks
- `page-import` - Orchestrates migrating webpages to AEM EDS

**Functional Skills:**
- `building-blocks` - Core block development
- `content-modeling` - Content schema definitions
- `testing-blocks` - Block testing and validation
- `code-review` - Code review workflows

**Research Skills:**
- `docs-search` - Search AEM documentation
- `block-inventory` - Track available blocks
- `block-collection-and-party` - Find existing blocks

**Import Skills:**
- `page-decomposition` - Break pages into components
- `identify-page-structure` - Detect page layout
- `scrape-webpage` - Web scraping utilities
- `generate-import-html` - HTML import generation
- `preview-import` - Preview imports

### Installing Adobe Skills

```bash
# Install gh-upskill extension
gh extension install trieloff/gh-upskill

# Add Adobe EDS skills to your project
gh upskill adobe/helix-website

# Or install standalone
curl -fsSL https://raw.githubusercontent.com/trieloff/gh-upskill/main/install.sh | bash
upskill adobe/helix-website --all
```


---

## Development Tools

### npm Packages

#### Official Adobe Packages

| Package | Description | Install |
|---------|-------------|---------|
| [@adobe/aem-cli](https://www.npmjs.com/package/@adobe/aem-cli) | AEM/EDS CLI for local development | `npm i -g @adobe/aem-cli` |
| [@adobe/aem-headless-client-js](https://www.npmjs.com/package/@adobe/aem-headless-client-js) | AEM Headless SDK Client | `npm i @adobe/aem-headless-client-js` |
| [@adobe/aem-import-helper](https://www.npmjs.com/package/@adobe/aem-import-helper) | Helper tool for importing sites to AEM | `npm i @adobe/aem-import-helper` |
| [@adobe/aem-upload](https://www.npmjs.com/package/@adobe/aem-upload) | AEM Assets direct binary uploading | `npm i @adobe/aem-upload` |
| [@adobe/aem-spa-page-model-manager](https://www.npmjs.com/package/@adobe/aem-spa-page-model-manager) | SPA Editor page model manager | `npm i @adobe/aem-spa-page-model-manager` |

#### Community MCP & AI Packages

| Package | Description | Install |
|---------|-------------|---------|
| [aem-mcp-server](https://www.npmjs.com/package/aem-mcp-server) | MCP server for AEM - chat with your AEM instance | `npm i -g aem-mcp-server` |
| [openskills](https://www.npmjs.com/package/openskills) | Universal skills loader for AI coding agents | `npx openskills install` |
| [claude-skills-cli](https://www.npmjs.com/package/claude-skills-cli) | CLI for creating Claude Agent Skills | `npx claude-skills-cli init` |

#### Development Tools

| Package | Description | Install |
|---------|-------------|---------|
| [aemsync](https://www.npmjs.com/package/aemsync) | Code sync for Sling/AEM | `npm i -g aemsync` |
| [aem-clientlib-generator](https://www.npmjs.com/package/aem-clientlib-generator) | Creates AEM ClientLibs config files | `npm i aem-clientlib-generator` |
| [aem-import-builder](https://www.npmjs.com/package/aem-import-builder) | AI capabilities for AEM import scripts | `npm i aem-import-builder` |

### CLI Commands

```bash
# AEM CLI - local development server with AI coding agents support
aem up

# AEM Project Archetype
mvn archetype:generate -DarchetypeGroupId=com.adobe.aem -DarchetypeArtifactId=aem-project-archetype
```

---

## Tutorials & Learning

### Official Adobe Learning

| Resource | Description | Link |
|----------|-------------|------|
| **AI in AEM Overview** | Official AI documentation | [Docs](https://experienceleague.adobe.com/en/docs/experience-manager-cloud-service/content/ai-in-aem/overview) |
| **Generative AI in AEM Sites** | Video tutorial on GenAI features | [Video](https://experienceleague.adobe.com/en/docs/experience-manager-learn/cloud-service/expert-resources/cloud-5/season-3/cloud5-generative-ai-for-aem-sites) |
| **EDS Developer Tutorial** | Get started with Edge Delivery Services | [Tutorial](https://www.aem.live/developer/tutorial) |
| **Experience Modernization** | Getting started with migration agent | [Guide](https://experienceleague.adobe.com/en/docs/experience-manager-cloud-service/content/ai-in-aem/agents/modernization/getting-started) |

### Certifications

- [Adobe Certification Program](https://certification.adobe.com/) - AEM Sites, Assets, and Developer certifications

---

## Community Projects

### Open Source

| Project | Description | Stars |
|---------|-------------|-------|
| [ACS AEM Commons](https://github.com/Adobe-Consulting-Services/acs-aem-commons) | Community utilities for AEM | ![GitHub stars](https://img.shields.io/github/stars/Adobe-Consulting-Services/acs-aem-commons) |
| [AEM Guides WKND](https://github.com/adobe/aem-guides-wknd) | Sample AEM project | ![GitHub stars](https://img.shields.io/github/stars/adobe/aem-guides-wknd) |
| [Helix Project Boilerplate](https://github.com/adobe/aem-boilerplate) | EDS starter template | ![GitHub stars](https://img.shields.io/github/stars/adobe/helix-project-boilerplate) |

### Community Tools

| Tool | Description | Link |
|------|-------------|------|
| **AEM Groovy Console** | Script execution for AEM | [GitHub](https://github.com/orbinson/aem-groovy-console) |
| **AEM Block Collection** | Curated EDS blocks | [GitHub](https://github.com/adobe/aem-block-collection) |

---

## Videos & Presentations

### Adobe Summit Sessions

- [AI-Powered Content Supply Chain](https://summit.adobe.com/) - Summit 2024
- [Next-Gen Experience Management](https://summit.adobe.com/) - Summit 2024

### YouTube Channels

- [Adobe Experience League](https://www.youtube.com/@AdobeExperienceLeague)
- [AEM Rocks](https://www.youtube.com/@aemrocks)
- [AEM Geeks](https://www.youtube.com/@aemgeeks)

### Webinars

- [Monthly AEM Community Webinars](https://experienceleaguecommunities.adobe.com/)

---

## Related Awesome Lists

- [Awesome AEM](https://github.com/emincansumer/awesome-aem) - Curated list of AEM/CQ5 resources
- [Awesome MCP Servers](https://github.com/punkpeye/awesome-mcp-servers) - MCP server collection (80k+ stars)
- [Awesome LangChain](https://github.com/kyrolabs/awesome-langchain) - LangChain resources
- [Awesome Claude Code](https://github.com/hesreallyhim/awesome-claude-code) - Claude Code skills, hooks, and tools (23k+ stars)

---

## Contributing

Contributions are welcome! Please read the [contribution guidelines](CONTRIBUTING.md) first.

### How to Contribute

1. Fork this repository
2. Create a new branch (`git checkout -b feature/add-resource`)
3. Add your resource to the appropriate section
4. Commit your changes (`git commit -am 'Add awesome resource'`)
5. Push to the branch (`git push origin feature/add-resource`)
6. Create a Pull Request

### Contribution Guidelines

- Ensure the resource is relevant to AEM and AI
- Provide accurate descriptions
- Include working links
- Follow the existing format

---

## License

[![CC0](https://licensebuttons.net/p/zero/1.0/88x31.png)](https://creativecommons.org/publicdomain/zero/1.0/)

To the extent possible under law, the contributors have waived all copyright and related or neighboring rights to this work.

---

<p align="center">
  <sub>Built with AI for the AEM Community</sub>
</p>
