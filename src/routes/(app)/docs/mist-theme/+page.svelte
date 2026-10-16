<script lang="ts">
	import { page } from "$app/state";
	import Code from "#lib/components/ui/code/code.svelte";
	import { FrameCode, type CodeBlock } from "#lib/components/ui/code/index.js";
	import MultipleCode from "#lib/components/ui/code/multiple-code.svelte";
	import { H1, H2, H3, Link, Paragraph } from "#lib/components/markdown/index.js";
	import { docsV2PageMap } from "#lib/config/docs-v2.js";
	import { JsonLd, MetaTags } from "svelte-meta-tags";

	const pageMeta = docsV2PageMap.mistTheme;
	const title = "Mist Theme Setup | Svelte Marketing Blocks";
	const description =
		"Apply Mist theme tokens and update button, card, input, label, and textarea primitives for clean Svelte interfaces.";

	let canonical = $derived(`${page.url.origin}${page.url.pathname}`);
	let socialImage = $derived(`${page.url.origin}/og.png`);
	const folderStructure = `src/
├── lib/
│   └── components/
│       └── ui/
│           └── mist/
│               ├── button/
│               ├── card/
│               ├── input/
│               ├── label/
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
		base: "inline-flex cursor-pointer items-center justify-center gap-2 rounded-xl text-sm font-medium whitespace-nowrap transition-colors focus-visible:ring-1 focus-visible:ring-ring focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
		variants: {
			variant: {
				default: "bg-primary text-primary-foreground hover:brightness-95",
				neutral: "bg-foreground text-background hover:brightness-95",
				destructive:
					"text-destructive-foreground bg-destructive shadow-md hover:bg-destructive/90",
				outline:
					"border border-transparent bg-background text-foreground shadow-sm ring-1 shadow-black/15 ring-foreground/10 duration-200 hover:bg-muted/50",
				secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80",
				ghost: "text-foreground/75 hover:bg-foreground/5 hover:text-foreground",
				link: "text-primary underline-offset-4 hover:underline",
			},
			size: {
				default: "h-9 rounded-md px-4 py-2",
				sm: "h-8 rounded-full px-3 text-sm",
				lg: "h-11 px-6 text-base font-medium",
				icon: "size-9",
			},
		},
		defaultVariants: {
			variant: "default",
			size: "sm",
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
			filecode: `import Root, {
	type ButtonProps,
	type ButtonSize,
	type ButtonVariant,
	buttonVariants,
} from "./button.svelte";

export {
	Root,
	type ButtonProps as Props,
	//
	Root as Button,
	buttonVariants,
	type ButtonProps,
	type ButtonSize,
	type ButtonVariant,
};`,
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
		base: "rounded-xl text-card-foreground",
		variants: {
			variant: {
				default: "border border-transparent bg-card shadow ring-1 ring-foreground/5",
				soft: "bg-foreground/5",
				mixed: "border-foreground.5 border bg-foreground/5",
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
	class={cn("font-semibold leading-none tracking-tight", className)}
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

<p bind:this={ref} class={cn("text-muted-foreground text-sm", className)} {...restProps}>
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

<div bind:this={ref} class={cn("p-6 pt-0", className)} {...restProps}>
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
		"data-slot": dataSlot = "input",
		...restProps
	}: Props = $props();
\<\/script\>

{#if type === "file"}
	<input
		bind:this={ref}
		data-slot={dataSlot}
		class={cn(
			"flex h-9 w-full min-w-0 rounded-md border border-input bg-transparent px-3 py-1 text-base shadow-xs outline-none transition-[color,box-shadow] selection:bg-primary selection:text-primary-foreground file:inline-flex file:h-7 file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:border-ring focus-visible:ring-[3px] focus-visible:ring-ring/50 aria-invalid:border-destructive aria-invalid:ring-[3px] aria-invalid:ring-destructive/20 disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm dark:aria-invalid:ring-destructive/40",
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
		data-slot={dataSlot}
		class={cn(
			"flex h-9 w-full min-w-0 rounded-md border border-input bg-transparent px-3 py-1 text-base shadow-xs outline-none transition-[color,box-shadow] selection:bg-primary selection:text-primary-foreground file:inline-flex file:h-7 file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:border-ring focus-visible:ring-[3px] focus-visible:ring-ring/50 aria-invalid:border-destructive aria-invalid:ring-[3px] aria-invalid:ring-destructive/20 disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm dark:aria-invalid:ring-destructive/40",
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

	const labelSourceCode = [
		{
			filename: "label.svelte",
			lang: "svelte",
			filecode: `\<\script lang="ts"\>
	import type { WithElementRef } from "bits-ui";
	import type { HTMLLabelAttributes } from "svelte/elements";
	import { cn } from "#lib/utils.js";

	let {
		ref = $bindable(null),
		class: className,
		children,
		...restProps
	}: WithElementRef<HTMLLabelAttributes> = $props();
\<\/script\>

<label
	bind:this={ref}
	data-slot="label"
	class={cn(
		"block select-none text-sm leading-none font-medium peer-disabled:cursor-not-allowed peer-disabled:opacity-50 group-data-[disabled=true]:pointer-events-none group-data-[disabled=true]:opacity-50",
		className
	)}
	{...restProps}
>
	{@render children?.()}
</label>`,
		},
		{
			filename: "index.ts",
			lang: "typescript",
			filecode: `import Root from "./label.svelte";

export {
	Root,
	//
	Root as Label,
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
		"flex min-h-[60px] w-full rounded-md border border-input bg-transparent px-3 py-2 text-base shadow-sm placeholder:text-muted-foreground focus-visible:ring-1 focus-visible:ring-ring focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
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
				alt: "Mist theme setup for Svelte Marketing Blocks",
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
		imageAlt: "Mist theme setup for Svelte Marketing Blocks",
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
			url: page.url.origin,
		},
	}}
/>

<div class="mx-auto w-full max-w-3xl px-5 py-8 sm:px-8 sm:py-12">
	<article
		class="min-w-0 space-y-12 [&_h2]:font-gmono [&_h2]:font-normal [&_h3]:font-gmono [&_h3]:font-normal"
	>
		<header class="space-y-3">
			<H1
				id="mist-theme-setup"
				class="font-gmono text-3xl font-normal tracking-tight sm:text-4xl"
			>
				Mist Theme Setup
			</H1>
			<Paragraph class="max-w-prose text-lg leading-relaxed text-pretty">
				{description}
			</Paragraph>
		</header>

		<section>
			<H2 id="folder-structure">Folder structure</H2>
			<Paragraph class="mt-1 mb-6 text-muted-foreground">
				Keep the Mist primitives together under <code>ui/mist</code>, and import
				<code>themes.css</code> from <code>layout.css</code>.
			</Paragraph>
			<Code
				code={folderStructure}
				lang="markdown"
				hideLines={true}
				class="rounded-none border-dashed border-ink/30 bg-transparent dark:border-emerald-400/40 [&_pre]:rounded-none"
			/>
		</section>

		<section>
			<H2 id="theme-quickstart">Theme Quickstart</H2>
			<Paragraph class="mt-1 mb-6 text-muted-foreground">
				Add the Mist theme variables to <code class="rounded-sm bg-secondary px-1"
					>themes.css</code
				> so Mist primitives resolve color, border, and contrast consistently.
			</Paragraph>
			<FrameCode
				code={{
					filename: "themes.css",
					lang: "css",
					filecode: `[data-theme="mist"] .theme-container {
	--radius: 0.625rem;
	--background: var(--color-white);
	--foreground: var(--color-zinc-950);
	--card: var(--color-white);
	--card-foreground: var(--color-zinc-950);
	--popover: var(--color-white);
	--popover-foreground: var(--color-zinc-950);
	--primary: var(--color-indigo-500);
	--primary-foreground: var(--color-white);
	--secondary: var(--color-indigo-100);
	--secondary-foreground: var(--color-indigo-600);
	--muted: var(--color-zinc-100);
	--muted-foreground: var(--color-zinc-600);
	--accent: var(--color-zinc-700);
	--accent-foreground: var(--color-white);
	--destructive: var(--color-red-600);
	--border: var(--color-zinc-200);
	--input: var(--color-zinc-200);
	--ring: var(--color-indigo-500);

	@variant dark {
		--radius: 0.625rem;
		--background: var(--color-white);
		--foreground: var(--color-zinc-950);
		--card: var(--color-white);
		--card-foreground: black;
		--popover: var(--color-white);
		--popover-foreground: var(--color-zinc-950);
		--primary: var(--color-indigo-500);
		--primary-foreground: var(--color-white);
		--secondary: var(--color-indigo-100);
		--secondary-foreground: var(--color-indigo-600);
		--muted: var(--color-zinc-100);
		--muted-foreground: var(--color-zinc-600);
		--accent: var(--color-zinc-700);
		--accent-foreground: var(--color-white);
		--destructive: var(--color-red-600);
		--border: var(--color-zinc-200);
		--input: var(--color-zinc-200);
		--ring: var(--color-indigo-500);
	}

	@apply *:text-foreground;
			}`,
				}}
			/>
		</section>

		<section>
			<H2 id="apply-theme">Apply Theme</H2>
			<Paragraph class="mt-1 mb-6 text-muted-foreground">
				Ensure your root body includes <code>theme-container</code> so the selected Mist theme
				is applied across the application.
			</Paragraph>
			<FrameCode
				code={{
					filename: "src/app.html",
					lang: "html",
					filecode: `<body data-theme="mist" class="theme-container">
	<!-- Your Application -->
</body>`,
				}}
			/>
		</section>

		<section>
			<H2 id="required-components">Required Components</H2>
			<Paragraph class="mt-1 mb-6 text-muted-foreground">
				After theme tokens are configured, update these five Mist primitives in your app.
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
								class="border-r border-dashed border-ink/30 px-3 py-2.5 dark:border-emerald-400/40"
								>Button</td
							>
							<td
								class="border-r border-dashed border-ink/30 px-3 py-2.5 font-mono text-xs text-muted-foreground dark:border-emerald-400/40"
								>$lib/components/ui/mist/button</td
							>
							<td class="px-3 py-2.5 text-muted-foreground"
								>Variant and size classes, anchor/button rendering</td
							>
						</tr>
						<tr class="border-b border-dashed border-ink/30 dark:border-emerald-400/40">
							<td
								class="border-r border-dashed border-ink/30 px-3 py-2.5 dark:border-emerald-400/40"
								>Card</td
							>
							<td
								class="border-r border-dashed border-ink/30 px-3 py-2.5 font-mono text-xs text-muted-foreground dark:border-emerald-400/40"
								>$lib/components/ui/mist/card</td
							>
							<td class="px-3 py-2.5 text-muted-foreground"
								>Root variants and all card composition primitives</td
							>
						</tr>
						<tr class="border-b border-dashed border-ink/30 dark:border-emerald-400/40">
							<td
								class="border-r border-dashed border-ink/30 px-3 py-2.5 dark:border-emerald-400/40"
								>Input</td
							>
							<td
								class="border-r border-dashed border-ink/30 px-3 py-2.5 font-mono text-xs text-muted-foreground dark:border-emerald-400/40"
								>$lib/components/ui/mist/input</td
							>
							<td class="px-3 py-2.5 text-muted-foreground"
								>Field styling, file input branch, focus/error states</td
							>
						</tr>
						<tr class="border-b border-dashed border-ink/30 dark:border-emerald-400/40">
							<td
								class="border-r border-dashed border-ink/30 px-3 py-2.5 dark:border-emerald-400/40"
								>Label</td
							>
							<td
								class="border-r border-dashed border-ink/30 px-3 py-2.5 font-mono text-xs text-muted-foreground dark:border-emerald-400/40"
								>$lib/components/ui/mist/label</td
							>
							<td class="px-3 py-2.5 text-muted-foreground">
								Form labels and disabled field states</td
							>
						</tr>
						<tr>
							<td
								class="border-r border-dashed border-ink/30 px-3 py-2.5 dark:border-emerald-400/40"
								>Textarea</td
							>
							<td
								class="border-r border-dashed border-ink/30 px-3 py-2.5 font-mono text-xs text-muted-foreground dark:border-emerald-400/40"
								>$lib/components/ui/mist/textarea</td
							>
							<td class="px-3 py-2.5 text-muted-foreground">
								Multiline field sizing, focus, and disabled states</td
							>
						</tr>
					</tbody>
				</table>
			</div>
		</section>

		<section>
			<H2 id="button-component">Button Component</H2>
			<Paragraph class="mt-1 mb-6">
				Mist button adds a <code>neutral</code> variant for bold monochrome actions while keeping
				the standard shadcn-like variants.
			</Paragraph>
			<H3 id="button-usage" class="mb-2">Usage</H3>
			<FrameCode
				code={{
					filename: "button-usage.svelte",
					lang: "svelte",
					filecode: `\<\script lang="ts"\>
	import { Button } from "#lib/components/ui/mist/button/index.js";
\<\/script\>

<Button variant="neutral">Neutral Button</Button>`,
				}}
			/>
			<H3 id="button-source" class="mb-2">Source</H3>
			<MultipleCode code={buttonSourceCode} />
		</section>

		<section>
			<H2 id="card-component">Card Component</H2>
			<Paragraph class="mt-1 mb-6">
				Mist card adds <code>soft</code> and <code>mixed</code> variants to support subtle sections
				commonly used across documentation-style layouts.
			</Paragraph>
			<H3 id="card-usage" class="mb-2">Usage</H3>
			<FrameCode
				code={{
					filename: "card-usage.svelte",
					lang: "svelte",
					filecode: `\<\script lang="ts"\>
	import { Card, CardContent, CardHeader, CardTitle } from "#lib/components/ui/mist/card/index.js";
\<\/script\>

<Card variant="soft">
	<CardHeader>
		<CardTitle>Soft Card</CardTitle>
	</CardHeader>
	<CardContent>...</CardContent>
</Card>

<Card variant="mixed">
	<CardHeader>
		<CardTitle>Mixed Card</CardTitle>
	</CardHeader>
	<CardContent>...</CardContent>
</Card>`,
				}}
			/>
			<H3 id="card-source" class="mb-2">Source</H3>
			<MultipleCode code={cardSourceCode} />
		</section>

		<section>
			<H2 id="input-component">Input Component</H2>
			<Paragraph class="mt-1 mb-6">
				Mist input supports standard and file fields with consistent focus, invalid, and
				disabled states.
			</Paragraph>
			<H3 id="input-usage" class="mb-2">Usage</H3>
			<FrameCode
				code={{
					filename: "input-usage.svelte",
					lang: "svelte",
					filecode: `\<\script lang="ts"\>
	import { Input } from "#lib/components/ui/mist/input/index.js";
\<\/script\>

<Input type="email" placeholder="you@example.com" />
<Input aria-invalid="true" placeholder="Invalid state" />
<Input type="file" />`,
				}}
			/>
			<H3 id="input-source" class="mb-2">Source</H3>
			<MultipleCode code={inputSourceCode} />
		</section>

		<section>
			<H2 id="label-component">Label Component</H2>
			<Paragraph class="mt-1 mb-6">
				Mist label keeps form text clear and reflects disabled field states.
			</Paragraph>
			<H3 id="label-usage" class="mb-2">Usage</H3>
			<FrameCode
				code={{
					filename: "label-usage.svelte",
					lang: "svelte",
					filecode: `\<\script lang="ts"\>
	import { Label } from "#lib/components/ui/mist/label/index.js";
\<\/script\>

<Label for="email">Email address</Label>`,
				}}
			/>
			<H3 id="label-source" class="mb-2">Source</H3>
			<MultipleCode code={labelSourceCode} />
		</section>

		<section>
			<H2 id="textarea-component">Textarea Component</H2>
			<Paragraph class="mt-1 mb-6">
				Mist textarea provides a simple multiline field with matching focus and disabled
				states.
			</Paragraph>
			<H3 id="textarea-usage" class="mb-2">Usage</H3>
			<FrameCode
				code={{
					filename: "textarea-usage.svelte",
					lang: "svelte",
					filecode: `\<\script lang="ts"\>
	import { Textarea } from "#lib/components/ui/mist/textarea/index.js";
\<\/script\>

<Textarea placeholder="Enter details..." />`,
				}}
			/>
			<H3 id="textarea-source" class="mb-2">Source</H3>
			<MultipleCode code={textareaSourceCode} />
		</section>

		<section class="space-y-3">
			<H2 id="whats-next">What’s next?</H2>
			<Paragraph class="max-w-prose leading-relaxed">
				Explore the <Link href="/mist/hero">Mist blocks</Link>, or continue with the <Link
					href="/docs/veil-theme">Veil theme setup</Link
				>.
			</Paragraph>
		</section>
	</article>
</div>
