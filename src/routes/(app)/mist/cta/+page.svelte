<script>
  import { all_mists_cta } from "$lib/all_mists/cta";
  import MistBlockPreview from "$lib/components/web/MistBlockPreview.svelte";
  import { seoMetaTags } from "$lib/config/seo";
  import { MetaTags } from "svelte-meta-tags";
</script>

<MetaTags {...seoMetaTags} title="CTA" />
{#each all_mists_cta as block}
  <MistBlockPreview {...block} />
{/each}
