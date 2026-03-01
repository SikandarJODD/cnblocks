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
				class="absolute -left-4 flex size-8 items-center justify-center rounded-full border border-border bg-card text-xs font-medium text-foreground shadow-sm [counter-increment:step] before:content-[counter(step)]"
			></span>
			<h3 class="text-base leading-none font-medium">
				{title}
			</h3>
		</div>
	{:else}
		<span
			class="absolute top-1 -left-4 flex size-8 items-center justify-center rounded-full border border-border bg-card text-xs font-medium text-foreground [counter-increment:step] before:content-[counter(step)]"
		></span>
	{/if}
	<div class="text-base leading-relaxed text-foreground/70">
		{@render children?.()}
	</div>
</div>
