<script lang="ts">
	import { page } from "$app/state";
	import Sponsors from "#lib/components/base/sponsors/sponsors.svelte";
	import { getDocsLayoutContext } from "#lib/components/layout/docs-layout-context.js";
	import {
		H1,
		H2,
		Link,
		ListItem,
		Paragraph,
		UnorderedList,
	} from "#lib/components/markdown/index.js";
	import { JsonLd, MetaTags } from "svelte-meta-tags";
	import { FaviconLink } from "#lib/components/ui/favicon-link/index.ts";

	const title = "Introduction | Svelte Marketing Blocks";
	const description =
		"Learn how to use Svelte Marketing Blocks: accessible, responsive, copy-and-paste sections built with Svelte 5, Tailwind CSS, and shadcn-svelte.";
	const keywords = [
		"Svelte Marketing Blocks",
		"Svelte 5 components",
		"SvelteKit blocks",
		"shadcn-svelte",
		"Tailwind CSS components",
		"Svelte landing page components",
		"Svelte UI blocks",
	];

	let canonical = $derived(`${page.url.origin}${page.url.pathname}`);
	let socialImage = $derived(`${page.url.origin}/og.png`);
</script>

<MetaTags
	{title}
	{description}
	{canonical}
	{keywords}
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
				alt: "Svelte Marketing Blocks documentation",
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
		imageAlt: "Svelte Marketing Blocks documentation",
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
			<H1 id="introduction" class="font-display text-3xl tracking-tight sm:text-4xl">
				Introduction
			</H1>
			<Paragraph class="max-w-prose leading-relaxed text-pretty">
				Accessible, responsive marketing sections for Svelte 5, built with Tailwind CSS and
				shadcn-svelte.
			</Paragraph>
		</header>

		<section class="space-y-3">
			<H2 id="credits">Credits</H2>
			<Paragraph class="max-w-prose leading-relaxed">
				Inspired by <FaviconLink
					href="https://tailark.com"
					target="_blank"
					rel="noreferrer"
					faviconSrc="https://www.google.com/s2/favicons?domain=tailark.com&sz=128"
				>
					Tailark
				</FaviconLink>
				and adapted for Svelte.
			</Paragraph>
			<Paragraph class="max-w-prose leading-relaxed">
				Built with <FaviconLink
					href="https://www.shadcn-svelte.com"
					target="_blank"
					rel="noreferrer"
				>
					shadcn-svelte
				</FaviconLink>
				and Tailwind CSS.
			</Paragraph>
		</section>

		<section aria-label="Variants">
			<table
				class="w-full border-collapse border border-dashed border-ink/30 text-sm dark:border-emerald-400/40"
			>
				<tbody>
					<tr class="border-b border-dashed border-ink/30 dark:border-emerald-400/40">
						<td
							class="w-28 border-r border-dashed border-ink/30 px-3 py-2 font-gmono text-ink/80 dark:border-emerald-400/40 dark:text-emerald-400"
							>Normal</td
						>
						<td class="px-3 py-2 font-gmono text-muted-foreground">Bold marketing visuals.</td>
					</tr>
					<tr class="border-b border-dashed border-ink/30 dark:border-emerald-400/40">
						<td
							class="w-28 border-r border-dashed border-ink/30 px-3 py-2 font-gmono text-ink/80 dark:border-emerald-400/40 dark:text-emerald-400"
							>Mist</td
						>
						<td class="px-3 py-2 font-gmono text-muted-foreground">
							Quiet, content-focused layouts.
						</td>
					</tr>
					<tr>
						<td
							class="w-28 border-r border-dashed border-ink/30 px-3 py-2 font-gmono text-ink/80 dark:border-emerald-400/40 dark:text-emerald-400"
							>Veil</td
						>
						<td class="px-3 py-2 font-gmono text-muted-foreground">
							Polished SaaS and product sections.
						</td>
					</tr>
				</tbody>
			</table>
		</section>

		<section class="space-y-3">
			<H2 id="quick-start">Quick start</H2>
			<Paragraph class="max-w-prose leading-relaxed">
				Begin with <Link href="/docs/installation">installation</Link>, then choose the
				theme that fits your project.
			</Paragraph>
		</section>

		<Sponsors />
	</article>
</div>
