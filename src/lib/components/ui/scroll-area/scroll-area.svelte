<script lang="ts">
	import { ScrollArea as ScrollAreaPrimitive } from "bits-ui";
	import { Scrollbar } from "./index.js";
	import { cn, type WithoutChild } from "$lib/utils.js";

	let {
		ref = $bindable(null),
		viewportRef = $bindable(null),
		class: className,
		orientation = "vertical",
		scrollbarXClasses = "",
		scrollbarYClasses = "",
		fade = true,
		children,
		...restProps
	}: WithoutChild<ScrollAreaPrimitive.RootProps> & {
		orientation?: "vertical" | "horizontal" | "both" | undefined;
		scrollbarXClasses?: string | undefined;
		scrollbarYClasses?: string | undefined;
		viewportRef?: HTMLElement | null;
		fade?: boolean;
	} = $props();
</script>

<ScrollAreaPrimitive.Root
	bind:ref
	data-slot="scroll-area"
	class={cn("relative", className)}
	{...restProps}
>
	<ScrollAreaPrimitive.Viewport
		bind:ref={viewportRef}
		data-slot="scroll-area-viewport"
		data-orientation={orientation}
		class={cn(
			"size-full rounded-[inherit] ring-ring/10 outline-ring/50 transition-[color,box-shadow] focus-visible:ring-4 focus-visible:outline-1 dark:ring-ring/20 dark:outline-ring/40",
			fade &&
				"data-[orientation=horizontal]:overflow-x-auto data-[orientation=vertical]:overflow-y-auto",
			fade &&
				"data-[orientation=horizontal]:scroll-fade-effect-x data-[orientation=vertical]:scroll-fade-effect-y"
		)}
	>
		{@render children?.()}
	</ScrollAreaPrimitive.Viewport>
	{#if orientation === "vertical" || orientation === "both"}
		<Scrollbar orientation="vertical" class={scrollbarYClasses} />
	{/if}
	{#if orientation === "horizontal" || orientation === "both"}
		<Scrollbar orientation="horizontal" class={scrollbarXClasses} />
	{/if}
	<ScrollAreaPrimitive.Corner />
</ScrollAreaPrimitive.Root>
