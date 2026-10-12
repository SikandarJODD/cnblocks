<script lang="ts">
	import * as Sidebar from "#lib/components/ui/sidebar/index.js";
	import type { ComponentProps } from "svelte";
	import SidebarFooter from "./sidebar-footer.svelte";
	import SidebarHeader from "./sidebar-header.svelte";
	import SidebarNavigation from "./sidebar-navigation.svelte";
	import SidebarSupportCard from "./sidebar-support-card.svelte";

	let { ref = $bindable(null), ...restProps }: ComponentProps<typeof Sidebar.Root> = $props();
</script>

<Sidebar.Root bind:ref variant="inset" collapsible="offcanvas" {...restProps}>
	<SidebarHeader />
	<Sidebar.Content class="gap-0 overflow-hidden">
		<SidebarNavigation />
	</Sidebar.Content>
	<!-- <SidebarSupportCard /> -->
	<p class="px-2 pb-1 text-xs text-muted-foreground">
		Ported by
		<a
			href="https://bhide.dev?utm_source=sv-blocks&utm_medium=referral"
			target="_blank"
			rel="noopener noreferrer"
			class="font-cursive text-[13px] text-ink/80 hover:underline dark:text-primary/70"
		>Bhide Svelte</a>
	</p>
	<SidebarFooter />
	<!-- <Sidebar.Rail /> -->
</Sidebar.Root>
