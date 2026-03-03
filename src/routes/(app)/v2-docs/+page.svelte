<script lang="ts">
	import SEOComponent from "$lib/seo/SEO.svelte";
	import DocsPageShell from "$lib/components/layout/DocsPageShell.svelte";
	import {
		H2,
		H3,
		Paragraph,
		Strong,
		UnorderedList,
		ListItem,
		Table,
		Thead,
		Tbody,
		Tr,
		Th,
		Td,
		Link,
	} from "$lib/components/markdown/index";
	import { docsV2PageMap } from "$lib/config/docs-v2";

	const pageMeta = docsV2PageMap.introduction;
</script>

<SEOComponent
	title={pageMeta.seo.title}
	description={pageMeta.seo.description}
	keywords={pageMeta.seo.keywords}
/>

<DocsPageShell title="Introduction" description="Everything you need to start using Svelte Shadcn Blocks." showToc={pageMeta.toc}>
	<section class="space-y-4">
		<H2 id="overview">Overview</H2>
		<Paragraph>
			Svelte Shadcn Blocks ships production-ready UI blocks built with <Strong>Svelte 5</Strong>,
			shadcn-svelte primitives, and Tailwind CSS v4.
		</Paragraph>
		<Paragraph>
			The new docs v2 focuses on better navigation, predictable route structure, and consistent
			content composition through markdown components.
		</Paragraph>
	</section>

	<section class="space-y-4">
		<H2 id="variants">Available Variants</H2>
		<Table>
			<Thead>
				<Tr>
					<Th>Variant</Th>
					<Th>Style</Th>
					<Th>Best For</Th>
				</Tr>
			</Thead>
			<Tbody>
				<Tr>
					<Td>Normal</Td>
					<Td>Bold marketing visuals</Td>
					<Td>Landing pages and campaigns</Td>
				</Tr>
				<Tr>
					<Td>Mist</Td>
					<Td>Minimal and documentation friendly</Td>
					<Td>Content-heavy product websites</Td>
				</Tr>
				<Tr>
					<Td>Veil</Td>
					<Td>Polished modern SaaS look</Td>
					<Td>Startup and product pages</Td>
				</Tr>
			</Tbody>
		</Table>
	</section>

	<section class="space-y-4">
		<H2 id="quick-start">Quick Start</H2>
		<UnorderedList>
			<ListItem>Go to the installation guide and set up base dependencies.</ListItem>
			<ListItem>Pick your preferred theme setup flow (Mist or Veil).</ListItem>
			<ListItem>Use MCP docs if you want AI-assisted block installation workflows.</ListItem>
		</UnorderedList>
		<Paragraph>
			Start with <Link href="/v2-docs/installation">Installation</Link> and continue with the
			theme setup that matches your project.
		</Paragraph>
	</section>

	<section class="space-y-4">
		<H2 id="documentation-map">Documentation Map</H2>
		<H3 id="guide">Guide</H3>
		<Paragraph>Introduction and installation paths for first-time setup.</Paragraph>
		<H3 id="theme-setup">Theme Setup</H3>
		<Paragraph>Dedicated setup pages for Mist and Veil themes.</Paragraph>
		<H3 id="resources">Resources</H3>
		<Paragraph>Reference pages like MCP integration and sponsor/community links.</Paragraph>
	</section>
</DocsPageShell>
