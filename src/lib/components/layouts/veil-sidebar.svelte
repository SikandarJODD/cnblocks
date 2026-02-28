<script lang="ts" module>
  type GettingStartedLink = {
    title: string;
    url: string;
  };

  type VeilVariantLink = {
    title: string;
    id: string;
    url: string;
  };

  type VeilComponentCategory = {
    title: string;
    slug: string;
    url: string;
    items: VeilVariantLink[];
  };

  const createVariant = (
    slug: string,
    id: string,
    label: string,
  ): VeilVariantLink => ({
    title: `${label} (${id})`,
    id,
    url: `/veil/${slug}/${id}`,
  });

  const gettingStarted: GettingStartedLink[] = [
    { title: "Introduction", url: "/veil/introduction" },
    { title: "Installation", url: "/veil/installation" },
    { title: "Theme Setup", url: "/veil/theme-setup" },
  ];

  const componentCategories: VeilComponentCategory[] = [
    {
      title: "Hero",
      slug: "hero",
      url: "/veil/hero",
      items: [
        createVariant("hero", "hero-one", "Integration Grid Hero"),
        createVariant("hero", "hero-two", "Logo Matrix Hero"),
        createVariant("hero", "hero-three", "AI Prompt Hero"),
        createVariant("hero", "hero-four", "AI Workspace Hero"),
        createVariant("hero", "hero-five", "Product Spotlight Hero"),
      ],
    },
    {
      title: "Header",
      slug: "header",
      url: "/veil/header",
      items: [
        createVariant("header", "header-one", "Classic Center Nav"),
        createVariant("header", "header-two", "Floating Morph Nav"),
        createVariant("header", "header-three", "Classic Center Nav Alt"),
        createVariant("header", "header-four", "Floating Morph Nav Alt"),
      ],
    },
    {
      title: "Features",
      slug: "features",
      url: "/veil/features",
      items: [
        createVariant("features", "features-one", "Feature Cards Outline"),
        createVariant("features", "features-two", "Feature Cards Mixed"),
        createVariant(
          "features",
          "features-three",
          "Interactive Feature Switcher",
        ),
      ],
    },
    {
      title: "Content",
      slug: "content",
      url: "/veil/content",
      items: [
        createVariant("content", "content-one", "Split Text Content"),
        createVariant("content", "content-two", "Two-Column Highlights"),
        createVariant("content", "content-three", "Icon Feature Highlights"),
      ],
    },
    {
      title: "Integration",
      slug: "integration",
      url: "/veil/integration",
      items: [
        createVariant(
          "integration",
          "integration-one",
          "Linear Integrations Diagram",
        ),
        createVariant(
          "integration",
          "integration-two",
          "Orbit Integrations Diagram",
        ),
      ],
    },
    {
      title: "Call To Action",
      slug: "call-to-action",
      url: "/veil/call-to-action",
      items: [
        createVariant(
          "call-to-action",
          "call-to-action-one",
          "Dual CTA Centered",
        ),
        createVariant("call-to-action", "call-to-action-two", "Offer Card CTA"),
        createVariant("call-to-action", "call-to-action-three", "Newsletter CTA"),
        createVariant(
          "call-to-action",
          "call-to-action-four",
          "Pricing CTA Card",
        ),
      ],
    },
    {
      title: "Stats",
      slug: "stats",
      url: "/veil/stats",
      items: [
        createVariant("stats", "stats-one", "Stats Grid Basic"),
        createVariant("stats", "stats-two", "Stats Plus Bars"),
        createVariant("stats", "stats-three", "Stats Plus Globe"),
        createVariant("stats", "stats-four", "Stats Split Globe"),
      ],
    },
    {
      title: "Pricing",
      slug: "pricing",
      url: "/veil/pricing",
      items: [
        createVariant("pricing", "pricing-one", "Tiered Plans Grid"),
        createVariant("pricing", "pricing-two", "Usage-Based Tiers"),
        createVariant("pricing", "pricing-three", "Monthly vs Annual Plans"),
      ],
    },
    {
      title: "Testimonial",
      slug: "testimonial",
      url: "/veil/testimonial",
      items: [
        createVariant("testimonial", "testimonial-one", "Testimonial Cards"),
        createVariant(
          "testimonial",
          "testimonial-two",
          "Card Quote Highlights",
        ),
        createVariant(
          "testimonial",
          "testimonial-three",
          "Quote with Accent Bar",
        ),
        createVariant(
          "testimonial",
          "testimonial-four",
          "Centered Single Quote",
        ),
      ],
    },
    {
      title: "Team",
      slug: "team",
      url: "/veil/team",
      items: [
        createVariant("team", "team-one", "Founder Profiles Detailed"),
        createVariant("team", "team-two", "Founder Profiles Compact"),
      ],
    },
    {
      title: "Logo Cloud",
      slug: "logo-cloud",
      url: "/veil/logo-cloud",
      items: [
        createVariant("logo-cloud", "logo-cloud-one", "Static Logo Grid"),
        createVariant("logo-cloud", "logo-cloud-two", "Animated Logo Shuffle"),
      ],
    },
    {
      title: "FAQs",
      slug: "faqs",
      url: "/veil/faqs",
      items: [
        createVariant("faqs", "faqs-one", "FAQ Card Accordion"),
        createVariant("faqs", "faqs-two", "Split Sidebar FAQ"),
        createVariant("faqs", "faqs-three", "Minimal FAQ List"),
        createVariant("faqs", "faqs-four", "FAQ Card Expanded"),
      ],
    },
    {
      title: "Contact",
      slug: "contact",
      url: "/veil/contact",
      items: [
        createVariant("contact", "contact-one", "Contact Details Form"),
        createVariant("contact", "contact-two", "Sales Inquiry Form"),
      ],
    },
    {
      title: "Signup",
      slug: "signup",
      url: "/veil/signup",
      items: [
        createVariant("signup", "signup-one", "Signup Full Layout"),
        createVariant("signup", "signup-two", "Signup Card Social"),
        createVariant("signup", "signup-three", "Signup Minimal"),
      ],
    },
    {
      title: "Login",
      slug: "login",
      url: "/veil/login",
      items: [
        createVariant("login", "login-one", "Login Full Layout"),
        createVariant("login", "login-two", "Login Card Social"),
        createVariant("login", "login-three", "Login Minimal"),
      ],
    },
    {
      title: "Forgot Password",
      slug: "forgot-password",
      url: "/veil/forgot-password",
      items: [
        createVariant(
          "forgot-password",
          "forgot-password-one",
          "Reset Full Layout",
        ),
        createVariant(
          "forgot-password",
          "forgot-password-two",
          "Reset Card Layout",
        ),
        createVariant("forgot-password", "forgot-password-three", "Reset Minimal"),
      ],
    },
    {
      title: "Comparator",
      slug: "comparator",
      url: "/veil/comparator",
      items: [
        createVariant("comparator", "comparator-one", "Plan Comparison Table"),
        createVariant("comparator", "comparator-two", "Free vs Pro Table"),
        createVariant(
          "comparator",
          "comparator-three",
          "Stacked Plan Comparison",
        ),
      ],
    },
    {
      title: "Footer",
      slug: "footer",
      url: "/veil/footer",
      items: [
        createVariant("footer", "footer-one", "Multi-Column Footer"),
        createVariant("footer", "footer-two", "Centered Social Footer"),
        createVariant("footer", "footer-three", "Split Nav Footer"),
        createVariant("footer", "footer-four", "Brand Social Footer"),
        createVariant("footer", "footer-five", "Theme Toggle Footer"),
        createVariant("footer", "footer-six", "Compact Utility Footer"),
      ],
    },
  ];

  const totalComponents = componentCategories.reduce(
    (sum, category) => sum + category.items.length,
    0,
  );
</script>

<script lang="ts">
  import { page } from "$app/state";
  import * as ScrollArea from "$lib/components/ui/scroll-area";
  import * as Sidebar from "$lib/components/ui/sidebar/index.js";
  import type { ComponentProps } from "svelte";

  let {
    ref = $bindable(null),
    ...restProps
  }: ComponentProps<typeof Sidebar.Root> = $props();

  const pathname = $derived(page.url.pathname);
</script>

<Sidebar.Root {...restProps} bind:ref>
  <Sidebar.Content class="overflow-hidden">
    <ScrollArea.Root class="h-full">
      <div class="space-y-4 p-2">
        <Sidebar.Group>
          <Sidebar.GroupLabel>Get Started</Sidebar.GroupLabel>
          <Sidebar.GroupContent>
            <Sidebar.Menu>
              {#each gettingStarted as link (link.title)}
                <Sidebar.MenuItem>
                  <Sidebar.MenuButton isActive={pathname === link.url}>
                    {#snippet child({ props })}
                      <a href={link.url} {...props}>{link.title}</a>
                    {/snippet}
                  </Sidebar.MenuButton>
                </Sidebar.MenuItem>
              {/each}
            </Sidebar.Menu>
          </Sidebar.GroupContent>
        </Sidebar.Group>

        <Sidebar.Group>
          <Sidebar.GroupLabel>Components ({totalComponents})</Sidebar.GroupLabel>
          <Sidebar.GroupContent>
            <Sidebar.Menu>
              {#each componentCategories as category (category.slug)}
                <Sidebar.MenuItem>
                  <Sidebar.MenuButton
                    isActive={pathname === category.url || pathname.startsWith(`${category.url}/`)}
                  >
                    {#snippet child({ props })}
                      <a href={category.url} {...props}>{category.title}</a>
                    {/snippet}
                  </Sidebar.MenuButton>
                  <Sidebar.MenuBadge>{category.items.length}</Sidebar.MenuBadge>
                  <Sidebar.MenuSub>
                    {#each category.items as item (item.id)}
                      <Sidebar.MenuSubItem>
                        <Sidebar.MenuSubButton isActive={pathname === item.url}>
                          {#snippet child({ props })}
                            <a href={item.url} {...props}>{item.title}</a>
                          {/snippet}
                        </Sidebar.MenuSubButton>
                      </Sidebar.MenuSubItem>
                    {/each}
                  </Sidebar.MenuSub>
                </Sidebar.MenuItem>
              {/each}
            </Sidebar.Menu>
          </Sidebar.GroupContent>
        </Sidebar.Group>
      </div>
    </ScrollArea.Root>
  </Sidebar.Content>
  <Sidebar.Rail />
</Sidebar.Root>
