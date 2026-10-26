<script lang="ts">
	import * as Sidebar from "#lib/components/ui/sidebar/index.js";
	import { slide } from "svelte/transition";
	import SidebarSearch from "./sidebar-search.svelte";

	let { showOnMobile = true }: { showOnMobile?: boolean } = $props();
	const sidebar = Sidebar.useSidebar();
</script>

{#if (sidebar.isMobile && showOnMobile) || (!sidebar.isMobile && sidebar.state === "collapsed")}
	<div
		in:slide|global={{ axis: "y", duration: 400 }}
		out:slide|global={{ axis: "y", duration: 100 }}
		class="flex h-11 shrink-0 items-center gap-1 px-3"
	>
		<Sidebar.Trigger class="size-7 text-muted-foreground" />
		<SidebarSearch />
	</div>
{/if}
