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

<!-- <main class="mx-auto w-full max-w-[1480px] p-4 sm:p-6 lg:p-8">
  <Frame.Root>
    <Frame.Panel class="overflow-hidden p-0">
      <Frame.Header class="border-b px-4 py-3 sm:px-5">
        <Frame.Title class="text-sm font-medium">{data.title}</Frame.Title>
        <Frame.Description class="mt-0.5 text-xs"
          >{data.description}</Frame.Description
        >
      </Frame.Header>
      <div class="bg-background min-h-[80vh] p-4 sm:p-6"> -->
{#if doc?.preview}
  <!-- <svelte:component this={doc.preview} /> -->
  <PreviewComponent />
{/if}
<!-- </div>
    </Frame.Panel>
  </Frame.Root>
</main> -->
