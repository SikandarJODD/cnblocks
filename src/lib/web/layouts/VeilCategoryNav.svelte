<script lang="ts">
  import { page } from "$app/state";
  import { all_veils_category_block } from "$lib/all_blocks/category_block";
  import ScrollArea from "$lib/components/ui/scroll-area/scroll-area.svelte";
  import { cn } from "$lib/utils";

  let isActive = (href: string) => {
    return page.url.pathname === href;
  };
</script>

<div class="dark:border-border/50 relative z-40 border-b">
  <div class="mx-auto max-w-7xl">
    <nav class="flex items-center lg:-mx-3">
      <ScrollArea orientation="horizontal" scrollbarXClasses='hidden' class="w-full">
        <ul
          class="relative -mb-px mx-auto flex h-12 snap-x snap-proximity items-center gap-6 overflow-x-auto overflow-y-hidden px-6 scroll-px-6 lg:gap-4 lg:scroll-px-2"
        >
          {#each all_veils_category_block as category}
            <li
              class={cn(
                "flex h-full snap-start items-center border-b border-b-transparent",
                isActive(category.href) && "border-primary",
              )}
            >
              <a
                href={category.href}
                class={cn(
                  isActive(category.href) && "text-primary!",
                  "hover:bg-muted dark:text-muted-foreground hover:text-foreground flex h-7 w-fit items-center rounded-full px-1 text-[13px] text-nowrap text-zinc-700 transition-all duration-300 lg:-mx-2 lg:px-3",
                )}
              >
                <span class="block w-max text-nowrap capitalize"
                  >{category.title}</span
                >
              </a>
            </li>
          {/each}
        </ul>
      </ScrollArea>
    </nav>
  </div>
</div>
