<script lang="ts">
	import type { Snippet } from "svelte";
	import { cn } from "$lib/utils";

	type ComponentProps = {
		class?: string;
		children?: Snippet;
	};

	const { children, class: className = "", ...restProps }: ComponentProps = $props();
</script>

<tbody {...restProps} class={cn("divide-y divide-border/60", className)}>
	{@render children?.()}
</tbody>
