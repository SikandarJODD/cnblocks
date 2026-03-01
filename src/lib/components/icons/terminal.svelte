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
	<polyline points="4,17 10,11 4,5" />
	<line x1="12" x2="20" y1="19" y2="19" />
</svg>
