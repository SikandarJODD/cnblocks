<script lang="ts">
	import { goto } from "$app/navigation";
	import { tick } from "svelte";
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
	let inputRef = $state<HTMLInputElement | null>(null);
	let resultsRef = $state<HTMLDivElement | null>(null);
	let commandValue = $state("");
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
		{ label: "Dusk", value: "dusk" },
	];

	function showSearch() {
		activeLibrary = "all";
		commandValue = "";
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

	async function getSelectedResult() {
		await tick();
		await tick();
		return resultsRef?.querySelector<HTMLElement>('[data-slot="command-item"][data-selected]');
	}

	async function syncResultFocus(moveFocus: boolean) {
		const selectedResult = await getSelectedResult();
		if (moveFocus) selectedResult?.focus();
	}

	function setActiveLibrary(library: SearchLibrary | "all") {
		activeLibrary = library;
		commandValue = "";
	}

	async function focusResults() {
		let selectedResult = await getSelectedResult();
		selectedResult ??= resultsRef?.querySelector<HTMLElement>('[data-slot="command-item"]');

		if (!selectedResult) {
			resultsRef?.focus();
			return;
		}

		const value = selectedResult.getAttribute("data-value");
		if (value && commandValue !== value) {
			commandValue = value;
			await tick();
		}
		selectedResult.focus();
	}

	function handleFilterKeydown(event: KeyboardEvent, index: number) {
		if (["Enter", " "].includes(event.key)) {
			event.stopPropagation();
			return;
		}

		if (event.key === "ArrowUp") {
			event.preventDefault();
			event.stopPropagation();
			inputRef?.focus();
			return;
		}

		if (event.key === "ArrowDown") {
			event.preventDefault();
			event.stopPropagation();
			void focusResults();
			return;
		}

		let nextIndex: number;

		switch (event.key) {
			case "ArrowRight":
				nextIndex = (index + 1) % libraryFilters.length;
				break;
			case "ArrowLeft":
				nextIndex = (index - 1 + libraryFilters.length) % libraryFilters.length;
				break;
			case "Home":
				nextIndex = 0;
				break;
			case "End":
				nextIndex = libraryFilters.length - 1;
				break;
			default:
				return;
		}

		event.preventDefault();
		event.stopPropagation();
		setActiveLibrary(libraryFilters[nextIndex].value);
		const tabs = (event.currentTarget as HTMLButtonElement)
			?.closest('[role="tablist"]')
			?.querySelectorAll<HTMLButtonElement>('[role="tab"]');
		tabs?.[nextIndex]?.focus();
	}

	function handleResultsKeydown(event: KeyboardEvent) {
		const selectedResult = resultsRef?.querySelector<HTMLElement>(
			'[data-slot="command-item"][data-selected]'
		);
		const firstResult = resultsRef?.querySelector<HTMLElement>('[data-slot="command-item"]');

		if (event.key === "ArrowUp" && (!selectedResult || selectedResult === firstResult)) {
			event.preventDefault();
			event.stopPropagation();
			resultsRef
				?.closest('[data-slot="command"]')
				?.querySelector<HTMLButtonElement>('[role="tab"][aria-selected="true"]')
				?.focus();
			return;
		}

		if (["ArrowUp", "ArrowDown", "Home", "End"].includes(event.key)) {
			const target = event.target as HTMLElement;
			void syncResultFocus(target.matches('[data-slot="command-item"]'));
		}
	}
</script>

<svelte:window onkeydown={handleShortcutKeydown} />

<Button
	bind:ref={triggerRef}
	variant="ghost"
	size="icon"
	class={cn("touch-manipulation text-muted-foreground", className)}
	aria-label="Search components"
	onclick={showSearch}
>
	<SearchIcon class="size-4 md:size-4" />
</Button>

<Command.Dialog bind:open bind:value={commandValue}>
	<Command.Input
		bind:ref={inputRef}
		aria-label="Search components"
		placeholder="Search components…"
		onkeydown={handleResultsKeydown}
	/>
	<div class="mt-3 flex gap-1 border-b px-0 pb-3" role="tablist" aria-label="Component library">
		{#each libraryFilters as filter, index}
			<Button
				variant={activeLibrary === filter.value ? "secondary" : "ghost"}
				size="sm"
				class="h-7 rounded-full px-3 text-xs focus-visible:border-muted-foreground/30! focus-visible:ring-0 focus-visible:ring-transparent!"
				id={`library-filter-${filter.value}`}
				role="tab"
				aria-selected={activeLibrary === filter.value}
				aria-controls="search-results"
				tabindex={activeLibrary === filter.value ? 0 : -1}
				onkeydown={(event) => handleFilterKeydown(event, index)}
				onclick={() => setActiveLibrary(filter.value)}
			>
				{filter.label}
			</Button>
		{/each}
	</div>
	<div id="search-results" role="tabpanel" aria-labelledby={`library-filter-${activeLibrary}`}>
		<Command.List
			bind:ref={resultsRef}
			class="rounded-md focus-visible:ring-1 focus-visible:ring-ring/30 focus-visible:ring-inset"
			aria-label={`${activeLibrary === "all" ? "All" : activeLibrary} components`}
			tabindex={commandValue ? -1 : 0}
			onkeydown={handleResultsKeydown}
		>
			<Command.Empty>
				{activeLibrary === "all"
					? "No components found."
					: `No ${activeLibrary} components found.`}
			</Command.Empty>
			{#each filteredGroups as group}
				<Command.Group heading={group.name}>
					{#each group.subcom as item}
						<Command.Item
							class="focus-visible:ring-1 focus-visible:ring-ring/30 focus-visible:ring-inset [&>svg:last-child]:hidden"
							value={`${item.name} ${item.library}`}
							tabindex={commandValue === `${item.name} ${item.library}` ? 0 : -1}
							onSelect={() => select(item.href)}
						>
							<CircleIcon class="size-3" />
							<span>{item.name}</span>
							<Badge
								variant={item.library === "dusk"
									? "secondary"
									: item.library === "mist"
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
	</div>
</Command.Dialog>
