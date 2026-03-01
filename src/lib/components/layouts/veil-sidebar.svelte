<script lang="ts" module>
  type GettingStartedLink = {
    title: string;
    url: string;
  };

  type VeilComponentCategory = {
    title: string;
    slug: string;
    url: string;
    items: string[];
  };

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
      items: ["hero-one", "hero-two", "hero-three", "hero-four", "hero-five"],
    },
    {
      title: "Header",
      slug: "header",
      url: "/veil/header",
      items: ["header-one", "header-two", "header-three", "header-four"],
    },
    {
      title: "Features",
      slug: "features",
      url: "/veil/features",
      items: ["features-one", "features-two", "features-three"],
    },
    {
      title: "Content",
      slug: "content",
      url: "/veil/content",
      items: ["content-one", "content-two", "content-three"],
    },
    {
      title: "Integration",
      slug: "integration",
      url: "/veil/integration",
      items: ["integration-one", "integration-two"],
    },
    {
      title: "Call To Action",
      slug: "call-to-action",
      url: "/veil/call-to-action",
      items: [
        "call-to-action-one",
        "call-to-action-two",
        "call-to-action-three",
        "call-to-action-four",
      ],
    },
    {
      title: "Stats",
      slug: "stats",
      url: "/veil/stats",
      items: ["stats-one", "stats-two", "stats-three", "stats-four"],
    },
    {
      title: "Pricing",
      slug: "pricing",
      url: "/veil/pricing",
      items: ["pricing-one", "pricing-two", "pricing-three"],
    },
    {
      title: "Testimonial",
      slug: "testimonial",
      url: "/veil/testimonial",
      items: [
        "testimonial-one",
        "testimonial-two",
        "testimonial-three",
        "testimonial-four",
      ],
    },
    {
      title: "Team",
      slug: "team",
      url: "/veil/team",
      items: ["team-one", "team-two"],
    },
    {
      title: "Logo Cloud",
      slug: "logo-cloud",
      url: "/veil/logo-cloud",
      items: ["logo-cloud-one", "logo-cloud-two"],
    },
    {
      title: "FAQs",
      slug: "faqs",
      url: "/veil/faqs",
      items: ["faqs-one", "faqs-two", "faqs-three", "faqs-four"],
    },
    {
      title: "Contact",
      slug: "contact",
      url: "/veil/contact",
      items: ["contact-one", "contact-two"],
    },
    {
      title: "Signup",
      slug: "signup",
      url: "/veil/signup",
      items: ["signup-one", "signup-two", "signup-three"],
    },
    {
      title: "Login",
      slug: "login",
      url: "/veil/login",
      items: ["login-one", "login-two", "login-three"],
    },
    {
      title: "Forgot Password",
      slug: "forgot-password",
      url: "/veil/forgot-password",
      items: [
        "forgot-password-one",
        "forgot-password-two",
        "forgot-password-three",
      ],
    },
    {
      title: "Comparator",
      slug: "comparator",
      url: "/veil/comparator",
      items: ["comparator-one", "comparator-two", "comparator-three"],
    },
    {
      title: "Footer",
      slug: "footer",
      url: "/veil/footer",
      items: [
        "footer-one",
        "footer-two",
        "footer-three",
        "footer-four",
        "footer-five",
        "footer-six",
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
  import { cn } from "$lib/utils.js";
  import type { ComponentProps } from "svelte";

  let {
    ref = $bindable(null),
    class: className,
    ...restProps
  }: ComponentProps<typeof Sidebar.Root> = $props();

  const pathname = $derived(page.url.pathname);
</script>

<Sidebar.Root {...restProps} bind:ref class={cn("md:top-6", className)}>
  <Sidebar.Content class="overflow-hidden px-2 pb-3">
    <ScrollArea.Root class="h-full pt-3">
      <div class="space-y-3 rounded-xl border border-sidebar-border/70 bg-sidebar/60 p-2.5 shadow-sm">
        <Sidebar.Group class="p-1.5">
          <Sidebar.GroupLabel class="px-1 text-[11px] font-semibold uppercase tracking-wide text-sidebar-foreground/60">
            Get Started
          </Sidebar.GroupLabel>
          <Sidebar.GroupContent>
            <Sidebar.Menu class="gap-0.5">
              {#each gettingStarted as link (link.title)}
                <Sidebar.MenuItem>
                  <Sidebar.MenuButton
                    class="h-8 rounded-lg px-2.5 text-[13px]"
                    isActive={pathname === link.url}
                  >
                    {#snippet child({ props })}
                      <a href={link.url} {...props}>
                        <span class="block truncate">{link.title}</span>
                      </a>
                    {/snippet}
                  </Sidebar.MenuButton>
                </Sidebar.MenuItem>
              {/each}
            </Sidebar.Menu>
          </Sidebar.GroupContent>
        </Sidebar.Group>

        <Sidebar.Group class="p-1.5 pt-0">
          <Sidebar.GroupLabel class="px-1 text-[11px] font-semibold uppercase tracking-wide text-sidebar-foreground/60">
            Components ({totalComponents})
          </Sidebar.GroupLabel>
          <Sidebar.GroupContent>
            <Sidebar.Menu class="gap-1">
              {#each componentCategories as category (category.slug)}
                <Sidebar.MenuItem>
                  <Sidebar.MenuButton
                    class="h-8 rounded-lg px-2.5 text-[13px]"
                    isActive={pathname === category.url || pathname.startsWith(`${category.url}/`)}
                  >
                    {#snippet child({ props })}
                      <a href={category.url} {...props}>
                        <span class="block truncate">{category.title}</span>
                      </a>
                    {/snippet}
                  </Sidebar.MenuButton>
                  <Sidebar.MenuBadge class="end-2 top-1.5 text-[11px] text-sidebar-foreground/70">
                    {category.items.length}
                  </Sidebar.MenuBadge>
                  <Sidebar.MenuSub class="mt-1 gap-0.5 border-sidebar-border/70 ps-2.5">
                    {#each category.items as item (item)}
                      {@const itemUrl = `/veil/${category.slug}/${item}`}
                      <Sidebar.MenuSubItem>
                        <Sidebar.MenuSubButton
                          class="h-7 rounded-md px-2 text-xs text-sidebar-foreground/85"
                          isActive={pathname === itemUrl}
                        >
                          {#snippet child({ props })}
                            <a href={itemUrl} {...props}>
                              <span class="block truncate">{item.replaceAll("-", " ")}</span>
                            </a>
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
