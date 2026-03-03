<script lang="ts">
	import { page } from "$app/state";
	import { MetaTags } from "svelte-meta-tags";

	type Props = {
		title: string;
		description: string;
		keywords?: string[];
		canonical?: string;
		noindex?: boolean;
		images?: {
			url: string;
			width?: number;
			height?: number;
			alt?: string;
		}[];
	};

	let { title, description, keywords, canonical, noindex = false, images }: Props = $props();

	let resolvedCanonical = $derived(canonical ?? `${page.url.origin}${page.url.pathname}`);
	let resolvedImages = $derived(
		images && images.length > 0
			? images
			: [
					{
						url: `${page.url.origin}/og.png`,
						width: 1200,
						height: 630,
						alt: "Svelte Marketing Blocks",
					},
				]
	);
</script>

<svelte:head>
	{#if keywords?.length}
		<meta name="keywords" content={keywords.join(", ")} />
	{/if}
	{#if noindex}
		<meta name="robots" content="noindex, nofollow" />
	{/if}
</svelte:head>

<MetaTags
	{title}
	titleTemplate="%s - Svelte Marketing Blocks"
	{description}
	canonical={resolvedCanonical}
	openGraph={{
		url: resolvedCanonical,
		title: title,
		description: description,
		images: resolvedImages,
		siteName: "Svelte Marketing Blocks",
	}}
	twitter={{
		creator: "@Sikandar_Bhide",
		site: "@Sikandar_Bhide",
		cardType: "summary_large_image",
		title: title,
		description: description,
		image: resolvedImages[0]?.url,
		imageAlt: resolvedImages[0]?.alt ?? "Svelte Marketing Blocks",
	}}
/>
