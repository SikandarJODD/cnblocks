<script>
  import { all_mists_team } from "$lib/all_mists/team";
  import MistBlockPreview from "$lib/components/web/MistBlockPreview.svelte";
</script>

{#each all_mists_team as block}
  <MistBlockPreview {...block} />
{/each}

