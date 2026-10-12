<script lang="ts">
	import { NavigationMenu as NavigationMenuPrimitive } from "bits-ui";
	import { cn } from "#lib/utils.js";

	let {
		ref = $bindable(null),
		class: className,
		...restProps
	}: NavigationMenuPrimitive.ViewportProps = $props();
</script>

<div
	class={cn(
		"absolute start-0 top-full isolate z-50 flex justify-center"
	)}
>
	<NavigationMenuPrimitive.Viewport
		bind:ref
		data-slot="navigation-menu-viewport"
		class={cn(
			"bg-popover text-popover-foreground data-open:animate-in data-closed:animate-out data-closed:zoom-out-90 data-open:zoom-in-90 ring-foreground/10 rounded-lg shadow ring-1 duration-100 origin-top-center relative mt-1.5 w-full overflow-hidden",
			"h-[calc(var(--bits-navigation-menu-viewport-height)_+_1rem)] md:w-[calc(var(--bits-navigation-menu-viewport-width)_+_1rem)]",
			className
		)}
		{...restProps}
	/>
</div>
