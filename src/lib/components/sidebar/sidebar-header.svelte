<script lang="ts">
	import * as Sidebar from "#lib/components/ui/sidebar/index.js";
	import Logo from "#lib/web/layouts/Logo.svelte";
	import Button from "../ui/button/button.svelte";
	import SidebarSearch from "./sidebar-search.svelte";

	const sidebar = Sidebar.useSidebar();

	function closeMobileSidebar() {
		if (sidebar.isMobile) sidebar.setOpenMobile(false);
	}
</script>

<Sidebar.Header class="px-0 pt-0 pb-1">
	<div class="flex h-10 items-center justify-between gap-1 md:h-8">
		<Button
			size="sm"
			variant="ghost"
			href="/"
			class="h-8 touch-manipulation gap-1.5 rounded-md px-1.5 md:h-7"
			aria-label="Go to homepage"
			onclick={closeMobileSidebar}
		>
			<Logo />
			<span class="font-cursive text-[13px] font-normal text-primary">sv-blocks</span>
		</Button>
		<div class="flex items-center gap-0">
			<SidebarSearch />
			<Sidebar.Trigger class="size-7 touch-manipulation text-muted-foreground md:size-7" />
		</div>
	</div>
</Sidebar.Header>
