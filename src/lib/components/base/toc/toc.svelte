<script lang="ts" module>
	export type TocProps = {
		toc: Heading[];
		class?: string;
		/** Indicates whether this is a child component or root component */
		isChild?: boolean;
	};
</script>

<script lang="ts">
	import type { Heading } from "$lib/hooks/use-toc.svelte";
	import { cn } from "$lib/utils.js";
	import Self from "./toc.svelte";

	let { toc, isChild = false, class: className }: TocProps = $props();

	const getScrollBehavior = (): ScrollBehavior => {
		if (typeof window === "undefined") return "auto";
		return window.matchMedia("(prefers-reduced-motion: reduce)").matches ? "auto" : "smooth";
	};

	function onHeadingClick(event: MouseEvent, heading: Heading) {
		if (!heading.id) return;
		if (
			event.button !== 0 ||
			event.metaKey ||
			event.ctrlKey ||
			event.shiftKey ||
			event.altKey
		) {
			return;
		}

		event.preventDefault();
		heading.ref.scrollIntoView({
			behavior: getScrollBehavior(),
			block: "start",
		});
		history.replaceState(null, "", `#${heading.id}`);
	}
</script>

<ul class={cn("m-0 list-none text-sm font-normal", { "pl-4": isChild })}>
	{#each toc as heading, i (i)}
		<li
			class={cn("mt-0 truncate pt-2 text-muted-foreground transition-all", {
				"text-foreground": heading.active,
			})}
		>
			{#if heading.id}
				<a
					href="#{heading.id}"
					class="block hover:text-foreground"
					onclick={(e) => onHeadingClick(e, heading)}
				>
					{heading.label}
				</a>
			{:else}
				{heading.label}
			{/if}
		</li>
		{#if heading.children.length > 0}
			<Self class={className} toc={heading.children} isChild={true} />
		{/if}
	{/each}
</ul>
