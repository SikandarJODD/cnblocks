<script>
  import { all_mists_cta } from "$lib/all_mists/cta";
  import MistBlockPreview from "$lib/components/web/MistBlockPreview.svelte";
</script>

{#each all_mists_cta as block}
  <MistBlockPreview {...block} />
{/each}
