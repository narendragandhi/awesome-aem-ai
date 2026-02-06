# Awesome AEM AI [![Awesome](https://awesome.re/badge.svg)](https://awesome.re)

> A curated list of AI resources, tools, MCP servers, agents, and skills for Adobe Experience Manager (AEM) and Edge Delivery Services (EDS).


## Contents

- [Official Resources](#official-resources)
- [MCP Servers](#mcp-servers)
- [AI Agents](#ai-agents)
- [Claude Code Skills](#claude-code-skills)
- [IDE Extensions & Plugins](#ide-extensions--plugins)
- [Generative AI in AEM](#generative-ai-in-aem)
- [Edge Delivery Services AI](#edge-delivery-services-ai)
- [Content Intelligence](#content-intelligence)
- [Development Tools](#development-tools)
- [Tutorials & Learning](#tutorials--learning)
- [Community Projects](#community-projects)
- [Articles & Blog Posts](#articles--blog-posts)
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

### Community Agent Frameworks

| Name | Description | Framework |
|------|-------------|-----------|
| **AEM Content Author Agent** | Autonomous content creation and optimization | LangChain |
| **AEM SEO Agent** | SEO analysis and content optimization | CrewAI |
| **AEM Accessibility Agent** | WCAG compliance checking and remediation | Custom |
| **AEM Localization Agent** | Multi-language content management | LangGraph |

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

- [Claude Code Skills Docs](https://code.claude.com/docs/en/skills)
- [Agent Skills Spec](https://github.com/anthropics/skills)

---

## IDE Extensions & Plugins

### VS Code Extensions

| Extension | Description | Marketplace |
|-----------|-------------|-------------|
| **AEM Sync** | Sync file changes to AEM automatically | [Link](https://marketplace.visualstudio.com/items?itemName=Yinkai15.aemsync) |
| **VSCode AEM Sync** | Sync files, folders, nodes to AEM | [Link](https://marketplace.visualstudio.com/items?itemName=yamato-ltd.vscode-aem-sync) |
| **AEM Dev Pack** | Extension pack for AEM/Java development | [Link](https://marketplace.visualstudio.com/items?itemName=mansquatch.ici-aem-dev-pack) |
| **AEM Component Builder** | Creates base component structure for TouchUI and Sightly | [Link](https://marketplace.visualstudio.com/items?itemName=mansquatch.aem-component-builder) |
| **AEM Explorer** | Integrates AEM to VS Code for development | [Link](https://marketplace.visualstudio.com/items?itemName=misonou.aemexplorer) |
| **AEM Copilot** | GitHub Copilot for AEM Edge Delivery Services | [Link](https://marketplace.visualstudio.com/items?itemName=neerajgrg93.aem-copilot) |
| **AEM PowerSync** | Sync files and folders with local AEM instance | [Link](https://marketplace.visualstudio.com/items?itemName=robertbrestle.aempowersync) |

### IntelliJ Plugins

| Plugin | Description | Marketplace |
|--------|-------------|-------------|
| **AEM Support** | Comprehensive AEM development tools | [Link](https://plugins.jetbrains.com/plugin/9863-aem-ide) |

---

## Generative AI in AEM

### Content Generation

- **Generate Variations** - AI-powered content variation generation in AEM
- **Smart Tags** - Automated asset tagging using AI
- **Smart Crop** - AI-driven image cropping for responsive delivery
- **Content Fragments AI** - AI-assisted content fragment creation

### Image Generation

- **Firefly Integration** - Native Adobe Firefly integration in AEM Assets
- **Generative Fill** - AI-powered image editing and expansion
- **Text-to-Image** - Generate images from text prompts

### Personalization

- **Adobe Target AI** - AI-powered personalization and A/B testing
- **Audience AI** - Automated audience segmentation
- **Predictive Engagement** - AI-driven engagement optimization

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

### Experience Modernization Agent

Adobe's hosted AI development environment at [aemcoder.adobe.io](https://aemcoder.adobe.io):
- No local setup required
- Natural language prompts for code changes
- Site creation, migration, and block development

---

## Content Intelligence

### Analytics & Insights

| Tool | Description |
|------|-------------|
| **Content Analytics AI** | AI-powered content performance analysis |
| **Engagement Predictor** | Predict content engagement metrics |
| **Content Gap Analysis** | Identify content opportunities |

### Asset Intelligence

| Feature | Description |
|---------|-------------|
| **Smart Tags** | Automatic asset tagging |
| **Visual Search** | AI-powered similar image search |
| **Auto-Transcription** | Video/audio transcription |
| **Face Detection** | People recognition in images |

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
# AEM CLI - local development server
aem up

# AEM Project Archetype
mvn archetype:generate -DarchetypeGroupId=com.adobe.aem -DarchetypeArtifactId=aem-project-archetype
```

---

## Tutorials & Learning

### Getting Started

1. [AI in AEM Overview](https://experienceleague.adobe.com/en/docs/experience-manager-cloud-service/content/ai-in-aem/overview) - Adobe's official AI documentation
2. Building MCP Servers for AEM - Step-by-step MCP server development (Coming Soon)
3. Creating Claude Code Skills for AEM - Custom skill development guide (Coming Soon)
4. AI Agents for Content Management - Building autonomous agents (Coming Soon)

### Advanced Topics

1. Multi-Agent Systems for AEM - Orchestrating multiple AI agents (Coming Soon)
2. RAG with AEM Content - Retrieval-augmented generation (Coming Soon)
3. Fine-tuning Models for AEM - Custom model training (Coming Soon)
4. AI-Powered Testing - Automated test generation (Coming Soon)

### Certifications

- [Adobe Certification Program](https://certification.adobe.com/) - AEM Sites and Assets certifications

---

## Community Projects

### Open Source

| Project | Description | Stars |
|---------|-------------|-------|
| [ACS AEM Commons](https://github.com/Adobe-Consulting-Services/acs-aem-commons) | Community utilities for AEM | ![GitHub stars](https://img.shields.io/github/stars/Adobe-Consulting-Services/acs-aem-commons) |
| [AEM Guides WKND](https://github.com/adobe/aem-guides-wknd) | Sample AEM project | ![GitHub stars](https://img.shields.io/github/stars/adobe/aem-guides-wknd) |
| [Helix Project Boilerplate](https://github.com/adobe/aem-boilerplate) | EDS starter template | ![GitHub stars](https://img.shields.io/github/stars/adobe/helix-project-boilerplate) |

### Community Tools

- **AEM Groovy Console** - Script execution for AEM
- **AEM Easy Content Upgrade** - Content migration tool
- **AEM Component Generator** - Component scaffolding

---

## Articles & Blog Posts

### Recent Articles

*Community contributions welcome! Submit articles via PR.*

### Technical Deep Dives

*Community contributions welcome! Submit technical deep dives via PR.*

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
