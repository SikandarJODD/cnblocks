<script lang="ts">
	import type { Snippet } from "svelte";
	import { cn } from "$lib/utils";

	type ComponentProps = {
		href?: string;
		class?: string;
		children?: Snippet;
		[prop: string]: unknown;
	};

	const { children, href = "#", class: className = "", ...restProps }: ComponentProps = $props();
</script>

<a
	{href}
	{...restProps}
	class={cn(
		"text-foreground hover:text-foreground/70 underline underline-offset-2 transition-[color] duration-150 ease-out",
		className
	)}
>
	{@render children?.()}
</a>
