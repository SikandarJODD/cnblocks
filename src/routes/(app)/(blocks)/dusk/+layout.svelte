<script lang="ts">
	import { page } from "$app/state";
	import CategoryIntro from "#lib/components/web/CategoryIntro.svelte";
	import CategorySEO from "#lib/seo/CategorySEO.svelte";
	import { getCategoryContent } from "#lib/config/category-content.js";
	import { scrollY } from "svelte/reactivity/window";
	import Button from "#lib/components/ui/button/button.svelte";
	import type { Snippet } from "svelte";
	import { fly } from "svelte/transition";

	let { children }: { children: Snippet } = $props();
	let visible = $derived(typeof scrollY.current === "undefined" ? 600 : scrollY.current > 1200);
	let categoryContent = $derived(getCategoryContent(page.url.pathname));
</script>

<div>
	{#if categoryContent}
		<CategorySEO
			category="Dusk"
			name={categoryContent.name}
			description={categoryContent.description}
		/>
	{/if}
	<section class="rounded-t-2xl">
		{#if categoryContent}
			<CategoryIntro
				category="Dusk"
				name={categoryContent.name}
				description={categoryContent.description}
			/>
		{/if}
		{@render children()}
	</section>
	{#if visible}
		{@render scrollToTop()}
	{/if}
</div>

{#snippet scrollToTop()}
	<div in:fly={{ y: 20 }} out:fly={{ y: 20 }} class="fixed right-6.5 bottom-18 z-50">
		<Button
			size="icon"
			variant="secondary"
			aria-label="Scroll to top"
			class="cursor-pointer rounded-full"
			onclick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
		>
			<svg
				xmlns="http://www.w3.org/2000/svg"
				class="h-6 w-6"
				fill="none"
				viewBox="0 0 24 24"
				stroke="currentColor"
			>
				<path
					stroke-linecap="round"
					stroke-linejoin="round"
					stroke-width="2"
					d="M5 10l7-7m0 0l7 7m-7-7v18"
				/>
			</svg>
		</Button>
	</div>
{/snippet}
