<script lang="ts">
	import * as Sidebar from "#lib/components/ui/sidebar/index.js";
	import Logo from "#lib/web/layouts/Logo.svelte";
	import SidebarSearch from "./sidebar-search.svelte";
</script>

<Sidebar.Header class="px-0 pt-0 pb-1">
	<div class="flex h-8 items-center gap-1">
		<a
			href="/"
			class="mr-auto flex size-7 items-center justify-center rounded-md ring-sidebar-ring outline-none focus-visible:ring-2 [&_svg]:size-4"
			aria-label="cnblocks home"
		>
			<Logo />
		</a>
		<SidebarSearch />
		<Sidebar.Trigger class="size-7 text-muted-foreground" />
	</div>
</Sidebar.Header>
