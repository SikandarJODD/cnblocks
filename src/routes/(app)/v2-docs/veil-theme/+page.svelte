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
		Table,
		Thead,
		Tbody,
		Tr,
		Th,
		Td,
	} from "$lib/components/markdown/index";
	import { docsV2PageMap } from "$lib/config/docs-v2";
	import DocsCodeBlock from "$lib/web/docs/DocsCodeBlock.svelte";

	const pageMeta = docsV2PageMap.veilTheme;
</script>

<SEOComponent
	title={pageMeta.seo.title}
	description={pageMeta.seo.description}
	keywords={pageMeta.seo.keywords}
/>

<DocsPageShell
	title="Veil Theme Setup"
	description="Configure the Veil variant for modern SaaS and startup landing pages."
	showToc={pageMeta.toc}
>
	<section class="space-y-4">
		<H2 id="when-to-use">When To Use Veil</H2>
		<Paragraph>
			Veil is designed for product positioning pages with stronger marketing sections and richer UI
			composition.
		</Paragraph>
	</section>

	<section class="space-y-4">
		<H2 id="setup-steps">Setup Steps</H2>
		<Steps>
			<Step title="Complete the base install">
				<Paragraph class="mt-0">
					Use the <Link href="/v2-docs/installation">Installation</Link> guide first.
				</Paragraph>
			</Step>
			<Step title="Install a Veil block">
				<DocsCodeBlock
					fileName="Terminal"
					code="npx jsrepo add @sv/cnblocks/veil-hero-one"
					lang="bash"
				/>
			</Step>
			<Step title="Add it to your page">
				<DocsCodeBlock
					fileName="+page.svelte"
					code={`<script>
  import VeilHeroOne from "$lib/components/veil/hero/hero-one.svelte";
<\/script>

<VeilHeroOne />`}
					lang="svelte"
				/>
			</Step>
		</Steps>
	</section>

	<section class="space-y-4">
		<H2 id="route-reference">Route Reference</H2>
		<Table>
			<Thead>
				<Tr>
					<Th>Route</Th>
					<Th>Purpose</Th>
				</Tr>
			</Thead>
			<Tbody>
				<Tr>
					<Td>/veil</Td>
					<Td>Primary Veil showcase page</Td>
				</Tr>
				<Tr>
					<Td>/preview/veil/*</Td>
					<Td>Individual block previews</Td>
				</Tr>
				<Tr>
					<Td>/v2-docs/veil-theme</Td>
					<Td>Theme setup and usage documentation</Td>
				</Tr>
			</Tbody>
		</Table>
		<H3 id="next-step">Next Step</H3>
		<Paragraph>
			Once setup is done, continue with <Link href="/v2-docs/mcp">MCP Server docs</Link> to speed
			up component discovery and installation in AI IDE workflows.
		</Paragraph>
	</section>
</DocsPageShell>
