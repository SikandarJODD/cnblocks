<script>
  import { all_mists_comparator } from "$lib/all_mists/comparator";
  import MistBlockPreview from "$lib/components/web/MistBlockPreview.svelte";
</script>

{#each all_mists_comparator as block}
  <MistBlockPreview {...block} />
{/each}
