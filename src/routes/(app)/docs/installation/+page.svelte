<script lang="ts">
	import { page } from "$app/state";
	import { H1, H2, Link, Paragraph, Steps, Step } from "#lib/components/markdown/index.js";
	import { FrameCode, type CodeBlock } from "#lib/components/ui/code/index.ts";
	import { docsV2PageMap } from "#lib/config/docs-v2.js";
	import { JsonLd, MetaTags } from "svelte-meta-tags";

	const pageMeta = docsV2PageMap.installation;
	const title = "Installation | Svelte Marketing Blocks";
	const description =
		"Install and configure Svelte Shadcn Blocks in a new or existing SvelteKit app.";

	let canonical = $derived(`${page.url.origin}${page.url.pathname}`);
	let socialImage = $derived(`${page.url.origin}/og.png`);

	const commands = {
		createProject: {
			filename: "Terminal",
			filecode: "pnpm dlx sv create my-app",
			lang: "bash",
			hideLines: true,
		},
		addTailwind: {
			filename: "Terminal",
			filecode: "pnpm dlx sv add tailwindcss",
			lang: "bash",
			hideLines: true,
		},
		initializeShadcn: {
			filename: "Terminal",
			filecode: "pnpm dlx shadcn-svelte@latest init",
			lang: "bash",
			hideLines: true,
		},
		installBlock: {
			filename: "Terminal",
			filecode: `pnpm dlx shadcn-svelte@latest add https://sv-blocks.vercel.app/r/hero-one.json
pnpm dlx shadcn-svelte@latest add https://sv-blocks.vercel.app/m/hero-one.json
pnpm dlx shadcn-svelte@latest add https://sv-blocks.vercel.app/v/hero-one.json`,
			lang: "bash",
			hideLines: true,
		},
	} satisfies Record<string, CodeBlock>;
</script>

<MetaTags
	{title}
	{description}
	{canonical}
	keywords={pageMeta.seo.keywords}
	robots="index,follow"
	additionalRobotsProps={{ maxSnippet: -1, maxImagePreview: "large", maxVideoPreview: -1 }}
	openGraph={{
		type: "website",
		url: canonical,
		title,
		description,
		siteName: "Svelte Marketing Blocks",
		images: [
			{
				url: socialImage,
				width: 1200,
				height: 630,
				alt: "Svelte Marketing Blocks installation guide",
			},
		],
	}}
	twitter={{
		cardType: "summary_large_image",
		site: "@Sikandar_Bhide",
		creator: "@Sikandar_Bhide",
		title,
		description,
		image: socialImage,
		imageAlt: "Svelte Marketing Blocks installation guide",
	}}
/>

<JsonLd
	schema={{
		"@type": "WebPage",
		name: title,
		description,
		url: canonical,
		isPartOf: {
			"@type": "WebSite",
			name: "Svelte Marketing Blocks",
			url: page.url.origin,
		},
	}}
/>

<div class="mx-auto w-full max-w-3xl px-5 py-8 sm:px-8 sm:py-12">
	<article class="min-w-0 space-y-12">
		<header class="space-y-3">
			<H1
				id="installation"
				class="font-gmono text-3xl font-normal tracking-tight sm:text-4xl"
			>
				Installation
			</H1>
			<Paragraph class="max-w-prose text-lg leading-relaxed text-pretty">
				{description}
			</Paragraph>
		</header>

		<section class="space-y-4">
			<H2 id="steps" class="font-gmono font-normal">Setup Steps</H2>
			<Steps>
				<Step title="Create or open a sveltekit project">
					<FrameCode code={commands.createProject} />
				</Step>
				<Step title="Add Tailwind CSS">
					<FrameCode code={commands.addTailwind} />
				</Step>
				<Step title="Initialize shadcn-svelte">
					<FrameCode code={commands.initializeShadcn} />
				</Step>
				<Step title="Install block using shadcn-svelte CLI">
					<FrameCode code={commands.installBlock} />
				</Step>
				<Step title="Or simply copy and paste components">
					<Paragraph class="mt-0">
						Copy a component from its preview and paste it into your app.
					</Paragraph>
				</Step>
			</Steps>
		</section>

		<section class="space-y-3">
			<H2 id="whats-next" class="font-gmono font-normal">What’s next?</H2>
			<Paragraph class="max-w-prose leading-relaxed">
				Explore the <Link href="/kit/hero">Kit blocks</Link>, or continue with the <Link
					href="/docs/mist-theme">Mist theme setup</Link
				> or <Link href="/docs/veil-theme">Veil theme setup</Link>.
			</Paragraph>
		</section>
	</article>
</div>
