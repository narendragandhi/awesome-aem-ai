# Hands-on Lab 2: Using Experience Production Agent

In this lab, you'll learn how to use the Experience Production Agent to automate high-effort, high-volume content tasks in AEM using natural language.

## Prerequisites

- AEM as a Cloud Service with AI Agents enabled
- Access to the Agent Console (typically `aemcoder.adobe.io`)
- Beta program enrollment (contact `aemagentsteam@adobe.com`)

## Estimated Time

25-35 minutes

---

## Step 1: Access the Agent Console

### Getting Started

1. Navigate to the Agent Console: **https://aemcoder.adobe.io**
2. Sign in with your Adobe ID
3. Select your AEM as a Cloud Service environment

### Interface Overview

```
┌─────────────────────────────────────────────────────────┐
│  AEM Agent Console                                      │
├─────────────────────────────────────────────────────────┤
│  [Production Agent] [Modernization Agent] [Discovery]  │
│                                                         │
│  ┌─────────────────────────────────────────────────┐   │
│  │  Natural Language Input                          │   │
│  │  "Update all product pages with new pricing"    │   │
│  └─────────────────────────────────────────────────┘   │
│                                                         │
│  [Execute]                                              │
└─────────────────────────────────────────────────────────┘
```

---

## Step 2: Content Update Skill

The Content Update skill automates content updates across pages, Content Fragments, and Adaptive Forms.

### Basic Syntax

```
[Action] [Content Type] [Location] [Changes]
```

### Example Commands

#### Update Multiple Pages

```
"Update the contact email from info@oldcompany.com to support@newcompany.com 
across all pages under /content/my-site/en/contact"
```

**What happens:**
1. Agent scans `/content/my-site/en/contact` tree
2. Finds all pages with the old email
3. Updates each occurrence with the new email
4. Reports summary of changes

#### Update Content Fragments

```
"Add a new paragraph to the 'Product Features' Content Fragment 
describing the new AI-powered search feature"
```

#### Update via Jira Integration

```
"Process Jira ticket PROJ-1234 and update the homepage hero 
banner with the new campaign content"
```

### Advanced: Specify Conditions

```
"Update all blog posts published after January 2025 to add 
the new 'AI' tag and update the meta description"
```

---

## Step 3: Form Creation Skill

Build Adaptive Forms without developer intervention.

### Creating a Simple Form

```
"Create an Adaptive Form called 'Contact Request' with:
- Name field (text, required)
- Email field (email, required)
- Phone field (telephone, optional)
- Message field (textarea, required)
- Submit button"
```

### Creating a Complex Form with Rules

```
"Create a registration form with:
- Personal info section (name, DOB)
- Address section with auto-populate
- Dynamic panel that shows/hides based on user type (Individual/Business)
- File upload for business license if Business is selected
- Submit to /bin/submit/registration"
```

### Generated Output

The agent creates:
- Form model (XML/JSON)
- Layout fragments
- Basic validation rules
- Submit action configuration

---

## Step 4: Communications Creation (Alpha)

Generate personalized, data-driven correspondence.

### Creating a Letter

```
"Create a personalized welcome letter for new insurance customers 
that includes:
- Customer name and address
- Policy number (auto-generated)
- Coverage summary
- Next steps checklist
- Use the 'welcome-letter' template"
```

### Creating Statements

```
"Generate monthly statements for all customers in segment 'Premium' 
with:
- Current balance
- Recent transactions
- Recommended products based on history
- Loyalty points balance"
```

---

## Step 5: Monitoring & Governance

### Viewing Agent Activity

After executing commands, review the Activity Log:

```
┌────────────────────────────────────────────┐
│ Activity Log                               │
├────────────────────────────────────────────┤
│ ✓ Scanned 45 pages                        │
│ ✓ Updated 32 pages                        │
│ ⚠ 3 pages skipped (permissions)           │
│ Duration: 2m 34s                          │
└────────────────────────────────────────────┘
```

### Error Handling

Common errors and solutions:

| Error | Cause | Solution |
|-------|-------|----------|
| Permission denied | User lacks write access | Request appropriate ACLs |
| Content not found | Path doesn't exist | Verify content structure |
| Rate limited | Too many requests | Wait and retry |
| Validation failed | Invalid content format | Check agent output |

---

## Step 6: Best Practices

### Writing Effective Prompts

✅ **Good:**
```
"Update the meta description for all product pages under 
/content/site/products to: 'Discover our premium collection 
of widgets. Free shipping on orders over $50.'"
```

❌ **Bad:**
```
"Update products"
```

### Guidelines

1. **Be Specific**: Include exact paths, values, and scope
2. **Use Conditions**: "All pages that have X, update Y"
3. **Preview First**: Use --dry-run flag for complex operations
4. **Batch Smart**: Group similar operations for efficiency

### Safety Features

- **Read Before Write**: Agent reads content before modifying
- **Change Logging**: All changes are logged for audit
- **Rollback Available**: Can revert changes if needed
- **Human Oversight**: Requires approval for major changes

---

## Step 7: Example Workflows

### Workflow 1: Campaign Launch

```bash
# Step 1: Update hero banners
"Update hero images on all landing pages to /content/dam/campaign/spring-2025/hero.jpg"

# Step 2: Update CTAs
"Change all 'Learn More' buttons to 'Shop Now' on /content/site/"

# Step 3: Add campaign tags
"Add tag 'spring-2025-campaign' to all pages modified today"
```

### Workflow 2: Product Catalog Update

```bash
# Step 1: Update pricing
"Update all prices in /content/site/products to reflect 10% discount"

# Step 2: Update inventory status
"Set inventory status to 'In Stock' for items with qty > 0"

# Step 3: Generate reports
"Create a summary of all updated products"
```

---

## Troubleshooting

### Agent Not Responding

- Check if beta access is enabled
- Verify AEM instance is accessible
- Try refreshing the console

### Unexpected Results

- Use the "Preview" option before executing
- Review the change log after execution
- Contact support for complex issues

---

## Next Steps

- **Lab 1**: Setting up AEM MCP Server (prerequisite)
- **Lab 3**: Claude Code Skills for AEM Development
- Explore [Experience Production Agent Docs](https://experienceleague.adobe.com/en/docs/experience-manager-cloud-service/content/ai-in-aem/agents/production/overview)

---

## Resources

- [Content Update Skill Documentation](https://experienceleague.adobe.com/en/docs/experience-manager-cloud-service/content/ai-in-aem/agents/production/content-update)
- [AI Agents Overview](https://experienceleague.adobe.com/en/docs/experience-manager-cloud-service/content/ai-in-aem/agents/overview)
- [Beta Program Signup](mailto:aemagentsteam@adobe.com)
