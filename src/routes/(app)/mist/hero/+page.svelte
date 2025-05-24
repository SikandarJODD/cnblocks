<script>
  import { all_mists_heros } from "$lib/all_mists/hero";
  import MistBlockPreview from "$lib/components/web/MistBlockPreview.svelte";
  import { seoMetaTags } from "$lib/config/seo";
  import { MetaTags } from "svelte-meta-tags";
</script>

<MetaTags {...seoMetaTags} title="Hero" />

{#each all_mists_heros as block}
  <MistBlockPreview {...block} />
{/each}

