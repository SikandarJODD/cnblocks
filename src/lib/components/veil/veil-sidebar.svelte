<script lang="ts">
  import { page } from "$app/state";
  import * as Sidebar from "$lib/components/ui/sidebar/index.js";
  import { Badge } from "$lib/components/ui/badge";
  import { veilSidebarConfig } from "$lib/config/veil-sidebar";
  import bhideSvelte from "$lib/images/bhide_svelte.jpg";

  const isActive = (href: string) => {
    const [targetPathname, targetHash = ""] = href.split("#");
    const samePath = page.url.pathname === targetPathname;
    const currentHash = page.url.hash.replace("#", "");
    return targetHash ? samePath && currentHash === targetHash : samePath;
  };
</script>

<Sidebar.Provider>
  <Sidebar.Root collapsible="none" class="h-full w-full rounded-xl border">
    <Sidebar.Header class="p-4">
      <div class="space-y-1">
        <h2 class="text-sm font-semibold tracking-wide uppercase text-muted-foreground">Navigation</h2>
        <p class="text-base font-semibold text-foreground">Veil Components</p>
      </div>
    </Sidebar.Header>

    <Sidebar.Content>
      <Sidebar.Group>
        <Sidebar.GroupLabel>Getting Started</Sidebar.GroupLabel>
        <Sidebar.Menu>
          {#each veilSidebarConfig.gettingStarted as link (link.title)}
            <Sidebar.MenuItem>
              <Sidebar.MenuButton isActive={isActive(link.href)}>
                {#snippet child({ props })}
                  <a href={link.href} {...props}>{link.title}</a>
                {/snippet}
              </Sidebar.MenuButton>
            </Sidebar.MenuItem>
          {/each}
        </Sidebar.Menu>
      </Sidebar.Group>

      <Sidebar.Separator />

      <Sidebar.Group>
        <Sidebar.GroupLabel>Components ({veilSidebarConfig.totalComponents})</Sidebar.GroupLabel>
        <Sidebar.Menu>
          {#each veilSidebarConfig.components as component (component.slug)}
            <Sidebar.MenuItem>
              <Sidebar.MenuButton isActive={isActive(component.href)}>
                {#snippet child({ props })}
                  <a href={component.href} class="flex w-full items-center justify-between gap-2" {...props}>
                    <span>{component.title}</span>
                    <Badge variant="secondary" class="rounded-full text-[11px]">{component.count}</Badge>
                  </a>
                {/snippet}
              </Sidebar.MenuButton>
            </Sidebar.MenuItem>
          {/each}
        </Sidebar.Menu>
      </Sidebar.Group>

      <Sidebar.Separator />

      <Sidebar.Group>
        <Sidebar.GroupLabel>Developer Links</Sidebar.GroupLabel>
        <Sidebar.Menu>
          {#each veilSidebarConfig.developerLinks as link (link.title)}
            <Sidebar.MenuItem>
              <Sidebar.MenuButton isActive={isActive(link.href)}>
                {#snippet child({ props })}
                  <a href={link.href} {...props}>{link.title}</a>
                {/snippet}
              </Sidebar.MenuButton>
            </Sidebar.MenuItem>
          {/each}
        </Sidebar.Menu>
      </Sidebar.Group>
    </Sidebar.Content>

    <Sidebar.Footer class="mt-auto border-t p-3">
      <div class="flex items-center gap-3 rounded-lg px-2 py-1.5">
        <img src={bhideSvelte} alt="Bhide Svelte" class="size-8 rounded-full object-cover" />
        <p class="text-sm text-muted-foreground">
          Built by <span class="font-medium text-foreground">Bhide.Svelte</span>
        </p>
      </div>
    </Sidebar.Footer>
  </Sidebar.Root>
</Sidebar.Provider>
