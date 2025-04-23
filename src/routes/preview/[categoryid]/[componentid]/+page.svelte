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
  import { forgot_password } from "$lib/all_blocks/forgot-password";
  import { hero } from "$lib/all_blocks/hero";
  import { faq } from "$lib/all_blocks/faq";

  let componentID = $derived(page.params.componentid);
  let categoryID = $derived(page.params.categoryid);
  $inspect({ componentID, categoryID }, "componentID and categoryID");

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
    } else if (categoryID === "pricing") {
      categoryBlocks = pricing;
    } else if (categoryID === "forgot-password") {
      categoryBlocks = forgot_password;
    } else if (categoryID === "hero") {
      categoryBlocks = hero;
    } else if (categoryID === "faq") {
      categoryBlocks = faq;
    } else {
      categoryBlocks = all_blocks[categoryID] || hero;
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
