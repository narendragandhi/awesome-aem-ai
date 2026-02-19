# Hands-on Lab 1: Setting Up AEM MCP Server

In this lab, you'll learn how to set up and configure the AEM MCP Server to interact with Adobe Experience Manager using natural language through Claude Code, Cursor, or other AI assistants.

## Prerequisites

- Node.js 18+ installed
- An AEM as a Cloud Service instance (or local AEM SDK)
- Claude Code, Cursor, or ChatGPT with MCP support

## Estimated Time

20-30 minutes

---

## Step 1: Install the MCP Server

### Option A: Using npm (Recommended)

```bash
# Create a new directory for your MCP setup
mkdir aem-mcp-lab && cd aem-mcp-lab

# Initialize npm project
npm init -y

# Install the AEM MCP Server
npm install aem-mcp-server
```

### Option B: Using npx (Quick Start)

```bash
npx aem-mcp-server --help
```

---

## Step 2: Configure Connection to AEM

Create a configuration file to connect to your AEM instance:

```bash
# Create config directory
mkdir -p ~/.mcp

# Create configuration file
cat > ~/.mcp/aem-config.json << 'EOF'
{
  "mcpServers": {
    "aem": {
      "command": "npx",
      "args": ["aem-mcp-server", "-H", "https://publish-p1234.adobeaemcloud.com", "-u", "your-username", "-p", "your-password"]
    }
  }
}
```

> **Note:** For production, use environment variables or a secrets manager. Claude Code supports reading env vars from your shell environment.

---

## Step 3: Connect to Claude Code

Claude Code has built-in MCP support. Add the AEM MCP server:

```bash
# Add AEM MCP server to Claude Code
claude mcp add --transport stdio aem-mcp -- npx -y aem-mcp-server -H $AEM_HOST -u $AEM_USERNAME -p $AEM_PASSWORD
```

Or use environment variables:

```bash
# Set environment variables
export AEM_HOST="https://publish-p1234.adobeaemcloud.com"
export AEM_USERNAME="your-username"
export AEM_PASSWORD="your-password"

# Add MCP server
claude mcp add --transport stdio aem-mcp -- npx -y aem-mcp-server -H $AEM_HOST -u $AEM_USERNAME -p $AEM_PASSWORD
```

---

## Step 4: Test the Connection

Start Claude Code and test the MCP server:

```bash
claude
```

### Try These Commands

Once connected, try these natural language commands:

```
# List pages in the content root
"Show me all pages under /content/my-site"

# Read a specific page
"Get the content of /content/my-site/en/home"

# Search for assets
"Find all images in /content/dam/my-brand"

# Create a new page
"Create a new page at /content/my-site/en/landing"
```

---

## Step 5: Available MCP Tools

The AEM MCP Server provides these core tools:

### Page Operations

| Tool | Description |
|------|-------------|
| `aem_list_pages` | List pages under a path |
| `aem_get_page` | Get page content and properties |
| `aem_create_page` | Create a new page |
| `aem_update_page` | Update page content |
| `aem_delete_page` | Delete a page |
| `aem_publish_page` | Publish a page |

### Asset Operations

| Tool | Description |
|------|-------------|
| `aem_list_assets` | List assets in a folder |
| `aem_upload_asset` | Upload a new asset |
| `aem_get_asset_metadata` | Get asset metadata |
| `aem_delete_asset` | Delete an asset |

### Fragment Operations

| Tool | Description |
|------|-------------|
| `aem_list_fragments` | List Content Fragments |
| `aem_get_fragment` | Get Fragment data |
| `aem_create_fragment` | Create a new Fragment |

### Search

| Tool | Description |
|------|-------------|
| `aem_search` | Full-text search across content |
| `aem_query` | Query using AEM QueryBuilder |

---

## Step 6: Example Workflows

### Workflow 1: Bulk Content Update

```bash
# Update multiple pages with new metadata
claude "Update the SEO description for all pages under /content/my-site/en/products"
```

### Workflow 2: Asset Migration

```bash
# Upload assets from local folder
claude "Upload all images from ./assets/product-images to /content/dam/products"
```

### Workflow 3: Content Audit

```bash
# Find all pages missing required metadata
claude "Find pages under /content/my-site that are missing the SEO title property"
```

---

## Troubleshooting

### Connection Issues

```bash
# Check if AEM is accessible
curl -u $AEM_USERNAME:$AEM_PASSWORD $AEM_HOST/bin/security/login.json

# Verify MCP server starts
npx aem-mcp-server --debug
```

### Authentication Errors

- Ensure your AEM user has appropriate ACLs
- Check if IMS token or OAuth is required
- Verify the AEM host URL is correct

### Timeout Issues

For large content operations, increase timeout:

```bash
AEM_TIMEOUT=60000 npx aem-mcp-server
```

---

## Next Steps

- **Lab 2**: Using Experience Production Agent for automated content tasks
- **Lab 3**: Setting up Claude Code Skills for AEM Development
- Explore the [aem-mcp-server GitHub](https://github.com/indrasishbanerjee/aem-mcp-server) for advanced usage

---

## Resources

- [AEM MCP Server npm](https://www.npmjs.com/package/aem-mcp-server)
- [AEM MCP Server GitHub](https://github.com/indrasishbanerjee/aem-mcp-server)
- [Using MCP with AEM](https://experienceleague.adobe.com/en/docs/experience-manager-cloud-service/content/ai-in-aem/using-mcp-with-aem-as-a-cloud-service)
