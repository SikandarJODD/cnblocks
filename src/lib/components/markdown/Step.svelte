<script lang="ts">
	import { cn } from "$lib/utils";
	import type { Snippet } from "svelte";

	let {
		class: className,
		children,
		title,
		titleBaseClass,
	} = $props<{
		class?: string;
		children?: Snippet;
		title?: string;
		titleBaseClass?: string;
	}>();
</script>

<div class={cn("relative pb-10 pl-8", className)}>
	{#if title}
		<div class={cn("mb-2 flex h-8 items-center", titleBaseClass)}>
			<span
				class="border-border bg-card text-foreground absolute -left-4 flex size-8 items-center justify-center rounded-full border text-xs font-medium shadow-sm [counter-increment:step] before:content-[counter(step)]"
			></span>
			<h3 class="text-base leading-none font-medium">
				{title}
			</h3>
		</div>
	{:else}
		<span
			class="border-border bg-card text-foreground absolute top-1 -left-4 flex size-8 items-center justify-center rounded-full border text-xs font-medium [counter-increment:step] before:content-[counter(step)]"
		></span>
	{/if}
	<div class="text-foreground/70 text-base leading-relaxed">
		{@render children?.()}
	</div>
</div>
