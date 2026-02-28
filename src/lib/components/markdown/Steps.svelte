<script lang="ts">
	import { cn } from "$lib/utils";
	import type { Snippet } from "svelte";

	let { class: className, children } = $props<{
		class?: string;
		children?: Snippet;
	}>();
</script>

<div class={cn("border-border relative mb-12 ml-4 border-l [counter-reset:step]", className)}>
	{@render children?.()}
</div>
