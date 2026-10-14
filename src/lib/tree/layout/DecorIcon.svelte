<script lang="ts">
	import { cn } from "#lib/utils.js";

	type Position = "top-left" | "top-right" | "bottom-left" | "bottom-right";

	let {
		position,
		class: className,
	}: {
		position: Position;
		class?: string;
	} = $props();

	const positions: Record<Position, string> = {
		"top-left": "left-0 top-0 -translate-x-1/2 -translate-y-1/2",
		"top-right": "right-0 top-0 translate-x-1/2 -translate-y-1/2",
		"bottom-left": "bottom-0 left-0 -translate-x-1/2 translate-y-1/2",
		"bottom-right": "bottom-0 right-0 translate-x-1/2 translate-y-1/2",
	};
</script>

<svg
	aria-hidden="true"
	viewBox="0 0 16 16"
	fill="none"
	class={cn("pointer-events-none absolute", positions[position], className)}
>
	<path d="M8 3v10M3 8h10" stroke="currentColor" stroke-linecap="round" />
</svg>
