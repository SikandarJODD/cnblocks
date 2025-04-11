<script>
  import { page } from "$app/state";
  import { all_blocks } from "$lib/all_blocks/all_blocks";

  const componentID = $derived(page.params.componentid);
  const categoryID = $derived(page.params.categoryid);

  let categoryBlocks = $derived.by(() => {
    let categoryBlocks = all_blocks[categoryID] || all_blocks["hero"];
    return categoryBlocks;
  });

  let ComponentBlock = $derived.by(() => {
    let componentBlock = categoryBlocks.filter(
      (block) => block.title === componentID
    );
    return componentBlock[0].component;
  });
</script>

<ComponentBlock />
