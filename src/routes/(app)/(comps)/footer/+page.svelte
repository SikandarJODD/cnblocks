<script>
  import { footer } from "$lib/all_blocks/footer";
  import BlockPreview from "$lib/components/web/BlockPreview.svelte";
  import { seoMetaTags } from "$lib/config/seo";
  import { MetaTags } from "svelte-meta-tags";
</script>

<MetaTags {...seoMetaTags} title="Footer"  />
{#each footer as block}
  <BlockPreview {...block} />
{/each}
