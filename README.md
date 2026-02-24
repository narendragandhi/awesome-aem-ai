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
- [Adobe LLM Optimizer](#adobe-llm-optimizer)
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
- [AI in AEM Overview](https://experienceleague.adobe.com/en/docs/experience-manager-cloud-service/content/ai-in-aem/overview) - All AI capabilities in AEM

### Adobe AI Products
- [Adobe Sensei](https://www.adobe.com/sensei.html) - Adobe's AI and machine learning framework
- [Adobe GenStudio](https://business.adobe.com/products/genstudio.html) - AI-powered content supply chain for performance marketing
- [Adobe LLM Optimizer](https://experienceleague.adobe.com/en/docs/llm-optimizer/using/home) - Generative Engine Optimization (GEO) for AI search visibility
- [Content Hub](https://experienceleague.adobe.com/docs/experience-manager-cloud-service/content/assets/content-hub/product-overview.html) - AI-enhanced asset management
- [AI Assistant in AEM](https://experienceleague.adobe.com/en/docs/experience-manager-cloud-service/content/ai-in-aem/ai-assistant/ai-assistant-in-aem-admin) - Integrated AI assistant for product knowledge and support

**See also:** [Dedicated LLM Optimizer Section](#adobe-llm-optimizer) for complete documentation, tutorials, and guides.

### Announcements
- [Adobe AI Agents GA (September 2025)](https://news.adobe.com/news/downloads/pdfs/2025/09/091025-general-availability-of-ai-agents.pdf) - General availability of AI agents for customer experience orchestration

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
| **aem-mcp-server** | Full-featured MCP server for AEM - 35+ methods for content, components, assets | [npm](https://www.npmjs.com/package/aem-mcp-server) / [GitHub](https://github.com/indrasishbanerjee/aem-mcp-server) |
| **aem-eds-mcp-server** | MCP server for AEM Edge Delivery Services - 10 tools for content management, config, jobs, search | [npm](https://www.npmjs.com/package/@neerajgrg93/aem-eds-mcp-server) |
| **aem-sites-mcp** | Sites-specific MCP server for local AEM instance management | [GitHub](https://github.com/pradeep-moolemane/aem-mcp) |
| **acm-mcp-server** | MCP server for AEM Content Manager (ACM) - execute Groovy scripts via AI | [GitHub](https://github.com/narendragandhi/acm/tree/main/mcp.server) |

### Edge Delivery Services

*Community contributions welcome! Submit EDS MCP servers via PR.*

---

## AI Agents

### Official Adobe Agents

Adobe provides six official AI agents for AEM as a Cloud Service (Beta Program). Contact `aemagentsteam@adobe.com` to opt in.

#### Experience Production Agent

Automates high-effort, high-volume content tasks. [Overview](https://experienceleague.adobe.com/en/docs/experience-manager-cloud-service/content/ai-in-aem/agents/production/overview)

| Skill | Description | Documentation |
|-------|-------------|---------------|
| **Content Update** | Update, remove, replace content in pages, fragments, forms via natural language or Jira | [Docs](https://experienceleague.adobe.com/en/docs/experience-manager-cloud-service/content/ai-in-aem/agents/production/content-update) |
| **Form Creation** | Build adaptive forms through natural language without development teams | [Docs](https://experienceleague.adobe.com/en/docs/experience-manager-cloud-service/content/ai-in-aem/agents/production/overview) |
| **Communications Creation** | Generate personalized, data-driven correspondence (statements, policies, bills) - Alpha | [Docs](https://experienceleague.adobe.com/en/docs/experience-manager-cloud-service/content/ai-in-aem/agents/production/overview) |

**Content Update Skill Technical Details:**
- **Content Types:** Pages, Content Fragments, Adaptive Forms, Assets
- **Operations:** Update, remove, replace, add content elements
- **Input Methods:** Natural language prompts or Jira ticket integration
- **Execution:** Automates high-effort, high-volume content tasks
- **Integration:** Direct AEM author instance connectivity

#### Experience Modernization Agent

AI-powered website migration to Edge Delivery Services. [Overview](https://experienceleague.adobe.com/en/docs/experience-manager-cloud-service/content/ai-in-aem/agents/modernization/overview)

| Skill | Description | Documentation |
|-------|-------------|---------------|
| **Site Migration** | Transform websites from any CMS, legacy AEM, or Figma into EDS projects | [Docs](https://experienceleague.adobe.com/en/docs/experience-manager-cloud-service/content/ai-in-aem/agents/modernization/overview) |
| **Block Development** | Content-Driven Development methodology with Block Collection/Party | [Docs](https://experienceleague.adobe.com/en/docs/experience-manager-cloud-service/content/ai-in-aem/agents/modernization/overview) |
| **Design Extraction** | Extract colors, fonts, styles into CSS from source sites | [Docs](https://experienceleague.adobe.com/en/docs/experience-manager-cloud-service/content/ai-in-aem/agents/modernization/getting-started) |

**Console:** Available at `aemcoder.adobe.io` - no local setup required

#### Content Optimization Agent

Transform assets through natural language for channel-ready variations. [Overview](https://experienceleague.adobe.com/en/docs/experience-manager-cloud-service/content/ai-in-aem/agents/content-optimization/overview)

| Capability | Description |
|------------|-------------|
| **Dynamic Variant Generation** | Create optimized variants as dynamic URLs for different channels |
| **Image Optimization** | Format conversion, resolution, cropping, sharpening, background changes |
| **Multi-Variant Production** | Generate multiple renditions from single prompts (Instagram, web banners, etc.) |

#### Discovery Agent

Natural language content discovery across AEM. [Overview](https://experienceleague.adobe.com/en/docs/experience-manager-cloud-service/content/ai-in-aem/agents/discovery/overview)

| Capability | Description |
|------------|-------------|
| **Semantic Search** | Find assets, fragments, forms using conversational prompts |
| **Multi-Content Discovery** | Searches across Assets (images, videos, PDFs), Content Fragments, and Adaptive Forms simultaneously |
| **Tag & Folder Discovery** | Locate content by taxonomy or folder structure |
| **Advanced Filtering** | Format, orientation, dimensions, metadata, creation dates |
| **Conversational Prompts** | Natural language queries without building complex search syntax |
| **Click-Free Discovery** | Streamlined, click-free experience for content retrieval |

**Supported Content Types:**
- Images, videos, PDF documents
- Content Fragments (structured content)
- Adaptive Forms and form templates
- Articles and marketing collateral

#### Development Agent

Pipeline troubleshooting for AEM Cloud Service. [Overview](https://experienceleague.adobe.com/en/docs/experience-manager-cloud-service/content/ai-in-aem/agents/development/overview)

| Capability | Description |
|------------|-------------|
| **Pipeline Status** | Retrieve build status for dev, stage, production |
| **Build Troubleshooting** | Analyze logs and suggest fixes for failing build steps |
| **Code Analysis** | Examine related code to recommend solutions |

**Access:** Requires Cloud Manager Developer or Program Manager role

#### Governance Agent

Brand integrity and compliance enforcement. [Overview](https://experienceleague.adobe.com/en/docs/experience-manager-cloud-service/content/ai-in-aem/agents/governance/overview)

| Capability | Description |
|------------|-------------|
| **Compliance Monitoring** | Detect policy violations in real-time |
| **Metadata Enforcement** | Ensure assets have required metadata |
| **Brand Validation** | Check content against tone, claims, logo, typography, imagery rules |

**Integration:** Works with ChatGPT, Claude, and other AI systems via A2A and MCP protocols

---

### Agent Resources

| Resource | Description | Link |
|----------|-------------|------|
| **Agents Overview** | Complete agents documentation | [Docs](https://experienceleague.adobe.com/en/docs/experience-manager-cloud-service/content/ai-in-aem/agents/overview) |
| **AI in AEM Overview** | All AI capabilities in AEM | [Docs](https://experienceleague.adobe.com/en/docs/experience-manager-cloud-service/content/ai-in-aem/overview) |
| **Developers Live 2025** | AEM Agents session recording | [Video](https://experienceleague.adobe.com/en/docs/events/adobe-developers-live-recordings/2025/aem-agents) |
| **Beta Program** | Email to opt in | `aemagentsteam@adobe.com` |

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

### Adobe GenStudio

| Feature | Description | Documentation |
|---------|-------------|---------------|
| **Performance Marketing** | AI-powered content supply chain for creating, manage, and measure marketing content | [Docs](https://business.adobe.com/products/genstudio.html) |
| **Content Generation** | Generate on-brand content variations across channels | [Docs](https://business.adobe.com/products/genstudio.html) |
| **Brand Compliance** | Ensure content meets brand guidelines using AI | [Docs](https://business.adobe.com/products/genstudio.html) |
| **Multi-Channel Delivery** | Optimize and deliver content to web, social, email, and ads | [Docs](https://business.adobe.com/products/genstudio.html) |

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

## Adobe LLM Optimizer

Generative Engine Optimization (GEO) for AI search visibility in ChatGPT, Perplexity, Copilot, Gemini, and other LLM-driven assistants.

### Overview

Adobe LLM Optimizer is a generative AI-first application designed to help brands enhance their visibility, accuracy, and influence in AI-driven search environments. It provides insights into brand presence in AI-generated answers, offers prescriptive content recommendations, and automates optimization fixes.

### Key Features

| Feature | Description | Documentation |
|---------|-------------|---------------|
| **Brand Presence Dashboard** | Command center for brand mentions, citations, and sentiment in AI responses | [Docs](https://experienceleague.adobe.com/en/docs/llm-optimizer/using/essentials/overview) |
| **Optimization Opportunities** | Auto-detected insights for site and content improvements | [Docs](https://experienceleague.adobe.com/en/docs/llm-optimizer/using/dashboards/opportunities) |
| **Customer Configuration** | Configure categories, topics, prompts, brand aliases | [Docs](https://experienceleague.adobe.com/en/docs/llm-optimizer/using/dashboards/customer-configuration) |
| **Optimize at Edge** | CDN-layer optimizations without CMS authoring changes (Early Access) | [Docs](https://experienceleague.adobe.com/en/docs/llm-optimizer/using/resources/optimize-at-edge) |

### Tutorials & Guides

| Resource | Description | Link |
|----------|-------------|------|
| **Quick Start** | Onboarding and initial setup guide | [Docs](https://experienceleague.adobe.com/en/docs/llm-optimizer/using/essentials/quick-start) |
| **LLM Optimizer Overview** | Complete platform overview and walkthrough | [Docs](https://experienceleague.adobe.com/en/docs/llm-optimizer/using/essentials/overview) |
| **Best Practices** | Strategic planning, onsite/offsite optimization, agentic traffic | [Docs](https://experienceleague.adobe.com/en/docs/llm-optimizer/using/essentials/best-practices) |
| **Interactive Tour** | Hands-on tour of Adobe LLM Optimizer | [Demo](https://business.adobe.com/resources/llm-optimizer-interactive-tour/thank-you.html) |
| **Why We Created LLM Optimizer** | Product vision and use cases | [Blog](https://experienceleaguecommunities.adobe.com/t5/adobe-experience-manager/why-we-created-llm-optimizer/m-p/781361) |

### Integration

- **AEM Cloud Service** - Native integration with AEM as a Cloud Service
- **Edge Delivery Services** - Optimize EDS sites for LLM visibility
- **CDN Configuration** - Configure CDN for AI agent traffic targeting

**Use Cases:**
- Improve brand citations in AI-generated answers
- Optimize content structure for LLM readability
- Track performance across ChatGPT, Google AI Overviews, Copilot, Gemini, Perplexity
- Automated optimization fixes via CDN edge deployments

### Getting Started

1. Complete domain onboarding
2. Configure categories, topics, and prompts
3. Set up CDN log forwarding
4. Monitor brand presence dashboard
5. Apply optimization recommendations

[Official Documentation](https://experienceleague.adobe.com/en/docs/llm-optimizer/using/home)

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

### Hands-on Labs

Step-by-step tutorials for practical AI implementation in AEM.

| Lab | Topic | Duration | Description |
|-----|-------|----------|-------------|
| **Lab 1** | [AEM MCP Server](tutorials/lab-1-aem-mcp-server.md) | 20-30 min | Set up and configure AEM MCP Server for natural language AEM interaction |
| **Lab 2** | [Experience Production Agent](tutorials/lab-2-experience-production-agent.md) | 25-35 min | Automate content operations using AI agents |
| **Lab 3** | [Claude Code Skills](tutorials/lab-3-claude-code-skills.md) | 30-40 min | Enhance AEM/EDS development with AI skills |
| **Lab 4** | [ACM MCP Server](tutorials/lab-4-acm-mcp-server.md) | 30-40 min | Set up ACM MCP for Groovy script execution via AI |

**Quick Start:**
```bash
git clone https://github.com/narendragandhi/awesome-aem-ai.git
cd awesome-aem-ai/tutorials
```

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

### Adobe Developers Live

| Video | Description | Link |
|-------|-------------|------|
| **Building the Agentic Web** | AEM Agents, Content AI Foundational - ADL 2025 Keynote | [YouTube](https://www.youtube.com/watch?v=wIJKwPBbuPk) |
| **Bringing Intelligence to Content in AEM** | Content AI in AEM - ADL 2025 | [YouTube](https://www.youtube.com/watch?v=aGw1eCnHC7g) |
| **Accelerate your Edge Delivery Tutorial** | EDS Tutorial with AEM trial | [YouTube](https://www.youtube.com/watch?v=RlXJ3zZgpgk) |
| **AEM Release 2025.01** | New AI features in AEM 2025.01 | [YouTube](https://www.youtube.com/watch?v=IFrwcUGMFQI) |
| **AEM Release 2025.02** | Content Fragment Auto Tagging, EDS features | [YouTube](https://www.youtube.com/watch?v=kX5dWW5kJ_0) |

### AI & MCP Tutorials

| Video | Description | Link |
|-------|-------------|------|
| **Unlocking AEM's Potential with AI** | AI integration in AEM - Agentic, GenAI, AI Assistant | [YouTube](https://www.youtube.com/watch?v=2J5doCFH4TQ) |
| **AI Assistant in AEM** | Configuration and live demo | [YouTube](https://experienceleague.adobe.com/en/docs/events/adobe-customer-success-webinar-recordings/2025/aem2025/ai-assistant-in-aem) |
| **AEM + MCP Integration** | MCP for content, components, assets management | [Playbooks](https://playbooks.com/mcp/easingthemes/aem-mcp-server) |

### AEM Rocks Episodes

- [AEM Rocks YouTube](https://www.youtube.com/@aemrocks) - Popular AEM tutorial channel

### Adobe Summit Sessions

- [AI-Powered Content Supply Chain](https://summit.adobe.com/) - Summit 2024
- [Next-Gen Experience Management](https://summit.adobe.com/) - Summit 2024

### YouTube Channels

- [Adobe Experience League](https://www.youtube.com/@AdobeExperienceLeague)
- [AEM Rocks](https://www.youtube.com/@aemrocks)
- [AEM Geeks](https://www.youtube.com/@aemgeeks)
- [aem-live](https://www.youtube.com/@aem-live) - Official Adobe AEM channel

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
