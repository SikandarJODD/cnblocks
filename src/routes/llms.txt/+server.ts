import { projectUrl } from "#lib/config/seo.js";
import type { RequestHandler } from "./$types.js";

export const prerender = true;

const content = `# Svelte Marketing Blocks

> Reusable Svelte 5 marketing blocks built with Tailwind CSS and shadcn-svelte. Blocks are copied into the user's project and can be edited directly.

## Documentation

- [Installation](${projectUrl}/docs/installation.md): Create a project and install Kit, Mist, or Veil blocks.
- [Mist theme](${projectUrl}/docs/mist-theme.md): Install and use the Mist theme.
- [Veil theme](${projectUrl}/docs/veil-theme.md): Install and use the Veil theme.
- [MCP server](${projectUrl}/docs/mcp.md): Configure the jsrepo MCP server for AI coding tools.

## Registries

- [Kit registry](${projectUrl}/r/index.json): Core marketing blocks.
- [Mist registry](${projectUrl}/m/index.json): Mist-themed marketing blocks.
- [Veil registry](${projectUrl}/v/index.json): Veil-themed marketing blocks.

## Human-readable website

- [Home](${projectUrl})
- [Documentation](${projectUrl}/docs)
`;

export const GET: RequestHandler = () =>
	new Response(content, {
		headers: {
			"cache-control": "public, max-age=0, s-maxage=86400",
			"content-type": "text/plain; charset=utf-8",
		},
	});

