<script>
  import { all_blocks } from "$lib/all_blocks/all_blocks";
  import BlockPreview from "$lib/components/web/BlockPreview.svelte";
  let blocks = $derived.by(() => {
    let id = page.params.categoryID;
    let data = all_blocks[id] || all_blocks["hero"];
    return data;
  });

  import { page } from "$app/state";
  import { category_blocks } from "$lib/all_blocks/all_blocks";
  import { seoMetaTags } from "$lib/config/seo";
  import { MetaTags } from "svelte-meta-tags";
  let categoryTitle = $derived.by(() => {
    let id = page.params.categoryID;
    let title = category_blocks.filter((block) => block.href === `/${id}`)[0]
      .title;
    return title || "Hero";
  });
</script>

<MetaTags {...seoMetaTags} title={categoryTitle}  />

{#each blocks as block}
  <BlockPreview {...block} />
{/each}
