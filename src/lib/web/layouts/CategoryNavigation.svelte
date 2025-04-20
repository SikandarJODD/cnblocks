<script lang="ts">
  import { page } from "$app/state";
  import { category_blocks } from "$lib/all_blocks/all_blocks";
  import { cn } from "$lib/utils";
  let pathname = $derived(
    "/" + page.url.pathname.split("/").filter(Boolean)[0] || "/"
  );
</script>

<div class="dark:border-border/50 relative z-40 border-b">
  <div class="mx-auto max-w-7xl">
    <nav class="flex items-center lg:-mx-3">
      <ul
        class="relative -mb-px flex h-11 snap-x snap-proximity scroll-px-6 items-center gap-6 overflow-x-auto overflow-y-hidden px-6 lg:scroll-px-2 lg:gap-4 mx-auto"
      >
        {#each category_blocks as category}
          <li
            class={cn(
              "flex h-full snap-start items-center border-b border-b-transparent",
              pathname === category.href && "border-primary"
            )}
          >
            <a
              href={category.href}
              class={cn(
                pathname === category.href && "text-foreground!",
                "hover:bg-muted dark:text-muted-foreground hover:text-foreground flex h-7 w-fit items-center text-nowrap rounded-full px-1 text-[13px] text-zinc-700 lg:-mx-2 lg:px-3"
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
