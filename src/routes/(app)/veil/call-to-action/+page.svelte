<script lang="ts">
  import { all_veils_call_to_action } from "$lib/all_veils/call-to-action";
  import MistBlockPreview from "$lib/components/web/MistBlockPreview.svelte";
  import { seoMetaTags } from "$lib/config/seo";
  import { MetaTags } from "svelte-meta-tags";
</script>

<MetaTags {...seoMetaTags} title="Call To Action" />

{#each all_veils_call_to_action as block}
  <MistBlockPreview {...block} />
{/each}

