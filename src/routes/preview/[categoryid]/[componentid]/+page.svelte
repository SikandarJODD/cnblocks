<script>
  import { page } from "$app/state";
  import { all_blocks } from "$lib/all_blocks/all_blocks";
  import { footer } from "$lib/all_blocks/footer";
  import { feature } from "$lib/all_blocks/features";
  import { testimonials } from "$lib/all_blocks/testimonial";
  import { pricing } from "$lib/all_blocks/pricing";
  import { integration } from "$lib/all_blocks/integration";
  import { contact } from "$lib/all_blocks/contact";
  import { signup } from "$lib/all_blocks/signup";
  import { login } from "$lib/all_blocks/login";

  const componentID = $derived(page.params.componentid);
  const categoryID = $derived(page.params.categoryid);

  let categoryBlocks = $derived.by(() => {
    let categoryBlocks = [];
    if (categoryID === "feature") {
      categoryBlocks = feature;
    } else if (categoryID === "footer") {
      categoryBlocks = footer;
    } else if (categoryID === "contact") {
      categoryBlocks = contact;
    } else if (categoryID === "testimonial") {
      categoryBlocks = testimonials;
    } else if (categoryID === "integration") {
      categoryBlocks = integration;
    } else if (categoryID === "signup") {
      categoryBlocks = signup;
    } else if (categoryID === "login") {
      categoryBlocks = login;
    } else {
      categoryBlocks = all_blocks[categoryID] || all_blocks["hero"];
    }
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
