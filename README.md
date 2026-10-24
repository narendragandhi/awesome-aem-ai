# Awesome AEM AI [![Awesome](https://awesome.re/badge.svg)](https://awesome.re) [![Last Commit](https://img.shields.io/github/last-commit/narendragandhi/awesome-aem-ai?label=updated)](https://github.com/narendragandhi/awesome-aem-ai/commits/main) [![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg)](https://github.com/narendragandhi/awesome-aem-ai/pulls)

> A curated list of AI resources, tools, MCP servers, agents, and skills for Adobe Experience Manager (AEM) and Edge Delivery Services (EDS).

The AEM AI landscape moves fast — agents, MCP servers, and skills ship monthly across Experience League, aem.live, developer blogs, and press releases. This list is the single map, refreshed as things change.

## Contents

- [Start Here](#start-here)
- [What's New (October 2026)](#whats-new-october-2026)
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
- [Real-World Architecture Audit](#real-world-architecture-audit)
- [Best Practices & AI Workflow](#best-practices--ai-workflow)
- [Tutorials & Learning](#tutorials--learning)
- [Community Projects](#community-projects)
- [Videos & Presentations](#videos--presentations)
- [Related Awesome Lists](#related-awesome-lists)

## Start Here

Things this list has that you won't find in the official docs:

| Resource                                            | What you get                                                                                                        |
| --------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------- |
| [Hands-on Labs](#hands-on-labs)                     | Four step-by-step labs: AEM MCP Server, Experience Production Agent, Claude Code Skills, ACM MCP                    |
| [AEM Core Skills](#aem-core-skills-this-repository) | Seven AEM backend skills (HTL, Sling Models, OSGi, clientlibs, testing, EDS blocks, caching strategy) ready to copy |
| [Community MCP Servers](#community-mcp-servers)     | The tools Adobe doesn't list: community servers for Sites, EDS, and Groovy script execution                         |
| [Architecture Audit](#the-objective)                | A real-world Dispatcher security audit showing what grounded AI catches that chatbots miss                          |

## What's New (October 2026)

The current feature release is [2026.9.0](https://experienceleague.adobe.com/en/docs/experience-manager-cloud-service/content/release-notes/release-notes/release-notes-current) (September 24, 2026); 2026.10.0 is planned for October 29, 2026.

- AEM's agentic capabilities are now GA inside Adobe CX Enterprise Coworker (see AI Agents below). Since early September they run as part of Coworker - an AI teammate for marketing and CX teams - reached through the **Ask Coworker** entry point rather than standing alone in AEM.
- The agent documentation restructured into [Agentic Capabilities](https://experienceleague.adobe.com/en/docs/experience-manager-cloud-service/content/ai-in-aem/agentic-capabilities/overview), grouped as Brand Experience (Experience Production, Development, Onboarding), Content Advisor (Discovery, Content Optimization), and Brand Governance. The older per-agent pages are still published alongside them.
- The unified AEM MCP Server absorbed Cloud Manager operations - programs, environments, repositories, and pipelines - in 2026.9.0. The domain-specific MCP servers are now deprecated; switch to the single `aem` endpoint.
- IDE agent skills gained AEM query optimization: as of October 1 the Code Assessment Agent Skill checks whether a JCR/Oak query is actually served by an index, and flags index definitions that look correct but are subtly misconfigured. The Cloud Migration Agent Skill added more AEM 6.5-to-Cloud-Service code migration patterns.
- Permission management went agentic in 2026.8.0 (GA) - it audits effective ACLs and explains access decisions in real time.
- Content Hub gained AI Search and Smart Collections, and Dynamic Media with OpenAPI gained AI-generated video captions - all three in Limited Availability, not yet GA. In beta: the Content Supply Chain Agent (CSC Blueprint plus CSC Integration), CX Coworker developer troubleshooting for CDN/replication/workflows, Dynamic Media Auto Translate, and the Content Advisor browser extension.
- A new AEM Content AI documentation set (linked under Official Resources below) positions governed AEM content as the ground truth that AI experiences and agents are grounded in.

---

## Official Resources

### Adobe Documentation

- [AI in AEM Overview](https://experienceleague.adobe.com/en/docs/experience-manager-cloud-service/content/ai-in-aem/overview) - All AI capabilities in AEM.
- [Using MCP with AEM as a Cloud Service](https://experienceleague.adobe.com/en/docs/experience-manager-cloud-service/content/ai-in-aem/mcp-support/using-mcp-with-aem-as-a-cloud-service) - Official MCP integration guide.
- [Local Development with AI Tools](https://experienceleague.adobe.com/en/docs/experience-manager-cloud-service/content/ai-in-aem/local-development-with-ai-tools) - Official guide for local AI-enhanced development.
- [AI-Assisted Development](https://experienceleague.adobe.com/en/docs/experience-manager-learn/cloud-service/ai/ai-assisted-development/overview) - Learn tutorials for agent skills, AGENTS.md, and MCP setup.
- [Agents in AEM (Learn)](https://experienceleague.adobe.com/en/docs/experience-manager-learn/cloud-service/ai/agents/agents-in-aem) - Hands-on tutorial for AEM agents.
- [AEM MCP Modules for Workfront Fusion](https://experienceleague.adobe.com/en/docs/workfront-fusion/using/references/apps-and-their-modules/adobe-connectors/aem-mcp-modules) - Call AEM MCP tools from Fusion automation scenarios.

### Adobe AI Products

- [Adobe LLM Optimizer](https://experienceleague.adobe.com/en/docs/llm-optimizer/using/home) - Generative Engine Optimization (GEO) for AI search visibility.
- [Adobe Brand Concierge](https://experienceleague.adobe.com/en/docs/brand-concierge/content/home) - AI-powered conversational companion for websites, with AEM as a content source.
- [AEM Content AI](https://experienceleague.adobe.com/en/docs/experience-manager-content-ai/using/introduction) - Semantic search, grounded generation, and APIs that make governed AEM content the ground truth for AI experiences.
- [Adobe GenStudio](https://business.adobe.com/products/genstudio.html) - AI-powered content supply chain for performance marketing.
- [Content Hub](https://experienceleague.adobe.com/docs/experience-manager-cloud-service/content/assets/content-hub/product-overview.html) - AI-enhanced asset management.
- [AI Assistant in AEM](https://experienceleague.adobe.com/en/docs/experience-manager-cloud-service/content/ai-in-aem/ai-assistant/ai-assistant-in-aem-admin) - Integrated AI assistant for product knowledge and support.

### Announcements

- [Adobe Brand Visibility Solution (April 2026)](https://news.adobe.com/news/2026/04/adobe-introduces-brand-visibility-solution) - Summit 2026 introduced AEM as the "brand context layer," LLM Apps for building experiences inside LLM interfaces, and agentic authoring.
- [The Agentic Evolution of Adobe Experience Manager (February 2026)](https://blog.developer.adobe.com/en/publish/2026/02/the-agentic-evolution-of-adobe-experience-manager) - MCP/A2A APIs, instructional authoring, in-product agent, and AEM Playground.
- [Adobe AI Agents GA (September 2025)](https://news.adobe.com/news/downloads/pdfs/2025/09/091025-general-availability-of-ai-agents.pdf) - General availability of AI agents for customer experience orchestration.

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

**Documentation:** [Platform Learn Tutorial](https://experienceleague.adobe.com/en/docs/platform-learn/tutorials/ai-assistant/agent-orchestrator-overview)

### Key Components

| Component                    | Description                                          |
| ---------------------------- | ---------------------------------------------------- |
| **Conversational Interface** | Natural language interaction via AI Assistant        |
| **Reasoning Engine**         | Interprets goals, creates plans, adjusts dynamically |
| **Knowledge Base**           | Secure access to documentation, metadata, analytics  |
| **LLM Service**              | Azure OpenAI or Meta Llama models                    |

### Built-in Functional Agents

| Agent                          | Purpose                                                   | Scope                 |
| ------------------------------ | --------------------------------------------------------- | --------------------- |
| **Product Knowledge Agent**    | Retrieves and answers from Adobe documentation            | Documentation queries |
| **Operational Insights Agent** | Translates questions to queries against data stores       | Analytics & reporting |
| **Product Support Agent**      | Troubleshooting for AEM, Platform, CJA, Journey Optimizer | Support tickets       |

### Experience Modernization Agent Architecture

The Experience Modernization Agent (documented in the AI Agents section below) automates migration to Edge Delivery Services:

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

### Security & Governance

| Safeguard                        | Description                                                |
| -------------------------------- | ---------------------------------------------------------- |
| **Enterprise-grade trust layer** | Built-in data access controls                              |
| **Consent management**           | Respects data-usage policies                               |
| **Human oversight**              | Agents follow user input and product-level access controls |
| **Transparent workflow**         | Exposes reasoning logic, queries, and conversation history |
| **Audit trail**                  | All agent actions are logged and explainable               |

**Documentation:** [AI in Experience Cloud](https://experienceleague.adobe.com/en/docs/experience-cloud-ai/experience-cloud-ai/home)

### Core AI Services & Trust

Foundational AI technologies and ethics powering the AEM ecosystem.

| Service                          | Role                    | Key Feature                                                               |
| -------------------------------- | ----------------------- | ------------------------------------------------------------------------- |
| **Adobe Firefly**                | Generative Engine       | Commercially safe image generation and creative editing.                  |
| **Adobe Sensei GenAI**           | Experience Intelligence | Powers copy variations, content discovery, and intelligent automation.    |
| **Responsible AI**               | Ethical Framework       | Framework focusing on accountability, responsibility, and transparency.   |
| **Experience Cloud Performance** | Contextual Intelligence | Real-time performance insights to tailor AI outputs to customer personas. |

### Architecture Resources

| Resource                           | Description                      | Link                                                                                                              |
| ---------------------------------- | -------------------------------- | ----------------------------------------------------------------------------------------------------------------- |
| **AEM Cloud Service Architecture** | Core AEM architecture overview   | [Docs](https://experienceleague.adobe.com/en/docs/experience-manager-cloud-service/content/overview/architecture) |
| **EDS Architecture**               | Edge Delivery Services deep dive | [Docs](https://www.aem.live/docs/architecture)                                                                    |
| **Adobe Developers Live 2025**     | AEM Agents session recording     | [Video](https://experienceleague.adobe.com/en/docs/events/adobe-developers-live-recordings/2025/aem-agents)       |
| **Experience Cloud Blueprints**    | Reference architecture diagrams  | [Docs](https://experienceleague.adobe.com/en/docs/blueprints-learn/architecture/overview)                         |

---

## MCP Servers

Model Context Protocol (MCP) servers that integrate with AEM and EDS.

### AEM MCP Server (Unified, Recommended)

Adobe recommends a single endpoint over configuring the domain-specific servers individually. As of 2026.9.0 it also covers Cloud Manager operations, which previously required the separate server:

| Server             | Endpoint                                      | Description                                                                                                                                                                                                                                                                                                                                |
| ------------------ | --------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| **AEM MCP Server** | `https://mcp.adobeaemcloud.com/adobe/mcp/aem` | Three toolsets in one endpoint: Content (CRUD for pages, fragments, and assets, plus asset search and import), Experience Governance (brand rule checks), and Cloud Manager (programs, environments, repositories, pipelines). Cloud Migration is the one capability not folded in - add that domain-specific server separately if needed. |

This same endpoint backs the [AEM Claude Connector](https://experienceleague.adobe.com/en/docs/experience-manager-cloud-service/content/ai-in-aem/mcp-support/chat-applications/setup-claude) (install from Claude's connector directory on claude.ai) and the [AEM ChatGPT Plugin](https://experienceleague.adobe.com/en/docs/experience-manager-cloud-service/content/ai-in-aem/mcp-support/chat-applications/setup-chatgpt) (one-click install from OpenAI's plugin marketplace).

**Connecting a client:** Adobe documents setup per tool in the [Setup Overview](https://experienceleague.adobe.com/en/docs/experience-manager-cloud-service/content/ai-in-aem/mcp-support/using-mcp-with-aem-as-a-cloud-service#setup-overview) - Claude and ChatGPT as above, plus Cursor, JetBrains with GitHub Copilot, and [Microsoft Copilot Studio](https://experienceleague.adobe.com/en/docs/experience-manager-cloud-service/content/ai-in-aem/mcp-support/enterprise-platforms/setup-microsoft-copilot-studio).

### Official Adobe MCP Servers (Domain-Specific, Deprecated)

Deprecated as of 2026.9.0. They still work, but Adobe recommends the unified AEM MCP Server above instead - Cloud Manager operations in particular moved there. Cloud Migration is the exception: it is not part of the unified endpoint yet, so it stays in use. Hosted at `https://mcp.adobeaemcloud.com/adobe/mcp/`:

| Server                    | Endpoint                 | Description                                                      | Status         |
| ------------------------- | ------------------------ | ---------------------------------------------------------------- | -------------- |
| **Content Server**        | `/content`               | Full CRUD operations for pages, fragments, and assets            | Deprecated     |
| **Content Read-Only**     | `/content-readonly`      | Read-only access for retrieval operations                        | Deprecated     |
| **Cloud Manager**         | `/cloudmanager`          | Manage programs, environments, repositories, and pipelines       | Deprecated     |
| **Experience Governance** | `/experience-governance` | Assess content compliance against brand governance standards     | Deprecated     |
| **Cloud Migration**       | `/cloud-migration`       | Migration analysis data for AEM 6.x to Cloud Service transitions | Still required |

**Key Features:**

- Natural language interaction with AEM content
- OAuth authentication via Adobe ID
- Respects user's AEM permissions
- Supports Claude, ChatGPT, Cursor, VS Code, JetBrains, GitHub Copilot, Claude Code, Cline, Windsurf, and Microsoft Copilot Studio

See the official MCP documentation linked under Official Resources above.

### Local Runtime MCP Servers

Model Context Protocol (MCP) servers that connect AI tools to local running environments (AEM SDK and Dispatcher).

| Server                        | Components                                            | Description                                                      |
| ----------------------------- | ----------------------------------------------------- | ---------------------------------------------------------------- |
| **AEM Quickstart MCP Server** | `aem-logs`, `diagnose-osgi-bundle`, `recent-requests` | Full inspection of local OSGi, logs, and HTTP request traces     |
| **Dispatcher MCP Server**     | `validate`, `lint`, `trace_request`, `inspect_cache`  | Static and best-practice checks, request tracing, cache analysis |

See the Local Development with AI Tools guide linked under Official Resources above.

### Community MCP Servers

| Name               | Description                                                                    | Links                                                                                                               |
| ------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------- |
| **aem-mcp-server** | Full-featured MCP server for AEM - 35+ methods for content, components, assets | [npm](https://www.npmjs.com/package/aem-mcp-server) / [GitHub](https://github.com/indrasishbanerjee/aem-mcp-server) |
| **aem-sites-mcp**  | Sites-specific MCP server for local AEM instance management                    | [GitHub](https://github.com/pradeep-moolemane/aem-mcp)                                                              |
| **acm-mcp-server** | MCP server for AEM Content Manager (ACM) - execute Groovy scripts via AI       | [GitHub](https://github.com/narendragandhi/acm/tree/main/mcp.server)                                                |

### Edge Delivery Services MCP Servers

| Name                   | Description                                                                                              | Links                                                                |
| ---------------------- | -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------- |
| **helix-mcp**          | Docs search, page status, audit logs, and RUM/Core Web Vitals tools for EDS and Document Authoring sites | [GitHub](https://github.com/cloudadoption/helix-mcp)                 |
| **aem-eds-mcp-server** | 10 consolidated tools for EDS via the Helix Admin API - content management, config, jobs, search         | [npm](https://www.npmjs.com/package/@neerajgrg93/aem-eds-mcp-server) |

**Also recommended by the aem.live AI coding agents guide:** Context7 (API docs indexing including AEM), DA MCP Server (Document Authoring content workflows), and Browser MCP (remote browser control and screenshots).

### Official Adobe MCP Tutorials

Adobe's own end-to-end walkthroughs for the AEM MCP Server on Experience League.

| Tutorial                                                                                                                                                                                           | What it walks through                                                                                                                                                                                                                                        |
| -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| [AEM MCP Server (hub)](https://experienceleague.adobe.com/en/docs/experience-manager-learn/cloud-service/ai/mcp-servers/overview)                                                                  | Capability list and per-client connection steps. Treat its scope note with care: the page still says Cloud Manager sits outside the `aem` endpoint, which 2026.9.0 changed.                                                                                  |
| [Create test content without leaving your IDE](https://experienceleague.adobe.com/en/docs/experience-manager-learn/cloud-service/ai/mcp-servers/accelerate-content-operations-with-aem-mcp-server) | Create and update AEM test content in natural language from the IDE                                                                                                                                                                                          |
| [Manage your website with the help of AI](https://experienceleague.adobe.com/en/docs/experience-manager-learn/cloud-service/ai/mcp-servers/manage-your-website-with-ai)                            | Update a page and its linked content fragment, publish, then roll back - all by prompt                                                                                                                                                                       |
| [Run and debug AEM pipelines from your IDE](https://experienceleague.adobe.com/en/docs/experience-manager-learn/cloud-service/ai/mcp-servers/cloud-manager)                                        | Start pipelines, debug failures, and manage programs and environments                                                                                                                                                                                        |
| [Check AEM content for brand compliance](https://experienceleague.adobe.com/en/docs/experience-manager-learn/cloud-service/ai/mcp-servers/experience-governance-mcp-server)                        | Evaluate pages, text, and images against brand governance rules                                                                                                                                                                                              |
| [Search and analyze content with natural language](https://experienceleague.adobe.com/en/docs/experience-manager-learn/cloud-service/ai/mcp-servers/content-ai-mcp-server)                         | Keyword, semantic, hybrid, and generative search over AEM Content AI sources, driven from CX Coworker through a companion Content AI MCP Server. Its endpoint is still an expiring experimental URL - read it from the tutorial rather than pinning it here. |

---

## AI Agents

### Official Adobe Agents

Adobe's AEM agents are organized into three top-level agents. [Overview](https://experienceleague.adobe.com/en/docs/experience-manager-cloud-service/content/ai-in-aem/agents/overview)

| Agent                      | Purpose                                                                                                     | Status |
| -------------------------- | ----------------------------------------------------------------------------------------------------------- | ------ |
| **Brand Experience Agent** | Automates high-effort operational tasks via specialized sub-agents (Modernization, Production, Development) | GA     |
| **Content Advisor Agent**  | Discover, refine, and adapt assets via natural language for channel-ready variations                        | GA     |
| **Governance Agent**       | Enforces security, regulatory, and brand policies to protect brand integrity                                | GA     |

**Try before you buy:** [AEM Playground](https://www.aem.live/developer/aem-playground) - isolated sandbox for agentic workflows (auto-deletes after 30 days). Production access via the Agentic SKU - contact your Adobe CSM/TAM.

#### Where the Agents Run: CX Enterprise Coworker

Since early September 2026, AEM's agentic capabilities are generally available inside Adobe CX Enterprise Coworker, an AI teammate for marketing and CX teams. Authors reach them through the **Ask Coworker** entry point, and the capabilities collaborate with Coworker Chat rather than running as standalone agents inside AEM.

Rollout caveat from the release notes: once enabled, only the Coworker immersive experience is available - the in-product right-rail panel inside AEM comes later.

| Resource                                                                                                                                        | What it covers                                                                      |
| ----------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------- |
| [CX Enterprise Coworker Guide](https://experienceleague.adobe.com/en/docs/coworker/content/home)                                                | Product documentation for Coworker itself - chat, skills execution, human oversight |
| [Agentic AI in CX Enterprise Applications](https://experienceleague.adobe.com/en/docs/cx-enterprise-ai/experience-cloud-ai/overview/agentic-ai) | How agentic AI is structured across Experience Cloud                                |
| [Coworker Chat Use Cases](https://experienceleague.adobe.com/en/docs/cx-enterprise-ai/experience-cloud-ai/coworker/chat/use-cases/overview)     | Worked examples of driving CX workflows from chat                                   |

Adobe now also documents the AEM side under **Agentic Capabilities**, grouped differently from the per-agent pages below. Both doc trees are live:

| Group                | Sub-capabilities                                                                                                                                                                                                                                                                                                                       |
| -------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Brand Experience** | Experience Production (Content Create, Content Update, Figma to Visual Content Fragments), Development, Onboarding                                                                                                                                                                                                                     |
| **Content Advisor**  | [Discovery](https://experienceleague.adobe.com/en/docs/experience-manager-cloud-service/content/ai-in-aem/agents/content-advisor/discovery), [Content Optimization](https://experienceleague.adobe.com/en/docs/experience-manager-cloud-service/content/ai-in-aem/agentic-capabilities/content-advisor/content-optimization/use-cases) |
| **Brand Governance** | Brand governance plus permissions management                                                                                                                                                                                                                                                                                           |

#### Brand Experience Agent

Umbrella agent for operational automation. [Overview](https://experienceleague.adobe.com/en/docs/experience-manager-cloud-service/content/ai-in-aem/agents/brand-experience/overview)

##### Experience Production Agent

Automates high-effort, high-volume content tasks. [Overview](https://experienceleague.adobe.com/en/docs/experience-manager-cloud-service/content/ai-in-aem/agents/brand-experience/experience-production/overview)

| Skill                                 | Description                                                                                                        | Documentation                                                                                                                                                                         |
| ------------------------------------- | ------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Content Update Job**                | Update, remove, replace content in pages, fragments, forms via natural language or Jira                            | [Docs](https://experienceleague.adobe.com/en/docs/experience-manager-cloud-service/content/ai-in-aem/agents/brand-experience/experience-production/content-update)                    |
| **Content Create Job**                | Create net-new content via natural language (Limited Availability - email `experience-production-agent@adobe.com`) | [Docs](https://experienceleague.adobe.com/en/docs/experience-manager-cloud-service/content/ai-in-aem/agents/brand-experience/experience-production/content-create)                    |
| **Figma to Visual Content Fragments** | Turn Figma designs into Visual Content Fragments                                                                   | [Docs](https://experienceleague.adobe.com/en/docs/experience-manager-cloud-service/content/ai-in-aem/agents/brand-experience/experience-production/figma-to-visual-content-fragments) |
| **Forms Creation Job**                | Build adaptive forms through natural language without development teams                                            | [Docs](https://experienceleague.adobe.com/en/docs/experience-manager-cloud-service/content/ai-in-aem/agents/brand-experience/experience-production/form-creation)                     |
| **Communication Creation Job**        | Generate personalized, data-driven correspondence (statements, policies, bills)                                    | [Docs](https://experienceleague.adobe.com/en/docs/experience-manager-cloud-service/content/ai-in-aem/agents/brand-experience/experience-production/communication-creation)            |

**Content Update Skill Technical Details:**

| Aspect            | Details                                             |
| ----------------- | --------------------------------------------------- |
| **Content Types** | Pages, Content Fragments, Adaptive Forms, Assets    |
| **Operations**    | Update, remove, replace, add content elements       |
| **Input Methods** | Natural language prompts or Jira ticket integration |
| **Integration**   | Direct AEM author instance connectivity             |

##### Experience Modernization Agent

AI-powered website migration to Edge Delivery Services. [Overview](https://experienceleague.adobe.com/en/docs/experience-manager-cloud-service/content/ai-in-aem/agents/brand-experience/modernization/overview)

| Skill                 | Description                                                             |
| --------------------- | ----------------------------------------------------------------------- |
| **Site Migration**    | Transform websites from any CMS, legacy AEM, or Figma into EDS projects |
| **Block Development** | Content-Driven Development methodology with Block Collection/Party      |
| **Design Extraction** | Extract colors, fonts, styles into CSS from source sites                |

**Console:** Available at `aemcoder.adobe.io` - no local setup required

##### Experience Development Agent

AI-assisted troubleshooting and build automation for AEM Cloud Service. [Overview](https://experienceleague.adobe.com/en/docs/experience-manager-cloud-service/content/ai-in-aem/agents/brand-experience/development)

| Capability                       | Description                                                                         |
| -------------------------------- | ----------------------------------------------------------------------------------- |
| **Pipeline Troubleshooting**     | Analyze logs and suggest fixes for failing Full Stack and Web Tier Config pipelines |
| **Conversational Cloud Manager** | Ask questions about programs, environments, and pipelines in natural language       |
| **Maintenance Windows**          | AI-assisted management of Quiet Hours and Update Free Periods                       |

**Access:** Requires Cloud Manager Developer or Program Manager role

#### Content Advisor Agent

Discover, refine, and adapt assets through natural language. [Overview](https://experienceleague.adobe.com/en/docs/experience-manager-cloud-service/content/ai-in-aem/agents/content-advisor/overview)

| Capability                     | Description                                                                          |
| ------------------------------ | ------------------------------------------------------------------------------------ |
| **Semantic Discovery**         | Find assets, Content Fragments, and Adaptive Forms using conversational prompts      |
| **Advanced Filtering**         | Format, orientation, dimensions, metadata, tags, folders, creation dates             |
| **Image Optimization**         | Format conversion, resolution, cropping, sharpening, background changes              |
| **Multi-Variant Production**   | Generate channel-ready renditions from single prompts (Instagram, web banners, etc.) |
| **Dynamic Variant Generation** | Create optimized variants as dynamic URLs for different channels                     |

#### Governance Agent

Brand integrity and compliance enforcement. [Overview](https://experienceleague.adobe.com/en/docs/experience-manager-cloud-service/content/ai-in-aem/agents/governance/overview)

| Capability                | Description                                                         |
| ------------------------- | ------------------------------------------------------------------- |
| **Compliance Monitoring** | Detect policy violations in real-time                               |
| **Metadata Enforcement**  | Ensure assets have required metadata                                |
| **Brand Validation**      | Check content against tone, claims, logo, typography, imagery rules |

**Integration:** Works with ChatGPT, Claude, and other AI systems via A2A and MCP protocols, plus the official `/experience-governance` MCP server

**Availability:** AEM as a Cloud Service and Edge Delivery Services (GA via Agentic SKU); progressive rollout to AEM 6.5 LTS on Managed Services is planned

#### Other Agentic Capabilities

Capabilities that do not sit under the three top-level agents:

| Capability                            | Description                                                                                                                                                                                  | Status |
| ------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------ |
| **Permission Management**             | Ask in plain language who can do what on a content path; the Governance Agent audits effective ACLs on author in real time, explaining access decisions and their source policies (2026.8.0) | GA     |
| **Content Supply Chain Agent**        | Two cooperating agents - CSC Blueprint maps the supply chain, CSC Integration implements governed data movement                                                                              | Beta   |
| **CX Coworker for Developers**        | Troubleshooting for CDN, replication, and workflows, plus code modernization guidance. Beta program is request-only: email `aem-devagent@adobe.com`                                          | Beta   |
| **Content Advisor Browser Extension** | Asset recommendations surfaced inside other web applications                                                                                                                                 | Beta   |
| **GenAI Extension Generation**        | Accelerates extension development for Assets View (internal early adoption)                                                                                                                  | Beta   |

---

## Claude Code Skills

### Official Adobe Skills (adobe/skills)

The [adobe/skills](https://github.com/adobe/skills) repository is production-ready (main branch) and ships as a plugin marketplace. The AEM plugins are `aem-cloud-service`, `aem-6-5-lts`, `aem-edge-delivery-services`, `aem-eds-content-ops`, and `aem-project-management`; the repo also carries App Builder, Commerce, Analytics/CJA, Workfront, and Creative Cloud plugins.

```bash
# Add the marketplace, then install the plugin you want (recommended)
/plugin marketplace add adobe/skills
/plugin install aem-cloud-service@adobe-skills

# Install via npx (Vercel Skills)
npx skills add adobe/skills --all

# Install via gh-upskill
gh upskill adobe/skills --all
```

AEM Cloud Service skills (`aem-cloud-service`):

| Skill                      | Description                                                                                                                                                     |
| -------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **`code-assessment`**      | Detects and fixes Cloud Service code-quality issues locally - unbounded queries, deprecated API patterns, scheduler constraints, JCR/Oak index misconfiguration |
| **`migration`**            | Migrates legacy AEM (6.x, AMS, on-prem) to Cloud Service using BPA/CAM data - scheduler, replication, HTL lint, dialog modernization                            |
| **`create-component`**     | Scaffolds dialogs, HTL, Sling Models, tests, and clientlibs                                                                                                     |
| **`dispatcher`**           | Cloud config authoring, performance tuning, and security hardening                                                                                              |
| **`aem-workflow`**         | Granite Workflow Engine design, process steps, and failure diagnosis                                                                                            |
| **`content-distribution`** | Programmatic content publishing via the Replication API                                                                                                         |
| **`ensure-agents-md`**     | Bootstraps `AGENTS.md` by detecting modules from `pom.xml`                                                                                                      |
| **`aem-rde`**              | Rapid Development Environment assistance (beta)                                                                                                                 |

AEM 6.5 LTS skills (`aem-6-5-lts`): `dispatcher`, `aem-workflow`, `aem-replication`, `ensure-agents-md`, and `tuning-oak-query-indexes`.

EDS content operations (`aem-eds-content-ops`) adds 13 content and SEO skills: `accessibility-fix`, `bulk-metadata`, `content-audit`, `content-diff`, `cwv-optimizer`, `geo-rewrite`, `heading-optimizer`, `image-seo`, `internal-linking`, `link-rot-scanner`, `product-page-seo`, `sitemap-audit`, `structured-data`.

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

| Skill                    | Description                                                        | File                                           |
| ------------------------ | ------------------------------------------------------------------ | ---------------------------------------------- |
| **aem-htl**              | HTL/Sightly templating, data binding, contexts, i18n               | [View](.claude/skills/aem-htl.md)              |
| **aem-sling-models**     | Sling Models, injectors, delegation, exporters                     | [View](.claude/skills/aem-sling-models.md)     |
| **aem-osgi**             | OSGi services, configs, schedulers, events                         | [View](.claude/skills/aem-osgi.md)             |
| **aem-clientlibs**       | Client libraries, dependencies, optimization                       | [View](.claude/skills/aem-clientlibs.md)       |
| **aem-testing**          | Unit tests, AEM Mocks, integration tests                           | [View](.claude/skills/aem-testing.md)          |
| **eds-blocks**           | EDS block development, patterns, utilities                         | [View](.claude/skills/eds-blocks.md)           |
| **aem-caching-strategy** | Dispatcher/CDN caching, invalidation, permission-sensitive caching | [View](.claude/skills/aem-caching-strategy.md) |

### Installation

```bash
# Copy this repo's skills to your AEM project
cp -r .claude/skills/ /path/to/your/aem-project/.claude/skills/
```

### Skills Tools

| Tool                                                                 | Description                           | Install                                    |
| -------------------------------------------------------------------- | ------------------------------------- | ------------------------------------------ |
| [gh-upskill](https://github.com/trieloff/gh-upskill)                 | Install skills from any GitHub repo   | `gh extension install trieloff/gh-upskill` |
| [openskills](https://www.npmjs.com/package/openskills)               | Universal skills loader for AI agents | `npx openskills install`                   |
| [claude-skills-cli](https://www.npmjs.com/package/claude-skills-cli) | Create and validate Claude skills     | `npx claude-skills-cli init`               |

### Documentation

- [Claude Code Skills Docs](https://code.claude.com/docs/en/skills) - Official skill creation guide.
- [Agent Skills Repository](https://github.com/anthropics/skills) - Example skills and the skill specification.

---

## IDE Extensions & Plugins

### VS Code Extensions

| Extension           | Description                                   | Marketplace                                                                            |
| ------------------- | --------------------------------------------- | -------------------------------------------------------------------------------------- |
| **AEM Sync**        | Sync file changes to AEM automatically        | [Link](https://marketplace.visualstudio.com/items?itemName=Yinkai15.aemsync)           |
| **VSCode AEM Sync** | Sync files, folders, nodes to AEM             | [Link](https://marketplace.visualstudio.com/items?itemName=yamato-ltd.vscode-aem-sync) |
| **AEM Copilot**     | GitHub Copilot for AEM Edge Delivery Services | [Link](https://marketplace.visualstudio.com/items?itemName=neerajgrg93.aem-copilot)    |
| **AEM Explorer**    | Integrates AEM to VS Code for development     | [Link](https://marketplace.visualstudio.com/items?itemName=misonou.aemexplorer)        |

### IntelliJ Plugins

| Plugin      | Description                         | Marketplace                                               |
| ----------- | ----------------------------------- | --------------------------------------------------------- |
| **AEM IDE** | Comprehensive AEM development tools | [Link](https://plugins.jetbrains.com/plugin/9863-aem-ide) |

---

## AI Features by AEM Product

### Adobe GenStudio

See the GenStudio product page linked under Official Resources above.

| Feature                    | Description                                                                             |
| -------------------------- | --------------------------------------------------------------------------------------- |
| **Performance Marketing**  | AI-powered content supply chain for creating, managing, and measuring marketing content |
| **Content Generation**     | Generate on-brand content variations across channels                                    |
| **Brand Compliance**       | Ensure content meets brand guidelines using AI                                          |
| **Multi-Channel Delivery** | Optimize and deliver content to web, social, email, and ads                             |

### AEM Sites

| Feature                            | Description                                                                                                 | Documentation                                                                                                                                                   |
| ---------------------------------- | ----------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Visual Content Fragments**       | Render structured content as formatted HTML experiences for visual preview before publication (GA 2026.6.0) | Release notes 2026.6.0                                                                                                                                          |
| **AI Translation**                 | LLM-powered content translation (Azure OpenAI as provider, more LLMs planned)                               | Release notes 2026.6.0                                                                                                                                          |
| **Generate Variations**            | AI-powered content variations for Content Fragments and EDS                                                 | [Docs](https://experienceleague.adobe.com/en/docs/experience-manager-cloud-service/content/ai-in-aem/generate-variations/generate-variations-integrated-editor) |
| **Generative AI Overview**         | GenAI for content creation and personalization                                                              | [Docs](https://experienceleague.adobe.com/en/docs/experience-manager-cloud-service/content/generative-ai/generative-ai-in-aem)                                  |
| **Replication AI Troubleshooting** | AI Assistant helps diagnose blocked replication queues and other replication issues (Beta)                  | Release notes 2026.7.0                                                                                                                                          |

### AEM Assets

| Feature                                  | Description                                                                                                                                                                        | Documentation                                                                                                                             |
| ---------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------- |
| **AI Search**                            | Natural language asset search ("a family at the beach") without exact metadata matches; multilingual, typo-tolerant intent matching in Content Hub (Limited Availability 2026.9.0) | Release notes 2026.9.0                                                                                                                    |
| **Brand Aware Metadata**                 | AI-generated custom metadata on upload/re-process using prompt libraries (Early Adopter)                                                                                           | Release notes 2026.6.0                                                                                                                    |
| **AI-Generated Video Captions**          | Automatic caption generation for Dynamic Media with OpenAPI videos, with multi-caption and multi-audio track support (Limited Availability 2026.9.0)                               | Release notes 2026.9.0                                                                                                                    |
| **Assets Onboarding Agent**              | AI-guided DAM setup for new orgs - conversational planning plus auto-created folder hierarchies, tag taxonomies, and metadata forms (Beta)                                         | Release notes 2026.7.0                                                                                                                    |
| **Generate Renditions from Content Hub** | Create channel-specific asset variants (resize, crop, compress, reformat) directly from the search bar                                                                             | Release notes 2026.7.0                                                                                                                    |
| **Smart Collections**                    | Collections that stay current automatically from defined search criteria, storing the query instead of individual assets (Limited Availability 2026.9.0)                           | Release notes 2026.9.0                                                                                                                    |
| **C2PA Metadata**                        | Renditions carry C2PA provenance metadata for labeling GenAI content, extended to Dynamic Media (GA 2026.8.0)                                                                      | Release notes 2026.8.0                                                                                                                    |
| **Auto Translate & Auto Reflow**         | Dynamic Media templates: AI translates text across locales and adapts one template to other formats (Beta)                                                                         | Release notes 2026.9.0                                                                                                                    |
| **Content Advisor Browser Extension**    | Asset recommendations surfaced inside other web applications (Beta)                                                                                                                | Release notes 2026.9.0                                                                                                                    |
| **Smart Tags**                           | Automatic AI tagging for images and videos                                                                                                                                         | [Docs](https://experienceleague.adobe.com/en/docs/experience-manager-cloud-service/content/assets/manage/smart-tags)                      |
| **Smart Crop**                           | AI-powered focal point detection and cropping                                                                                                                                      | [Docs](https://experienceleague.adobe.com/en/docs/experience-manager-learn/assets/dynamic-media/images/smart-crop-feature-video-use)      |
| **Dynamic Media AI**                     | Smart imaging and video optimization                                                                                                                                               | [Docs](https://experienceleague.adobe.com/en/docs/experience-manager-learn/assets/dynamic-media/dynamic-media-overview-feature-video-use) |
| **Content Advisor Agent**                | Natural language asset discovery and refinement                                                                                                                                    | See AI Agents above                                                                                                                       |

### AEM Forms

| Feature                     | Description                                   | Documentation                                                                                                                             |
| --------------------------- | --------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------- |
| **Generative AI for Forms** | AI-powered form generation and panel creation | [Docs](https://experienceleague.adobe.com/en/docs/experience-manager-cloud-service/content/forms/forms-overview/early-access-ea-features) |
| **AI Assistant**            | Product knowledge and authoring assistance    | [Docs](https://experienceleague.adobe.com/en/docs/experience-manager-cloud-service/content/ai-in-aem/ai-assistant/ai-assistant-in-aem)    |
| **Content Advisor Agent**   | Intelligent search across Adaptive Forms      | See AI Agents above                                                                                                                       |
| **Forms Creation Job**      | Build adaptive forms through natural language | See AI Agents above                                                                                                                       |

### AEM Guides

| Feature                  | Description                                                             | Documentation                                                                                                                                                 |
| ------------------------ | ----------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **AI Assistant**         | Smart help and authoring features                                       | [Docs](https://experienceleague.adobe.com/en/docs/experience-manager-guides/using/user-guide/ai-assistant-aem/ai-assistant)                                   |
| **Smart Suggestions**    | Semantically similar existing topics surfaced for reuse while authoring | [Docs](https://experienceleague.adobe.com/en/docs/experience-manager-guides/using/user-guide/ai-assistant-aem/ai-assistant-standard/ai-assistant-right-panel) |
| **Agentic AI Assistant** | Agentic smart tagging for DITA content                                  | [Docs](https://experienceleague.adobe.com/en/docs/experience-manager-guides/using/user-guide/ai-assistant-aem/ai-assistant-agentic/ai-assistant-agentic)      |

### AEM Screens

| Feature                         | Description                                                                                                                     | Documentation                                                                                                                              |
| ------------------------------- | ------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------ |
| **Data-Driven Personalization** | Rules-based personalization for digital signage based on location, time, audience data                                          | [Docs](https://experienceleague.adobe.com/en/docs/experience-manager-screens/user-guide/aem-screens-introduction)                          |
| **Smart Image Cropping**        | AI-powered focal point detection for screen dimensions (inherited from Assets)                                                  | See Smart Crop under Assets above                                                                                                          |
| **Adobe Analytics Integration** | Understanding signage performance with analytics (general AEM Analytics integration pattern; no Screens-specific doc published) | [Docs](https://experienceleague.adobe.com/en/docs/experience-manager-cloud-service/content/sites/integrations/integrating-adobe-analytics) |
| **Adobe Target A/B Testing**    | AI-assisted testing for digital signage content                                                                                 | See Adobe Analytics Integration docs above                                                                                                 |

> **Note:** AEM Screens inherits AI capabilities from AEM Sites and Assets (Smart Tags, Smart Crop, etc.) for content that is published to digital signage displays.

### Migration & Modernization

| Feature                            | Description                                                                                                              | Documentation                                                                                                                                                |
| ---------------------------------- | ------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| **Experience Modernization Agent** | AI-assisted migration to Edge Delivery Services                                                                          | See AI Agents above                                                                                                                                          |
| **Cloud Migration MCP Server**     | Migration analysis data for AEM 6.x to Cloud Service via MCP                                                             | See MCP Servers above                                                                                                                                        |
| **Cloud Migration Agent Skill**    | AI-assisted code migration in the IDE - pattern detection across scheduler, replication, HTL, and dialog code (2026.9.0) | See Claude Code Skills above                                                                                                                                 |
| **AEM Modernization Tools**        | Convert legacy AEM to modern patterns                                                                                    | [Docs](https://experienceleague.adobe.com/en/docs/experience-manager-learn/cloud-service/migration/moving-to-aem-as-a-cloud-service/aem-modernization-tools) |

---

## Adobe LLM Optimizer

Generative Engine Optimization (GEO) for AI search visibility in ChatGPT, Perplexity, Copilot, Gemini, and other LLM-driven assistants.

### Overview

Adobe LLM Optimizer is a generative AI-first application designed to help brands enhance their visibility, accuracy, and influence in AI-driven search environments. It provides insights into brand presence in AI-generated answers, offers prescriptive content recommendations, and automates optimization fixes.

### Key Features

| Feature                         | Description                                                                                          | Documentation                                                                                            |
| ------------------------------- | ---------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- |
| **Brand Presence Dashboard**    | Command center for brand mentions, citations, and sentiment in AI responses                          | [Docs](https://experienceleague.adobe.com/en/docs/llm-optimizer/using/essentials/overview)               |
| **Optimization Opportunities**  | Auto-detected insights for site and content improvements                                             | [Docs](https://experienceleague.adobe.com/en/docs/llm-optimizer/using/dashboards/opportunities)          |
| **Customer Configuration**      | Configure categories, topics, prompts, brand aliases                                                 | [Docs](https://experienceleague.adobe.com/en/docs/llm-optimizer/using/dashboards/customer-configuration) |
| **Optimize at Edge**            | CDN-layer optimizations without CMS authoring changes; Claude model support for content optimization | [Docs](https://experienceleague.adobe.com/en/docs/llm-optimizer/using/resources/optimize-at-edge)        |
| **Agentic Traffic Dashboard**   | Monitor traffic from AI assistants and agents hitting your properties                                | New in 2026                                                                                              |
| **Referral Traffic Insights**   | Track user clicks from AI citations, with model/platform change markers on charts                    | New in 2026                                                                                              |
| **Adobe Analytics Integration** | Connect Adobe Analytics to measure referral traffic and business impact (GA)                         | New in 2026                                                                                              |

LLM Optimizer is part of Adobe's Brand Visibility solution (Summit 2026, linked under Announcements above) alongside Brand Concierge and LLM Apps.

### Tutorials & Guides

| Resource                         | Description                                                      | Link                                                                                                                       |
| -------------------------------- | ---------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------- |
| **Quick Start**                  | Onboarding and initial setup guide                               | [Docs](https://experienceleague.adobe.com/en/docs/llm-optimizer/using/essentials/quick-start)                              |
| **Best Practices**               | Strategic planning, onsite/offsite optimization, agentic traffic | [Docs](https://experienceleague.adobe.com/en/docs/llm-optimizer/using/essentials/best-practices)                           |
| **Interactive Tour**             | Hands-on tour of Adobe LLM Optimizer                             | [Demo](https://business.adobe.com/resources/llm-optimizer-interactive-tour.html)                                           |
| **Why We Created LLM Optimizer** | Product vision and use cases                                     | [Blog](https://experienceleaguecommunities.adobe.com/adobe-experience-manager-sites-8/why-we-created-llm-optimizer-227991) |

### Integration

- Native integration with AEM as a Cloud Service
- Optimize EDS sites for LLM visibility
- Configure CDN for AI agent traffic targeting

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

The official documentation home is linked under Official Resources above.

---

## Edge Delivery Services AI

### Official Documentation (aem.live)

| Resource                    | Description                                                                  | Link                                                                |
| --------------------------- | ---------------------------------------------------------------------------- | ------------------------------------------------------------------- |
| **Developer Tutorial**      | Get started with EDS in 10-20 minutes                                        | [Tutorial](https://www.aem.live/developer/tutorial)                 |
| **AI Coding Agents**        | Guide to using Claude Code, Cursor, Codex, Gemini, Copilot, and Zed with EDS | [Guide](https://www.aem.live/developer/ai-coding-agents)            |
| **llms.txt**                | AEM documentation optimized for AI consumption                               | [llms.txt](https://www.aem.live/llms.txt)                           |
| **Block Collection**        | Curated production-ready blocks                                              | [Blocks](https://www.aem.live/developer/block-collection)           |
| **CLI Reference**           | aem up, aem import commands                                                  | [CLI](https://www.aem.live/developer/cli-reference)                 |
| **Block Party**             | Community-built blocks showcase                                              | [Block Party](https://www.aem.live/developer/block-party/)          |
| **Universal Editor Blocks** | Blocks for UE authoring                                                      | [UE Blocks](https://www.aem.live/developer/universal-editor-blocks) |

### Adobe Helix Claude Skills

Official skills from the `adobe/helix-website` repository (linked under Claude Code Skills above):

| Category          | Skill                        | Description                                     |
| ----------------- | ---------------------------- | ----------------------------------------------- |
| **Orchestration** | `content-driven-development` | Complete workflow for building/modifying blocks |
| **Orchestration** | `page-import`                | Orchestrates migrating webpages to AEM EDS      |
| **Functional**    | `building-blocks`            | Core block development                          |
| **Functional**    | `content-modeling`           | Content schema definitions                      |
| **Functional**    | `testing-blocks`             | Block testing and validation                    |
| **Functional**    | `code-review`                | Code review workflows                           |
| **Research**      | `docs-search`                | Search AEM documentation                        |
| **Research**      | `block-inventory`            | Track available blocks                          |
| **Research**      | `block-collection-and-party` | Find existing blocks                            |
| **Import**        | `page-decomposition`         | Break pages into components                     |
| **Import**        | `identify-page-structure`    | Detect page layout                              |
| **Import**        | `scrape-webpage`             | Web scraping utilities                          |
| **Import**        | `generate-import-html`       | HTML import generation                          |
| **Import**        | `preview-import`             | Preview imports                                 |

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

### AI Grounding & Configuration

Essential files for grounding AI agents (Claude, Cursor, Copilot) in AEM Cloud Service project context.

| File                          | Purpose          | Description                                                                                                               |
| ----------------------------- | ---------------- | ------------------------------------------------------------------------------------------------------------------------- |
| **`AGENTS.md`**               | AI Grounding     | Markdown file at project root providing AEM/OSGi context to AI agents. Prevents hallucinations of legacy patterns.        |
| **`.aem-skills-config.yaml`** | Metadata Storage | Config file for project-specific metadata (Java package, group ID) to ensure AI-generated code follows local conventions. |
| **`llms.txt`**                | AI Documentation | AEM documentation formatted for AI consumption (linked under Edge Delivery Services AI above).                            |

### AEM Code Assessment IDE Agent

For AI-assisted IDEs (Cursor, Claude Code, Visual Studio, IntelliJ): detects and auto-fixes deprecated API usage, outdated Sling Model dependency injection, outdated Maven dependencies, missing HTTP call timeouts, and unbounded queries/schedulers/listeners (2026.7.0). As of 2026.9.0 it also performs AEM query optimization, flagging JCR/Oak index misconfiguration - GA on October 1, 2026. See the current release notes linked under What's New above.

### npm Packages

#### Official Adobe Packages

| Package                                                                                              | Description                            | Install                                   |
| ---------------------------------------------------------------------------------------------------- | -------------------------------------- | ----------------------------------------- |
| [@adobe/aem-cli](https://www.npmjs.com/package/@adobe/aem-cli)                                       | AEM/EDS CLI for local development      | `npm i -g @adobe/aem-cli`                 |
| [@adobe/aem-headless-client-js](https://www.npmjs.com/package/@adobe/aem-headless-client-js)         | AEM Headless SDK Client                | `npm i @adobe/aem-headless-client-js`     |
| [@adobe/aem-import-helper](https://www.npmjs.com/package/@adobe/aem-import-helper)                   | Helper tool for importing sites to AEM | `npm i @adobe/aem-import-helper`          |
| [@adobe/aem-upload](https://www.npmjs.com/package/@adobe/aem-upload)                                 | AEM Assets direct binary uploading     | `npm i @adobe/aem-upload`                 |
| [@adobe/aem-spa-page-model-manager](https://www.npmjs.com/package/@adobe/aem-spa-page-model-manager) | SPA Editor page model manager          | `npm i @adobe/aem-spa-page-model-manager` |

#### Development Tools

| Package                                                                          | Description                            | Install                         |
| -------------------------------------------------------------------------------- | -------------------------------------- | ------------------------------- |
| [aemsync](https://www.npmjs.com/package/aemsync)                                 | Code sync for Sling/AEM                | `npm i -g aemsync`              |
| [aem-clientlib-generator](https://www.npmjs.com/package/aem-clientlib-generator) | Creates AEM ClientLibs config files    | `npm i aem-clientlib-generator` |
| [aem-import-builder](https://www.npmjs.com/package/aem-import-builder)           | AI capabilities for AEM import scripts | `npm i aem-import-builder`      |

### CLI Commands

```bash
# AEM CLI - local development server with AI coding agents support
aem up

# AEM Project Archetype
mvn archetype:generate -DarchetypeGroupId=com.adobe.aem -DarchetypeArtifactId=aem-project-archetype
```

---

## Real-World Architecture Audit

To demonstrate the difference between "GenAI chat" and "Architectural Intelligence," we performed a live audit of the **AEM WKND Reference Site** Dispatcher configurations using the principles defined in this guide.

### The Objective

Identify security vulnerabilities in the Dispatcher filter rules that a standard chatbot would miss, but a grounded AEM agent can detect.

### Step 1: Automated Analysis

We ran the `aemanalyser-maven-plugin` (integrated via the `dispatcher` skill) against the `wknd-test` project.

```bash
# Executing the audit
mvn com.adobe.aem:aemanalyser-maven-plugin:analyse -pl dispatcher -am
```

### Step 2: Findings (Critical Vulnerability Detected)

The audit identified a high-risk misconfiguration in `dispatcher/src/conf.dispatcher.d/filters/filters.any`:

**Vulnerable Code:**

```any
# Rule /0201 in filters.any
/0201 { /type "allow" /url "/home/users/*.infinity.json" }
```

**Architectural Impact:**

| Dimension         | Impact                                                                                                                      |
| ----------------- | --------------------------------------------------------------------------------------------------------------------------- |
| **Vulnerability** | The rule allows external access to user profile nodes via the `.infinity.json` selector                                     |
| **Risk**          | An attacker can crawl `/home/users` to dump sensitive user metadata, preferences, and potentially hashed credentials or PII |
| **Compliance**    | Violates the AEM Cloud Service Security Checklist, which mandates that `/home` should never be exposed via Dispatcher       |

### Step 3: Proactive Fix

A "really good" AI doesn't just report this; it provides the surgical fix:

```any
# Recommended Fix: Restrict access to specific, non-sensitive pagedata only
/0201 { /type "deny" /url "/home/users/*" }
/0202 { /type "allow" /url "/home/users/*.token.json" } # If specific token exchange is needed
```

---

## Best Practices & AI Workflow

Guidelines for successfully integrating AI into your AEM development lifecycle.

### Core Principles

| Principle                                    | Guidance                                                                                                                                                                      |
| -------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Ground the Agent First**                   | Always ensure `AGENTS.md` is present at the root of your project so AI agents (Claude, Cursor, Copilot) understand they are working on an AEM Cloud Service Java/OSGi project |
| **Use Specialized Skills Over General Chat** | Prefer specialized instruction sets like `create-component` or `dispatcher` over general prompts; they encode multi-step Adobe best practices and mandatory file structures   |
| **Connect to the Runtime**                   | Use MCP servers (AEM Quickstart and Dispatcher) to give your AI "eyes" into the running environment for debugging OSGi failures and request traces in real time               |
| **Iterative Component Creation**             | Provide a detailed dialog specification (field names, types, labels) to the `create-component` skill for a high-fidelity first draft                                          |
| **Verify Locally Before Deployment**         | Use the `dispatcher` skill and MCP server to validate configurations against your local Docker container before committing to Cloud Manager                                   |

### Standard AI-Enhanced Workflow

| Step             | Action                                                                  |
| ---------------- | ----------------------------------------------------------------------- |
| **1. Bootstrap** | Run `ensure-agents-md` to initialize project context                    |
| **2. Develop**   | Use `create-component` to scaffold backend and frontend code            |
| **3. Debug**     | Use `aem-logs` and `diagnose-osgi-bundle` via MCP to fix runtime issues |
| **4. Harden**    | Use the `dispatcher` skill to audit security and performance            |
| **5. Refine**    | Use `Generate Variations` in the AEM Editor to polish copy and images   |

---

## Tutorials & Learning

### Official Adobe Learning

| Resource                       | Description                             | Link                                                                                                                                                            |
| ------------------------------ | --------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Generative AI in AEM Sites** | Video tutorial on GenAI features        | [Video](https://experienceleague.adobe.com/en/docs/experience-manager-learn/cloud-service/expert-resources/cloud-5/season-3/cloud5-generative-ai-for-aem-sites) |
| **Agent Skills Setup**         | Configure agent skills for AEM projects | [Docs](https://experienceleague.adobe.com/en/docs/experience-manager-learn/cloud-service/ai/ai-assisted-development/setup/agent-skills)                         |
| **AI Component Development**   | Build AEM components with AI assistance | [Docs](https://experienceleague.adobe.com/en/docs/experience-manager-learn/cloud-service/ai/ai-assisted-development/use-cases/component-development)            |

### Hands-on Labs

Step-by-step tutorials for practical AI implementation in AEM.

| Lab       | Topic                                                                         | Duration  | Description                                                              |
| --------- | ----------------------------------------------------------------------------- | --------- | ------------------------------------------------------------------------ |
| **Lab 1** | [AEM MCP Server](tutorials/lab-1-aem-mcp-server.md)                           | 20-30 min | Set up and configure AEM MCP Server for natural language AEM interaction |
| **Lab 2** | [Experience Production Agent](tutorials/lab-2-experience-production-agent.md) | 25-35 min | Automate content operations using AI agents                              |
| **Lab 3** | [Claude Code Skills](tutorials/lab-3-claude-code-skills.md)                   | 30-40 min | Enhance AEM/EDS development with AI skills                               |
| **Lab 4** | [ACM MCP Server](tutorials/lab-4-acm-mcp-server.md)                           | 30-40 min | Set up ACM MCP for Groovy script execution via AI                        |

**Quick Start:**

```bash
git clone https://github.com/narendragandhi/awesome-aem-ai.git
cd awesome-aem-ai/tutorials
```

### Certifications

- [Adobe Certification Program](https://certification.adobe.com/) - AEM Sites, Assets, and Developer certifications.

---

## Community Projects

### Open Source

| Project                                                                         | Description                 | Stars                                                                                          |
| ------------------------------------------------------------------------------- | --------------------------- | ---------------------------------------------------------------------------------------------- |
| [ACS AEM Commons](https://github.com/Adobe-Consulting-Services/acs-aem-commons) | Community utilities for AEM | ![GitHub stars](https://img.shields.io/github/stars/Adobe-Consulting-Services/acs-aem-commons) |
| [AEM Guides WKND](https://github.com/adobe/aem-guides-wknd)                     | Sample AEM project          | ![GitHub stars](https://img.shields.io/github/stars/adobe/aem-guides-wknd)                     |
| [Helix Project Boilerplate](https://github.com/adobe/aem-boilerplate)           | EDS starter template        | ![GitHub stars](https://img.shields.io/github/stars/adobe/helix-project-boilerplate)           |

### Community Tools

| Tool                     | Description              | Link                                                     |
| ------------------------ | ------------------------ | -------------------------------------------------------- |
| **AEM Groovy Console**   | Script execution for AEM | [GitHub](https://github.com/orbinson/aem-groovy-console) |
| **AEM Block Collection** | Curated EDS blocks       | [GitHub](https://github.com/adobe/aem-block-collection)  |

---

## Videos & Presentations

### Adobe Developers Live

| Video                                       | Description                                            | Link                                                                                                             |
| ------------------------------------------- | ------------------------------------------------------ | ---------------------------------------------------------------------------------------------------------------- |
| **Building the Agentic Web**                | AEM Agents, Content AI Foundational - ADL 2025 Keynote | [YouTube](https://www.youtube.com/watch?v=wIJKwPBbuPk)                                                           |
| **Bringing Intelligence to Content in AEM** | Content AI in AEM - ADL 2025                           | [YouTube](https://www.youtube.com/watch?v=aGw1eCnHC7g)                                                           |
| **Accelerate your Edge Delivery Tutorial**  | EDS Tutorial with AEM trial                            | [YouTube](https://www.youtube.com/watch?v=RlXJ3zZgpgk)                                                           |
| **AEM Release 2026.03**                     | Release overview with latest AI features               | [Video](https://experienceleague.adobe.com/en/docs/events/aemcs-release-update-recordings/2026/2026-3-0)         |
| **AEM Release 2026.01**                     | Release overview with latest AI features               | [Video](https://experienceleague.adobe.com/en/docs/events/aemcs-release-update-recordings/2026/2026-1-0)         |
| **Brand Concierge at Developers Live**      | Enhance onsite experience with Brand Concierge         | [Video](https://experienceleague.adobe.com/en/docs/events/adobe-developers-live-recordings/2025/brand-concierge) |
| **AEM Release 2025.01**                     | New AI features in AEM 2025.01                         | [YouTube](https://www.youtube.com/watch?v=IFrwcUGMFQI)                                                           |
| **AEM Release 2025.02**                     | Content Fragment Auto Tagging, EDS features            | [YouTube](https://www.youtube.com/watch?v=kX5dWW5kJ_0)                                                           |

### AI & MCP Tutorials

| Video                                 | Description                                          | Link                                                                                                                                    |
| ------------------------------------- | ---------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------- |
| **Unlocking AEM's Potential with AI** | AI integration in AEM - Agentic, GenAI, AI Assistant | [YouTube](https://www.youtube.com/watch?v=2J5doCFH4TQ)                                                                                  |
| **AI Assistant in AEM**               | Configuration and live demo                          | [YouTube](https://experienceleague.adobe.com/en/docs/events/adobe-customer-success-webinar-recordings/2025/aem2025/ai-assistant-in-aem) |
| **AEM + MCP Integration**             | MCP for content, components, assets management       | [GitHub](https://github.com/easingthemes/aem-mcp-server)                                                                                |

### YouTube Channels

- [Adobe Experience League](https://www.youtube.com/channel/UCZmdiWfGGoTPBnyNkB8Il5w) - Official Adobe tutorials and release updates.
- [AEM Geeks](https://www.youtube.com/@aemgeeks) - Community AEM tutorials.
- [aem-live](https://www.youtube.com/@aem-live) - Official Adobe AEM channel.

### Webinars

- [Monthly AEM Community Webinars](https://experienceleaguecommunities.adobe.com/) - Recurring community sessions on Experience League.

---

## Related Awesome Lists

- [Awesome AEM](https://github.com/emincansumer/awesome-aem) - Curated list of AEM/CQ5 resources.
- [Awesome MCP Servers](https://github.com/punkpeye/awesome-mcp-servers) - MCP server collection.
- [Awesome LangChain](https://github.com/kyrolabs/awesome-langchain) - LangChain resources.
- [Awesome Claude Code](https://github.com/hesreallyhim/awesome-claude-code) - Claude Code skills, hooks, and tools.

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

<p align="center">
  <sub>Built with AI for the AEM Community · Licensed under <a href="https://creativecommons.org/publicdomain/zero/1.0/">CC0 1.0</a></sub>
</p>
