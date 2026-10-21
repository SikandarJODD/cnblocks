<script lang="ts">
	import type { SVGAttributes } from "svelte/elements";

	let { ...props }: SVGAttributes<SVGSVGElement> = $props();
</script>

<svg viewBox="0 0 144 137" xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" {...props}>
	<path
		d="M143.7 52.2H88.8L71.9 0 54.9 52.2 0 52.1l44.4 32.3-17 52.2 44.4-32.3 44.4 32.3-16.9-52.2 44.4-32.2Z"
		fill="#00B67A"
	/>
	<path d="m103.1 96.2-3.8-11.8-27.4 19.9 31.2-8.1Z" fill="#005128" />
</svg>
