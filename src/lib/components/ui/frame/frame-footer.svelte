<script lang="ts">
	import type { HTMLAttributes } from 'svelte/elements';
	import { cn, type WithElementRef } from '$lib/utils.js';

	let {
		ref = $bindable(null),
		class: className,
		children,
		...restProps
	}: WithElementRef<HTMLAttributes<HTMLElement>, HTMLElement> = $props();
</script>

<footer
	bind:this={ref}
	data-slot="frame-panel-footer"
	class={cn('px-5 py-4', className)}
	{...restProps}
>
	{@render children?.()}
</footer>
