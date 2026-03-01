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
	class={cn("mt-4 scroll-m-24 font-display text-xl font-medium text-foreground", className)}
>
	{@render children?.()}
</h3>
