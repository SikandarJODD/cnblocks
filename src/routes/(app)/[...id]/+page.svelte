<script>
  import { page } from "$app/state";
  import { all_blocks } from "$lib/all_blocks/all_blocks";
  import BlockPreview from "$lib/components/web/BlockPreview.svelte";

  let category = $derived(
    page.url.pathname.split("/").filter(Boolean)[0] || "/"
  );

  let categoryPage = $derived.by(() => {
    let categoryBlocks = all_blocks.filter(
      (block) => block.category.toLowerCase() === category.toLowerCase()
    );
    return categoryBlocks;
  });
</script>

<section>
  <div
    class="h-6 w-full bg-[repeating-linear-gradient(-45deg,var(--color-border),var(--color-border)_1px,transparent_1px,transparent_6px)] opacity-35"
  ></div>
</section>
{#each categoryPage as block}
  <BlockPreview {...block} />
{/each}
