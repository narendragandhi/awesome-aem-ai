# Hands-on Lab 3: Claude Code Skills for AEM Development

In this lab, you'll learn how to set up and use Claude Code Skills for efficient Adobe Experience Manager development, including AEM backend and Edge Delivery Services (EDS) development.

## Prerequisites

- Claude Code installed (`brew install claude-code` or download from claude.ai/code)
- AEM project or EDS project
- GitHub CLI installed (for installing skills from repositories)

## Estimated Time

30-40 minutes

---

## Step 1: Install Claude Code

### macOS

```bash
# Using Homebrew
brew install claude-code

# Or download from https://claude.ai/code
```

### Verify Installation

```bash
claude --version
```

---

## Step 2: Set Up Skills for AEM

### Option A: Install Official Adobe EDS Skills

```bash
# Install gh extension
gh extension install trieloff/gh-upskill

# Install all Adobe EDS skills from helix-website
gh upskill adobe/helix-website --all
```

### Option B: Copy Skills to Your Project

If you have skills in a local repository:

```bash
# Copy AEM skills to your project
cp -r /path/to/awesome-aem-ai/.claude/skills/ /your-aem-project/.claude/skills/
```

---

## Step 3: Available Skills

### AEM Backend Skills

| Skill | Purpose |
|-------|---------|
| **aem-htl** | HTL/Sightly templating, data binding, contexts, i18n |
| **aem-sling-models** | Sling Models, injectors, delegation, exporters |
| **aem-osgi** | OSGi services, configs, schedulers, events |
| **aem-clientlibs** | Client libraries, dependencies, optimization |
| **aem-testing** | Unit tests, AEM Mocks, integration tests |

### EDS Skills

| Skill | Purpose |
|-------|---------|
| **content-driven-development** | Block development methodology |
| **page-import** | Import content from existing sites |
| **building-blocks** | Create and customize blocks |
| **content-modeling** | Model content for EDS |
| **testing-blocks** | Write tests for blocks |
| **block-inventory** | Catalog available blocks |
| **block-collection-and-party** | Use community blocks |
| **page-decomposition** | Break down pages into blocks |
| **identify-page-structure** | Analyze page architecture |
| **scrape-webpage** | Extract content from URLs |
| **generate-import-html** | Generate import markup |
| **preview-import** | Preview before importing |
| **authoring-analysis** | Analyze authoring patterns |

---

## Step 4: Using Skills in Development

### Example 1: Creating a Sling Model

```bash
# Start Claude in your project
claude

# Ask Claude to use the sling-models skill
> Create a Sling Model for a Product component that:
> - Injects the resource path
> - Has title, description, price fields
> - Uses delegation to a ProductInterface
```

Claude will use the `aem-sling-models` skill to generate properly structured code.

### Example 2: HTL Template Development

```bash
# Use HTL skill
> Create an HTL template for a hero banner component
> with:
> - Background image (desktop and mobile)
> - Headline and subheadline
> - CTA button
> - Use data-sly-element for conditional rendering
```

### Example 3: Client Library Configuration

```bash
# Use clientlibs skill
> Create a client library for a carousel component
> with:
> - JavaScript (main.js)
> - CSS (style.css)
> - Dependencies on cq.jquery
> - Category: my-site.carousel
```

---

## Step 5: EDS Block Development

### Creating a New Block

```bash
# Start Claude in your EDS project
claude

# Use content-driven-development skill
> Create a new block called 'feature-card' with:
> - Image, title, description, link
> - Responsive design
> - Use the standard block template structure
```

### Importing Content

```bash
# Use page-import skill
> Import content from https://example.com/about-us
> as a new page in /tools/importer
```

### Testing Blocks

```bash
# Use testing-blocks skill
> Write unit tests for the feature-card block
> using the project's test framework
```

---

## Step 6: Project-Specific Skills

### Creating Custom Skills

Create a `.claude/skills/` directory in your project:

```bash
mkdir -p .claude/skills
```

### Skill File Format

Create a skill file (e.g., `myproject-conventions.md`):

```markdown
# MyProject Conventions

This skill provides project-specific conventions for AEM development.

## Code Style
- Use 2 spaces for indentation
- Follow naming conventions: 
  - Components: `myproject-component-name`
  - Models: `MyProjectComponentNameModel`
  - Services: `MyProject*Service`

## Component Structure
- HTL: `/ui.apps/src/main/content/jcr_root/apps/myproject/components/`
- Clientlibs: `/ui.apps/src/main/content/jcr_root/etc/clientlibs/myproject/`

## Testing
- Unit tests required for all Sling Models
- Minimum 80% code coverage
```

### Using Custom Skills

```bash
# Reference in your prompts
> Using myproject-conventions, create a new component called 'news-card'
```

---

## Step 7: Workflow Examples

### Workflow 1: New Component Development

```bash
# Start Claude session
claude

# Step 1: Create Sling Model
> Using aem-sling-models, create ProductDetailModel with:
> - title, description, price, image fields
> - delegation to ProductDetailInterface

# Step 2: Create HTL
> Using aem-htl, create product-detail.html with:
> - Responsive image
> - Structured data markup
> - Add-to-cart button

# Step 3: Create Clientlibs
> Using aem-clientlibs, create product-detail clientlib
> with: js, css, dependencies

# Step 4: Create Tests
> Using aem-testing, write tests for ProductDetailModel
```

### Workflow 2: EDS Page Migration

```bash
# Start Claude session in EDS project

# Step 1: Analyze source page
> Using identify-page-structure, analyze https://example.com/landing

# Step 2: Decompose into blocks
> Using page-decomposition, break down the page into logical sections

# Step 3: Generate blocks
> Create blocks for: hero, features, testimonials, cta

# Step 4: Import content
> Using scrape-webpage, extract content from the source
> Then using generate-import-html, prepare for EDS

# Step 5: Test
> Using testing-blocks, verify all blocks render correctly
```

---

## Step 8: Debugging with Skills

### Analyzing Component Issues

```bash
> Using aem-htl, explain why the ${properties.title} isn't rendering
> in my hero component (file: hero.html)

> Using aem-sling-models, debug why the price field is null
> in ProductDetailModel
```

### Optimizing Clientlibs

```bash
> Using aem-clientlibs, analyze and optimize my component's clientlibs
> for lazy loading and performance
```

---

## Troubleshooting

### Skills Not Loading

```bash
# Check Claude configuration
claude config show

# List available skills
claude skills list
```

### Skill Conflicts

If multiple skills apply, specify explicitly:

```bash
> Using aem-htl (not eds-blocks), fix this HTL template
```

---

## Next Steps

- **Lab 1**: Setting up AEM MCP Server
- **Lab 2**: Using Experience Production Agent
- Explore [Claude Code Skills Documentation](https://code.claude.com/docs/en/skills)

---

## Resources

- [Claude Code Skills Docs](https://code.claude.com/docs/en/skills)
- [Agent Skills Repository](https://github.com/anthropics/skills)
- [Adobe EDS Skills](https://github.com/adobe/helix-website/tree/main/.claude/skills)
- [AEM Modernization Tools](https://github.com/Adobe-Consulting-Services/acs-aem-commons)
