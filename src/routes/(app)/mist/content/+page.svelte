<script>
  import { all_mists_content } from "$lib/all_mists/content";
  import MistBlockPreview from "$lib/components/web/MistBlockPreview.svelte";
  import { seoMetaTags } from "$lib/config/seo";
  import { MetaTags } from "svelte-meta-tags";
</script>

<MetaTags {...seoMetaTags} title="Content" />

{#each all_mists_content as block}
  <MistBlockPreview {...block} />
{/each}
