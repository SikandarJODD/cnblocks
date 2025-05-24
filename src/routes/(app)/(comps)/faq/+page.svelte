<script>
  import { faq } from "$lib/all_blocks/faq";
  import BlockPreview from "$lib/components/web/BlockPreview.svelte";
  import { seoMetaTags } from "$lib/config/seo";
  import { MetaTags } from "svelte-meta-tags";
</script>

<MetaTags {...seoMetaTags} title="FAQ" />
{#each faq as block}
  <BlockPreview {...block} />
{/each}
