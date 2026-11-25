<script lang="ts">
	import { page } from "$app/state";
	import ArrowLeft from "@lucide/svelte/icons/arrow-left";
	import ArrowRight from "@lucide/svelte/icons/arrow-right";
	import { Button } from "#lib/components/ui/button/index.js";
	import { docsV2Pages } from "#lib/config/docs-v2.js";

	const normalizePath = (value: string) => (value === "/" ? value : value.replace(/\/+$/, ""));

	const currentPageIndex = $derived.by(() => {
		const currentPath = normalizePath(page.url.pathname);
		return docsV2Pages.findIndex((item) => normalizePath(item.path) === currentPath);
	});

	const previousPage = $derived(
		currentPageIndex > 0 ? docsV2Pages[currentPageIndex - 1] : undefined
	);
	const nextPage = $derived(
		currentPageIndex >= 0 && currentPageIndex < docsV2Pages.length - 1
			? docsV2Pages[currentPageIndex + 1]
			: undefined
	);
</script>

{#if previousPage || nextPage}
	<nav
		class="mx-auto grid w-full max-w-3xl grid-cols-1 gap-3 px-5 pb-8 sm:grid-cols-2 sm:px-8 sm:pb-12"
		aria-label="Documentation pagination"
	>
		{#if previousPage}
			<Button
				href={previousPage.path}
				variant="outline"
				class="h-auto min-w-0 items-start justify-start rounded-lg p-3 text-left whitespace-normal shadow-none"
			>
				<span class="min-w-0 flex-1">
					<span class="block text-xs font-normal text-ink/70 dark:text-muted-foreground"
						>Previous</span
					>
					<span class="mt-2 flex items-center gap-2">
						<!-- <ArrowLeft
							class="size-4 shrink-0 text-muted-foreground group-hover/button:text-foreground"
						/> -->
						<span class="font-gmono text-sm font-normal text-foreground">
							{previousPage.navTitle}
						</span>
					</span>
					<span class="mt-1 block text-xs font-normal text-muted-foreground">
						{previousPage.navDescription}
					</span>
				</span>
			</Button>
		{/if}

		{#if nextPage}
			<Button
				href={nextPage.path}
				variant="outline"
				class="h-auto min-w-0 items-start justify-end rounded-lg p-3 text-right whitespace-normal shadow-none sm:col-start-2"
			>
				<span class="min-w-0 flex-1">
					<span class="block text-xs font-normal text-ink/70 dark:text-muted-foreground"
						>Next</span
					>
					<span class="mt-2 flex items-center justify-end gap-2">
						<span class="font-gmono text-sm font-normal text-foreground">
							{nextPage.navTitle}
						</span>
						<!-- <ArrowRight
							class="size-4 shrink-0 text-muted-foreground group-hover/button:text-foreground"
						/> -->
					</span>
					<span class="mt-1 block text-xs font-normal text-muted-foreground">
						{nextPage.navDescription}
					</span>
				</span>
			</Button>
		{/if}
	</nav>
{/if}
