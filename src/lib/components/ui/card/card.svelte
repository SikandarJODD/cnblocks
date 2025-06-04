<script module lang="ts">
  import type { WithElementRef } from "bits-ui";
  import { type VariantProps, tv } from "tailwind-variants";

  export const cardVariants = tv({
    base: "bg-card text-card-foreground rounded-xl border",
    variants: {
      variant: {
        default: "bg-card text-card-foreground rounded-xl border shadow-sm",
        soft: "bg-foreground/5 dark:bg-foreground/5 border-none",
        mixed: "bg-foreground/5 border border-foreground.5",
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

<div
  bind:this={ref}
  class={cn(cardVariants({ variant }), className)}
  {...restProps}
>
  {@render children?.()}
</div>
