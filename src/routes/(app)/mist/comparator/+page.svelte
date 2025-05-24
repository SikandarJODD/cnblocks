<script>
  import { all_mists_comparator } from "$lib/all_mists/comparator";
  import MistBlockPreview from "$lib/components/web/MistBlockPreview.svelte";
  import { seoMetaTags } from "$lib/config/seo";
  import { MetaTags } from "svelte-meta-tags";
</script>

<MetaTags {...seoMetaTags} title="Comparator" />
{#each all_mists_comparator as block}
  <MistBlockPreview {...block} />
{/each}
