<script lang="ts">
	import type { SVGAttributes } from "svelte/elements";

	let { ...props }: SVGAttributes<SVGSVGElement> = $props();
</script>

<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" {...props}>
	<path
		fill="#4285F4"
		d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.58c2.08-1.92 3.27-4.74 3.27-8.09z"
	/>
	<path
		fill="#34A853"
		d="M12 23c2.97 0 5.46-.98 7.29-2.66l-3.58-2.77c-.99.66-2.24 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C4 20.53 7.7 23 12 23z"
	/>
	<path
		fill="#FBBC05"
		d="M5.84 14.1A6.7 6.7 0 0 1 5.49 12c0-.73.13-1.43.35-2.1V7.07H2.18A11 11 0 0 0 1 12c0 1.78.43 3.45 1.18 4.93l3.66-2.83z"
	/>
	<path
		fill="#EA4335"
		d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 4 3.47 2.18 7.07L5.84 9.9C6.71 7.31 9.14 5.38 12 5.38z"
	/>
</svg>
