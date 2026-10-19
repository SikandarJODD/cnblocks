# MCP Server Setup

The jsrepo MCP server lets compatible AI coding tools discover and install registry items.

## Cursor

Create or update `.cursor/mcp.json`:

```json
{
  "mcpServers": {
    "jsrepo": {
      "command": "npx",
      "args": ["jsrepo", "mcp"]
    }
  }
}
```

Restart Cursor after changing the configuration.

## Windsurf

Create or update `.codeium/windsurf/mcp_config.json`:

```json
{
  "mcpServers": {
    "jsrepo": {
      "command": "npx",
      "args": ["jsrepo", "mcp"]
    }
  }
}
```

Restart Windsurf after changing the configuration.

## Run the server directly

```bash
npm install --global jsrepo
jsrepo mcp
```

Registry indexes:

- Kit: https://sv-blocks.vercel.app/r/index.json
- Mist: https://sv-blocks.vercel.app/m/index.json
- Veil: https://sv-blocks.vercel.app/v/index.json

