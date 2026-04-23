<script lang="ts" module>
	import type { Snippet } from "svelte";

	export type DocsPageShellProps = {
		title: string;
		description?: string;
		children?: Snippet;
	};
</script>

<script lang="ts">
	import { H1, Paragraph } from "$lib/components/markdown/index";
	import { getDocsLayoutContext } from "./docs-layout-context";

	let { title, description, children }: DocsPageShellProps = $props();

	const { registerDocContent } = getDocsLayoutContext();
	let contentRef = $state<HTMLElement>();

	$effect(() => {
		registerDocContent(contentRef);

		return () => {
			registerDocContent(undefined);
		};
	});
</script>

<div class="mx-auto w-full max-w-4xl">
	<article class="min-w-0 space-y-8" data-doc-content bind:this={contentRef}>
		<section>
			<H1 id="introduction" class="tracking-tighter">{title}</H1>
			{#if description}
				<Paragraph class="mt-1">{description}</Paragraph>
			{/if}
		</section>
		{@render children?.()}
	</article>
</div>
