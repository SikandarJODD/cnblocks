<script lang="ts">
	import { page } from "$app/state";
	import { Badge } from "#lib/components/spell/badge/index.js";
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
	const sidebar = Sidebar.useSidebar();

	function closeMobileSidebar() {
		if (sidebar.isMobile) sidebar.setOpenMobile(false);
	}
</script>

<Sidebar.Group class="px-0 pt-0">
	<Sidebar.GroupContent>
		<Sidebar.Menu class="gap-0">
			<Sidebar.MenuItem>
				<Sidebar.MenuButton
					class="h-7 touch-manipulation px-2 text-sm font-normal text-muted-foreground hover:bg-transparent hover:text-foreground active:bg-transparent md:h-7 md:text-[13px] data-active:bg-transparent data-active:font-medium data-active:text-primary"
					isActive={Boolean(activeLibrary)}
				>
					{#snippet child({ props })}
						<a href="/kit/hero" {...props} onclick={closeMobileSidebar}>
							<span>Blocks</span>
						</a>
					{/snippet}
				</Sidebar.MenuButton>

				<Sidebar.MenuSub class="mx-0 mt-0.5 gap-0 border-l-0 py-0 pr-0 pl-2">
					{#each blockLibraries as library}
						<Sidebar.MenuSubItem>
							{#if library.coming_soon}
								<div
									class="flex h-8 items-center pr-1 pl-2 font-mono text-xs font-normal text-muted-foreground/60 md:h-6 md:text-xs"
								>
									<span>{library.title}</span>
									<span class="ms-auto text-xs md:text-[10px]">Coming soon..</span
									>
								</div>
							{:else}
								<Sidebar.MenuSubButton
									href={library.href}
									isActive={activeLibrary?.key === library.key}
									class="h-8 touch-manipulation pr-1 pl-2 font-mono! text-xs! font-normal text-muted-foreground hover:bg-transparent hover:text-ink/80 active:bg-transparent md:h-6 md:text-xs! dark:hover:text-foreground data-active:bg-transparent data-active:font-medium data-active:text-ink/80 dark:data-active:text-primary"
									data-s-event={"category:" + library.key}
								>
									<span>{library.title}</span>
									<span class="ms-auto flex items-center gap-1">
										{#if library.key === "dusk"}
											<Badge
												size="sm"
												variant="emerald"
												class="px-2 py-1! font-sans! text-[9px] font-normal"
											>
												New
											</Badge>
										{/if}
										<Kbd.Root class="h-4 min-w-5 px-1 text-[10px] tabular-nums">
											{library.count}
										</Kbd.Root>
									</span>
								</Sidebar.MenuSubButton>
							{/if}
						</Sidebar.MenuSubItem>
					{/each}
				</Sidebar.MenuSub>
			</Sidebar.MenuItem>

			{#each primaryNavigation as item}
				<Sidebar.MenuItem>
					<Sidebar.MenuButton
						class="h-8 touch-manipulation pr-1 pl-2 text-sm font-normal text-muted-foreground hover:bg-transparent hover:text-foreground active:bg-transparent md:h-7 md:text-[13px] data-active:bg-transparent data-active:font-medium data-active:text-primary"
						isActive={!item.coming_soon && isCurrentPath(pathname, item.href)}
						data-s-event={"nav:" + item.title}
					>
						{#snippet child({ props })}
							{#if item.coming_soon}
								<div {...props}>
									<span>{item.title}</span>
									<span
										class="ms-auto text-xs text-muted-foreground/60 md:text-[10px]"
										>Coming soon..</span
									>
								</div>
							{:else}
								<a
									href={item.href}
									{...props}
									onclick={item.href === "/docs" ? undefined : closeMobileSidebar}
								>
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
	<Sidebar.Group class="min-h-0 flex-1 overflow-hidden px-1 pt-1 md:pt-4">
		<Sidebar.GroupLabel
			class="h-6 px-1 font-mono text-sm text-ink/70 uppercase md:mb-1 md:text-xs dark:text-muted-foreground/80"
		>
			Categories
		</Sidebar.GroupLabel>
		<Sidebar.GroupContent class="min-h-0 flex-1 overflow-hidden">
			<div class="no-scrollbar h-full overflow-y-auto scroll-fade-effect-y pb-6">
				<Sidebar.Menu class="gap-0 md:gap-1">
					{#each activeLibrary.categories as category}
						<Sidebar.MenuItem>
							<Sidebar.MenuButton
								class="h-8 touch-manipulation px-2 text-sm font-normal text-muted-foreground hover:bg-transparent hover:text-foreground active:bg-transparent md:h-6 md:text-[13px] data-active:bg-transparent data-active:font-medium data-active:text-primary"
								isActive={pathname === category.href}
								data-s-event={"block:" +
									activeLibrary.key +
									":" +
									category.title.toLowerCase()}
							>
								{#snippet child({ props })}
									<a href={category.href} {...props} onclick={closeMobileSidebar}>
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
	<Sidebar.Group class="min-h-0 flex-1 overflow-hidden px-1 pt-1 md:pt-2">
		<Sidebar.GroupLabel
			class="h-6 px-1 font-mono text-sm text-ink/70 uppercase md:mb-1 md:text-xs dark:text-muted-foreground/80 "
			>Docs</Sidebar.GroupLabel
		>
		<Sidebar.GroupContent class="min-h-0 flex-1 overflow-hidden">
			<div class="no-scrollbar h-full overflow-y-auto scroll-fade-effect-y pb-6">
				<Sidebar.Menu class="gap-0 md:gap-1">
					{#each docsNavigation as item}
						<Sidebar.MenuItem>
							<Sidebar.MenuButton
								class="h-9 touch-manipulation px-2 text-sm font-normal text-muted-foreground hover:bg-transparent hover:text-foreground active:bg-transparent md:h-6 md:text-[13px] data-active:bg-transparent data-active:font-medium data-active:text-primary"
								isActive={pathname === item.href}
							>
								{#snippet child({ props })}
									<a href={item.href} {...props} onclick={closeMobileSidebar}>
										<span>{item.title}</span>
									</a>
								{/snippet}
							</Sidebar.MenuButton>
						</Sidebar.MenuItem>
					{/each}
					<Sidebar.MenuItem>
						<Sidebar.MenuButton
							class="h-9 touch-manipulation px-2 text-sm font-normal text-muted-foreground hover:bg-transparent hover:text-foreground active:bg-transparent md:h-6 md:text-[13px] data-active:bg-transparent data-active:font-medium data-active:text-primary"
							data-s-event="nav:LLM Index"
						>
							{#snippet child({ props })}
								<a href="/llms.txt" {...props} onclick={closeMobileSidebar}>
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
