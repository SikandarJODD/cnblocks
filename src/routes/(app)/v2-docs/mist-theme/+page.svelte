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
		UnorderedList,
		ListItem,
		Strong,
	} from "$lib/components/markdown/index";
	import { docsV2PageMap } from "$lib/config/docs-v2";
	import DocsCodeBlock from "$lib/web/docs/DocsCodeBlock.svelte";

	const pageMeta = docsV2PageMap.mistTheme;
</script>

<SEOComponent
	title={pageMeta.seo.title}
	description={pageMeta.seo.description}
	keywords={pageMeta.seo.keywords}
/>

<DocsPageShell
	title="Mist Theme Setup"
	description="Configure the Mist variant for minimal, content-focused documentation and marketing pages."
	showToc={pageMeta.toc}
>
	<section class="space-y-4">
		<H2 id="goal">Goal</H2>
		<Paragraph>
			The Mist variant is optimized for clean typography, simpler contrast, and content-heavy
			layouts. Use it when your page copy is the primary focus.
		</Paragraph>
	</section>

	<section class="space-y-4">
		<H2 id="setup-flow">Setup Flow</H2>
		<Steps>
			<Step title="Complete base installation">
				<Paragraph class="mt-0">
					Finish <Link href="/v2-docs/installation">Installation</Link> before this section.
				</Paragraph>
			</Step>
			<Step title="Install a Mist block">
				<DocsCodeBlock
					fileName="Terminal"
					code="npx jsrepo add @sv/cnblocks/mist-hero-one"
					lang="bash"
				/>
			</Step>
			<Step title="Render Mist components in your page">
				<DocsCodeBlock
					fileName="+page.svelte"
					code={`<script>
  import MistHeroOne from "$lib/components/mist/mhero/one.svelte";
<\/script>

<MistHeroOne />`}
					lang="svelte"
				/>
			</Step>
		</Steps>
	</section>

	<section class="space-y-4">
		<H2 id="best-practices">Best Practices</H2>
		<H3 id="content-first">Content First</H3>
		<UnorderedList>
			<ListItem>Use shorter visual sections and longer narrative copy blocks.</ListItem>
			<ListItem>Prefer generous whitespace and restrained accent usage.</ListItem>
			<ListItem>Keep typography scale consistent across docs pages.</ListItem>
		</UnorderedList>
		<Paragraph>
			For examples, inspect components under <Strong>`$lib/components/mist`</Strong> and static docs
			text under <Strong>`/static/docs/mist`</Strong>.
		</Paragraph>
	</section>
</DocsPageShell>
