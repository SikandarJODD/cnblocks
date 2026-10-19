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
			size="icon-sm"
			variant="ghost"
			href="/"
			class="size-10 touch-manipulation rounded-md p-0 md:size-8 [&_svg]:size-[22px]"
			aria-label="Go to homepage"
			onclick={closeMobileSidebar}
		>
			<Logo />
		</Button>
		<div class="flex items-center gap-0">
			<SidebarSearch />
			<Sidebar.Trigger
				class="size-10 touch-manipulation text-muted-foreground md:size-8 [&_svg]:size-6 md:[&_svg]:size-6"
			/>
		</div>
	</div>
</Sidebar.Header>
