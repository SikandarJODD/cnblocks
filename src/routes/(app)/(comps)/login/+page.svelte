<script>
  import { login } from "$lib/all_blocks/login";
  import BlockPreview from "$lib/components/web/BlockPreview.svelte";
  import { seoMetaTags } from "$lib/config/seo";
  import { MetaTags } from "svelte-meta-tags";
</script>

<MetaTags {...seoMetaTags} title="Login"  />

{#each login as block}
  <BlockPreview {...block} />
{/each}
