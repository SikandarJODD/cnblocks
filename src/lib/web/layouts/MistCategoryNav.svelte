<script lang="ts">
  import { page } from "$app/state";
  import { all_mists_category_block } from "$lib/all_blocks/category_block";
  import { cn } from "$lib/utils";
  let pathname = $derived(
    "/" + page.url.pathname.split("/").filter(Boolean)[0] || "/"
  );
  let isActive = (href: string) => {
    return page.url.pathname === href;
  };
</script>

<div class="dark:border-border/50 relative z-40 border-b">
  <div class="mx-auto max-w-7xl">
    <nav class="flex items-center lg:-mx-3">
      <ul
        class="relative -mb-px flex h-11 snap-x snap-proximity scroll-px-6 items-center gap-6 overflow-x-auto overflow-y-hidden px-6 lg:scroll-px-2 lg:gap-4 mx-auto"
      >
        {#each all_mists_category_block as category}
          <li
            class={cn(
              "flex h-full snap-start items-center border-b border-b-transparent",
              isActive(category.href) && "border-primary"
            )}
          >
            <a
              href={category.href}
              class={cn(
                isActive(category.href) && "text-primary!",
                "hover:bg-muted dark:text-muted-foreground hover:text-foreground flex h-7 w-fit items-center text-nowrap rounded-full px-1 text-[13px] text-zinc-700 lg:-mx-2 lg:px-3 transition-all duration-300"
              )}
            >
              <span class="block w-max text-nowrap capitalize"
                >{category.title}</span
              >
            </a>
          </li>
        {/each}
      </ul>
    </nav>
  </div>
</div>
