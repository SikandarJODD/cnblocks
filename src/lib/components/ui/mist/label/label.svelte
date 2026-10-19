<script lang="ts">
	import type { WithElementRef } from "bits-ui";
	import type { HTMLLabelAttributes } from "svelte/elements";
	import { cn } from "#lib/utils.js";

	let {
		ref = $bindable(null),
		class: className,
		children,
		...restProps
	}: WithElementRef<HTMLLabelAttributes> = $props();
</script>

<label
	bind:this={ref}
	data-slot="label"
	class={cn(
		"block text-sm leading-none font-medium select-none group-data-[disabled=true]:pointer-events-none group-data-[disabled=true]:opacity-50 peer-disabled:cursor-not-allowed peer-disabled:opacity-50",
		className
	)}
	{...restProps}
>
	{@render children?.()}
</label>
