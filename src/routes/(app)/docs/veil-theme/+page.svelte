<script lang="ts">
	import { page } from "$app/state";
	import Code from "#lib/components/ui/code/code.svelte";
	import { CodeFiles, FrameCode, type CodeBlock } from "#lib/components/ui/code/index.js";
	import { PMCommand } from "#lib/components/ui/pm-command/index.js";
	import { H1, H2, H3, Paragraph, Link } from "#lib/components/markdown/index.js";
	import { docsV2PageMap } from "#lib/config/docs-v2.js";
	import { projectUrl } from "#lib/config/seo.js";
	import { JsonLd, MetaTags } from "svelte-meta-tags";

	const pageMeta = docsV2PageMap.veilTheme;
	const title = "Veil Theme Setup | Svelte Marketing Blocks";
	const description =
		"Apply Veil theme tokens and update button, card, input, and textarea primitives for polished Svelte interfaces.";

	let canonical = $derived(`${projectUrl}${page.url.pathname}`);
	let socialImage = $derived(`${projectUrl}/og.png`);
	const folderStructure = `src/
├── lib/
│   └── components/
│       └── ui/
│           └── veil/
│               ├── button/
│               ├── card/
│               ├── input/
│               └── textarea/
└── routes/
    ├── layout.css
    └── themes.css`;

	const buttonSourceCode = [
		{
			filename: "button.svelte",
			lang: "svelte",
			filecode: `\<\script lang="ts" module\>
	import type { WithElementRef } from "bits-ui";
	import type { HTMLAnchorAttributes, HTMLButtonAttributes } from "svelte/elements";
	import { type VariantProps, tv } from "tailwind-variants";

	export const buttonVariants = tv({
		base: "inline-flex cursor-pointer items-center justify-center gap-2 rounded-full text-sm font-medium whitespace-nowrap duration-200 focus-visible:ring-1 focus-visible:ring-ring focus-visible:outline-none active:scale-99 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
		variants: {
			variant: {
				default: "bg-foreground text-background hover:brightness-95",
				neutral: "bg-foreground text-background hover:brightness-95",
				destructive:
					"text-destructive-foreground bg-destructive shadow-md hover:bg-destructive/90",
				outline:
					"border border-transparent bg-card text-foreground shadow-sm ring-1 shadow-black/6.5 ring-foreground/15 duration-200 hover:bg-muted/50",
				secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80",
				ghost: "text-foreground/75 hover:bg-foreground/5 hover:text-foreground",
				link: "text-primary underline-offset-4 hover:underline",
			},
			size: {
				default: "h-8 px-3 py-2",
				sm: "h-7 px-2.5 text-sm",
				lg: "h-11 px-6 text-base font-medium",
				icon: "size-9",
			},
		},
		defaultVariants: {
			variant: "default",
			size: "default",
		},
	});

	export type ButtonVariant = VariantProps<typeof buttonVariants>["variant"];
	export type ButtonSize = VariantProps<typeof buttonVariants>["size"];

	export type ButtonProps = WithElementRef<HTMLButtonAttributes> &
		WithElementRef<HTMLAnchorAttributes> & {
			variant?: ButtonVariant;
			size?: ButtonSize;
		};
\<\/script\>

\<\script lang="ts"\>
	import { cn } from "#lib/utils.js";

	let {
		class: className,
		variant = "default",
		size = "default",
		ref = $bindable(null),
		href = undefined,
		type = "button",
		children,
		...restProps
	}: ButtonProps = $props();
\<\/script\>

{#if href}
	<a
		bind:this={ref}
		class={cn(buttonVariants({ variant, size }), className)}
		{href}
		{...restProps}
	>
		{@render children?.()}
	</a>
{:else}
	<button
		bind:this={ref}
		class={cn(buttonVariants({ variant, size }), className)}
		{type}
		{...restProps}
	>
		{@render children?.()}
	</button>
{/if}`,
		},
		{
			filename: "index.ts",
			lang: "typescript",
			filecode: `import Button from "./button.svelte";

export { Button };`,
		},
	] satisfies CodeBlock[];
	const cardSourceCode = [
		{
			filename: "card.svelte",
			lang: "svelte",
			filecode: `\<\script module lang="ts"\>
	import type { WithElementRef } from "bits-ui";
	import { type VariantProps, tv } from "tailwind-variants";

	export const cardVariants = tv({
		base: "rounded-2xl text-card-foreground",
		variants: {
			variant: {
				default:
					"bg-card shadow-lg ring-1 shadow-foreground/5 ring-foreground/6.5 dark:shadow-black/10",
				soft: "bg-muted",
				mixed: "border bg-muted",
				outline: "bg-card ring-1 ring-border",
			},
		},
		defaultVariants: {
			variant: "default",
		},
	});

	export type CardVariant = VariantProps<typeof cardVariants>["variant"];

	export type CardProps = WithElementRef<HTMLAttributes<HTMLDivElement>> & {
		variant?: CardVariant;
	};
\<\/script\>

\<\script lang="ts"\>
	import type { HTMLAttributes } from "svelte/elements";
	import { cn } from "#lib/utils.js";

	let {
		ref = $bindable(null),
		class: className,
		children,
		variant = "default",
		...restProps
	}: CardProps = $props();
\<\/script\>

<div bind:this={ref} class={cn(cardVariants({ variant }), className)} {...restProps}>
	{@render children?.()}
</div>`,
		},
		{
			filename: "card-header.svelte",
			lang: "svelte",
			filecode: `\<\script lang="ts"\>
	import type { WithElementRef } from "bits-ui";
	import type { HTMLAttributes } from "svelte/elements";
	import { cn } from "#lib/utils.js";

	let {
		ref = $bindable(null),
		class: className,
		children,
		...restProps
	}: WithElementRef<HTMLAttributes<HTMLDivElement>> = $props();
\<\/script\>

<!--  pb-0 -->
<div bind:this={ref} class={cn("flex flex-col space-y-1.5 p-6", className)} {...restProps}>
	{@render children?.()}
</div>`,
		},
		{
			filename: "card-title.svelte",
			lang: "svelte",
			filecode: `\<\script lang="ts"\>
	import type { WithElementRef } from "bits-ui";
	import type { HTMLAttributes } from "svelte/elements";
	import { cn } from "#lib/utils.js";

	let {
		ref = $bindable(null),
		class: className,
		level = 3,
		children,
		...restProps
	}: WithElementRef<HTMLAttributes<HTMLDivElement>> & {
		level?: 1 | 2 | 3 | 4 | 5 | 6;
	} = $props();
\<\/script\>

<div
	role="heading"
	aria-level={level}
	bind:this={ref}
	class={cn("leading-none font-semibold tracking-tight", className)}
	{...restProps}
>
	{@render children?.()}
</div>`,
		},
		{
			filename: "card-description.svelte",
			lang: "svelte",
			filecode: `\<\script lang="ts"\>
	import type { WithElementRef } from "bits-ui";
	import type { HTMLAttributes } from "svelte/elements";
	import { cn } from "#lib/utils.js";

	let {
		ref = $bindable(null),
		class: className,
		children,
		...restProps
	}: WithElementRef<HTMLAttributes<HTMLParagraphElement>> = $props();
\<\/script\>

<p bind:this={ref} class={cn("text-sm text-muted-foreground", className)} {...restProps}>
	{@render children?.()}
</p>`,
		},
		{
			filename: "card-content.svelte",
			lang: "svelte",
			filecode: `\<\script lang="ts"\>
	import type { WithElementRef } from "bits-ui";
	import type { HTMLAttributes } from "svelte/elements";
	import { cn } from "#lib/utils.js";

	let {
		ref = $bindable(null),
		class: className,
		children,
		...restProps
	}: WithElementRef<HTMLAttributes<HTMLDivElement>> = $props();
\<\/script\>

<div bind:this={ref} class={cn("p-6 pt-0", className)} {...restProps}>
	{@render children?.()}
</div>`,
		},
		{
			filename: "card-footer.svelte",
			lang: "svelte",
			filecode: `\<\script lang="ts"\>
	import type { WithElementRef } from "bits-ui";
	import type { HTMLAttributes } from "svelte/elements";
	import { cn } from "#lib/utils.js";

	let {
		ref = $bindable(null),
		class: className,
		children,
		...restProps
	}: WithElementRef<HTMLAttributes<HTMLDivElement>> = $props();
\<\/script\>

<div bind:this={ref} class={cn("flex items-center p-6 pt-0", className)} {...restProps}>
	{@render children?.()}
</div>`,
		},
		{
			filename: "index.ts",
			lang: "typescript",
			filecode: `import Root from "./card.svelte";
import Content from "./card-content.svelte";
import Description from "./card-description.svelte";
import Footer from "./card-footer.svelte";
import Header from "./card-header.svelte";
import Title from "./card-title.svelte";

export {
	Root,
	Content,
	Description,
	Footer,
	Header,
	Title,
	//
	Root as Card,
	Content as CardContent,
	Description as CardDescription,
	Footer as CardFooter,
	Header as CardHeader,
	Title as CardTitle,
};`,
		},
	] satisfies CodeBlock[];
	const inputSourceCode = [
		{
			filename: "input.svelte",
			lang: "svelte",
			filecode: `\<\script lang="ts"\>
	import type { HTMLInputAttributes, HTMLInputTypeAttribute } from "svelte/elements";
	import type { WithElementRef } from "bits-ui";
	import { cn } from "#lib/utils.js";

	type InputType = Exclude<HTMLInputTypeAttribute, "file">;

	type Props = WithElementRef<
		Omit<HTMLInputAttributes, "type"> &
			({ type: "file"; files?: FileList } | { type?: InputType; files?: undefined })
	>;

	let {
		ref = $bindable(null),
		value = $bindable(),
		type,
		files = $bindable(),
		class: className,
		...restProps
	}: Props = $props();
\<\/script\>

{#if type === "file"}
	<input
		bind:this={ref}
		class={cn(
			"flex h-8 w-full min-w-0 rounded-md border border-input bg-card px-3 py-1 text-sm outline-none not-dark:bg-card selection:bg-primary selection:text-primary-foreground file:inline-flex file:h-7 file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
			"focus-visible:border-ring focus-visible:ring-[3px] focus-visible:ring-ring/15",
			"aria-invalid:border-destructive aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40",
			className
		)}
		type="file"
		bind:files
		bind:value
		{...restProps}
	/>
{:else}
	<input
		bind:this={ref}
		class={cn(
			"flex h-8 w-full min-w-0 rounded-md border border-input bg-card px-3 py-1 text-sm outline-none not-dark:bg-card selection:bg-primary selection:text-primary-foreground file:inline-flex file:h-7 file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
			"focus-visible:border-ring focus-visible:ring-[3px] focus-visible:ring-ring/15",
			"aria-invalid:border-destructive aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40",
			className
		)}
		{type}
		bind:value
		{...restProps}
	/>
{/if}`,
		},
		{
			filename: "index.ts",
			lang: "typescript",
			filecode: `import Root from "./input.svelte";

export {
	Root,
	//
	Root as Input,
};`,
		},
	] satisfies CodeBlock[];
	const textareaSourceCode = [
		{
			filename: "textarea.svelte",
			lang: "svelte",
			filecode: `\<\script lang="ts"\>
	import type { WithElementRef, WithoutChildren } from "bits-ui";
	import type { HTMLTextareaAttributes } from "svelte/elements";
	import { cn } from "#lib/utils.js";

	let {
		ref = $bindable(null),
		value = $bindable(),
		class: className,
		...restProps
	}: WithoutChildren<WithElementRef<HTMLTextareaAttributes>> = $props();
\<\/script\>

<textarea
	bind:this={ref}
	bind:value
	class={cn(
		"flex field-sizing-content min-h-16 w-full rounded-md border border-input px-3 py-2 text-base transition-colors outline-none not-dark:bg-card placeholder:text-muted-foreground focus-visible:border-ring focus-visible:ring-[3px] focus-visible:ring-ring/15 disabled:cursor-not-allowed disabled:opacity-50 aria-invalid:border-destructive aria-invalid:ring-destructive/20 md:text-sm dark:aria-invalid:ring-destructive/40",
		className
	)}
	{...restProps}
></textarea>`,
		},
		{
			filename: "index.ts",
			lang: "typescript",
			filecode: `import Root from "./textarea.svelte";

export {
	Root,
	//
	Root as Textarea,
};`,
		},
	] satisfies CodeBlock[];
</script>

<svelte:head>
	<link rel="alternate" type="text/markdown" href="/docs/veil-theme.md" title="Markdown" />
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
				alt: "Veil theme setup for Svelte Marketing Blocks",
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
		imageAlt: "Veil theme setup for Svelte Marketing Blocks",
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
				id="veil-theme-setup"
				class="font-gmono text-3xl font-normal tracking-tight sm:text-4xl"
			>
				Veil Theme Setup
			</H1>
			<Paragraph class="max-w-prose text-lg leading-relaxed text-pretty">
				{description}
			</Paragraph>
		</header>

		<section class="border-b border-dashed border-ink/50 pb-12 dark:border-muted-foreground/40">
			<H2 id="install-with-cli">Install with CLI</H2>
			<Paragraph class="mt-1 mb-6 max-w-prose text-muted-foreground">
				Install the Veil theme tokens and required UI primitives with the shadcn-svelte CLI.
			</Paragraph>
			<PMCommand
				command="execute"
				variant="secondary"
				args={["shadcn-svelte@latest", "add", `${projectUrl}/v/veil-theme.json`]}
			/>
			<Paragraph class="mt-4 max-w-prose text-sm text-muted-foreground">
				The CLI updates your main CSS theme variables. Use the manual setup below to keep
				the theme variables separate without replacing the variables in your main CSS file.
			</Paragraph>
		</section>

		<section>
			<H2 id="folder-structure">Folder structure</H2>
			<Paragraph class="mt-1 mb-6 text-muted-foreground">
				Keep the Veil primitives together under <code>ui/veil</code>, and import
				<code>themes.css</code> from <code>layout.css</code>.
			</Paragraph>
			<Code
				code={folderStructure}
				lang="markdown"
				hideLines={true}
				class="rounded-none border-dashed border-ink/30 bg-transparent dark:border-emerald-400/40 [&_.shiki]:!text-ink/70 dark:[&_.shiki]:!text-emerald-400 [&_.shiki_span]:!text-ink/70 dark:[&_.shiki_span]:!text-emerald-400/80 [&_pre]:rounded-none"
			/>
		</section>

		<section>
			<H2 id="theme-quickstart">Theme Quickstart</H2>
			<Paragraph class="mt-1 mb-6 text-muted-foreground">
				Add the Veil tokens to <code class="rounded-sm bg-secondary px-1">themes.css</code> so
				all Veil primitives resolve color, border, focus ring, and typography consistently.
			</Paragraph>
			<FrameCode
				code={{
					filename: "themes.css",
					filecode: `[data-theme="veil"] .theme-container {
	--radius: 0.625rem;

	--background: oklch(0.9779 0.0042 56.38);
	--foreground: oklch(0.3421 0.0379 61.15);

	--card: var(--color-white);
	--card-foreground: oklch(0.3421 0.0379 61.15);

	--popover: var(--color-white);
	--popover-foreground: oklch(0.3421 0.0379 61.15);

	--primary: oklch(0.5967 0.0558 61.59);
	--primary-foreground: oklch(0.1448 0 0);

	--secondary: --alpha(var(--primary)/15%);
	--secondary-foreground: oklch(0.3421 0.0379 61.15);

	--muted: --alpha(var(--foreground)/5%);
	--muted-foreground: oklch(0.4563 0.0061 48.59);

	--accent: oklch(0.9068 0.0112 89.73);
	--accent-foreground: oklch(0.3467 0.0231 86.12);

	--destructive: var(--color-red-600);
	--destructive-foreground: var(--color-white);

	--border: --alpha(var(--foreground)/7.5%);
	--input: --alpha(var(--foreground)/20%);
	--ring: var(--primary);

	--font-family: "Geist", sans-serif;
	--font-serif: "Asar", serif;

	@variant dark {
		--background: oklch(0.1448 0 0);
		--foreground: oklch(0.9027 0.0137 60.56);

		--card: oklch(0.1924 0.0016 17.3);
		--card-foreground: oklch(0.9027 0.0137 60.56);

		--popover: var(--color-white);
		--popover-foreground: oklch(0.9027 0.0137 60.56);

		--primary-foreground: var(--color-white);
		--secondary: --alpha(var(--primary)/10%);
		--secondary-foreground: oklch(0.9027 0.0137 60.56);

		--muted: var(--background);
		--muted-foreground: oklch(0.7262 0.0037 67.77);

		--accent: var(--color-zinc-700);
		--accent-foreground: var(--color-white);

		--input: --alpha(var(--foreground)/15%);
	}

	@apply *:text-foreground selection:bg-muted selection:text-primary;
			}`,
					lang: "css",
				}}
			/>
			<Paragraph class="mt-4">
				Veil uses <Link
					href="https://fonts.google.com/specimen/Geist"
					target="_blank"
					rel="noreferrer">Geist</Link
				> for interface text and <Link
					href="https://fonts.google.com/specimen/Asar"
					target="_blank"
					rel="noreferrer">Asar</Link
				> for serif accents.
			</Paragraph>
		</section>

		<section>
			<H2 id="apply-theme">Apply Theme</H2>
			<Paragraph class="mt-1 mb-4 text-muted-foreground">
				Ensure your root body includes <code>theme-container</code> so the selected theme scope
				is applied across the application.
			</Paragraph>
			<FrameCode
				code={{
					filename: "src/app.html",
					filecode: `<body data-theme="veil" class="theme-container">
	<!-- Your Application -->
</body>`,
					lang: "html",
				}}
			/>
		</section>

		<section>
			<H2 id="required-components">Required Components</H2>
			<Paragraph class="mt-1 mb-4 text-muted-foreground">
				After theme tokens are configured, update these four Veil primitives in your app.
			</Paragraph>
			<div class="mt-2 mb-6 w-full overflow-x-auto">
				<table
					class="w-full min-w-[42rem] border-collapse border border-dashed border-ink/30 text-sm dark:border-emerald-400/40"
				>
					<thead>
						<tr class="border-b border-dashed border-ink/30 dark:border-emerald-400/40">
							<th
								class="border-r border-dashed border-ink/30 px-3 py-2 text-left font-gmono font-normal text-ink/80 dark:border-emerald-400/40 dark:text-emerald-400"
								>Component</th
							>
							<th
								class="border-r border-dashed border-ink/30 px-3 py-2 text-left font-gmono font-normal text-ink/80 dark:border-emerald-400/40 dark:text-emerald-400"
								>Import Path</th
							>
							<th
								class="px-3 py-2 text-left font-gmono font-normal text-ink/80 dark:text-emerald-400"
								>Update Scope</th
							>
						</tr>
					</thead>
					<tbody>
						<tr class="border-b border-dashed border-ink/30 dark:border-emerald-400/40">
							<td
								class="border-r border-dashed border-ink/30 px-3 py-2.5 font-gmono dark:border-emerald-400/40"
								>Button</td
							>
							<td
								class="border-r border-dashed border-ink/30 px-3 py-2.5 font-mono text-xs text-muted-foreground dark:border-emerald-400/40"
								>#lib/components/ui/veil/button</td
							>
							<td class="px-3 py-2.5 text-muted-foreground"
								>Variant and size classes, anchor/button rendering</td
							>
						</tr>
						<tr class="border-b border-dashed border-ink/30 dark:border-emerald-400/40">
							<td
								class="border-r border-dashed border-ink/30 px-3 py-2.5 font-gmono dark:border-emerald-400/40"
								>Card</td
							>
							<td
								class="border-r border-dashed border-ink/30 px-3 py-2.5 font-mono text-xs text-muted-foreground dark:border-emerald-400/40"
								>#lib/components/ui/veil/card</td
							>
							<td class="px-3 py-2.5 text-muted-foreground"
								>Root variants and all card composition primitives</td
							>
						</tr>
						<tr class="border-b border-dashed border-ink/30 dark:border-emerald-400/40">
							<td
								class="border-r border-dashed border-ink/30 px-3 py-2.5 font-gmono dark:border-emerald-400/40"
								>Input</td
							>
							<td
								class="border-r border-dashed border-ink/30 px-3 py-2.5 font-mono text-xs text-muted-foreground dark:border-emerald-400/40"
								>#lib/components/ui/veil/input</td
							>
							<td class="px-3 py-2.5 text-muted-foreground"
								>Field styling, file input branch, focus/error states</td
							>
						</tr>
						<tr>
							<td
								class="border-r border-dashed border-ink/30 px-3 py-2.5 font-gmono dark:border-emerald-400/40"
								>Textarea</td
							>
							<td
								class="border-r border-dashed border-ink/30 px-3 py-2.5 font-mono text-xs text-muted-foreground dark:border-emerald-400/40"
								>#lib/components/ui/veil/textarea</td
							>
							<td class="px-3 py-2.5 text-muted-foreground"
								>Multiline field sizing, focus/error/disabled states</td
							>
						</tr>
					</tbody>
				</table>
			</div>
		</section>

		<section>
			<H2 id="button-component">Button Component</H2>
			<Paragraph class="mt-1 mb-4 text-muted-foreground">
				Veil button uses rounded-full geometry, compact sizing, and contrast-aware variants.
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
								filecode: `\<\script lang="ts"\>
	import { Button } from "#lib/components/ui/veil/button/index.js";
\<\/script\>

<Button variant="default">Default Button</Button>
<Button variant="outline">Outline Button</Button>
<Button size="lg">Large Button</Button>`,
								lang: "svelte",
							},
						]}
					/>
				</div>
			</div>
		</section>

		<section>
			<H2 id="card-component">Card Component</H2>
			<Paragraph class="mt-1 mb-4 text-muted-foreground">
				Veil card supports four variants: <code>default</code>, <code>soft</code>,
				<code>mixed</code>, and <code>outline</code>, with composition primitives for
				header/content/footer layouts.
			</Paragraph>
			<div class="space-y-6">
				<div class="space-y-2">
					<H3 id="card-source">Source</H3>
					<CodeFiles files={cardSourceCode} />
				</div>
				<div class="space-y-2">
					<H3 id="card-usage">Usage</H3>
					<div>
						<CodeFiles
							files={[
								{
									filename: "card-usage.svelte",
									filecode: `\<\script lang="ts"\>
	import { Card, CardContent, CardHeader, CardTitle } from "#lib/components/ui/veil/card/index.js";
\<\/script\>

<Card variant="default">
	<CardHeader>
		<CardTitle>Default Card</CardTitle>
	</CardHeader>
	<CardContent>...</CardContent>
</Card>

<Card variant="outline">
	<CardHeader>
		<CardTitle>Outline Card</CardTitle>
	</CardHeader>
	<CardContent>...</CardContent>
</Card>`,
									lang: "svelte",
								},
							]}
						/>
					</div>
				</div>
			</div>
		</section>

		<section>
			<H2 id="input-component">Input Component</H2>
			<Paragraph class="mt-1 mb-4 text-muted-foreground">
				Veil input covers standard and file fields while preserving unified focus and
				invalid states.
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
								filecode: `\<\script lang="ts"\>
	import { Input } from "#lib/components/ui/veil/input/index.js";
\<\/script\>

<Input type="email" placeholder="you@example.com" />
<Input aria-invalid="true" placeholder="Invalid state" />
<Input type="file" />`,
								lang: "svelte",
							},
						]}
					/>
				</div>
			</div>
		</section>

		<section>
			<H2 id="textarea-component">Textarea Component</H2>
			<Paragraph class="mt-1 mb-4 text-muted-foreground">
				Veil textarea shares input tokens, adds multiline sizing, and keeps focus/validation
				states aligned with other form controls.
			</Paragraph>
			<div class="space-y-6">
				<div class="space-y-2">
					<H3 id="textarea-source">Source</H3>
					<CodeFiles files={textareaSourceCode} />
				</div>
				<div class="space-y-2">
					<H3 id="textarea-usage">Usage</H3>
					<div>
						<CodeFiles
							files={[
								{
									filename: "textarea-usage.svelte",
									filecode: `\<\script lang="ts"\>
	import { Textarea } from "#lib/components/ui/veil/textarea/index.js";
\<\/script\>

<Textarea placeholder="Enter details..." />
<Textarea aria-invalid="true" placeholder="Invalid state" />`,
									lang: "svelte",
								},
							]}
						/>
					</div>
				</div>
			</div>
		</section>

		<section class="space-y-3">
			<H2 id="whats-next">What’s next?</H2>
			<Paragraph class="max-w-prose leading-relaxed">
				Explore the <Link href="/veil/hero">Veil blocks</Link>, or browse the <Link
					href="/docs/mist-theme">Mist theme setup</Link
				>.
			</Paragraph>
		</section>
	</article>
</div>
