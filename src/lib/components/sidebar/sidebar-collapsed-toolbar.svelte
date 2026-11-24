<script lang="ts">
	import * as Sidebar from "#lib/components/ui/sidebar/index.js";
	import { slide } from "svelte/transition";
	import SidebarSearch from "./sidebar-search.svelte";

	let { showOnMobile = true }: { showOnMobile?: boolean } = $props();
	const sidebar = Sidebar.useSidebar();
</script>

{#if (sidebar.isMobile && showOnMobile) || (!sidebar.isMobile && sidebar.state === "collapsed")}
	<div
		in:slide|global={{ axis: "x", duration: 400 }}
		out:slide|global={{ axis: "x", duration: 100 }}
		class="absolute top-1 left-1 flex shrink-0 items-center"
	>
		<Sidebar.Trigger class="rounded-full text-muted-foreground" />
		<SidebarSearch class="rounded-full" />
	</div>
{/if}
