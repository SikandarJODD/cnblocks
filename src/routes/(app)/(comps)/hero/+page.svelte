<script>
  import { hero } from "$lib/all_blocks/hero";
  import BlockPreview from "$lib/components/web/BlockPreview.svelte";
  import { seoMetaTags } from "$lib/config/seo";
  import { MetaTags } from "svelte-meta-tags";
</script>

<MetaTags {...seoMetaTags} title="Hero" />
{#each hero as block}
  <BlockPreview {...block} />
{/each}
