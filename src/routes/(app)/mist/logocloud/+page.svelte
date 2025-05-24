<script>
  import { all_mists_logocloud } from "$lib/all_mists/logocloud";
  import MistBlockPreview from "$lib/components/web/MistBlockPreview.svelte";
  import { seoMetaTags } from "$lib/config/seo";
  import { MetaTags } from "svelte-meta-tags";
</script>

<MetaTags {...seoMetaTags} title="Logo Cloud" />

{#each all_mists_logocloud as block}
  <MistBlockPreview {...block} />
{/each}
