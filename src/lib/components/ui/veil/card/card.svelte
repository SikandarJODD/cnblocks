<script module lang="ts">
	import type { WithElementRef } from "bits-ui";
	import { type VariantProps, tv } from "tailwind-variants";

	export const cardVariants = tv({
		base: "rounded-2xl text-card-foreground",
		variants: {
			variant: {
				default:
					"bg-card shadow-lg shadow-foreground/5 ring-1 ring-foreground/6.5 dark:shadow-black/10",
				soft: "bg-muted",
				mixed: "border bg-muted",
				outline: "bg-card ring-1 ring-border",
			},
		},
		defaultVariants: {
			variant: "default",
		},
	});

	export type CardVariant = VariantProps<typeof cardVariants>["variant"];

	export type CardProps = WithElementRef<HTMLAttributes<HTMLDivElement>> & {
		variant?: CardVariant;
	};
</script>

<script lang="ts">
	import type { HTMLAttributes } from "svelte/elements";
	import { cn } from "$lib/utils.js";

	let {
		ref = $bindable(null),
		class: className,
		children,
		variant = "default",
		...restProps
	}: CardProps = $props();
</script>

<div bind:this={ref} class={cn(cardVariants({ variant }), className)} {...restProps}>
	{@render children?.()}
</div>
