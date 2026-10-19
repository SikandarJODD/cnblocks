<script lang="ts">
	import { goto } from "$app/navigation";
	import Button from "#lib/components/ui/button/button.svelte";
	import * as Command from "#lib/components/ui/command/index.js";
	import { Badge } from "#lib/components/spell/badge/index.js";
	import { search_comp, type SearchLibrary } from "#lib/config/search_comp.js";
	import { cn } from "#lib/utils.js";
	import CircleIcon from "@lucide/svelte/icons/circle";
	import SearchIcon from "@lucide/svelte/icons/search";

	let { class: className }: { class?: string } = $props();
	let open = $state(false);
	let triggerRef = $state<HTMLButtonElement | null>(null);
	let activeLibrary = $state<SearchLibrary | "all">("all");
	let filteredGroups = $derived(
		search_comp
			.map((group) => ({
				...group,
				subcom: group.subcom.filter(
					(item) => activeLibrary === "all" || item.library === activeLibrary
				),
			}))
			.filter((group) => group.subcom.length > 0)
	);
	const libraryFilters: { label: string; value: SearchLibrary | "all" }[] = [
		{ label: "All", value: "all" },
		{ label: "Kit", value: "kit" },
		{ label: "Mist", value: "mist" },
		{ label: "Veil", value: "veil" },
	];

	function showSearch() {
		activeLibrary = "all";
		open = true;
	}

	function handleShortcutKeydown(event: KeyboardEvent) {
		if (
			event.defaultPrevented ||
			event.key.toLowerCase() !== "k" ||
			(!event.metaKey && !event.ctrlKey) ||
			!triggerRef
		) {
			return;
		}

		const rect = triggerRef.getBoundingClientRect();
		const isVisible =
			rect.width > 0 &&
			rect.height > 0 &&
			rect.right > 0 &&
			rect.bottom > 0 &&
			rect.left < window.innerWidth &&
			rect.top < window.innerHeight;

		if (!isVisible) return;

		event.preventDefault();
		showSearch();
	}

	function select(href?: string) {
		if (!href) return;
		open = false;
		goto(href);
	}
</script>

<svelte:window onkeydown={handleShortcutKeydown} />

<Button
	bind:ref={triggerRef}
	variant="ghost"
	size="icon-sm"
	class={cn("size-7 touch-manipulation text-muted-foreground md:size-7", className)}
	aria-label="Search components"
	onclick={showSearch}
>
	<SearchIcon class="size-4 md:size-4" />
</Button>

<Command.Dialog bind:open>
	<Command.Input aria-label="Search components" placeholder="Search components…" />
	<div class="mt-3 flex gap-1 border-b px-0 pb-3">
		{#each libraryFilters as filter}
			<Button
				variant={activeLibrary === filter.value ? "secondary" : "ghost"}
				size="sm"
				class="h-7 rounded-full px-3 text-xs"
				aria-pressed={activeLibrary === filter.value}
				onclick={() => (activeLibrary = filter.value)}
			>
				{filter.label}
			</Button>
		{/each}
	</div>
	<Command.List>
		<Command.Empty>
			{activeLibrary === "all"
				? "No components found."
				: `No ${activeLibrary} components found.`}
		</Command.Empty>
		{#each filteredGroups as group}
			<Command.Group heading={group.name}>
				{#each group.subcom as item}
					<Command.Item
						class="[&>svg:last-child]:hidden"
						value={`${item.name} ${item.library}`}
						onSelect={() => select(item.href)}
					>
						<CircleIcon class="size-3" />
						<span>{item.name}</span>
						<Badge
							variant={item.library === "mist"
								? "cyan"
								: item.library === "veil"
									? "amber"
									: "secondary"}
							size="sm"
							class="ml-auto rounded-full px-1.5 py-0.5 text-[10px] capitalize"
						>
							{item.library}
						</Badge>
					</Command.Item>
				{/each}
			</Command.Group>
		{/each}
	</Command.List>
</Command.Dialog>
