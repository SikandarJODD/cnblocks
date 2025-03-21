<script>
  import { page } from "$app/state";
  import { all_blocks } from "$lib/all_blocks/all_blocks";

  const componentID = $derived(page.params.componentid);
  const categoryID = $derived(page.params.categoryid);

  const category = $derived(
    page.url.pathname.split("/").filter(Boolean)[0] || "/"
  );

  const categoryBlocks = $derived.by(() => {
    let categoryBlocks = all_blocks.filter(
      (block) => block.category === categoryID
    );
    return categoryBlocks;
  });

  const ComponentBlock = $derived.by(() => {
    let componentBlock = categoryBlocks.filter(
      (block) => block.title === componentID
    );
    return componentBlock[0].component;
  });
</script>

<ComponentBlock />
