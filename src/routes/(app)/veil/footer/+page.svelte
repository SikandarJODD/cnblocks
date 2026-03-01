<script lang="ts">
  import { all_veils_footer } from "$lib/all_veils/footer";
  import MistBlockPreview from "$lib/components/web/MistBlockPreview.svelte";
  import { seoMetaTags } from "$lib/config/seo";
  import { MetaTags } from "svelte-meta-tags";
</script>

<MetaTags {...seoMetaTags} title="Footer" />

{#each all_veils_footer as block}
  <MistBlockPreview {...block} />
{/each}

