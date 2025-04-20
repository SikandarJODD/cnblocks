<script>
  import { integration } from "$lib/all_blocks/integration";
  import BlockPreview from "$lib/components/web/BlockPreview.svelte";
</script>



{#each integration as block}
  <BlockPreview {...block} />
{/each}
