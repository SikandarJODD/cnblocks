<script>
  import { hero } from "$lib/all_blocks/hero";
  import BlockPreview from "$lib/components/web/BlockPreview.svelte";
</script>

{#each hero as block}
  <BlockPreview {...block} />
{/each}
