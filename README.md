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

### Adobe AI Products
- [Adobe Firefly](https://www.adobe.com/products/firefly.html) - Generative AI for creative workflows
- [Adobe GenStudio](https://business.adobe.com/products/genstudio.html) - AI-powered content supply chain
- [Content Hub](https://experienceleague.adobe.com/docs/experience-manager-cloud-service/content/assets/content-hub/product-overview.html) - AI-enhanced asset management

---

## MCP Servers

Model Context Protocol (MCP) servers that integrate with AEM and EDS.

### AEM Core

| Name | Description | Links |
|------|-------------|-------|
| **aem-mcp-server** | Core MCP server for AEM operations including content management, DAM, and workflow | [GitHub](https://github.com/indrasishbanerjee/aem-mcp-server) |
| **aem-cloud-manager-mcp** | MCP server for Cloud Manager API operations | [GitHub](https://github.com/indrasishbanerjee/aem-mcp-server) |
| **aem-sites-mcp** | Sites-specific MCP server for page operations | [GitHub](https://github.com/pradeep-moolemane/aem-mcp) |
| **aem-assets-mcp** | DAM and asset management MCP server | [GitHub](https://github.com/indrasishbanerjee/aem-mcp-server) |

### Edge Delivery Services

| Name | Description | Links |
|------|-------------|-------|
| **eds-mcp-server** | MCP server for Edge Delivery Services operations | Coming Soon |
| **helix-mcp** | Franklin/Helix project management via MCP | Coming Soon |
| **eds-content-mcp** | Content authoring and publishing for EDS | [GitHub](https://github.com/neerajgrg93/aem-mcp-servers) |

### Integrations

| Name | Description | Links |
|------|-------------|-------|
| **aem-openai-mcp** | OpenAI integration for AEM content generation | [GitHub](https://github.com/g-a-o/aem-openai-mcp-server) |
| **aem-anthropic-mcp** | Claude/Anthropic integration for AEM | Coming Soon |
| **aem-translation-mcp** | AI-powered translation workflows | [GitHub](https://github.com/indrasishbanerjee/aem-mcp-server) |

---

## AI Agents

Autonomous AI agents designed for AEM workflows.

### Content Agents

| Name | Description | Framework |
|------|-------------|-----------|
| **AEM Content Author Agent** | Autonomous content creation and optimization | LangChain |
| **AEM SEO Agent** | SEO analysis and content optimization | CrewAI |
| **AEM Accessibility Agent** | WCAG compliance checking and remediation | Custom |
| **AEM Localization Agent** | Multi-language content management | LangGraph |

### Development Agents

| Name | Description | Framework |
|------|-------------|-----------|
| **AEM Component Agent** | Component scaffolding and development | Claude Code |
| **AEM Migration Agent** | Content and code migration assistance | Custom |
| **AEM Testing Agent** | Automated test generation and execution | Playwright |
| **HTL Copilot** | HTL/Sightly code generation and review | GitHub Copilot |

### Operations Agents

| Name | Description | Framework |
|------|-------------|-----------|
| **AEM Dispatcher Agent** | Cache management and configuration | Custom |
| **AEM Performance Agent** | Performance monitoring and optimization | Custom |
| **Cloud Manager Agent** | CI/CD pipeline management | GitHub Actions |

---

## Claude Code Skills

Pre-built skills for Claude Code to work with AEM projects.

### Available Skills

| Skill | Description | Installation |
|-------|-------------|--------------|
| **aem-htl** | HTL/Sightly templating best practices | `claude skill install aem-htl` |
| **aem-clientlibs** | Client library management | `claude skill install aem-clientlibs` |
| **aem-osgi** | OSGi configuration and services | `claude skill install aem-osgi` |
| **aem-sling-models** | Sling Model development | `claude skill install aem-sling-models` |
| **aem-testing** | AEM unit and integration testing | `claude skill install aem-testing` |
| **eds-blocks** | Edge Delivery Services block development | `claude skill install eds-blocks` |
| **eds-spreadsheets** | EDS spreadsheet-based content | `claude skill install eds-spreadsheets` |

### Skill Development

- [Claude Code Skills Documentation](https://docs.anthropic.com/claude-code/skills)
- [Creating Custom AEM Skills](#tutorials--learning)

---

## IDE Extensions & Plugins

### VS Code Extensions

| Extension | Description | Marketplace |
|-----------|-------------|-------------|
| **AEM Sync** | Sync code with AEM instances | [Link](https://marketplace.visualstudio.com/items?itemName=yamiew.vscode-aem-sync) |
| **AEM HTL Support** | HTL syntax highlighting and snippets | [Link](https://marketplace.visualstudio.com/items?itemName=nicholaschiang.aem) |
| **AEM AI Assistant** | AI-powered AEM development help | Coming Soon |

### IntelliJ Plugins

| Plugin | Description | Marketplace |
|--------|-------------|-------------|
| **AEM IDE** | Comprehensive AEM development tools | [Link](https://plugins.jetbrains.com/plugin/9863-aem-ide) |
| **AEM Support** | AEM project support | [Link](https://plugins.jetbrains.com/plugin/8083-aem-support) |

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
