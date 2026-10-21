<script lang="ts">
	import { page } from "$app/state";
	import DuskButtonCode from "#lib/components/ui/dusk/button/button.svelte?raw";
	import DuskButtonIndexCode from "#lib/components/ui/dusk/button/index.ts?raw";
	import DuskCardActionCode from "#lib/components/ui/dusk/card/card-action.svelte?raw";
	import DuskCardContentCode from "#lib/components/ui/dusk/card/card-content.svelte?raw";
	import DuskCardDescriptionCode from "#lib/components/ui/dusk/card/card-description.svelte?raw";
	import DuskCardFooterCode from "#lib/components/ui/dusk/card/card-footer.svelte?raw";
	import DuskCardHeaderCode from "#lib/components/ui/dusk/card/card-header.svelte?raw";
	import DuskCardTitleCode from "#lib/components/ui/dusk/card/card-title.svelte?raw";
	import DuskCardCode from "#lib/components/ui/dusk/card/card.svelte?raw";
	import DuskCardIndexCode from "#lib/components/ui/dusk/card/index.ts?raw";
	import DuskInputCode from "#lib/components/ui/dusk/input/input.svelte?raw";
	import DuskInputIndexCode from "#lib/components/ui/dusk/input/index.ts?raw";
	import DuskLabelCode from "#lib/components/ui/dusk/label/label.svelte?raw";
	import DuskLabelIndexCode from "#lib/components/ui/dusk/label/index.ts?raw";
	import Code from "#lib/components/ui/code/code.svelte";
	import { CodeFiles, FrameCode, type CodeBlock } from "#lib/components/ui/code/index.js";
	import { PMCommand } from "#lib/components/ui/pm-command/index.js";
	import { H1, H2, H3, Link, Paragraph } from "#lib/components/markdown/index.js";
	import { docsV2PageMap } from "#lib/config/docs-v2.js";
	import { projectUrl } from "#lib/config/seo.js";
	import { JsonLd, MetaTags } from "svelte-meta-tags";

	const pageMeta = docsV2PageMap.duskTheme;
	const title = "Dusk Theme Setup | Svelte Marketing Blocks";
	const description =
		"Set up the Zinc-based Dusk theme and its button, card, input, and label primitives for Svelte applications.";

	let canonical = $derived(`${projectUrl}${page.url.pathname}`);
	let socialImage = $derived(`${projectUrl}/og.png`);

	const folderStructure = `src/
├── lib/
│   └── components/
│       └── ui/
│           └── dusk/
│               ├── button/
│               ├── card/
│               ├── input/
│               └── label/
└── routes/
    ├── layout.css
    └── themes.css`;

	const buttonSourceCode = [
		{ filename: "button.svelte", lang: "svelte", filecode: DuskButtonCode },
		{ filename: "index.ts", lang: "typescript", filecode: DuskButtonIndexCode },
	] satisfies CodeBlock[];

	const cardSourceCode = [
		{ filename: "card.svelte", lang: "svelte", filecode: DuskCardCode },
		{ filename: "card-action.svelte", lang: "svelte", filecode: DuskCardActionCode },
		{ filename: "card-content.svelte", lang: "svelte", filecode: DuskCardContentCode },
		{
			filename: "card-description.svelte",
			lang: "svelte",
			filecode: DuskCardDescriptionCode,
		},
		{ filename: "card-footer.svelte", lang: "svelte", filecode: DuskCardFooterCode },
		{ filename: "card-header.svelte", lang: "svelte", filecode: DuskCardHeaderCode },
		{ filename: "card-title.svelte", lang: "svelte", filecode: DuskCardTitleCode },
		{ filename: "index.ts", lang: "typescript", filecode: DuskCardIndexCode },
	] satisfies CodeBlock[];

	const inputSourceCode = [
		{ filename: "input.svelte", lang: "svelte", filecode: DuskInputCode },
		{ filename: "index.ts", lang: "typescript", filecode: DuskInputIndexCode },
	] satisfies CodeBlock[];

	const labelSourceCode = [
		{ filename: "label.svelte", lang: "svelte", filecode: DuskLabelCode },
		{ filename: "index.ts", lang: "typescript", filecode: DuskLabelIndexCode },
	] satisfies CodeBlock[];
</script>

<svelte:head>
	<link rel="alternate" type="text/markdown" href="/docs/dusk-theme.md" title="Markdown" />
</svelte:head>

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
				alt: "Dusk theme setup for Svelte Marketing Blocks",
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
		imageAlt: "Dusk theme setup for Svelte Marketing Blocks",
	}}
/>

<JsonLd
	schema={{
		"@type": "TechArticle",
		headline: title,
		description,
		url: canonical,
		isPartOf: {
			"@type": "WebSite",
			name: "Svelte Marketing Blocks",
			url: projectUrl,
		},
	}}
/>

<div class="mx-auto w-full max-w-3xl px-5 py-8 sm:px-8 sm:py-12">
	<article
		class="min-w-0 space-y-12 [&_h2]:font-gmono [&_h2]:font-normal [&_h3]:font-gmono [&_h3]:font-normal"
	>
		<header class="space-y-3">
			<H1
				id="dusk-theme-setup"
				class="font-gmono text-3xl font-normal tracking-tight sm:text-4xl"
			>
				Dusk Theme Setup
			</H1>
			<Paragraph class="max-w-prose text-lg leading-relaxed text-pretty">
				{description}
			</Paragraph>
		</header>

		<section class="border-b border-dashed border-ink/30 pb-12 dark:border-muted">
			<H2 id="install-with-cli">Install with CLI</H2>
			<Paragraph class="mt-1 mb-6 max-w-prose text-muted-foreground">
				Install the Dusk Zinc tokens and all required UI primitives with the shadcn-svelte CLI.
			</Paragraph>
			<PMCommand
				command="execute"
				variant="secondary"
				args={["shadcn-svelte@latest", "add", `${projectUrl}/d/dusk-theme.json`]}
			/>
			<Paragraph class="mt-4 max-w-prose text-sm text-muted-foreground">
				Dusk uses the shadcn-svelte Zinc palette with Dusk-specific component styling. The CLI
				updates your main CSS variables; use the manual setup below to keep them scoped.
			</Paragraph>
		</section>

		<section>
			<H2 id="folder-structure">Folder structure</H2>
			<Paragraph class="mt-1 mb-6 text-muted-foreground">
				Keep every Dusk primitive under <code>ui/dusk</code>, and import
				<code>themes.css</code> from <code>layout.css</code>.
			</Paragraph>
			<Code
				code={folderStructure}
				lang="markdown"
				hideLines={true}
				class="rounded-none border-dashed border-ink/30 bg-transparent dark:border-emerald-400/40 [&_.shiki]:!text-ink/80 dark:[&_.shiki]:!text-emerald-400 [&_.shiki_span]:!text-ink/70 dark:[&_.shiki_span]:!text-emerald-400/80 [&_pre]:rounded-none"
			/>
		</section>

		<section>
			<H2 id="manual-setup">Manual setup</H2>
			<Paragraph class="mt-1 mb-6 text-muted-foreground">
				Add the Zinc-based Dusk variables to <code class="rounded-sm bg-secondary px-1"
					>themes.css</code
				>. These are the same tokens installed by the Dusk registry theme.
			</Paragraph>
			<FrameCode
				code={{
					filename: "themes.css",
					lang: "css",
					filecode: `[data-theme="dusk"] .theme-container {
	--radius: 0.625rem;
	--background: oklch(1 0 0);
	--foreground: oklch(0.141 0.005 285.823);
	--card: oklch(1 0 0);
	--card-foreground: oklch(0.141 0.005 285.823);
	--popover: oklch(1 0 0);
	--popover-foreground: oklch(0.141 0.005 285.823);
	--primary: oklch(0.21 0.006 285.885);
	--primary-foreground: oklch(0.985 0 0);
	--secondary: oklch(0.967 0.001 286.375);
	--secondary-foreground: oklch(0.21 0.006 285.885);
	--muted: oklch(0.967 0.001 286.375);
	--muted-foreground: oklch(0.552 0.016 285.938);
	--accent: oklch(0.967 0.001 286.375);
	--accent-foreground: oklch(0.21 0.006 285.885);
	--destructive: oklch(0.577 0.245 27.325);
	--border: oklch(0.92 0.004 286.32);
	--input: oklch(0.92 0.004 286.32);
	--ring: oklch(0.705 0.015 286.067);

	@variant dark {
		--background: oklch(0.141 0.005 285.823);
		--foreground: oklch(0.985 0 0);
		--card: oklch(0.21 0.006 285.885);
		--card-foreground: oklch(0.985 0 0);
		--popover: oklch(0.21 0.006 285.885);
		--popover-foreground: oklch(0.985 0 0);
		--primary: oklch(0.92 0.004 286.32);
		--primary-foreground: oklch(0.21 0.006 285.885);
		--secondary: oklch(0.274 0.006 286.033);
		--secondary-foreground: oklch(0.985 0 0);
		--muted: oklch(0.274 0.006 286.033);
		--muted-foreground: oklch(0.705 0.015 286.067);
		--accent: oklch(0.274 0.006 286.033);
		--accent-foreground: oklch(0.985 0 0);
		--destructive: oklch(0.704 0.191 22.216);
		--border: oklch(1 0 0 / 10%);
		--input: oklch(1 0 0 / 15%);
		--ring: oklch(0.552 0.016 285.938);
	}
}`,
				}}
			/>
		</section>

		<section>
			<H2 id="apply-theme">Apply Theme</H2>
			<Paragraph class="mt-1 mb-6 text-muted-foreground">
				Apply the Dusk scope and theme container at your application root.
			</Paragraph>
			<FrameCode
				code={{
					filename: "src/app.html",
					lang: "html",
					filecode: `<body data-theme="dusk" class="theme-container">
	<!-- Your Application -->
</body>`,
				}}
			/>
		</section>

		<section>
			<H2 id="required-components">Required Components</H2>
			<Paragraph class="mt-1 mb-6 text-muted-foreground">
				The Dusk registry keeps these four primitives isolated from your default shadcn-svelte
				components.
			</Paragraph>
			<div class="grid gap-3 sm:grid-cols-2">
				{#each [
					["Button", "#lib/components/ui/dusk/button"],
					["Card", "#lib/components/ui/dusk/card"],
					["Input", "#lib/components/ui/dusk/input"],
					["Label", "#lib/components/ui/dusk/label"],
				] as component}
					<div class="border border-dashed border-ink/30 p-4 dark:border-emerald-400/40">
						<div class="font-gmono">{component[0]}</div>
						<code class="text-xs text-muted-foreground">{component[1]}</code>
					</div>
				{/each}
			</div>
		</section>

		<section>
			<H2 id="button-component">Button Component</H2>
			<Paragraph class="mt-1 mb-6">
				Dusk uses rounded actions and includes neutral, ink, and marketing-oriented variants.
			</Paragraph>
			<div class="space-y-6">
				<div class="space-y-2">
					<H3 id="button-source">Source</H3>
					<CodeFiles files={buttonSourceCode} />
				</div>
				<div class="space-y-2">
					<H3 id="button-usage">Usage</H3>
					<CodeFiles
						files={[
							{
								filename: "button-usage.svelte",
								lang: "svelte",
								filecode: `\<\script lang="ts"\>
	import { Button } from "#lib/components/ui/dusk/button/index.js";
\<\/script\>

<Button>Get started</Button>
<Button variant="ink">View demo</Button>`,
							},
						]}
					/>
				</div>
			</div>
		</section>

		<section>
			<H2 id="card-component">Card Component</H2>
			<Paragraph class="mt-1 mb-6">
				Dusk cards provide default, soft, and mixed surfaces plus composable card sections.
			</Paragraph>
			<div class="space-y-6">
				<div class="space-y-2">
					<H3 id="card-source">Source</H3>
					<CodeFiles files={cardSourceCode} />
				</div>
				<div class="space-y-2">
					<H3 id="card-usage">Usage</H3>
					<CodeFiles
						files={[
							{
								filename: "card-usage.svelte",
								lang: "svelte",
								filecode: `\<\script lang="ts"\>
	import { Card, CardContent, CardHeader, CardTitle } from "#lib/components/ui/dusk/card/index.js";
\<\/script\>

<Card variant="soft">
	<CardHeader><CardTitle>Dusk card</CardTitle></CardHeader>
	<CardContent>...</CardContent>
</Card>`,
							},
						]}
					/>
				</div>
			</div>
		</section>

		<section>
			<H2 id="input-component">Input Component</H2>
			<Paragraph class="mt-1 mb-6">
				Dusk inputs cover text and file fields with matching focus, invalid, and disabled states.
			</Paragraph>
			<div class="space-y-6">
				<div class="space-y-2">
					<H3 id="input-source">Source</H3>
					<CodeFiles files={inputSourceCode} />
				</div>
				<div class="space-y-2">
					<H3 id="input-usage">Usage</H3>
					<CodeFiles
						files={[
							{
								filename: "input-usage.svelte",
								lang: "svelte",
								filecode: `\<\script lang="ts"\>
	import { Input } from "#lib/components/ui/dusk/input/index.js";
\<\/script\>

<Input type="email" placeholder="you@example.com" />
<Input type="file" />`,
							},
						]}
					/>
				</div>
			</div>
		</section>

		<section>
			<H2 id="label-component">Label Component</H2>
			<Paragraph class="mt-1 mb-6">
				Dusk labels pair with form controls and reflect disabled field states.
			</Paragraph>
			<div class="space-y-6">
				<div class="space-y-2">
					<H3 id="label-source">Source</H3>
					<CodeFiles files={labelSourceCode} />
				</div>
				<div class="space-y-2">
					<H3 id="label-usage">Usage</H3>
					<CodeFiles
						files={[
							{
								filename: "label-usage.svelte",
								lang: "svelte",
								filecode: `\<\script lang="ts"\>
	import { Label } from "#lib/components/ui/dusk/label/index.js";
\<\/script\>

<Label for="email">Email address</Label>`,
							},
						]}
					/>
				</div>
			</div>
		</section>

		<section class="space-y-3">
			<H2 id="whats-next">What’s next?</H2>
			<Paragraph class="max-w-prose leading-relaxed">
				Explore the <Link href="/dusk/hero">Dusk blocks</Link>, or compare the <Link
					href="/docs/mist-theme">Mist theme setup</Link
				> and <Link href="/docs/veil-theme">Veil theme setup</Link>.
			</Paragraph>
		</section>
	</article>
</div>
