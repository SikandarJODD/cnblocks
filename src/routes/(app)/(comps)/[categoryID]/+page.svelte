<script>
  import { page } from "$app/state";
  import { all_blocks } from "$lib/all_blocks/all_blocks";
  import BlockPreview from "$lib/components/web/BlockPreview.svelte";

  let blocks = $derived.by(() => {
    let id = page.params.categoryID;
    let data = all_blocks[id] || all_blocks["hero"];
    return data;
  });
</script>

{#each blocks as block}
  <BlockPreview {...block} />
{/each}
