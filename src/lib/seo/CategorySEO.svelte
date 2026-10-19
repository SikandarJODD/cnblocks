<script lang="ts">
	import { page } from "$app/state";
	import { projectUrl, seoMetaTags } from "#lib/config/seo.js";
	import { MetaTags } from "svelte-meta-tags";

	let {
		category,
		name,
		description,
	}: {
		category: string;
		name: string;
		description: string;
	} = $props();

	let title = $derived(`${name} Blocks for Svelte – ${category}`);
	let fullTitle = $derived(`${title} | Svelte Shadcn Blocks`);
	let metaDescription = $derived(
		`Explore ${category} ${name.toLowerCase()} blocks for Svelte. ${description}`
	);
	let canonical = $derived(`${projectUrl}${page.url.pathname}`);
</script>

<MetaTags
	{...seoMetaTags}
	{title}
	description={metaDescription}
	{canonical}
	robots="index,follow"
	openGraph={{
		url: canonical,
		type: "website",
		title: fullTitle,
		description: metaDescription,
		siteName: "Svelte Shadcn Blocks",
		images: [
			{
				url: `${projectUrl}/og.png`,
				type: "image/png",
				width: 1200,
				height: 630,
				alt: `${category} ${name} blocks for Svelte`,
			},
		],
	}}
	twitter={{
		cardType: "summary_large_image",
		title: fullTitle,
		description: metaDescription,
		image: `${projectUrl}/og.png`,
		imageAlt: `${category} ${name} blocks for Svelte`,
		site: "@Sikandar_Bhide",
		creator: "@Sikandar_Bhide",
	}}
/>
