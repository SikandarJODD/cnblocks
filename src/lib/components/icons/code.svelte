<script lang="ts">
	import type { Props } from ".";
	import { cn } from "$lib/utils";

	let { class: className, ...rest }: Props = $props();
</script>

<svg
	class={cn("size-4", className)}
	fill="none"
	stroke="currentColor"
	stroke-width="2"
	stroke-linecap="round"
	stroke-linejoin="round"
	viewBox="0 0 24 24"
	xmlns="http://www.w3.org/2000/svg"
	{...rest}
>
	<path d="m18 16 4-4-4-4" />
	<path d="m6 8-4 4 4 4" />
	<path d="m14.5 4-5 16" />
</svg>
