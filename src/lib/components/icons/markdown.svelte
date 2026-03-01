<script lang="ts">
	import type { Props } from "./index";
	import { cn } from "$lib/utils";

	let { class: className, ...rest }: Props = $props();
</script>

<svg viewBox="0 0 208 128" xml:space="preserve" class={cn("size-4", className)} {...rest}>
	<path
		fill="none"
		stroke="currentColor"
		stroke-width="10"
		d="M15 5h178a10 10 0 0 1 10 10v98a10 10 0 0 1-10 10H15a10 10 0 0 1-10-10V15A10 10 0 0 1 15 5z"
	/>
	<path
		fill="currentColor"
		d="M30 98V30h20l20 25 20-25h20v68H90V59L70 84 50 59v39H30zm125 0-30-33h20V30h20v35h20l-30 33z"
	/>
</svg>
