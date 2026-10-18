<script lang="ts">
	import * as Sidebar from "#lib/components/ui/sidebar/index.js";
	import Logo from "#lib/web/layouts/Logo.svelte";
	import Button from "../ui/button/button.svelte";
	import SidebarSearch from "./sidebar-search.svelte";
</script>

<Sidebar.Header class="px-0 pt-0 pb-1">
	<div class="flex h-8 items-center justify-between gap-1">
		<Button size="icon-sm" variant="ghost" href="/" class="rounded-md p-0">
			<Logo />
		</Button>
		<div class="flex items-center gap-0">
			<SidebarSearch />
			<Sidebar.Trigger class="size-8 text-muted-foreground" />
		</div>
	</div>
</Sidebar.Header>
