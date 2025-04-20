<script>
  import { footer } from "$lib/all_blocks/footer";
  import BlockPreview from "$lib/components/web/BlockPreview.svelte";
  import { onMount } from "svelte";
  onMount(() => {
    console.log("Footer");
  });
</script>

{#each footer as block}
  <BlockPreview {...block} />
{/each}