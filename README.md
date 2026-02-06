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
| **aem-mcp-server** | Core MCP server for AEM operations including content management, DAM, and workflow | [GitHub](https://github.com/indrasishbanerjee/aem-mcp-server) |
| **aem-cloud-manager-mcp** | MCP server for Cloud Manager API operations | [GitHub](https://github.com/indrasishbanerjee/aem-mcp-server) |
| **aem-sites-mcp** | Sites-specific MCP server for page operations | [GitHub](https://github.com/pradeep-moolemane/aem-mcp) |
| **aem-assets-mcp** | DAM and asset management MCP server | [GitHub](https://github.com/indrasishbanerjee/aem-mcp-server) |

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

Claude Code supports custom project skills via `.claude/skills/` directory. No pre-built AEM skills exist yet in a public registry.

### Creating Custom AEM Skills

Create a skill by adding a markdown file to `.claude/skills/`:

```bash
mkdir -p .claude/skills
```

Example `.claude/skills/aem-htl.md`:
```markdown
---
description: HTL/Sightly templating best practices for AEM
---

When working with AEM HTL:
- Use context-aware escaping (default behavior)
- Prefer data-sly-use for Java/JS logic
- Follow Sling Model patterns for backend
- Reference: https://experienceleague.adobe.com/docs/experience-manager-htl/content/getting-started.html
```

### Suggested Skills to Create

| Skill | Description |
|-------|-------------|
| `aem-htl` | HTL/Sightly templating best practices |
| `aem-sling-models` | Sling Model development patterns |
| `aem-osgi` | OSGi configuration and services |
| `eds-blocks` | Edge Delivery Services block development |

### Documentation

- [Claude Code Documentation](https://docs.anthropic.com/en/docs/claude-code)

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

### Content Authoring

- **Sidekick AI** - AI-enhanced Sidekick extension
- **Block Suggester** - AI-powered block recommendations
- **Content Optimizer** - SEO and performance optimization

### Development

- **Block Generator** - AI-assisted block scaffolding
- **Style Generator** - CSS generation from design specs
- **Spreadsheet AI** - Intelligent spreadsheet content management

### Performance

- **Lighthouse AI** - Automated performance analysis and fixes
- **Core Web Vitals Optimizer** - AI-driven CWV improvements

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

### CLI Tools

```bash
# AEM CLI with AI capabilities
npm install -g @adobe/aem-cli

# Edge Delivery Services CLI
npm install -g @adobe/helix-cli

# AEM Project Archetype
mvn archetype:generate -DarchetypeGroupId=com.adobe.aem -DarchetypeArtifactId=aem-project-archetype
```

### AI-Enhanced Development

| Tool | Purpose |
|------|---------|
| **AEM Copilot** | AI pair programming for AEM |
| **HTL Analyzer** | AI-powered HTL code review |
| **Component Generator** | AI-assisted component scaffolding |
| **Migration Assistant** | AI-guided AEM migration |

---

## Tutorials & Learning

### Getting Started

1. [Introduction to AI in AEM](https://experienceleague.adobe.com/docs/experience-manager-cloud-service/content/overview/aem-cloud-changes.html) - Adobe's official documentation
2. Building MCP Servers for AEM - Step-by-step MCP server development (Coming Soon)
3. Creating Claude Code Skills for AEM - Custom skill development guide (Coming Soon)
4. AI Agents for Content Management - Building autonomous agents (Coming Soon)

### Advanced Topics

1. Multi-Agent Systems for AEM - Orchestrating multiple AI agents (Coming Soon)
2. RAG with AEM Content - Retrieval-augmented generation (Coming Soon)
3. Fine-tuning Models for AEM - Custom model training (Coming Soon)
4. AI-Powered Testing - Automated test generation (Coming Soon)

### Certifications

- [Adobe Certified Expert - AEM Sites](https://learning.adobe.com/certification.html)
- [Adobe Certified Expert - AEM Assets](https://learning.adobe.com/certification.html)

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

- [Awesome AEM](https://github.com/AdobeDocs/awesome-aem) - General AEM resources
- [Awesome MCP Servers](https://github.com/punkpeye/awesome-mcp-servers) - MCP server collection
- [Awesome LangChain](https://github.com/kyrolabs/awesome-langchain) - LangChain resources
- [Awesome Claude](https://github.com/anthropics/awesome-claude) - Claude resources

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
