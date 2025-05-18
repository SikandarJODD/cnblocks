<script>
  import { all_mists_integrations } from "$lib/all_mists/integrations";
  import MistBlockPreview from "$lib/components/web/MistBlockPreview.svelte";
</script>

{#each all_mists_integrations as block}
  <MistBlockPreview {...block} />
{/each}
