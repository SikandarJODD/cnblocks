<script lang="ts" module>
	import type { Snippet } from "svelte";

	export type DocsPageShellProps = {
		title: string;
		description?: string;
		showToc?: boolean;
		children?: Snippet;
	};
</script>

<script lang="ts">
	import { H1, Paragraph } from "$lib/components/markdown/index";
	import Toc from "$lib/components/base/toc/toc.svelte";
	import { UseToc } from "$lib/hooks/use-toc.svelte";

	let { title, description, showToc = true, children }: DocsPageShellProps = $props();

	const toc = new UseToc();
	let contentRef = $state<HTMLElement>();

	$effect(() => {
		toc.ref = contentRef;
	});
</script>

<div class="mx-auto w-full max-w-7xl px-4 py-6 md:px-8 lg:py-10">
	<div class="grid grid-cols-1 gap-10 lg:grid-cols-[minmax(0,1fr)_300px]">
		<article class="min-w-0 space-y-8" data-doc-content bind:this={contentRef}>
			<section>
				<H1 id="introduction">{title}</H1>
				{#if description}
					<Paragraph class="mt-3">{description}</Paragraph>
				{/if}
			</section>
			{@render children?.()}
		</article>

		{#if showToc}
			<aside class="hidden lg:block">
				<div class="sticky top-20 rounded-2xl border border-border/60 bg-card/70 p-5 backdrop-blur-sm">
					<p
						class="mb-3 flex items-center gap-2 text-xs font-semibold tracking-wide text-muted-foreground uppercase"
					>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							width="14"
							height="14"
							viewBox="0 0 24 24"
							fill="none"
							stroke="currentColor"
							stroke-width="2"
							stroke-linecap="round"
							stroke-linejoin="round"
							aria-hidden="true"
						>
							<line x1="4" x2="20" y1="6" y2="6"></line>
							<line x1="4" x2="14" y1="12" y2="12"></line>
							<line x1="4" x2="10" y1="18" y2="18"></line>
						</svg>
						On this page
					</p>
					<Toc toc={toc.current} />
				</div>
			</aside>
		{/if}
	</div>
</div>
