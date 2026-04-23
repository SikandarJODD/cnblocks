<script lang="ts">
	import { page } from "$app/state";
	import * as Add from "$lib/components/ui/add";
	import { AGENTS, type Agent } from "$lib/components/ui/add";
	import {
		HoverCard,
		HoverCardContent,
		HoverCardTrigger,
	} from "$lib/components/ui/hover-card";
	import { cn } from "$lib/utils";
	import { getRegistryItemUrl } from "$lib/utils/registry-url";
	import { PersistedState } from "runed";

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
		registryPath = "r",
		registryOptions = ["@sv/cnblocks"],
		registry,
		class: className = "",
	}: PreviewInstallAddProps = $props();

	let agent = new PersistedState<Agent>("user-agent-preference", "pnpm");
	let newRegistryPath = $derived.by(() => {
		let pathname = page.url.pathname.toString();
		if (pathname.includes("mist")) return "m";
		if (pathname.includes("veil")) return "v";
		return registryPath;
	});

	let installUrl = $derived(
		itemId
			? getRegistryItemUrl(page.url.origin, page.url.pathname, itemId, newRegistryPath)
			: ""
	);

	let showRegistryOptions = $derived(registryOptions.length > 1);
	// $inspect("installUrl", installUrl);
	// $inspect("itemId", itemId, "Registry Path ", newRegistryPath);
</script>

{#if installUrl}
	<Add.Provider bind:agent={agent.current} registry="" registryOptions={[installUrl]}>
		<Add.Root item={installUrl}>
			<HoverCard openDelay={200}>
				<HoverCardTrigger>
					{#snippet child({ props })}
						<Add.Group {...props} class={cn("h-8 w-80 max-w-full", className)}>
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
					{/snippet}
				</HoverCardTrigger>
				<HoverCardContent class="w-fit px-3 py-1.5">
					<p class="font-mono text-xs leading-relaxed break-all">{installUrl}</p>
				</HoverCardContent>
			</HoverCard>
		</Add.Root>
	</Add.Provider>
{/if}
