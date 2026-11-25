<script lang="ts">
	import * as Sidebar from "#lib/components/ui/sidebar/index.js";
	import ThemeToggle from "#lib/web/layouts/ThemeToggle.svelte";
	import type { ComponentProps } from "svelte";
	import SidebarFooter from "./sidebar-footer.svelte";
	import SidebarHeader from "./sidebar-header.svelte";
	import SidebarNavigation from "./sidebar-navigation.svelte";
	// import SidebarSupportCard from "./sidebar-support-card.svelte";

	let { ref = $bindable(null), ...restProps }: ComponentProps<typeof Sidebar.Root> = $props();
	const sidebar = Sidebar.useSidebar();

	function closeMobileSidebar() {
		if (sidebar.isMobile) sidebar.setOpenMobile(false);
	}
</script>

<Sidebar.Root
	bind:ref
	variant="inset"
	collapsible="offcanvas"
	class="data-[mobile=true]:px-2 data-[mobile=true]:pt-2"
	{...restProps}
>
	<SidebarHeader />
	<Sidebar.Content class="gap-0 overflow-hidden">
		<SidebarNavigation />
	</Sidebar.Content>
	<!-- <SidebarSupportCard /> -->
	<div class="flex items-center pr-1 pb-1 pl-2 text-xs text-muted-foreground md:text-xs">
		<p>
			Ported by
			<a
				href="https://bhide.dev?utm_source=sv-blocks&utm_medium=referral"
				target="_blank"
				rel="noopener noreferrer"
				class="font-cursive text-[13px] text-ink/80 hover:underline dark:text-emerald-500"
				onclick={closeMobileSidebar}>Bhide Svelte</a
			>
		</p>
		<div class="ms-auto [&_button]:size-10 [&_button]:touch-manipulation md:[&_button]:size-8">
			<ThemeToggle />
		</div>
	</div>
	<SidebarFooter />
	<!-- <Sidebar.Rail /> -->
</Sidebar.Root>
