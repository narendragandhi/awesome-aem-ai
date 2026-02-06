# Contributing to Awesome AEM AI

Thank you for your interest in contributing to Awesome AEM AI! This document provides guidelines and instructions for contributing.

## Table of Contents

- [Code of Conduct](#code-of-conduct)
- [What We're Looking For](#what-were-looking-for)
- [How to Contribute](#how-to-contribute)
- [Pull Request Process](#pull-request-process)
- [Style Guide](#style-guide)
- [Quality Standards](#quality-standards)

## Code of Conduct

This project adheres to the [Contributor Covenant Code of Conduct](CODE_OF_CONDUCT.md). By participating, you are expected to uphold this code.

## What We're Looking For

We welcome contributions in the following categories:

### MCP Servers
- MCP servers that integrate with AEM or Edge Delivery Services
- Must be functional and well-documented
- Open source preferred

### AI Agents
- Autonomous agents designed for AEM workflows
- Must have clear documentation on capabilities
- Working examples or demos appreciated

### Claude Code Skills
- Skills that enhance AEM development with Claude Code
- Must follow Claude Code skill development guidelines
- Include installation and usage instructions

### Tools & Extensions
- IDE extensions for AEM + AI development
- CLI tools with AI capabilities
- Browser extensions for EDS/AEM

### Educational Content
- Tutorials and guides
- Video content
- Blog posts and articles
- Conference presentations

## How to Contribute

### Adding a New Resource

1. **Fork the repository**
   ```bash
   git clone https://github.com/YOUR_USERNAME/awesome-aem-ai.git
   cd awesome-aem-ai
   ```

2. **Create a feature branch**
   ```bash
   git checkout -b add/your-resource-name
   ```

3. **Add your resource** to the appropriate section in `README.md`

4. **Commit your changes**
   ```bash
   git add README.md
   git commit -m "Add [Resource Name] to [Section]"
   ```

5. **Push and create a Pull Request**
   ```bash
   git push origin add/your-resource-name
   ```

### Suggesting Improvements

- Open an [issue](../../issues/new) describing your suggestion
- Tag it appropriately (enhancement, documentation, etc.)
- Provide as much detail as possible

### Reporting Dead Links

- Open an [issue](../../issues/new) with the "dead link" label
- Include the section and resource name
- Suggest a replacement if available

## Pull Request Process

1. **Ensure your PR follows the style guide**
2. **Update the Table of Contents** if adding a new section
3. **One resource per PR** (unless they're closely related)
4. **Include a clear description** of what you're adding and why
5. **Wait for review** - maintainers will review within 7 days

### PR Title Format

```
Add [Resource Name] to [Section Name]
```

Examples:
- `Add AEM Content Agent to AI Agents`
- `Add HTL Copilot Extension to IDE Extensions`
- `Fix dead link in MCP Servers section`

## Style Guide

### Resource Entry Format

**For tables:**
```markdown
| **Resource Name** | Brief description (under 100 chars) | [GitHub](url) |
```

**For lists:**
```markdown
- [Resource Name](url) - Brief description
```

### Description Guidelines

- Keep descriptions concise (under 100 characters for tables)
- Start with a verb when possible (e.g., "Automates...", "Provides...")
- Don't use marketing language or superlatives
- Be accurate about capabilities

### Link Guidelines

- Use HTTPS links when available
- Link to the most relevant page (usually GitHub repo or documentation)
- Avoid URL shorteners
- For multiple links: `[GitHub](url) • [Docs](url) • [Demo](url)`

### Section Guidelines

- Keep sections alphabetically ordered within categories
- Use consistent heading levels
- Include a brief section description when helpful

## Quality Standards

### Resources Must:

- [ ] Be relevant to AEM and/or AI
- [ ] Be actively maintained (updated within last 12 months)
- [ ] Have clear documentation
- [ ] Be accessible (no paywall for listing, though paid tools are OK)
- [ ] Work as described

### Resources Should:

- [ ] Be open source (when applicable)
- [ ] Have a demo or examples
- [ ] Have community adoption/stars
- [ ] Follow security best practices

### Resources Must Not:

- [ ] Be purely promotional
- [ ] Contain malicious code
- [ ] Violate Adobe's terms of service
- [ ] Be duplicates of existing entries

## Questions?

Feel free to open an issue or reach out to the maintainers if you have any questions about contributing.

---

Thank you for helping make Awesome AEM AI better!
