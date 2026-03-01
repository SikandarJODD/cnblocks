<script lang="ts">
  import { page } from "$app/state";
  import * as ScrollArea from "$lib/components/ui/scroll-area";
  import * as Sidebar from "$lib/components/ui/sidebar/index.js";
  import { veilSidebarConfig } from "$lib/config/veil-sidebar";
  import { cn } from "$lib/utils.js";
  import type { ComponentProps } from "svelte";

  let {
    ref = $bindable(null),
    class: className,
    ...restProps
  }: ComponentProps<typeof Sidebar.Root> = $props();

  const pathname = $derived(page.url.pathname);
  const hash = $derived(page.url.hash);

  const splitHref = (href: string) => {
    const [path, rawHash] = href.split("#");
    return {
      path: path || "/",
      hash: rawHash ? `#${rawHash}` : "",
    };
  };

  const isLinkActive = (href: string) => {
    const target = splitHref(href);

    if (target.hash) {
      return pathname === target.path && hash === target.hash;
    }

    return pathname === target.path || pathname.startsWith(`${target.path}/`);
  };
</script>

<Sidebar.Root {...restProps} bind:ref class={cn("top-16", className)}>
  <Sidebar.Content class="overflow-hidden">
    <ScrollArea.Root class="h-full" scrollbarYClasses="hidden">
      <div class="space-y-3">
        <Sidebar.Group class="">
          <Sidebar.GroupLabel
            class="px-1 text-[11px] font-semibold uppercase tracking-wide text-sidebar-foreground/60"
          >
            Get Started
          </Sidebar.GroupLabel>
          <Sidebar.GroupContent>
            <Sidebar.Menu class="gap-1">
              {#each veilSidebarConfig.gettingStarted as link (link.title)}
                <Sidebar.MenuItem>
                  <Sidebar.MenuButton
                    class="h-8 rounded-lg px-2.5 text-[13px]"
                    isActive={isLinkActive(link.href)}
                  >
                    {#snippet child({ props })}
                      <a href={link.href} {...props}>
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
          <Sidebar.GroupLabel
            class="px-1 text-[11px] font-semibold uppercase tracking-wide text-sidebar-foreground/60"
          >
            Components
            <!-- ({veilSidebarConfig.totalComponents}) -->
          </Sidebar.GroupLabel>
          <Sidebar.GroupContent>
            <Sidebar.Menu class="gap-1">
              {#each veilSidebarConfig.components as item (item.title)}
                <Sidebar.MenuItem>
                  <Sidebar.MenuButton
                    class="h-8 rounded-lg px-2.5 text-[13px]"
                    isActive={isLinkActive(item.href)}
                  >
                    {#snippet child({ props })}
                      <a href={item.href} {...props}>
                        <span class="block truncate">{item.title}</span>
                      </a>
                    {/snippet}
                  </Sidebar.MenuButton>
                  <Sidebar.MenuBadge
                    class="end-2 top-1.5 rounded-md bg-sidebar-accent/60 px-1.5 text-[11px] text-sidebar-foreground/80"
                  >
                    {item.count}
                  </Sidebar.MenuBadge>
                </Sidebar.MenuItem>
              {/each}
            </Sidebar.Menu>
          </Sidebar.GroupContent>
        </Sidebar.Group>
      </div>
    </ScrollArea.Root>
  </Sidebar.Content>
  <!-- <Sidebar.Rail /> -->
</Sidebar.Root>
