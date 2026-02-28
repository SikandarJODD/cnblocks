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

<p
	{...restProps}
	class={cn("text-muted-foreground mt-4 text-base leading-relaxed first:mt-0", className)}
>
	{@render children?.()}
</p>
