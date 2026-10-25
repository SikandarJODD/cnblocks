<script>
	import FeatureShowcase from "#lib/components/base/landing/feature-showcase.svelte";
	import LandingHero from "#lib/components/base/landing/hero.svelte";
	import { projectUrl } from "#lib/config/seo.js";
	import FeatureSection from "#lib/web/layouts/FeatureSection.svelte";
	import FeatureSectionTwo from "#lib/web/layouts/FeatureSectionTwo.svelte";
	import SiteHero from "#lib/web/layouts/SiteHero.svelte";
	import { JsonLd } from "svelte-meta-tags";

	const homepageDescription =
		"Explore 230 UI and marketing blocks for Svelte, including 38 Dusk blocks available now.";
</script>

<svelte:head>
	<title>Svelte Shadcn Blocks - 200+ UI & Marketing Blocks</title>
	<meta name="description" content={homepageDescription} />

	<meta property="og:title" content="Svelte Shadcn Blocks - 200+ UI & Marketing Blocks" />
	<meta property="og:description" content={homepageDescription} />
	<meta property="og:image" content={`${projectUrl}/og.png`} />
	<meta property="og:url" content={projectUrl} />
	<meta property="og:type" content="website" />

	<meta name="twitter:title" content="Svelte Shadcn Blocks - 200+ UI & Marketing Blocks" />
	<meta name="twitter:description" content={homepageDescription} />
	<meta name="twitter:image" content={`${projectUrl}/og.png`} />
	<meta name="twitter:card" content="summary_large_image" />

	<meta
		name="keywords"
		content="Svelte UI components, Blocks, Svelte blocks,  Svelte marketing blocks, ShadCN-Svelte, responsive UI, landing page builder, Svelte 5, Tailwind v4, Svelte Shadcn Blocks, Svelte marketing components, Svelte UI library, Svelte templates, Svelte components, Svelte UI kit"
	/>
	<meta name="author" content="Sikandar_Bhide" />
	<link rel="canonical" href={projectUrl} />
</svelte:head>

<JsonLd
	schema={{
		"@type": "WebSite",
		"@id": `${projectUrl}/#website`,
		name: "Svelte Shadcn Blocks",
		description: homepageDescription,
		url: projectUrl,
		inLanguage: "en",
	}}
/>

<JsonLd
	schema={{
		"@type": "CollectionPage",
		"@id": `${projectUrl}/#webpage`,
		name: "Svelte UI and Marketing Block Collections",
		description: homepageDescription,
		url: projectUrl,
		inLanguage: "en",
		isPartOf: {
			"@id": `${projectUrl}/#website`,
		},
		mainEntity: {
			"@type": "ItemList",
			name: "Svelte block collections",
			numberOfItems: 4,
			itemListElement: [
				{
					"@type": "ListItem",
					position: 1,
					name: "Kit blocks",
					url: `${projectUrl}/kit/hero`,
				},
				{
					"@type": "ListItem",
					position: 2,
					name: "Mist blocks",
					url: `${projectUrl}/mist/hero`,
				},
				{
					"@type": "ListItem",
					position: 3,
					name: "Veil blocks",
					url: `${projectUrl}/veil`,
				},
				{
					"@type": "ListItem",
					position: 4,
					name: "Dusk blocks",
					description: "A collection of 38 Zinc-based marketing blocks for Svelte.",
					url: `${projectUrl}/dusk/hero`,
				},
			],
		},
	}}
/>

<!-- <section>
  <div
    class="mx-4 max-w-7xl border-x border-b px-8 py-16 [--color-border:color-mix(in_oklab,var(--color-zinc-200)_75%,transparent)] md:mx-auto dark:[--color-border:color-mix(in_oklab,var(--color-zinc-800)_60%,transparent)]"
  >
    <div class="max-w-2xl">
      <h1 class="text-balance text-3xl font-bold sm:text-4xl">
        Svelte Shadcn Blocks
      </h1>
      <h2 class="text-balance text-3xl sm:mt-1 font-bold sm:text-4xl">
        200+ Pre-built UI & Marketing Blocks
      </h2>
      <p class="mb-6 mt-3 text-base font-montserrat text-muted-foreground">
        Speed up your workflow with responsive, pre-built UI blocks designed for
        marketing websites.
      </p>

      <div class="sm:space-x-2 gap-2 flex items-center flex-wrap">
        <Button href="/kit/hero" class="w-full sm:w-fit">Explore Blocks</Button>
        <AnimatedButton href="/templates" class="w-full sm:w-fit"
          >Explore Templates</AnimatedButton
        >
      </div>
    </div>
  </div>
</section> -->
<!-- <SiteHero /> -->
<!-- <FeatureSection /> -->
<!-- <FeatureSectionTwo /> -->
<LandingHero />
<FeatureShowcase />
