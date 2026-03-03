# Tailark Mist Kit

Shadcn Blocks for building Wiki-Style websites

## Theme

### Quickstart: Add the Mist Kit Theme

Copy and paste the following CSS variables into your project's global CSS (e.g., `globals.css`). This will enable the Mist Kit theme:

```css
[data-theme="mist"] .theme-container {
  --radius: 0.625rem;
  --background: var(--color-white);
  --foreground: var(--color-zinc-950);
  --card: var(--color-white);
  --card-foreground: var(--color-zinc-950);
  --popover: var(--color-white);
  --popover-foreground: var(--color-zinc-950);
  --primary: var(--color-indigo-500);
  --primary-foreground: var(--color-white);
  --secondary: var(--color-indigo-100);
  --secondary-foreground: var(--color-indigo-600);
  --muted: var(--color-zinc-100);
  --muted-foreground: var(--color-zinc-600);
  --accent: var(--color-zinc-700);
  --accent-foreground: var(--color-white);
  --destructive: var(--color-red-600);
  --border: var(--color-zinc-200);
  --input: var(--color-zinc-200);
  --ring: var(--color-indigo-500);

  @variant dark {
    --radius: 0.625rem;
    --background: var(--color-white);
    --foreground: var(--color-zinc-950);
    --card: var(--color-white);
    --card-foreground: black;
    --popover: var(--color-white);
    --popover-foreground: var(--color-zinc-950);
    --primary: var(--color-indigo-500);
    --primary-foreground: var(--color-white);
    --secondary: var(--color-indigo-100);
    --secondary-foreground: var(--color-indigo-600);
    --muted: var(--color-zinc-100);
    --muted-foreground: var(--color-zinc-600);
    --accent: var(--color-zinc-700);
    --accent-foreground: var(--color-white);
    --destructive: var(--color-red-600);
    --border: var(--color-zinc-200);
    --input: var(--color-zinc-200);
    --ring: var(--color-indigo-500);
  }

  @apply *:text-foreground;
}
```

This enables all Mist Kit components to inherit the correct theme values.

## Button

### New Variant: `neutral`

The Button component now supports a new `neutral` variant for a minimal, neutral look.

**Usage:**

```svelte
<Button variant="neutral">Neutral Button</Button>
```

```svelte
<script lang="ts" module>
  import type { WithElementRef } from "bits-ui";
  import type {
    HTMLAnchorAttributes,
    HTMLButtonAttributes,
  } from "svelte/elements";
  import { type VariantProps, tv } from "tailwind-variants";

  export const buttonVariants = tv({
    base: "inline-flex cursor-pointer items-center justify-center gap-2 rounded-xl text-sm font-medium whitespace-nowrap transition-colors focus-visible:ring-1 focus-visible:ring-ring focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground hover:brightness-95",
        neutral: "bg-foreground text-background hover:brightness-95",
        destructive:
          "text-destructive-foreground bg-destructive shadow-md hover:bg-destructive/90",
        outline:
          "border border-transparent bg-background text-foreground shadow-sm ring-1 shadow-black/15 ring-foreground/10 duration-200 hover:bg-muted/50",
        secondary:
          "bg-secondary text-secondary-foreground hover:bg-secondary/80",
        ghost:
          "text-foreground/75 hover:bg-foreground/5 hover:text-foreground",
        link: "text-primary underline-offset-4 hover:underline",
      },
      size: {
        default: "h-9 rounded-md px-4 py-2",
        sm: "h-8 rounded-full px-3 text-sm",
        lg: "h-11 px-6 text-base font-medium",
        icon: "size-9",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "sm",
    },
  });

  export type ButtonVariant = VariantProps<typeof buttonVariants>["variant"];
  export type ButtonSize = VariantProps<typeof buttonVariants>["size"];

  export type ButtonProps = WithElementRef<HTMLButtonAttributes> &
    WithElementRef<HTMLAnchorAttributes> & {
      variant?: ButtonVariant;
      size?: ButtonSize;
    };
</script>

<script lang="ts">
  import { cn } from "$lib/utils.js";

  let {
    class: className,
    variant = "default",
    size = "default",
    ref = $bindable(null),
    href = undefined,
    type = "button",
    children,
    ...restProps
  }: ButtonProps = $props();
</script>

{#if href}
  <a
    bind:this={ref}
    class={cn(buttonVariants({ variant, size }), className)}
    {href}
    {...restProps}
  >
    {@render children?.()}
  </a>
{:else}
  <button
    bind:this={ref}
    class={cn(buttonVariants({ variant, size }), className)}
    {type}
    {...restProps}
  >
    {@render children?.()}
  </button>
{/if}
```

## Card

### New Variants: `soft` and `mixed`

The Card component now supports two new variants:

- `soft`: Subtle background, no border.
- `mixed`: Subtle background with a border.

**Usage:**

```svelte
<Card variant="soft">
  <CardHeader>Soft Card</CardHeader>
  <CardContent>...</CardContent>
</Card>

<Card variant="mixed">
  <CardHeader>Mixed Card</CardHeader>
  <CardContent>...</CardContent>
</Card>
```

## Card Component Code

`card.svelte` File

```svelte
<script module lang="ts">
  import type { WithElementRef } from "bits-ui";
  import { type VariantProps, tv } from "tailwind-variants";

  export const cardVariants = tv({
    base: "rounded-xl text-card-foreground",
    variants: {
      variant: {
        default:
          "border border-transparent bg-card shadow ring-1 ring-foreground/5",
        soft: "bg-foreground/5",
        mixed: "border-foreground.5 border bg-foreground/5",
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
```

`card-header.svelte` File

```svelte
<script lang="ts">
  import type { WithElementRef } from "bits-ui";
  import type { HTMLAttributes } from "svelte/elements";
  import { cn } from "$lib/utils.js";

  let {
    ref = $bindable(null),
    class: className,
    children,
    ...restProps
  }: WithElementRef<HTMLAttributes<HTMLDivElement>> = $props();
</script>

<div
  bind:this={ref}
  class={cn("flex flex-col space-y-1.5 p-6", className)}
  {...restProps}
>
  {@render children?.()}
</div>
```

`card-title.svelte` File

```svelte
<script lang="ts">
  import type { WithElementRef } from "bits-ui";
  import type { HTMLAttributes } from "svelte/elements";
  import { cn } from "$lib/utils.js";

  let {
    ref = $bindable(null),
    class: className,
    level = 3,
    children,
    ...restProps
  }: WithElementRef<HTMLAttributes<HTMLDivElement>> & {
    level?: 1 | 2 | 3 | 4 | 5 | 6;
  } = $props();
</script>

<div
  role="heading"
  aria-level={level}
  bind:this={ref}
  class={cn("leading-none font-semibold tracking-tight", className)}
  {...restProps}
>
  {@render children?.()}
</div>
```

`card-description.svelte` File

```svelte
<script lang="ts">
  import type { WithElementRef } from "bits-ui";
  import type { HTMLAttributes } from "svelte/elements";
  import { cn } from "$lib/utils.js";

  let {
    ref = $bindable(null),
    class: className,
    children,
    ...restProps
  }: WithElementRef<HTMLAttributes<HTMLParagraphElement>> = $props();
</script>

<p
  bind:this={ref}
  class={cn("text-sm text-muted-foreground", className)}
  {...restProps}
>
  {@render children?.()}
</p>
```

`card-content.svelte` File

```svelte
<script lang="ts">
  import type { WithElementRef } from "bits-ui";
  import type { HTMLAttributes } from "svelte/elements";
  import { cn } from "$lib/utils.js";

  let {
    ref = $bindable(null),
    class: className,
    children,
    ...restProps
  }: WithElementRef<HTMLAttributes<HTMLDivElement>> = $props();
</script>

<div bind:this={ref} class={cn("p-6 pt-0", className)} {...restProps}>
  {@render children?.()}
</div>
```

`card-footer.svelte` File

```svelte
<script lang="ts">
  import type { WithElementRef } from "bits-ui";
  import type { HTMLAttributes } from "svelte/elements";
  import { cn } from "$lib/utils.js";

  let {
    ref = $bindable(null),
    class: className,
    children,
    ...restProps
  }: WithElementRef<HTMLAttributes<HTMLDivElement>> = $props();
</script>

<div bind:this={ref} class={cn("p-6 pt-0", className)} {...restProps}>
  {@render children?.()}
</div>
```

`index.ts` File

```ts
import Root from "./card.svelte";
import Content from "./card-content.svelte";
import Description from "./card-description.svelte";
import Footer from "./card-footer.svelte";
import Header from "./card-header.svelte";
import Title from "./card-title.svelte";

export {
	Root,
	Content,
	Description,
	Footer,
	Header,
	Title,
	//
	Root as Card,
	Content as CardContent,
	Description as CardDescription,
	Footer as CardFooter,
	Header as CardHeader,
	Title as CardTitle,
};
```
