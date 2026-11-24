<script lang="ts">
	import * as Sidebar from "#lib/components/ui/sidebar/index.js";
	import { AnimatePresence, motion } from "motion-sv";
	import SidebarSearch from "./sidebar-search.svelte";

	let { showOnMobile = true }: { showOnMobile?: boolean } = $props();
	const sidebar = Sidebar.useSidebar();
</script>

<AnimatePresence initial={false}>
	{#if (sidebar.isMobile && showOnMobile) || (!sidebar.isMobile && sidebar.state === "collapsed")}
		<motion.div
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			exit={{ opacity: 0, transition: { duration: 0.1, ease: [0.4, 0, 1, 1] } }}
			transition={{ duration: 0.26, ease: [0.32, 0.72, 0, 1] }}
			class="absolute top-1 left-1 z-100 flex shrink-0 items-center"
		>
			<Sidebar.Trigger class="rounded-full text-muted-foreground" />
			<SidebarSearch class="rounded-full" />
		</motion.div>
	{/if}
</AnimatePresence>
