<script lang="ts">
	import * as Sidebar from "#lib/components/ui/sidebar/index.js";
	import SidebarSearch from "#lib/components/sidebar/sidebar-search.svelte";
	import ThemeToggle from "./ThemeToggle.svelte";
</script>

<header class="relative flex h-10 shrink-0 items-center justify-between px-2 md:hidden">
	<div class="flex items-center">
		<Sidebar.Trigger
			class="size-9 touch-manipulation text-muted-foreground [&_svg]:size-6"
		/>
		<SidebarSearch class="size-9 [&_svg]:size-5!" />
	</div>

	<a
		href="/"
		aria-label="sv-blocks home"
		class="absolute left-1/2 -translate-x-1/2 font-cursive text-[13px] text-ink/80 dark:text-emerald-500"
	>
		sv-blocks
	</a>

	<div class="ms-auto [&_button]:size-9 [&_svg]:size-5!">
		<ThemeToggle />
	</div>
</header>
