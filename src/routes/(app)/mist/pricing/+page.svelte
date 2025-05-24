<script>
  import { all_mists_pricing } from "$lib/all_mists/pricing";
  import MistBlockPreview from "$lib/components/web/MistBlockPreview.svelte";
  import { seoMetaTags } from "$lib/config/seo";
  import { MetaTags } from "svelte-meta-tags";
</script>

<MetaTags {...seoMetaTags} title="Pricing" />
{#each all_mists_pricing as block}
  <MistBlockPreview {...block} />
{/each}
