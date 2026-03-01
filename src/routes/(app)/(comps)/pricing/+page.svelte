<script>
  import { pricing } from "$lib/all_blocks/pricing";
  import BlockPreview from "$lib/components/web/BlockPreview.svelte";
  import { seoMetaTags } from "$lib/config/seo";
  import { MetaTags } from "svelte-meta-tags";
</script>

<MetaTags {...seoMetaTags} title="Pricing" />
{#each pricing as block}
  <BlockPreview {...block} />
{/each}
