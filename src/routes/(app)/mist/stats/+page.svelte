<script>
  import { all_mists_stats } from "$lib/all_mists/stats";
  import MistBlockPreview from "$lib/components/web/MistBlockPreview.svelte";
</script>

{#each all_mists_stats as block}
  <MistBlockPreview {...block} />
{/each}

