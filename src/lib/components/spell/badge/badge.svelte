<script lang="ts" module>
	import { type VariantProps, tv } from "tailwind-variants";

	export const badgeVariants = tv({
		base: "inline-flex items-center justify-center rounded-sm text-xs leading-none font-medium",
		variants: {
			variant: {
				default:
					"bg-neutral-700 text-neutral-100 dark:bg-neutral-200 dark:text-neutral-800",
				secondary: "bg-secondary text-secondary-foreground",
				outline: "border-input bg-background border",
				destructive:
					"bg-destructive dark:text-destructive-foreground text-primary-foreground",
				red: "bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400",
				blue: "bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400",
				green: "bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400",
				yellow: "bg-yellow-100 text-yellow-700 dark:bg-yellow-900/30 dark:text-yellow-400",
				purple: "bg-purple-100 text-purple-700 dark:bg-purple-900/30 dark:text-purple-400",
				pink: "bg-pink-100 text-pink-700 dark:bg-pink-900/30 dark:text-pink-400",
				orange: "bg-orange-100 text-orange-700 dark:bg-orange-900/30 dark:text-orange-400",
				cyan: "bg-cyan-100 text-cyan-700 dark:bg-cyan-900/30 dark:text-cyan-400",
				indigo: "bg-indigo-100 text-indigo-700 dark:bg-indigo-900/30 dark:text-indigo-400",
				violet: "bg-violet-100 text-violet-700 dark:bg-violet-900/30 dark:text-violet-400",
				rose: "bg-rose-100 text-rose-700 dark:bg-rose-900/30 dark:text-rose-400",
				amber: "bg-amber-100 text-amber-700 dark:bg-amber-900/30 dark:text-amber-400",
				lime: "bg-lime-100 text-lime-700 dark:bg-lime-900/30 dark:text-lime-400",
				emerald:
					"bg-emerald-100 text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-400",
				sky: "bg-sky-100 text-sky-700 dark:bg-sky-900/30 dark:text-sky-400",
				slate: "bg-slate-100 text-slate-700 dark:bg-slate-900/30 dark:text-slate-400",
				fuchsia:
					"bg-fuchsia-100 text-fuchsia-700 dark:bg-fuchsia-900/30 dark:text-fuchsia-400",
			},
			size: {
				default: "px-1.5 py-1",
				sm: "p-1",
			},
		},
		defaultVariants: {
			variant: "default",
			size: "default",
		},
	});

	export type BadgeVariant = VariantProps<typeof badgeVariants>["variant"];
	export type BadgeSize = VariantProps<typeof badgeVariants>["size"];
</script>

<script lang="ts">
	import type { HTMLAnchorAttributes } from "svelte/elements";
	import { cn, type WithElementRef } from "#lib/utils.js";

	let {
		ref = $bindable(null),
		href,
		class: className,
		variant = "default",
		size = "default",
		children,
		...restProps
	}: WithElementRef<HTMLAnchorAttributes> & {
		variant?: BadgeVariant;
		size?: BadgeSize;
	} = $props();
</script>

<svelte:element
	this={href ? "a" : "span"}
	bind:this={ref}
	data-slot="badge"
	{href}
	class={cn(badgeVariants({ variant, size }), className)}
	{...restProps}
>
	{@render children?.()}
</svelte:element>
