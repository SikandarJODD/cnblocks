<script lang="ts">
	import * as Sidebar from "#lib/components/ui/sidebar/index.js";
	import Logo from "#lib/web/layouts/Logo.svelte";
	import SidebarSearch from "./sidebar-search.svelte";
</script>

<Sidebar.Header class="p-2">
	<div class="flex h-8 items-center gap-1">
		<a
			href="/"
			class="ring-sidebar-ring mr-auto flex size-7 items-center justify-center rounded-md outline-none focus-visible:ring-2 [&_svg]:size-4"
			aria-label="cnblocks home"
		>
			<Logo />
		</a>
		<SidebarSearch />
		<Sidebar.Trigger class="size-7 text-muted-foreground" />
	</div>
</Sidebar.Header>
