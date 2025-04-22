<script>
  import { contact } from "$lib/all_blocks/contact";
  import BlockPreview from "$lib/components/web/BlockPreview.svelte";
  import { seoMetaTags } from "$lib/config/seo";
  import { MetaTags } from "svelte-meta-tags";
</script>

<MetaTags {...seoMetaTags} title="Contact"  />
{#each contact as block}
  <BlockPreview {...block} />
{/each}
