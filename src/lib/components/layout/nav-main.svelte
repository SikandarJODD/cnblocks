<script lang="ts">
	import { page } from "$app/state";
	import * as Sidebar from "$lib/components/ui/sidebar/index.js";
	import Badge from "$lib/components/ui/badge/badge.svelte";
	import { cn } from "$lib/utils";

	type Item = {
		title: string;
		url: string;
		badge?: string;
		external?: boolean;
	};

	let {
		items,
		label = "Guide",
	}: {
		items: Item[];
		label?: string;
	} = $props();

	const isActive = (item: Item) => {
		if (item.external || !item.url.startsWith("/")) return false;
		return page.url.pathname === item.url;
	};
</script>

<Sidebar.Group>
	<Sidebar.GroupLabel class="gap-1.5">
		<span>
			<svg
				xmlns="http://www.w3.org/2000/svg"
				class="size-3.5"
				viewBox="0 0 24 24"
				fill="none"
				role="img"
				color="currentColor"
			>
				<path
					opacity="0.4"
					d="M11.25 6.01075C9.49925 4.88337 7.42689 4.24722 5.33301 4.25001C4.26146 4.25001 2.79138 4.33668 2.00489 5.16602C1.60339 5.58943 1.41468 6.0638 1.32813 6.60548C1.24799 7.10712 1.25 7.71199 1.25 8.40235L1.25002 17.0762C1.25002 17.6737 1.25002 18.167 1.28029 18.5518C1.30995 18.9284 1.37444 19.3249 1.58889 19.6602C1.7129 19.8555 2.04435 20.2749 2.37795 20.3897C2.70923 20.5525 3.11124 20.5983 3.48537 20.6221C3.94562 20.6514 4.55615 20.6514 5.31935 20.6514H5.334C7.50112 20.6484 9.59402 21.3951 11.25 22.75L11.25 6.01075Z"
					fill="currentColor"
				></path>
				<path
					opacity="0.4"
					d="M19.75 3.39495C19.75 2.23538 18.8039 1.11571 17.5039 1.26311C15.2508 1.65616 13.667 2.88015 12.75 4.10491V22.7499C12.8975 22.3284 13.3188 21.1609 13.7061 20.5809C14.4717 19.4343 15.9547 18.2058 18.2461 17.951C19.0525 17.789 19.7499 17.1031 19.75 16.1776V3.39495Z"
					fill="currentColor"
				></path>
				<path
					d="M20.75 4.47266C21.2305 4.60809 21.671 4.82233 21.9951 5.16406C22.3966 5.58747 22.5853 6.06184 22.6719 6.60352C22.752 7.10516 22.75 7.71003 22.75 8.40039V17.0742C22.75 17.6717 22.75 18.165 22.7197 18.5498C22.6901 18.9264 22.6256 19.323 22.4111 19.6582C22.2871 19.8536 21.9557 20.273 21.6221 20.3877C21.2908 20.5505 20.8888 20.5963 20.5146 20.6201C20.0544 20.6494 19.4439 20.6494 18.6807 20.6494H18.666C17.0935 20.6472 15.5609 21.0412 14.2051 21.7744C14.3252 21.5063 14.4402 21.28 14.5371 21.1348L14.5381 21.1357C15.1594 20.2053 16.7013 19.0945 18.666 18.876C19.6748 18.7638 20.6192 17.69 20.7373 16.4482L20.75 16.1768V4.47266Z"
					fill="currentColor"
				></path>
			</svg>
		</span>
		{label}
	</Sidebar.GroupLabel>

	<Sidebar.Menu>
		{#each items as item}
			<Sidebar.MenuItem>
				<Sidebar.MenuButton
					class={cn("text-sm", {
						"bg-sidebar-accent text-sidebar-accent-foreground": isActive(item),
					})}
				>
					{#snippet child({ props })}
						<a
							href={item.url}
							target={item.external ? "_blank" : undefined}
							rel={item.external ? "noopener noreferrer" : undefined}
							{...props}
						>
							<span>{item.title}</span>
							{#if item.badge}
								<Badge variant="secondary" class="ml-2 rounded-full px-1.5 py-0 text-[10px]">
									{item.badge}
								</Badge>
							{/if}
						</a>
					{/snippet}
				</Sidebar.MenuButton>
			</Sidebar.MenuItem>
		{/each}
	</Sidebar.Menu>
</Sidebar.Group>
