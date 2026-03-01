<script lang="ts">
  import { all_veils_features } from "$lib/all_veils/features";
  import MistBlockPreview from "$lib/components/web/MistBlockPreview.svelte";
  import { seoMetaTags } from "$lib/config/seo";
  import { MetaTags } from "svelte-meta-tags";
</script>

<MetaTags {...seoMetaTags} title="Features" />

{#each all_veils_features as block}
  <MistBlockPreview {...block} />
{/each}

