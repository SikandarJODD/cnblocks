<script lang="ts">
	import { page } from "$app/state";
	import { category_blocks } from "#lib/all_blocks/category_block.js";
	import ScrollArea from "#lib/components/ui/scroll-area/scroll-area.svelte";
	import { cn } from "#lib/utils.js";
</script>

<div class="w-full border-b border-dashed">
	<ScrollArea orientation="horizontal" class="w-full" scrollbarXClasses="hidden">
		<ul
			class="relative mx-auto flex h-12 w-fit min-w-max snap-x snap-mandatory items-center gap-6 px-4 sm:px-6 lg:gap-4"
		>
			{#each category_blocks as category (category.href)}
				<li
					class={cn(
						"flex h-full snap-start items-center border-b border-transparent transition-colors",
						page.url.pathname === category.href &&
							"border-emerald-500 dark:border-emerald-400"
					)}
				>
					<a
						href={category.href}
						class={cn(
							"flex h-7 items-center rounded-sm px-1 text-[13px] text-nowrap text-muted-foreground transition-colors hover:bg-muted hover:text-foreground lg:-mx-2 lg:px-3",
							page.url.pathname === category.href &&
								"text-emerald-500! dark:text-emerald-400!"
						)}
					>
						{category.title}
					</a>
				</li>
			{/each}
		</ul>
	</ScrollArea>
</div>
