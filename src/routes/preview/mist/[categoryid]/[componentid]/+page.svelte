<script lang="ts">
  import { page } from "$app/state";
  import { all_blocks } from "$lib/all_blocks/all_blocks";

  // All Mist Blocks
  import { all_mists_heros } from "$lib/all_mists/hero";
  import { all_mists_features } from "$lib/all_mists/feature";
  import { all_mists_logocloud } from "$lib/all_mists/logocloud";
  import { all_mists_footer } from "$lib/all_mists/footer";
  import { all_mists_contact } from "$lib/all_mists/contact";
  import { all_mists_testimonial } from "$lib/all_mists/testimonial";
  import { all_mists_comparator } from "$lib/all_mists/comparator";
  import { all_mists_content } from "$lib/all_mists/content";
  import { all_mists_cta } from "$lib/all_mists/cta";
  import { all_mists_stats } from "$lib/all_mists/stats";
  import { all_mists_team } from "$lib/all_mists/team";
  import { all_mists_pricing } from "$lib/all_mists/pricing";
  import { all_mists_signup } from "$lib/all_mists/signup";
  import { all_mists_integrations } from "$lib/all_mists/integrations";
  import { all_mists_login } from "$lib/all_mists/login";
  import { all_mists_forgot_password } from "$lib/all_mists/forgot_password";

  let componentID = $derived(page.params.componentid);
  let categoryID = $derived(page.params.categoryid);

  const categoryMapping = {
    feature: all_mists_features,
    footer: all_mists_footer,
    contact: all_mists_contact,
    testimonial: all_mists_testimonial,
    integration: all_mists_integrations,
    signup: all_mists_signup,
    login: all_mists_login,
    pricing: all_mists_pricing,
    "forgot-password": all_mists_forgot_password,
    hero: all_mists_heros,
    content: all_mists_content,
    comparator: all_mists_comparator,
    stats: all_mists_stats,
    team: all_mists_team,
    logocloud: all_mists_logocloud,
    cta: all_mists_cta,
  } as const;

  let categoryBlocks = $derived.by(() => {
    return (
      categoryMapping[categoryID as keyof typeof categoryMapping] ||
      all_blocks[categoryID] ||
      all_mists_heros
    );
  });

  // else if (categoryID === "faq") {
  //   categoryBlocks = all_mists_faq;
  // }

  let ComponentBlock = $derived.by(() => {
    let componentBlock = categoryBlocks.filter(
      (block) => block.slug === componentID
    );
    return componentBlock[0].component;
  });
</script>

<ComponentBlock />
