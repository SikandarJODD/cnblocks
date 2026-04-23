<script lang="ts">
	import * as Avatar from "$lib/components/ui/avatar/index.js";
	import * as Sidebar from "$lib/components/ui/sidebar/index.js";

	let {
		user,
	}: {
		user: {
			name: string;
			desc: string;
			avatar: string;
			visit: string;
		};
	} = $props();

	// const sidebar = useSidebar();
</script>

<Sidebar.Menu class="rounded-md border border-dashed bg-secondary/30  hover:border-cyan-500/50 ">
	<Sidebar.MenuItem>
		<a href={user.visit} target="_blank" rel="noopener noreferrer">
			<Sidebar.MenuButton
				size="lg"
				class="cursor-pointer hover:bg-cyan-800/10 data-[state=open]:bg-sidebar-accent data-[state=open]:text-sidebar-accent-foreground"
			>
				<Avatar.Root class="size-8 rounded-lg">
					<Avatar.Image src={user.avatar} alt={user.name} />
					<Avatar.Fallback class="rounded-lg">CN</Avatar.Fallback>
				</Avatar.Root>
				<div class="grid flex-1 text-start text-sm leading-tight">
					<span class="truncate font-medium">{user.name}</span>
					<span class="truncate text-xs text-muted-foreground">{user.desc}</span>
				</div>
			</Sidebar.MenuButton>
		</a>
	</Sidebar.MenuItem>
</Sidebar.Menu>
