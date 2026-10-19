<script lang="ts">
	import * as Sidebar from "#lib/components/ui/sidebar/index.js";
	import SidebarSearch from "./sidebar-search.svelte";

	let { showOnMobile = true }: { showOnMobile?: boolean } = $props();
	const sidebar = Sidebar.useSidebar();
</script>

{#if (sidebar.isMobile && showOnMobile) || (!sidebar.isMobile && sidebar.state === "collapsed")}
	<div class="flex h-11 shrink-0 items-center gap-1 px-3">
		<Sidebar.Trigger class="size-7 text-muted-foreground" />
		<SidebarSearch />
	</div>
{/if}
