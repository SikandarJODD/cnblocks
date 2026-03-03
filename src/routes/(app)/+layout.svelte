<script lang="ts">
	import { page } from "$app/state";
	import Header from "$lib/web/layouts/Header.svelte";
	import SiteFooter from "$lib/web/layouts/SiteFooter.svelte";
	let { children } = $props();

	// If Path include v2-docs, then don't shwo site footer
	let showHeaderFooter = $derived.by(() => {
		let path = page.url.pathname;
		return !path.includes("v2-docs");
	});
</script>

<!-- {#if showHeaderFooter} -->
<Header />
<!-- {/if} -->
{@render children()}
{#if showHeaderFooter}
	<SiteFooter />
{/if}
<!-- <SiteFooter /> -->
