<script lang="ts">
	import { page } from "$app/state";
	import * as Kbd from "#lib/components/ui/kbd/index.js";
	import * as Sidebar from "#lib/components/ui/sidebar/index.js";
	import {
		blockLibraries,
		docsNavigation,
		getBlockLibrary,
		isCurrentPath,
		primaryNavigation,
	} from "./navigation.js";

	const pathname = $derived(page.url.pathname);
	const activeLibrary = $derived(getBlockLibrary(pathname));
	const docsActive = $derived(isCurrentPath(pathname, "/docs"));
</script>

<Sidebar.Group class="px-0 pt-0">
	<Sidebar.GroupContent>
		<Sidebar.Menu class="gap-0">
			<Sidebar.MenuItem>
				<Sidebar.MenuButton
					class="h-7 px-2 text-[13px] font-normal text-muted-foreground hover:bg-transparent hover:text-foreground active:bg-transparent data-active:bg-transparent data-active:font-medium data-active:text-primary"
					isActive={Boolean(activeLibrary)}
				>
					{#snippet child({ props })}
						<a href="/kit/hero" {...props}>
							<span>Blocks</span>
						</a>
					{/snippet}
				</Sidebar.MenuButton>

				<Sidebar.MenuSub class="mx-0 mt-0.5 gap-0 border-l-0 py-0 pr-0 pl-2">
					{#each blockLibraries as library}
						<Sidebar.MenuSubItem>
							{#if library.coming_soon}
								<div
									class="flex h-6 items-center pr-1 pl-2 font-mono text-xs font-normal text-muted-foreground/60"
								>
									<span>{library.title}</span>
									<span class="ms-auto text-[10px]">Coming soon..</span>
								</div>
							{:else}
								<Sidebar.MenuSubButton
									href={library.href}
									isActive={activeLibrary?.key === library.key}
									class="h-6 pr-1 pl-2 font-mono! text-xs! font-normal text-muted-foreground hover:bg-transparent hover:text-ink/80 active:bg-transparent dark:hover:text-foreground data-active:bg-transparent data-active:font-medium data-active:text-ink/80 dark:data-active:text-primary"
								>
									<span>{library.title}</span>
									<Kbd.Root
										class="ms-auto h-4 min-w-5 px-1 text-[10px] tabular-nums"
									>
										{library.count}
									</Kbd.Root>
								</Sidebar.MenuSubButton>
							{/if}
						</Sidebar.MenuSubItem>
					{/each}
				</Sidebar.MenuSub>
			</Sidebar.MenuItem>

			{#each primaryNavigation as item}
				<Sidebar.MenuItem>
					<Sidebar.MenuButton
						class="h-7 pr-1 pl-2 text-[13px] font-normal text-muted-foreground hover:bg-transparent hover:text-foreground active:bg-transparent data-active:bg-transparent data-active:font-medium data-active:text-primary"
						isActive={!item.coming_soon && isCurrentPath(pathname, item.href)}
					>
						{#snippet child({ props })}
							{#if item.coming_soon}
								<div {...props}>
									<span>{item.title}</span>
									<span class="ms-auto text-[10px] text-muted-foreground/60"
										>Coming soon..</span
									>
								</div>
							{:else}
								<a href={item.href} {...props}>
									<span>{item.title}</span>
								</a>
							{/if}
						{/snippet}
					</Sidebar.MenuButton>
				</Sidebar.MenuItem>
			{/each}
		</Sidebar.Menu>
	</Sidebar.GroupContent>
</Sidebar.Group>

{#if activeLibrary}
	<Sidebar.Group class="min-h-0 flex-1 overflow-hidden px-1 pt-4">
		<Sidebar.GroupLabel
			class="mb-1 h-6 px-1 font-mono text-xs text-ink/70 uppercase dark:text-muted-foreground/80"
		>
			Categories
		</Sidebar.GroupLabel>
		<Sidebar.GroupContent class="min-h-0 flex-1 overflow-hidden">
			<div class="no-scrollbar h-full overflow-y-auto scroll-fade-effect-y pb-6">
				<Sidebar.Menu class="gap-1">
					{#each activeLibrary.categories as category}
						<Sidebar.MenuItem>
							<Sidebar.MenuButton
								class="h-6 px-2 text-[13px] font-normal text-muted-foreground hover:bg-transparent hover:text-foreground active:bg-transparent data-active:bg-transparent data-active:font-medium data-active:text-primary"
								isActive={pathname === category.href}
							>
								{#snippet child({ props })}
									<a href={category.href} {...props}>
										<span>{category.title}</span>
									</a>
								{/snippet}
							</Sidebar.MenuButton>
						</Sidebar.MenuItem>
					{/each}
				</Sidebar.Menu>
			</div>
		</Sidebar.GroupContent>
	</Sidebar.Group>
{:else if docsActive}
	<Sidebar.Group class="min-h-0 flex-1 overflow-hidden px-1 pt-2">
		<Sidebar.GroupLabel
			class="mb-1 h-6 px-1 font-mono text-xs text-ink/70 uppercase dark:text-muted-foreground/80 "
			>Docs</Sidebar.GroupLabel
		>
		<Sidebar.GroupContent class="min-h-0 flex-1 overflow-hidden">
			<div class="no-scrollbar h-full overflow-y-auto scroll-fade-effect-y pb-6">
				<Sidebar.Menu class="gap-1">
					{#each docsNavigation as item}
						<Sidebar.MenuItem>
							<Sidebar.MenuButton
								class="h-6 px-2 text-[13px] font-normal text-muted-foreground hover:bg-transparent hover:text-foreground active:bg-transparent data-active:bg-transparent data-active:font-medium data-active:text-primary"
								isActive={pathname === item.href}
							>
								{#snippet child({ props })}
									<a href={item.href} {...props}>
										<span>{item.title}</span>
									</a>
								{/snippet}
							</Sidebar.MenuButton>
						</Sidebar.MenuItem>
					{/each}
					<Sidebar.MenuItem>
						<Sidebar.MenuButton
							class="h-6 px-2 text-[13px] font-normal text-muted-foreground hover:bg-transparent hover:text-foreground active:bg-transparent data-active:bg-transparent data-active:font-medium data-active:text-primary"
						>
							{#snippet child({ props })}
								<a href="/llms.txt" {...props}>
									<span>LLM Index</span>
								</a>
							{/snippet}
						</Sidebar.MenuButton>
					</Sidebar.MenuItem>
				</Sidebar.Menu>
			</div>
		</Sidebar.GroupContent>
	</Sidebar.Group>
{/if}
