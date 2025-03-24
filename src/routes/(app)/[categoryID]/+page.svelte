<script>
  import { page } from "$app/state";
  import { category_blocks } from "$lib/all_blocks/all_blocks";
  import BlockPreview from "$lib/components/web/BlockPreview.svelte";

  let blocks = $derived.by(() => {
    let id = page.params.categoryID;
    let data = category_blocks(id);
    return data;
  });
</script>

<section>
  <div
    class="h-6 w-full bg-[repeating-linear-gradient(-45deg,var(--color-border),var(--color-border)_1px,transparent_1px,transparent_6px)] opacity-35"
  ></div>
</section>
<!-- For Testing on one block -->
<!-- <BlockPreview preview={categoryPage[0].preview} code={categoryPage[0].code} title="code" category="mint"   /> -->

<!-- For Prod -->
{#each blocks as block}
  <BlockPreview {...block} />
{/each}
