<script lang="ts">
	import { page } from '$app/state';
	import Badge from '$lib/components/ui/badge/badge.svelte';
	import { cn } from '$lib/utils';
	type Route = {
		name: string;
		slug: string;
		isNew?: boolean;
	};
	let routes: Route[] = [
		{ name: 'Introduction', slug: '/docs' },
		{ name: 'Installation', slug: '/docs/installation' },
		{ name: 'MCP Server', slug: '/docs/mcp', isNew: true },
		{ name: 'Sponsors', slug: '/docs/sponsors' }
	];
	let isActive = (slug: string) => {
		return page.url.pathname === slug;
	};
</script>

<aside class="bg-main sticky top-28 w-[180px] flex-1 max-lg:hidden">
	<nav
		class="flex h-full flex-col gap-6 overflow-y-auto [-ms-overflow-style:none] [scrollbar-width:none] max-lg:hidden [&::-webkit-scrollbar]:hidden"
	>
		<div class="flex flex-col gap-1">
			<span class="text-sm font-medium text-foreground"> Getting Started </span>
			<div class="flex flex-col">
				{#each routes as item}
					<a
						href={item.slug}
						class={cn(
							'relative mt-1 -ml-1.5 flex items-center justify-between gap-4 rounded-lg border border-transparent px-2 py-1.5 text-sm text-muted-foreground transition-all duration-200 outline-none select-none hover:text-primary focus-visible:border-neutral-200 focus-visible:bg-muted/10 dark:focus-visible:border-neutral-800',
							{
								'text-primary': isActive(item.slug)
							}
						)}
					>
						<span class="relative z-[1] block text-sm">{item.name}</span>
						{#if item.isNew}
							<Badge variant="secondary" class="rounded-full font-medium">New</Badge>
						{/if}
					</a>
				{/each}
			</div>
		</div>
	</nav>
</aside>
