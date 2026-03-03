<script lang="ts">
	import DocsSidebar from "$lib/components/layout/DocsSidebar.svelte";
	import * as Sidebar from "$lib/components/ui/sidebar/index.js";

	let { children } = $props();
</script>

<Sidebar.Provider>
	<DocsSidebar />
	<Sidebar.Inset>
		<header class="flex h-14 items-center border-b px-4 lg:hidden">
			<Sidebar.Trigger />
			<span class="ml-3 text-sm font-medium text-muted-foreground">Documentation</span>
		</header>
		<div id="docs-content-container">
			{@render children()}
		</div>
	</Sidebar.Inset>
</Sidebar.Provider>
