<script lang="ts">
	import SEOComponent from "$lib/seo/SEO.svelte";
	import { statsOverview } from "./data";
</script>

<SEOComponent
	title={statsOverview.seo.title}
	description={statsOverview.seo.description}
	keywords={statsOverview.seo.keywords}
/>

<div class="space-y-8 md:space-y-10">
	<section class="space-y-3">
		<h1 class="text-3xl font-semibold tracking-tight md:text-4xl">{statsOverview.title}</h1>
		<p class="text-muted-foreground max-w-3xl">{statsOverview.description}</p>
	</section>

	<section class="grid gap-6 md:grid-cols-2">
		{#each statsOverview.items as item}
			<article class="overflow-hidden rounded-xl border bg-card">
				<div class="bg-background p-3">
					<svelte:component this={item.preview} />
				</div>
				<div class="space-y-2 border-t p-4">
					<div class="flex items-center justify-between gap-3">
						<h2 class="text-lg font-medium">{item.title}</h2>
						<a class="text-primary text-sm font-medium hover:underline" href={item.href}>
							Open docs
						</a>
					</div>
					<p class="text-muted-foreground text-sm">{item.description}</p>
				</div>
			</article>
		{/each}
	</section>
</div>
