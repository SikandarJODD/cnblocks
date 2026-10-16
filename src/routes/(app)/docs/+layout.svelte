<script lang="ts">
	import { page } from "$app/state";
	import Toc from "#lib/components/base/toc/toc.svelte";
	import { docsV2Pages } from "#lib/config/docs-v2.js";
	import { setDocsLayoutContext } from "#lib/components/layout/docs-layout-context.js";
	import { UseToc } from "#lib/hooks/use-toc.svelte.js";

	let { children } = $props();

	let docContentRef = $state<HTMLElement>();
	const toc = new UseToc();

	setDocsLayoutContext({
		registerDocContent: (el) => {
			docContentRef = el;
		},
	});

	const normalizePath = (value: string) => (value === "/" ? value : value.replace(/\/+$/, ""));

	const currentPageMeta = $derived.by(() => {
		const currentPath = normalizePath(page.url.pathname);
		return docsV2Pages.find((item) => normalizePath(item.path) === currentPath);
	});

	const showToc = $derived(currentPageMeta?.toc ?? true);

	$effect(() => {
		toc.ref = docContentRef;
	});
</script>

{@render children()}
