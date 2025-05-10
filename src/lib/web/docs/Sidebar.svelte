<script lang="ts">
  import { page } from "$app/state";
  import { cn } from "$lib/utils";
  let routes = [
    { name: "Introduction", slug: "/docs" },
    { name: "Installation", slug: "/docs/installation" },
    { name: "Sponsors", slug: "/docs/sponsors" },
  ];
  let isActive = (slug: string) => {
    return page.url.pathname === slug;
  };
</script>

<aside class="w-[180px] sticky top-28 flex-1 bg-main max-lg:hidden">
  <nav
    class="flex h-full flex-col gap-6 overflow-y-auto [-ms-overflow-style:none] [scrollbar-width:none] max-lg:hidden [&::-webkit-scrollbar]:hidden"
  >
    <div class="flex flex-col gap-1">
      <span class="text-sm font-medium text-foreground"> Getting Started </span>
      <div class="flex flex-col">
        {#each routes as { name, slug }}
          <a
            href={slug}
            class={cn(
              "relative -mx-2.5 mt-1 select-none rounded-lg border border-transparent px-2 py-1.5 text-sm outline-none focus-visible:border-neutral-200 dark:focus-visible:border-neutral-800 text-muted-foreground transition-all duration-200 hover:text-primary focus-visible:bg-muted/10",
              {
                "text-primary": isActive(slug),
              }
            )}
          >
            <span class="relative z-[1] block text-sm">{name}</span>
          </a>
        {/each}
      </div>
    </div>
  </nav>
</aside>
