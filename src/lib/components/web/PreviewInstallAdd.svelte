<script lang="ts">
	import { page } from "$app/state";
	import * as Add from "$lib/components/ui/add";
	import { AGENTS, type Agent } from "$lib/components/ui/add";
	import { cn } from "$lib/utils";
	import { hasRegistryItem } from "$lib/utils/registry-url";

	interface PreviewInstallAddProps {
		itemId?: string;
		installUrlBase?: string;
		registryPath?: string;
		registryOptions?: readonly string[];
		registry?: string;
		class?: string;
	}

	let {
		itemId,
		installUrlBase,
		registryPath = "r",
		registryOptions = ["@sv/cnblocks"],
		registry,
		class: className = "",
	}: PreviewInstallAddProps = $props();

	let currentAgent: Agent = $state("pnpm");
	let currentRegistry: string = $derived(registry ?? registryOptions[0] ?? "@sv/cnblocks");

	let resolvedInstallUrlBase = $derived(
		(installUrlBase?.trim() || page.url.origin).replace(/\/+$/, "")
	);
	let resolvedRegistryPath = $derived(registryPath.replace(/^\/+|\/+$/g, "") || "r");

	let installUrl = $derived(
		itemId && hasRegistryItem(itemId)
			? `${resolvedInstallUrlBase}/${resolvedRegistryPath}/${itemId}.json`
			: ""
	);
	let showRegistryOptions = $derived(registryOptions.length > 1);
</script>

{#if installUrl}
	<Add.Provider bind:agent={currentAgent} bind:registry={currentRegistry} {registryOptions}>
		<Add.Root item={installUrl} withoutRegistry>
			<Add.Group class={cn("h-8 w-80 max-w-full", className)}>
				<Add.Button class="h-8 min-w-0 md:pr-2 md:pl-2 [&>div]:size-8" />
				<Add.GroupSeparator class="h-4" />
				<Add.Dropdown class="size-8">
					<Add.DropdownContent>
						{#each AGENTS as addAgent (addAgent)}
							<Add.DropdownAgentOption agent={addAgent} />
						{/each}
						{#if showRegistryOptions}
							<Add.DropdownSeparator />
							{#each registryOptions as option (option)}
								<Add.DropdownRegistryOption registry={option} />
							{/each}
						{/if}
					</Add.DropdownContent>
				</Add.Dropdown>
			</Add.Group>
		</Add.Root>
	</Add.Provider>
{/if}
