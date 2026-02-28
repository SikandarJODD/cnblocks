<script lang="ts">
	import { cn } from "$lib/utils";
	import type { Snippet } from "svelte";

	type ComponentProps = {
		class?: string;
		children?: Snippet;
		[prop: string]: unknown;
	};

	const { children, class: className = "", ...restProps }: ComponentProps = $props();
</script>

<blockquote
	{...restProps}
	class={cn(
		"border-border bg-card text-foreground/70 mt-6 rounded-xl border px-5 py-3 text-sm italic shadow-sm",
		className
	)}
>
	{@render children?.()}
</blockquote>
