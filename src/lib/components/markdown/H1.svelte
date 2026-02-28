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

<h1
	{...restProps}
	class={cn("text-foreground font-display scroll-m-24 text-3xl font-medium", className)}
>
	{@render children?.()}
</h1>
