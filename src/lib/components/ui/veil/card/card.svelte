<script module lang="ts">
  import type { WithElementRef } from "bits-ui";
  import { type VariantProps, tv } from "tailwind-variants";

  export const cardVariants = tv({
    base: "text-card-foreground rounded-2xl",
    variants: {
      variant: {
        default:
          "bg-card ring-1 ring-foreground/6.5 shadow-lg shadow-foreground/5 dark:shadow-black/10",
        soft: "bg-muted",
        mixed: "bg-muted border",
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

<div
  bind:this={ref}
  class={cn(cardVariants({ variant }), className)}
  {...restProps}
>
  {@render children?.()}
</div>
