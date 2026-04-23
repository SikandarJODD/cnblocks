<script lang="ts">
	import SEOComponent from "$lib/seo/SEO.svelte";
	import DocsPageShell from "$lib/components/layout/DocsPageShell.svelte";
	import type { CodeBlock } from "$lib/components/ui/code";
	import MultipleCode from "$lib/components/ui/code/multiple-code.svelte";
	import {
		H2,
		H3,
		Paragraph,
		Table,
		Thead,
		Tbody,
		Tr,
		Th,
		Td,
	} from "$lib/components/markdown/index";
	import { docsV2PageMap } from "$lib/config/docs-v2";
	import DocsCodeBlock from "$lib/web/docs/DocsCodeBlock.svelte";

	const pageMeta = docsV2PageMap.mistTheme;

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
	import { cn } from "$lib/utils.js";

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
	import { cn } from "$lib/utils.js";

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
	import { cn } from "$lib/utils.js";

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
	import { cn } from "$lib/utils.js";

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
	import { cn } from "$lib/utils.js";

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
	import { cn } from "$lib/utils.js";

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
	import { cn } from "$lib/utils.js";

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
</script>

<SEOComponent
	title={pageMeta.seo.title}
	description={pageMeta.seo.description}
	keywords={pageMeta.seo.keywords}
/>

<!--
	description="Craft Sleek, Notion-Inspired Marketing Pages. Built on top of Shadcn Svelte."

 -->

<DocsPageShell
	title="Mist Theme Setup"
	description="Apply Mist theme tokens and update button and card primitives for documentation-style UI styling."
>
	<!-- <section class="space-y-4">
		<H2 id="overview">Overview</H2>
		<Paragraph>
			Mist is the Notion-inspired variant designed for wiki-style and content-heavy websites.
			It keeps the visual language minimal so product messaging and documentation stay
			readable.
		</Paragraph>
		<UnorderedList>
			<ListItem
				>Best for documentation hubs, changelogs, product guides, and lightweight marketing
				pages.</ListItem
			>
			<ListItem
				>Includes Mist-specific UI primitives like neutral buttons and soft/mixed cards.</ListItem
			>
			<ListItem
				>Works with the same Svelte 5 and shadcn-svelte foundations as other variants.</ListItem
			>
		</UnorderedList>
	</section> -->

	<section>
		<H2 id="theme-quickstart">Theme Quickstart</H2>
		<Paragraph class="mt-1 mb-6 text-muted-foreground">
			Add the Mist theme variables to your global stylesheet (for example <code>app.css</code>
			or <code>globals.css</code>) so Mist primitives resolve color, border, and contrast
			consistently.
		</Paragraph>
		<DocsCodeBlock
			fileName="globals.css"
			lang="css"
			code={`[data-theme="mist"] .theme-container {
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
}`}
		/>
	</section>

	<section>
		<H2 id="apply-theme">Apply Theme</H2>
		<Paragraph class="mt-1 mb-6 text-muted-foreground">
			Ensure your root body includes <code>theme-container</code> so the selected Mist theme is
			applied across the application.
		</Paragraph>
		<DocsCodeBlock
			fileName="src/app.html"
			lang={"html"}
			code={`<body data-theme="mist" class="theme-container">
	<!-- Your Application -->
</body>`}
		/>
	</section>

	<section>
		<H2 id="required-components">Required Components</H2>
		<Paragraph class="mt-1 mb-6 text-muted-foreground">
			After theme tokens are configured, update these Mist primitives in your app.
		</Paragraph>
		<Table
			wrapperClass="mt-2 mb-6"
			class="text-sm [&_code]:text-[0.7rem] [&_td]:px-3 [&_td]:py-2.5 [&_th]:h-11 [&_th]:px-3"
		>
			<Thead>
				<Tr>
					<Th class="border-r">Component</Th>
					<Th class="border-r">Import Path</Th>
					<Th>Update Scope</Th>
				</Tr>
			</Thead>
			<Tbody>
				<Tr>
					<Td class="border-r">Button</Td>
					<Td class="border-r font-mono text-xs">$lib/components/ui/mist/button</Td>
					<Td>Variant and size classes, anchor/button rendering</Td>
				</Tr>
				<Tr>
					<Td class="border-r">Card</Td>
					<Td class="border-r font-mono text-xs">$lib/components/ui/mist/card</Td>
					<Td>Root variants and all card composition primitives</Td>
				</Tr>
			</Tbody>
		</Table>
	</section>

	<section>
		<H2 id="button-component">Button Component</H2>
		<Paragraph class="mt-1 mb-6">
			Mist button adds a <code>neutral</code> variant for bold monochrome actions while keeping
			the standard shadcn-like variants.
		</Paragraph>
		<H3 id="button-usage">Usage</H3>
		<DocsCodeBlock
			fileName="button-usage.svelte"
			lang="svelte"
			code={`\<\script lang="ts"\>
	import { Button } from "$lib/components/ui/mist/button";
\<\/script\>

<Button variant="neutral">Neutral Button</Button>`}
		/>
		<H3 id="button-source">Source</H3>
		<MultipleCode code={buttonSourceCode} />
	</section>

	<section>
		<H2 id="card-component">Card Component</H2>
		<Paragraph class="mt-1 mb-6">
			Mist card adds <code>soft</code> and <code>mixed</code> variants to support subtle sections
			commonly used across documentation-style layouts.
		</Paragraph>
		<H3 id="card-usage">Usage</H3>
		<DocsCodeBlock
			fileName="card-usage.svelte"
			lang="svelte"
			code={`\<\script lang="ts"\>
	import { Card, CardContent, CardHeader, CardTitle } from "$lib/components/ui/mist/card";
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
</Card>`}
		/>
		<H3 id="card-source">Source</H3>
		<MultipleCode code={cardSourceCode} />
	</section>
</DocsPageShell>
