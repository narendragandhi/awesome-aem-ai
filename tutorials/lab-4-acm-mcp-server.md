# Hands-on Lab 4: ACM MCP Server

In this lab, you'll learn how to set up and use the ACM (AEM Content Manager) MCP Server to execute Groovy code on AEM through AI assistants.

## Prerequisites

- AEM 6.5+ or AEM as a Cloud Service
- ACM (AEM Content Manager) installed on your AEM instance
- Maven 3.9+ and Java 17+
- Claude Desktop or another MCP-compatible AI assistant

## Estimated Time

30-40 minutes

---

## Step 1: Understanding ACM

ACM (AEM Content Manager) by VML is a comprehensive tool for:
- Bulk content and permission management
- Groovy script execution
- IDE-like experience with code completion
- Content migrations

The MCP server extends ACM with AI capabilities.

---

## Step 2: Build the MCP Server

### Clone the Repository

```bash
git clone https://github.com/narendragandhi/acm.git
cd acm
```

### Build Issues & Solutions

If you encounter build errors related to missing classes (e.g., `CodeOutputMemory`), this is because the MCP module depends on the core ACM module:

```bash
# Build the entire project first
mvn clean install -DskipTests

# Then build just the MCP server
mvn clean install -pl mcp.server
```

### Alternative: Use Pre-built Package

Check the [releases](https://github.com/wttech/acm/releases) for pre-built packages.

---

## Step 3: Deploy to AEM

### Option A: Using the Test Script

```bash
# Set AEM credentials
export AEM_HOST="localhost:4502"
export AEM_USER="admin:admin"

# Run the test script (builds and deploys)
./mcp.server/test-mcp.sh
```

### Option B: Manual Deployment

```bash
# Build the bundle
mvn clean install -pl mcp.server -PautoInstallBundle

# The bundle will be deployed to AEM at localhost:4502
```

---

## Step 4: Configure MCP Server

### OSGi Configuration

Configure the MCP server at:
```
PID: dev.vml.es.acm.mcp.config.McpServerConfig
```

| Property | Default | Description |
|----------|---------|-------------|
| `enabled` | `true` | Enable/disable the MCP server |
| `serverName` | `acm-mcp-server` | Server name |
| `endpointPath` | `/apps/acm/mcp` | HTTP endpoint path |
| `enableExecuteCode` | `true` | Enable code execution |
| `enableScriptTools` | `true` | Enable script management |
| `executionTimeout` | `300` | Timeout in seconds |

### Verify Deployment

```bash
# Test server info
curl -s -u "admin:admin" "http://localhost:4502/apps/acm/mcp/endpoint.json"
```

---

## Step 5: Connect to Claude Desktop

### Configuration

Add to your Claude Desktop config (typically `~/Library/Application Support/Claude/claude_desktop_config.json`):

```json
{
  "mcpServers": {
    "acm": {
      "url": "http://localhost:4502/apps/acm/mcp/endpoint.json",
      "transport": "http",
      "headers": {
        "Authorization": "Basic YWRtaW46YWRtaW4="
      }
    }
  }
}
```

> **Note:** Replace `YWRtaW46YWRtaW4=` with your Base64-encoded credentials (admin:admin = `YWRtaW46YWRtaW4=`)

---

## Step 6: Available MCP Tools

### Code Execution

| Tool | Description |
|------|-------------|
| `acm_execute_code` | Execute Groovy code on AEM |
| `acm_queue_code` | Queue code for background execution |
| `acm_describe_code` | Analyze code without execution |

### Script Management

| Tool | Description |
|------|-------------|
| `acm_list_scripts` | List available scripts by type |
| `acm_read_script` | Read script content |
| `acm_save_script` | Save/update scripts |
| `acm_delete_scripts` | Delete scripts |

### Execution History

| Tool | Description |
|------|-------------|
| `acm_list_executions` | View execution history |
| `acm_execution_details` | Get execution details |

### Utilities

| Tool | Description |
|------|-------------|
| `acm_code_assist` | Get code completion and snippets |
| `acm_state_info` | Get server state information |

---

## Step 7: Example Workflows

### Workflow 1: Execute Simple Code

```
# Ask Claude:
"Execute Groovy code on AEM that prints all pages under /content/site"
```

Claude will use `acm_execute_code` to run:
```groovy
repo.traverse('/content/site') { page ->
    out.println page.path
}
```

### Workflow 2: Bulk Content Update

```
# Ask Claude:
"Update all pages under /content/site/en/products to change the old price 
to the new price in the product data"
```

### Workflow 3: Script Management

```
# Ask Claude:
"List all manual scripts in ACM and show me the content of 'update-meta'"
```

### Workflow 4: Code Assistance

```
# Ask Claude:
"Show me code snippets for traversing content pages in AEM"
```

---

## Step 8: Security Considerations

- **Authentication**: The MCP server respects AEM's authentication
- **Authorization**: Operations execute with the authenticated user's permissions
- **Service User**: A dedicated service user (`acm-mcp-service`) handles internal operations
- **Access Control**: Configure `allowedUsers` to restrict access

---

## Troubleshooting

### Connection Refused

```bash
# Verify AEM is running
curl -s -u "admin:admin" "http://localhost:4502/libs/granite/security/currentuser.json"

# Check MCP endpoint
curl -s -u "admin:admin" "http://localhost:4502/apps/acm/mcp/endpoint.json"
```

### Authentication Errors

- Verify credentials are correct
- Check Base64 encoding for Authorization header
- Ensure user has ACM permissions

### Timeout Issues

Increase timeout in OSGi config:
```
executionTimeout = 600
```

---

## Next Steps

- **Lab 1**: Setting up AEM MCP Server (npm-based)
- **Lab 2**: Using Experience Production Agent
- **Lab 3**: Claude Code Skills for AEM
- Explore [ACM Documentation](https://github.com/wttech/acm)

---

## Resources

- [ACM GitHub](https://github.com/wttech/acm) - Main project
- [ACM MCP Server README](../acm/mcp.server/README.md) - Technical details
- [MCP Protocol Documentation](https://modelcontextprotocol.io/)
- [AdaptTo 2025 Talk](https://adapt.to/2025/schedule/cant-we-just-automate-this-permissions-and-content-updates-as-a-code-with-acm-tool)
