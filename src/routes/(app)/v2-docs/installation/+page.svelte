<script lang="ts">
	import SEOComponent from "$lib/seo/SEO.svelte";
	import DocsPageShell from "$lib/components/layout/DocsPageShell.svelte";
	import {
		H2,
		H3,
		Paragraph,
		Steps,
		Step,
		Strong,
		Blockquote,
		Table,
		Thead,
		Tbody,
		Tr,
		Th,
		Td,
	} from "$lib/components/markdown/index";
	import { docsV2PageMap } from "$lib/config/docs-v2";
	import DocsCodeBlock from "$lib/web/docs/DocsCodeBlock.svelte";

	const pageMeta = docsV2PageMap.installation;
</script>

<SEOComponent
	title={pageMeta.seo.title}
	description={pageMeta.seo.description}
	keywords={pageMeta.seo.keywords}
/>

<DocsPageShell
	title="Installation"
	description="Install and configure Svelte Shadcn Blocks in a new or existing SvelteKit app."
>
	<section class="space-y-4">
		<H2 id="requirements">Requirements</H2>
		<Table>
			<Thead>
				<Tr>
					<Th>Requirement</Th>
					<Th>Minimum</Th>
					<Th>Notes</Th>
				</Tr>
			</Thead>
			<Tbody>
				<Tr>
					<Td>Node.js</Td>
					<Td>18+</Td>
					<Td>Recommended: current LTS</Td>
				</Tr>
				<Tr>
					<Td>Package Manager</Td>
					<Td>pnpm/npm/yarn</Td>
					<Td>Examples use pnpm and npx</Td>
				</Tr>
				<Tr>
					<Td>SvelteKit</Td>
					<Td>2.x</Td>
					<Td>Project should already build successfully</Td>
				</Tr>
			</Tbody>
		</Table>
	</section>

	<section class="space-y-4">
		<H2 id="steps">Setup Steps</H2>
		<Steps>
			<Step title="Create or open a SvelteKit project">
				<DocsCodeBlock fileName="Terminal" code="npx sv create my-app" lang="bash" />
			</Step>
			<Step title="Add Tailwind CSS">
				<DocsCodeBlock fileName="Terminal" code="npx sv add tailwindcss" lang="bash" />
			</Step>
			<Step title="Initialize shadcn-svelte">
				<DocsCodeBlock fileName="Terminal" code="npx shadcn-svelte@next init" lang="bash" />
			</Step>
			<Step title="Install a block with jsrepo">
				<DocsCodeBlock
					fileName="Terminal"
					code="npx jsrepo add @sv/cnblocks/hero-one"
					lang="bash"
				/>
			</Step>
		</Steps>
	</section>

	<section class="space-y-4">
		<H2 id="verification">Verification</H2>
		<H3 id="check-imports">Check Imports</H3>
		<Paragraph>
			After installation, import the generated component and ensure your app compiles without
			type errors.
		</Paragraph>
		<Blockquote>
			If installation fails, verify your shadcn-svelte init completed first. Most issues come
			from missing base UI setup.
		</Blockquote>
		<Paragraph>
			Use this route as your baseline before following <Strong>Mist</Strong> or <Strong
				>Veil</Strong
			>{" "}
			theme-specific setup.
		</Paragraph>
	</section>
</DocsPageShell>
