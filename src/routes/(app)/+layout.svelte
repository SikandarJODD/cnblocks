<script lang="ts">
	import { page } from "$app/state";
	import { SidebarCollapsedToolbar, SiteSidebar } from "#lib/components/sidebar/index.js";
	import * as Sidebar from "#lib/components/ui/sidebar/index.js";
	import Header from "#lib/web/layouts/Header.svelte";
	import SiteFooter from "#lib/web/layouts/SiteFooter.svelte";
	let { children } = $props();

	// If Path include v2-docs, then don't shwo site footer
	let showHeaderFooter = $derived.by(() => {
		let path = page.url.pathname;
		return !path.includes("v2-docs");
	});
</script>

<Sidebar.Provider>
	<SiteSidebar />
	<Sidebar.Inset>
		<main class="flex-1 border rounded-2xl">
		<SidebarCollapsedToolbar />
		<!-- <Header /> -->
			{@render children()}
			{#if showHeaderFooter}
			<SiteFooter />
			{/if}
		</main>
	</Sidebar.Inset>
</Sidebar.Provider>
