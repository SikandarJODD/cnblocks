<script lang="ts">
	import type { SVGAttributes } from "svelte/elements";

	let { ...props }: SVGAttributes<SVGSVGElement> = $props();
</script>

<svg viewBox="0 0 50 50" xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" {...props}>
	<circle cx="25" cy="25" r="25" fill="#FF492C" />
	<path
		fill="#fff"
		fill-rule="evenodd"
		d="M35.84 19.15h-4.28c.12-.67.53-1.05 1.37-1.47l.79-.4c1.4-.72 2.15-1.53 2.15-2.86 0-.84-.32-1.49-.96-1.97a3.8 3.8 0 0 0-2.3-.71c-.71 0-1.36.18-1.95.56-.58.36-1.02.82-1.29 1.4l1.24 1.24c.48-.97 1.18-1.45 2.09-1.45.78 0 1.25.4 1.25.96 0 .46-.23.85-1.12 1.3l-.5.24c-1.1.56-1.87 1.19-2.3 1.91-.44.71-.66 1.62-.66 2.72v.29h6.47v-1.76Zm-.59 3.8h-7.06l-3.53 6.12h7.06l3.53 6.12 3.54-6.12-3.54-6.12Zm-9.99 10.21a8.17 8.17 0 1 1 2.8-16.32l2.79-5.85a14.3 14.3 0 1 0 2.82 25.55l-3.09-5.36a8.13 8.13 0 0 1-5.32 1.98Z"
		clip-rule="evenodd"
	/>
</svg>
