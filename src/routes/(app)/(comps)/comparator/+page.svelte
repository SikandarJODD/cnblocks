<script>
  import { comparator } from "$lib/all_blocks/comparator";
  import BlockPreview from "$lib/components/web/BlockPreview.svelte";
  import { seoMetaTags } from "$lib/config/seo";
  import { MetaTags } from "svelte-meta-tags";
</script>

<MetaTags {...seoMetaTags} title="Comparator" />
{#each comparator as block}
  <BlockPreview {...block} />
{/each}
