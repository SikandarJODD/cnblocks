<script lang="ts">
  import SEOComponent from "$lib/seo/SEO.svelte";
  import type { StatsSlug } from "../../../../veil/stats/data";
  import { statsDocsBySlug } from "../../../../veil/stats/data";
  import type { PageData } from "./$types";

  let { data }: { data: PageData } = $props();

  let doc = $derived(statsDocsBySlug[data.slug as StatsSlug]);
  let PreviewComponent = $derived(doc.preview);
</script>

<SEOComponent
  title={data.seo.title}
  description={data.seo.description}
  keywords={data.seo.keywords}
/>

<main class="bg-background mx-auto min-h-screen w-full max-w-[1480px] p-4 sm:p-6 lg:p-8">
  {#if doc?.preview}
    <PreviewComponent />
  {/if}
</main>
