<script>
  import { all_mists_logocloud } from "$lib/all_mists/logocloud";
  import MistBlockPreview from "$lib/components/web/MistBlockPreview.svelte";
</script>

{#each all_mists_logocloud as block}
  <MistBlockPreview {...block} />
{/each}
