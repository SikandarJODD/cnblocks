<script lang="ts">
	import SEOComponent from "$lib/seo/SEO.svelte";
	import DocsPageShell from "$lib/components/layout/DocsPageShell.svelte";
	import {
		H2,
		H3,
		Paragraph,
		Steps,
		Step,
		Link,
		Blockquote,
		Divider,
	} from "$lib/components/markdown/index";
	import { docsV2PageMap } from "$lib/config/docs-v2";
	import DocsCodeBlock from "$lib/web/docs/DocsCodeBlock.svelte";

	const pageMeta = docsV2PageMap.mcp;
</script>

<SEOComponent
	title={pageMeta.seo.title}
	description={pageMeta.seo.description}
	keywords={pageMeta.seo.keywords}
/>

<DocsPageShell
	title="MCP Server"
	description="Set up jsrepo MCP server for Cursor and Windsurf workflows."
>
	<!-- <section class="space-y-4">
		<H2 id="overview">Overview</H2>
		<Paragraph>
			Use MCP with jsrepo to make block discovery and installation easier in AI IDEs like
			Cursor and Windsurf.
		</Paragraph>
		<Paragraph>
			Reference:{" "}
			<Link
				href="https://jsrepo.dev/docs/registry/mcp"
				target="_blank"
				rel="noopener noreferrer"
			>
				jsrepo MCP docs
			</Link>
		</Paragraph>
	</section> -->

	<section class="space-y-4">
		<H2 id="cursor-setup">Cursor Setup</H2>
		<Steps>
			<Step title="Create or update `.cursor/mcp.json`">
				<DocsCodeBlock
					fileName=".cursor/mcp.json"
					code={`{
  "mcpServers": {
    "jsrepo": {
      "command": "npx",
      "args": ["jsrepo", "mcp"]
    }
  }
}`}
					lang="json"
				/>
			</Step>
		</Steps>
	</section>

	<section class="space-y-4">
		<H2 id="windsurf-setup">Windsurf Setup</H2>
		<Steps>
			<Step title="Create or update `.codeium/windsurf/mcp_config.json`">
				<DocsCodeBlock
					fileName=".codeium/windsurf/mcp_config.json"
					code={`{
  "mcpServers": {
    "jsrepo": {
      "command": "npx",
      "args": ["jsrepo", "mcp"]
    }
  }
}`}
					lang="json"
				/>
			</Step>
		</Steps>
	</section>

	<Divider />

	<section>
		<H2 id="run-server" class="mb-2">Run MCP Server</H2>
		<DocsCodeBlock
			fileName="Terminal"
			code={`npm install -g jsrepo
jsrepo mcp`}
			lang="bash"
		/>
	</section>
</DocsPageShell>
