<script>
  import { team } from "$lib/all_blocks/team";
  import BlockPreview from "$lib/components/web/BlockPreview.svelte";
  import { seoMetaTags } from "$lib/config/seo";
  import { MetaTags } from "svelte-meta-tags";
</script>

<MetaTags {...seoMetaTags} title="Team" />
{#each team as block}
  <BlockPreview {...block} />
{/each}
