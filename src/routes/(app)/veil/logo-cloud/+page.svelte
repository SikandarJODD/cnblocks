<script lang="ts">
  import { all_veils_logo_cloud } from "$lib/all_veils/logo-cloud";
  import MistBlockPreview from "$lib/components/web/MistBlockPreview.svelte";
  import { seoMetaTags } from "$lib/config/seo";
  import { MetaTags } from "svelte-meta-tags";
</script>

<MetaTags {...seoMetaTags} title="Logo Cloud" />

{#each all_veils_logo_cloud as block}
  <MistBlockPreview {...block} />
{/each}

