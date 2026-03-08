<script lang="ts">
	import { page } from "$app/state";
	import SEOComponent from "$lib/seo/SEO.svelte";

	let { children } = $props();

	type PreviewTheme = "veil" | "mist";

	const numberWords = new Map<string, string>([
		["one", "One"],
		["two", "Two"],
		["three", "Three"],
		["four", "Four"],
		["five", "Five"],
		["six", "Six"],
		["seven", "Seven"],
		["eight", "Eight"],
		["nine", "Nine"],
		["ten", "Ten"],
		["eleven", "Eleven"],
		["twelve", "Twelve"],
		["thirteen", "Thirteen"],
		["fourteen", "Fourteen"],
	]);

	const routeAliases: Record<string, string> = {
		cta: "Call To Action",
		faq: "FAQ",
		faqs: "FAQs",
		logocloud: "Logo Cloud",
		"logo-cloud": "Logo Cloud",
		features: "Features",
		testimonial: "Testimonial",
	};

	function formatToken(token: string): string {
		if (routeAliases[token]) {
			return routeAliases[token];
		}

		if (numberWords.has(token)) {
			return numberWords.get(token)!;
		}

		return token
			.split("-")
			.map((part) => routeAliases[part] ?? numberWords.get(part) ?? `${part[0]?.toUpperCase() ?? ""}${part.slice(1)}`)
			.join(" ");
	}

	function getPreviewMeta(pathname: string) {
		const segments = pathname.split("/").filter(Boolean);
		const previewSegments = segments[0] === "preview" ? segments.slice(1) : segments;
		const themeSegment =
			previewSegments[0] === "veil" || previewSegments[0] === "mist" ? previewSegments[0] : null;
		const contentSegments = themeSegment ? previewSegments.slice(1) : previewSegments;
		const [category = "component", ...variantParts] = contentSegments;

		const themeLabel = themeSegment ? `${formatToken(themeSegment)} ` : "";
		const categoryLabel = formatToken(category);
		const variantLabel = variantParts.map(formatToken).join(" ").trim();
		const title = `${themeLabel}${categoryLabel}${variantLabel ? ` ${variantLabel}` : ""} Preview`;
		const description = `Preview page for the ${themeLabel.toLowerCase()}${categoryLabel.toLowerCase()}${variantLabel ? ` ${variantLabel.toLowerCase()}` : ""} block in Svelte Marketing Blocks.`;
		const keywords = [
			"preview",
			"svelte marketing blocks",
			themeSegment,
			category,
			...variantParts,
		].filter((value): value is string => Boolean(value));

		return {
			title,
			description,
			keywords,
		};
	}

	function resolvePreviewTheme(pathname: string): PreviewTheme | null {
		const segments = pathname.split("/").filter(Boolean);
		const themeSegment = segments[0] === "preview" ? segments[1] : segments[0];

		return themeSegment === "veil" || themeSegment === "mist" ? themeSegment : null;
	}

	function getPreviewCategory(pathname: string): string | null {
		const segments = pathname.split("/").filter(Boolean);
		const previewSegments = segments[0] === "preview" ? segments.slice(1) : segments;
		const themeSegment =
			previewSegments[0] === "veil" || previewSegments[0] === "mist" ? previewSegments[0] : null;
		const contentSegments = themeSegment ? previewSegments.slice(1) : previewSegments;

		return contentSegments[0] ?? null;
	}

	const seo = $derived(getPreviewMeta(page.url.pathname));
	const previewTheme = $derived(resolvePreviewTheme(page.url.pathname));
	const previewCategory = $derived(getPreviewCategory(page.url.pathname));
</script>

<SEOComponent
	title={seo.title}
	description={seo.description}
	keywords={seo.keywords}
	noindex={true}
/>

{#if previewTheme}
	<div data-theme={previewTheme}>
		<div
			class={[
				"theme-container",
				previewCategory === "header" && "min-h-[140vh] bg-background",
			]}
		>
			<div class={previewCategory === "header" ? "pb-24" : undefined}>
				{@render children()}
			</div>
		</div>
	</div>
{:else}
	<div
		class={previewCategory === "header" ? "min-h-[140vh] bg-background pb-24" : undefined}
	>
		{@render children()}
	</div>
{/if}
