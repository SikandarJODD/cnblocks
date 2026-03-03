<script lang="ts">
	import * as DropdownMenu from "$lib/components/ui/dropdown-menu/index.js";
	import * as Sidebar from "$lib/components/ui/sidebar/index.js";
	import { useSidebar } from "$lib/components/ui/sidebar/index.js";
	import EllipsisIcon from "@lucide/svelte/icons/ellipsis";
	import FolderIcon from "@lucide/svelte/icons/folder";
	import ShareIcon from "@lucide/svelte/icons/share";
	import Trash2Icon from "@lucide/svelte/icons/trash-2";

	let {
		projects,
	}: {
		projects: {
			name: string;
			url: string;
			badge: string;
		}[];
	} = $props();

	const sidebar = useSidebar();
</script>

<Sidebar.Group class="group-data-[collapsible=icon]:hidden">
	<Sidebar.GroupLabel class="gap-1.5">
		<span>
			<svg
				xmlns="http://www.w3.org/2000/svg"
				class="size-4"
				viewBox="0 0 24 24"
				fill="none"
				role="img"
				color="currentColor"
			>
				<path
					opacity="0.4"
					d="M12.042 2.25C14.1221 2.24999 15.7597 2.25 17.0381 2.42188C18.3464 2.59783 19.3904 2.9666 20.2119 3.78809C21.0334 4.60957 21.4022 5.65356 21.5781 6.96191C21.75 8.24033 21.75 9.87786 21.75 11.958V12.042C21.75 13.9212 21.7478 15.4389 21.6211 16.6572C21.3013 16.4015 21.0708 16.039 20.9854 15.6211C20.955 15.5 20.9017 15.3323 20.8789 15.2637C20.2296 13.6317 17.9402 13.5805 17.1885 15.1104C17.1432 15.2276 17.0374 15.5241 16.9766 15.7725C16.7901 16.4003 16.2704 16.8817 15.6201 17.0146C13.4606 17.4574 13.4606 20.5426 15.6201 20.9854C16.0382 21.0709 16.4018 21.3011 16.6582 21.6211C15.4397 21.7479 13.9217 21.75 12.042 21.75H11.958C9.87786 21.75 8.24033 21.75 6.96191 21.5781C5.65356 21.4022 4.60957 21.0334 3.78809 20.2119C2.9666 19.3904 2.59783 18.3464 2.42188 17.0381C2.25 15.7597 2.24999 14.1221 2.25 12.042V11.958C2.24999 9.87786 2.25 8.24033 2.42188 6.96191C2.59783 5.65356 2.9666 4.60957 3.78809 3.78809C4.60957 2.9666 5.65356 2.59783 6.96191 2.42188C8.24033 2.25 9.87786 2.24999 11.958 2.25H12.042Z"
					fill="currentColor"
				></path>
				<path
					d="M16.2929 9.29289C16.6834 8.90237 17.3164 8.90237 17.707 9.29289C18.0975 9.68342 18.0975 10.3164 17.707 10.707L14.914 13.4999C14.133 14.2809 12.8669 14.2809 12.0859 13.4999L10.4999 11.914L7.70696 14.707C7.31643 15.0975 6.68342 15.0975 6.29289 14.707C5.90237 14.3164 5.90237 13.6834 6.29289 13.2929L9.08586 10.4999C9.86689 9.71898 11.133 9.71898 11.914 10.4999L13.4999 12.0859L16.2929 9.29289Z"
					fill="currentColor"
				></path>
				<path
					d="M19.7178 15.7255C19.4656 15.0915 18.5345 15.0915 18.2823 15.7255L18.2393 15.871C18.0109 16.9887 17.1774 17.878 16.0919 18.1855L15.8711 18.2392C15.0431 18.4087 15.0431 19.5912 15.8711 19.7607C17.0634 20.0044 17.9956 20.9366 18.2393 22.1288C18.4088 22.9569 19.5913 22.9569 19.7608 22.1288C20.0045 20.9366 20.9368 20.0044 22.129 19.7607C22.957 19.5912 22.957 18.4087 22.129 18.2392C21.0113 18.0108 20.122 17.1773 19.8145 16.0917L19.7608 15.871L19.7178 15.7255Z"
					fill="currentColor"
				></path>
			</svg>
		</span>
		Projects
	</Sidebar.GroupLabel>
	<Sidebar.Menu>
		{#each projects as item (item.name)}
			<Sidebar.MenuItem>
				<Sidebar.MenuButton class='text-sm'>
					{#snippet child({ props })}
						<a href={item.url} {...props}>
							<!-- <item.icon /> -->
							<span>{item.name}</span>
						</a>
					{/snippet}
				</Sidebar.MenuButton>
			</Sidebar.MenuItem>
		{/each}
		<!-- <Sidebar.MenuItem>
			<Sidebar.MenuButton>
				<EllipsisIcon />
				<span>More</span>
			</Sidebar.MenuButton>
		</Sidebar.MenuItem> -->
	</Sidebar.Menu>
</Sidebar.Group>
