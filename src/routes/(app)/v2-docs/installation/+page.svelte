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
					Open any preview route, copy the component markup, and paste it into your app.
					Start with <Link href="/preview/hero/one">Default</Link>, <Link
						href="/preview/mist/hero/one">Mist</Link
					>, or <Link href="/preview/veil/hero/hero-one">Veil</Link>.
				</Paragraph>
			</Step>
		</Steps>
	</section>

	<section class="space-y-4">
		<H2 id="variants">Variant Packs</H2>
		<Paragraph>
			Each pack includes 50+ ready-to-use components. Choose one style direction or mix them
			based on your page needs.
		</Paragraph>
		<div class="grid gap-4 md:grid-cols-3">
			{#each variantCards as card}
				<article
					class="group relative overflow-hidden rounded-2xl border border-border/70 bg-card p-5 shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg"
				>
					<div
						class={`pointer-events-none absolute inset-0 bg-linear-to-br ${card.accent}`}
					></div>
					<div class="relative z-10 space-y-4">
						<span
							class="inline-flex rounded-full border border-border/80 bg-background/80 px-2.5 py-1 text-xs font-medium text-muted-foreground"
						>
							{card.label}
						</span>
						<div class="space-y-2">
							<h3
								class="text-base leading-snug font-semibold tracking-tight text-foreground"
							>
								{card.title}
							</h3>
							<p class="text-sm leading-relaxed text-muted-foreground">
								{card.description}
							</p>
						</div>
						<a
							href={card.href}
							class="inline-flex text-sm font-medium text-primary underline-offset-4 transition-colors hover:underline"
						>
							{card.linkText}
						</a>
					</div>
				</article>
			{/each}
		</div>
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
