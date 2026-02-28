<script lang="ts">
	import type { Snippet } from "svelte";
	import { cn } from "$lib/utils";

	type ComponentProps = {
		class?: string;
		children?: Snippet;
		[prop: string]: unknown;
	};

	const { children, class: className = "", ...restProps }: ComponentProps = $props();
</script>

<h3
	{...restProps}
	class={cn("text-foreground font-display mt-4 scroll-m-24 text-xl font-medium", className)}
>
	{@render children?.()}
</h3>
