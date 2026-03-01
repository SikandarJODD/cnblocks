<script lang="ts">
  import { all_veils_header } from "$lib/all_veils/header";
  import MistBlockPreview from "$lib/components/web/MistBlockPreview.svelte";
  import { seoMetaTags } from "$lib/config/seo";
  import { MetaTags } from "svelte-meta-tags";
</script>

<MetaTags {...seoMetaTags} title="Header" />

{#each all_veils_header as block}
  <MistBlockPreview {...block} />
{/each}

