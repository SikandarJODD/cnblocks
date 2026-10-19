<script lang="ts">
	import * as Sidebar from "#lib/components/ui/sidebar/index.js";
	import SidebarSearch from "#lib/components/sidebar/sidebar-search.svelte";
	import ThemeToggle from "./ThemeToggle.svelte";
</script>

<header
	class="sticky top-0 z-20 flex h-12 shrink-0 items-center justify-between bg-background/80 px-2 backdrop-blur-md md:hidden"
>
	<div class="flex items-center">
		<Sidebar.Trigger class="size-9 touch-manipulation text-muted-foreground [&_svg]:size-6" />
		<SidebarSearch class="size-9 [&_svg]:size-5!" />
	</div>

	<a
		href="/"
		aria-label="sv-blocks home"
		class="absolute left-1/2 -translate-x-1/2 font-cursive text-[13px] text-ink/80 dark:text-emerald-500"
	>
		sv-blocks
	</a>

	<div class="ms-auto mr-2 [&_button]:size-8 [&_svg]:size-4!">
		<ThemeToggle />
	</div>
</header>
