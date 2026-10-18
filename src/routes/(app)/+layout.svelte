<script lang="ts">
	import { page } from "$app/state";
	import { SidebarCollapsedToolbar, SiteSidebar } from "#lib/components/sidebar/index.js";
	import * as Sidebar from "#lib/components/ui/sidebar/index.js";
	import Header from "#lib/web/layouts/Header.svelte";
	import SiteFooter from "#lib/web/layouts/SiteFooter.svelte";
	import { cn } from "cn";
	let { children } = $props();

	// If Path include docs, then don't shwo site footer
	let isDocsPath = $derived.by(() => {
		let path = page.url.pathname;
		return path.includes("docs");
	});
	let isKitBlocksPath = $derived.by(() => {
		let path = page.url.pathname;
		return path.includes("kit") || path.includes("mist");
	});
	let isHomePath = $derived.by(() => {
		let path = page.url.pathname;
		return path === "/" || path.includes("projects");
	});
</script>

<Sidebar.Provider>
	<SiteSidebar />
	<Sidebar.Inset>
		<main
			class={cn(
				"min-w-0 flex-1 rounded-2xl border",
				isDocsPath || isHomePath
					? "bg-none"
					: isKitBlocksPath
						? "bg-muted dark:bg-muted/50"
						: "bg-white dark:bg-muted/50"
			)}
		>
			<SidebarCollapsedToolbar />
			<!-- <Header /> -->
			{@render children()}
			{#if !isDocsPath}
				<SiteFooter />
			{/if}
		</main>
	</Sidebar.Inset>
</Sidebar.Provider>
