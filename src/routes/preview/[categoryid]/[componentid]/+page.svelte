<script>
  import { page } from "$app/state";
  import { all_blocks } from "$lib/all_blocks/all_blocks";

  let componentID = $derived(page.params.componentid);
  let categoryID = $derived(page.params.categoryid);
  let category = $derived(
    page.url.pathname.split("/").filter(Boolean)[0] || "/"
  );
  let categoryBlocks = $derived.by(() => {
    let categoryBlocks = all_blocks.filter(
      (block) => block.category === categoryID
    );
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
