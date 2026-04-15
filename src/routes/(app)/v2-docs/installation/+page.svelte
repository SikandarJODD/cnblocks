<script lang="ts">
	import SEOComponent from "$lib/seo/SEO.svelte";
	import DocsPageShell from "$lib/components/layout/DocsPageShell.svelte";
	import {
		H2,
		Paragraph,
		Steps,
		Step,
		Link,
	} from "$lib/components/markdown/index";
	import { docsV2PageMap } from "$lib/config/docs-v2";
	import DocsCodeBlock from "$lib/web/docs/DocsCodeBlock.svelte";

	const pageMeta = docsV2PageMap.installation;

	const variantCards = [
		{
			label: "Default",
			title: "50+ Components - Default Variant",
			description:
				"Balanced, production-ready UI blocks for general SaaS and marketing pages.",
			linkText: "Browse default previews",
			href: "/preview/hero/one",
			accent: "from-emerald-500/20 via-emerald-500/5 to-transparent",
		},
		{
			label: "Mist",
			title: "50+ Components - Mist Variant",
			description:
				"Minimal, content-first sections for documentation-heavy pages and clean layouts.",
			linkText: "Open Mist setup guide",
			href: "/v2-docs/mist-theme",
			accent: "from-sky-500/20 via-sky-500/5 to-transparent",
		},
		{
			label: "Veil",
			title: "50+ Components - Veil Variant",
			description:
				"Modern, high-contrast blocks tailored for product storytelling and launch pages.",
			linkText: "Open Veil setup guide",
			href: "/v2-docs/veil-theme",
			accent: "from-amber-500/20 via-amber-500/5 to-transparent",
		},
	];
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
		<H2 id="steps">Setup Steps</H2>
		<Steps>
			<Step title="Create or open a sveltekit project">
				<DocsCodeBlock fileName="Terminal" code="pnpm dlx sv create my-app" lang="bash" />
			</Step>
			<Step title="Add Tailwind CSS">
				<DocsCodeBlock fileName="Terminal" code="pnpm dlx sv add tailwindcss" lang="bash" />
			</Step>
			<Step title="Initialize shadcn-svelte">
				<DocsCodeBlock
					fileName="Terminal"
					code="pnpm dlx shadcn-svelte@latest init"
					lang="bash"
				/>
			</Step>
			<Step title="Install block using shadcn-svelte CLI">
				<DocsCodeBlock
					fileName="Terminal"
					code={`pnpm dlx shadcn-svelte@latest add https://sv-blocks.vercel.app/r/hero-one.json
pnpm dlx shadcn-svelte@latest add https://sv-blocks.vercel.app/m/mist-hero-one.json
pnpm dlx shadcn-svelte@latest add https://sv-blocks.vercel.app/v/veil-hero-one.json`}
					lang="bash"
				/>
			</Step>
			<Step title="Or simply copy and paste components">
				<Paragraph class="mt-0">
					Open any preview route, copy the component code, and paste it into your app.
					Start with <Link href="/preview/hero/one">Hero Block</Link>, <Link
						href="/preview/mist/hero/one">Mist</Link
					>, or <Link href="/preview/veil/hero/hero-one">Veil</Link>.
				</Paragraph>
			</Step>
		</Steps>
	</section>
</DocsPageShell>
