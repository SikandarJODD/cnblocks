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

<th
	{...restProps}
	class={cn("text-foreground h-12 px-6 text-left align-middle font-normal", className)}
>
	{@render children?.()}
</th>
