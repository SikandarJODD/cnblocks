<script lang="ts">
	import * as Sidebar from "#lib/components/ui/sidebar/index.js";
	import type { ComponentProps } from "svelte";
	import SidebarFooter from "./sidebar-footer.svelte";
	import SidebarHeader from "./sidebar-header.svelte";
	import SidebarNavigation from "./sidebar-navigation.svelte";

	let { ref = $bindable(null), ...restProps }: ComponentProps<typeof Sidebar.Root> = $props();
</script>

<Sidebar.Root bind:ref variant="inset" collapsible="offcanvas" {...restProps}>
	<SidebarHeader />
	<Sidebar.Content class="gap-0 overflow-hidden">
		<SidebarNavigation />
	</Sidebar.Content>
	<SidebarFooter />
	<!-- <Sidebar.Rail /> -->
</Sidebar.Root>
