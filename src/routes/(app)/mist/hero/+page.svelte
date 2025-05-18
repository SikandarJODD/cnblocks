<script>
  import { all_mists_heros } from "$lib/all_mists/hero";
  import MistBlockPreview from "$lib/components/web/MistBlockPreview.svelte";
</script>

{#each all_mists_heros as block}
  <MistBlockPreview {...block} />
{/each}

