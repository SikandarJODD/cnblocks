import { projectUrl } from "#lib/config/seo.js";
import type { RequestHandler } from "./$types.js";

export const prerender = true;

const content = `# Svelte Marketing Blocks

> Svelte Marketing Blocks is a collection of responsive, accessible, copy-ready website sections for SvelteKit. It includes heroes, features, pricing tables, testimonials, calls to action, authentication screens, and other common marketing UI.

The blocks are built with Svelte 5, Tailwind CSS v4, and shadcn-svelte. They are distributed through shadcn-compatible JSON registries and copied into the user's project, where the source code can be edited without depending on a component package. The project currently includes 230 published blocks across four visual variants: Kit, Mist, Veil, and Dusk.

## Variants

| Variant | Blocks | Design direction | Browse |
| --- | ---: | --- | --- |
| Kit | 81 | Versatile marketing sections with bold layouts and flexible styling. | [Browse Kit](${projectUrl}/kit/hero) |
| Mist | 51 | Clean, restrained sections for product, marketing, and documentation sites. | [Browse Mist](${projectUrl}/mist/hero) |
| Veil | 60 | Refined SaaS sections with warm colors, rounded controls, and polished details. | [Browse Veil](${projectUrl}/veil/hero) |
| Dusk | 38 | Zinc-based marketing blocks with dedicated UI primitives. | [Browse Dusk](${projectUrl}/dusk/hero) |

## Dusk categories

- [Heroes (10)](${projectUrl}/dusk/hero)
- [Features (7)](${projectUrl}/dusk/features)
- [Content (3)](${projectUrl}/dusk/content)
- [Integrations (1)](${projectUrl}/dusk/integration)
- [Stats (2)](${projectUrl}/dusk/stats)
- [Calls to action (2)](${projectUrl}/dusk/call-to-action)
- [Pricing (2)](${projectUrl}/dusk/pricing)
- [Testimonials (2)](${projectUrl}/dusk/testimonials)
- [Team (2)](${projectUrl}/dusk/team)
- [Logo clouds (4)](${projectUrl}/dusk/logo-cloud)
- [FAQs (1)](${projectUrl}/dusk/faqs)
- [Footers (2)](${projectUrl}/dusk/footer)

## Documentation

- [Installation](${projectUrl}/docs/installation.md): Prepare a SvelteKit project, configure Tailwind CSS and shadcn-svelte, and install blocks from any collection.
- [Mist theme setup](${projectUrl}/docs/mist-theme.md): Install Mist's clean, documentation-inspired design tokens and required UI primitives.
- [Veil theme setup](${projectUrl}/docs/veil-theme.md): Install Veil's warm, polished design tokens, typography, and required UI primitives.
- [Dusk theme setup](${projectUrl}/docs/dusk-theme.md): Install Dusk's Zinc-based theme tokens and dedicated UI primitives.
- [MCP server setup](${projectUrl}/docs/mcp.md): Connect the jsrepo MCP server to AI coding tools such as Cursor or Windsurf for registry discovery and installation.

## Registries

- [Kit registry](${projectUrl}/r/index.json): General-purpose marketing blocks with a flexible, neutral visual style.
- [Mist registry](${projectUrl}/m/index.json): Clean, structured marketing blocks with a documentation-inspired visual style.
- [Veil registry](${projectUrl}/v/index.json): Refined marketing blocks with warm neutral colors, rounded controls, and serif accents.
- [Dusk registry](${projectUrl}/d/index.json): Zinc-based marketing blocks with dedicated button, card, input, and label primitives.

## Human-readable website

- [Home](${projectUrl}): Project overview and featured collections.
- [Documentation](${projectUrl}/docs): Human-readable guides and setup instructions.

## Open source and license

Svelte Marketing Blocks is free and open source under the MIT License. The blocks may be used, copied, modified, merged, published, distributed, sublicensed, and sold in personal or commercial projects, subject to the license terms.

- [Source code](https://github.com/SikandarJODD/cnblocks)
- [MIT License](https://github.com/SikandarJODD/cnblocks/blob/main/LICENSE)
`;

export const GET: RequestHandler = () =>
	new Response(content, {
		headers: {
			"cache-control": "public, max-age=0, s-maxage=86400",
			"content-type": "text/plain; charset=utf-8",
		},
	});
