<script lang="ts">
	import { goto } from "$app/navigation";
	import Button from "#lib/components/ui/button/button.svelte";
	import * as Command from "#lib/components/ui/command/index.js";
	import { search_comp } from "#lib/config/search_comp.js";
	import { cn } from "#lib/utils.js";
	import CircleIcon from "@lucide/svelte/icons/circle";
	import SearchIcon from "@lucide/svelte/icons/search";

	let { class: className }: { class?: string } = $props();
	let open = $state(false);

	function select(href?: string) {
		if (!href) return;
		open = false;
		goto(href);
	}
</script>

<Button
	variant="ghost"
	size="icon-sm"
	class={cn("size-8 text-muted-foreground", className)}
	aria-label="Search components"
	onclick={() => (open = true)}
>
	<SearchIcon class="size-4" />
</Button>

<Command.Dialog bind:open>
	<Command.Input placeholder="Search components…" />
	<Command.List>
		<Command.Empty>No components found.</Command.Empty>
		{#each search_comp as group}
			<Command.Group heading={group.name}>
				{#each group.subcom as item}
					<Command.Item value={item.name} onSelect={() => select(item.href)}>
						<CircleIcon class="size-3" />
						{item.name}
					</Command.Item>
				{/each}
			</Command.Group>
		{/each}
	</Command.List>
</Command.Dialog>
