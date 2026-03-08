<script lang="ts">
	import SEOComponent from "$lib/seo/SEO.svelte";
	import DocsPageShell from "$lib/components/layout/DocsPageShell.svelte";
	import type { CodeBlock } from "$lib/components/ui/code";
	import MultipleCode from "$lib/components/ui/code/multiple-code.svelte";
	import {
		H2,
		H3,
		Paragraph,
		Link,
		Table,
		Thead,
		Tbody,
		Tr,
		Th,
		Td,
	} from "$lib/components/markdown/index";
	import { docsV2PageMap } from "$lib/config/docs-v2";
	import DocsCodeBlock from "$lib/web/docs/DocsCodeBlock.svelte";

	const pageMeta = docsV2PageMap.veilTheme;
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
	import { cn } from "$lib/utils.js";

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
	import { cn } from "$lib/utils.js";

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
	import { cn } from "$lib/utils.js";

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

<SEOComponent
	title={pageMeta.seo.title}
	description={pageMeta.seo.description}
	keywords={pageMeta.seo.keywords}
/>

<DocsPageShell
	title="Veil Theme Setup"
	description="Apply Veil theme tokens and update button, card, input, and textarea primitives for consistent UI styling."
>
	<!-- <section class="space-y-4">
		<H2 id="overview">Overview</H2>
		<Paragraph>
			Veil is a warm, earthy variant for minimal and elegant product interfaces. To make Veil
			blocks render correctly, keep theme variables in place and update these four UI
			primitives:
			<code>Button</code>, <code>Card</code>, <code>Input</code>, and <code>Textarea</code>.
		</Paragraph>
		<UnorderedList>
			<ListItem>Use this page as the source for Veil-specific primitive overrides.</ListItem>
			<ListItem>Keep import paths under <code>$lib/components/ui/veil/*</code>.</ListItem>
			<ListItem>Apply theme tokens globally using <code>.theme-container</code>.</ListItem>
		</UnorderedList>
	</section> -->

	<section class="space-y-4">
		<H2 id="theme-quickstart">Theme Quickstart</H2>
		<Paragraph class="text-muted-foreground">
			Add the Veil tokens to your global stylesheet (for example <code>app.css</code> or
			<code>globals.css</code>) so all Veil primitives resolve color, border, focus ring, and
			typography consistently.
		</Paragraph>
		<DocsCodeBlock
			fileName="globals.css"
			code={`[data-theme="veil"] .theme-container {
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
}`}
			lang="css"
		/>
		<!-- <Paragraph>
			Veil uses Geist as the primary sans font.
			<Link href="https://fonts.google.com/specimen/Geist" target="_blank" rel="noreferrer">
				Geist on Google Fonts
			</Link>
		</Paragraph>
		<Paragraph>
			Veil uses Asar as the serif accent font.
			<Link href="https://fonts.google.com/specimen/Asar" target="_blank" rel="noreferrer">
				Asar on Google Fonts
			</Link>
		</Paragraph> -->
		<Paragraph>Veil Theme uses Geist, Asar font.</Paragraph>
		<Paragraph
			>Gesit Font : <Link
				href="https://fonts.google.com/specimen/Geist"
				target="_blank"
				rel="noreferrer">Geist on Google Fonts</Link
			>
		</Paragraph>
		<Paragraph
			>Asar Font : <Link
				href="https://fonts.google.com/specimen/Asar"
				target="_blank"
				rel="noreferrer">Asar on Google Fonts</Link
			>
		</Paragraph>
	</section>

	<section class="space-y-4">
		<H2 id="apply-theme">Apply Theme</H2>
		<Paragraph>
			Ensure your root body includes <code>theme-container</code> so the selected theme scope is
			applied across the application.
		</Paragraph>
		<DocsCodeBlock
			fileName="src/app.html"
			code={`<body data-theme="veil" class="theme-container">
	<!-- Your Application -->
</body>`}
			lang="html"
		/>
	</section>

	<section class="space-y-4">
		<H2 id="required-components">Required Components</H2>
		<Paragraph>
			After theme tokens are configured, update these four Veil primitives in your app.
		</Paragraph>
		<Table
			wrapperClass="mt-2 mb-6"
			class="text-sm [&_code]:text-[0.7rem] [&_td]:px-3 [&_td]:py-2.5  [&_th]:h-11 [&_th]:px-3 "
		>
			<Thead>
				<Tr>
					<Th class="border-r">Component</Th>
					<Th class="border-r">Import Path</Th>
					<Th>Update Scope</Th>
				</Tr>
			</Thead>
			<Tbody>
				<Tr class="">
					<Td class="border-r">Button</Td>
					<Td class="border-r font-mono text-xs">$lib/components/ui/veil/button</Td>
					<Td>Variant and size classes, anchor/button rendering</Td>
				</Tr>
				<Tr class="">
					<Td class="border-r">Card</Td>
					<Td class="border-r font-mono text-xs">$lib/components/ui/veil/card</Td>
					<Td>Root variants and all card composition primitives</Td>
				</Tr>
				<Tr class="">
					<Td class="border-r">Input</Td>
					<Td class="border-r font-mono text-xs">$lib/components/ui/veil/input</Td>
					<Td>Field styling, file input branch, focus/error states</Td>
				</Tr>
				<Tr class="">
					<Td class="border-r">Textarea</Td>
					<Td class="border-r font-mono text-xs">$lib/components/ui/veil/textarea</Td>
					<Td>Multiline field sizing, focus/error/disabled states</Td>
				</Tr>
			</Tbody>
		</Table>
	</section>

	<section class="space-y-4">
		<H2 id="button-component">Button Component</H2>
		<Paragraph>
			Veil button uses rounded-full geometry, compact sizing, and contrast-aware variants.
		</Paragraph>
		<H3 id="button-usage">Usage</H3>
		<DocsCodeBlock
			fileName="button-usage.svelte"
			code={`\<\script lang="ts"\>
	import { Button } from "$lib/components/ui/veil/button";
\<\/script\>

<Button variant="default">Default Button</Button>
<Button variant="outline">Outline Button</Button>
<Button size="lg">Large Button</Button>`}
			lang="svelte"
		/>
		<H3 id="button-source">Source</H3>
		<MultipleCode code={buttonSourceCode} />
	</section>

	<section class="space-y-4">
		<H2 id="card-component">Card Component</H2>
		<Paragraph>
			Veil card supports four variants: <code>default</code>, <code>soft</code>,
			<code>mixed</code>, and <code>outline</code>, with composition primitives for
			header/content/footer layouts.
		</Paragraph>
		<H3 id="card-usage">Usage</H3>
		<div>
			<DocsCodeBlock
				fileName="card-usage.svelte"
				code={`\<\script lang="ts"\>
	import { Card, CardContent, CardHeader, CardTitle } from "$lib/components/ui/veil/card";
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
</Card>`}
				lang="svelte"
			/>
		</div>
		<H3 id="card-source">Source</H3>
		<MultipleCode code={cardSourceCode} />
	</section>

	<section class="space-y-4">
		<H2 id="input-component">Input Component</H2>
		<Paragraph>
			Veil input covers standard and file fields while preserving unified focus and invalid
			states.
		</Paragraph>
		<H3 id="input-usage">Usage</H3>
		<DocsCodeBlock
			fileName="input-usage.svelte"
			code={`\<\script lang="ts"\>
	import { Input } from "$lib/components/ui/veil/input";
\<\/script\>

<Input type="email" placeholder="you@example.com" />
<Input aria-invalid="true" placeholder="Invalid state" />
<Input type="file" />`}
			lang="svelte"
		/>
		<H3 id="input-source">Source</H3>
		<MultipleCode code={inputSourceCode} />
	</section>

	<section class="space-y-4">
		<H2 id="textarea-component">Textarea Component</H2>
		<Paragraph>
			Veil textarea shares input tokens, adds multiline sizing, and keeps focus/validation
			states aligned with other form controls.
		</Paragraph>
		<H3 id="textarea-usage">Usage</H3>
		<div>
			<DocsCodeBlock
				fileName="textarea-usage.svelte"
				code={`\<\script lang="ts"\>
	import { Textarea } from "$lib/components/ui/veil/textarea";
\<\/script\>

<Textarea placeholder="Enter details..." />
<Textarea aria-invalid="true" placeholder="Invalid state" />`}
				lang="svelte"
			/>
		</div>
		<H3 id="textarea-source">Source</H3>
		<MultipleCode code={textareaSourceCode} />
	</section>

	<!-- <section class="space-y-4">
		<H2 id="verification">Verification</H2>
		<Paragraph>Use this checklist after setup:</Paragraph>
		<UnorderedList>
			<ListItem
				><code>data-theme="veil"</code> is applied where theme switching is controlled.</ListItem
			>
			<ListItem><code>theme-container</code> is present on the root body wrapper.</ListItem>
			<ListItem
				>Imports resolve from <code>$lib/components/ui/veil/*</code> without type errors.</ListItem
			>
			<ListItem
				>Button/Card variants and Input/Textarea focus states render correctly in light and
				dark mode.</ListItem
			>
		</UnorderedList>
	</section> -->

	<!-- <section class="space-y-4">
		<H2 id="next-steps">Next Steps</H2>
		<Paragraph>
			If base setup is not complete, follow <Link href="/v2-docs/installation"
				>Installation</Link
			>
			first. After Veil primitives are configured, continue to <Link href="/v2-docs/mcp"
			>MCP Server</Link
			> for AI-assisted discovery and install workflows.
		</Paragraph>
	</section> -->

	<section class="space-y-4">
		<H2 id="setup-complete">Setup Complete</H2>
		<Paragraph>
			Veil theme setup is now complete. Your app is ready to start using Veil components and
			build warm, elegant product interfaces.
		</Paragraph>
		<Paragraph>
			Use primitives from <code>$lib/components/ui/veil/*</code> or explore the
			<Link href="/veil">Veil components</Link> collection to start composing screens.
		</Paragraph>
	</section>
</DocsPageShell>
