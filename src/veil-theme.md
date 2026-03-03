Title : Veil Kit
Desc : Shadcn Blocks with a warm, earthy aesthetic for building super minimalistic elegant websites.

Quick Start : Theme
Copy and paste the following CSS variables into your project's global CSS (e.g., layout.css, app.css). This will enable the Veil Kit theme:

```css
[data-theme="veil"] .theme-container {
  --radius: 0.625rem;

  --background: oklch(0.9779 0.0042 56.38);
  --foreground: oklch(0.3421 0.0379 61.15);

  --card: var(--color-white);
  --card-foreground: oklch(0.3421 0.0379 61.15);

  --popover: var(--color-white);
  --popover-foreground: oklch(0.3421 0.0379 61.15);

  --primary: oklch(0.5967 0.0558 61.59);
  --primary-foreground: oklch(0.1448 0 0);

  --secondary: --alpha(var(--primary)/15%);
  --secondary-foreground: oklch(0.3421 0.0379 61.15);

  --muted: --alpha(var(--foreground)/5%);
  --muted-foreground: oklch(0.4563 0.0061 48.59);

  --accent: oklch(0.9068 0.0112 89.73);
  --accent-foreground: oklch(0.3467 0.0231 86.12);

  --destructive: var(--color-red-600);
  --destructive-foreground: var(--color-white);

  --border: --alpha(var(--foreground)/7.5%);
  --input: --alpha(var(--foreground)/20%);
  --ring: var(--primary);

  --font-family: "Geist", sans-serif;

  @variant dark {
    --font-family: "Geist", sans-serif;
    --background: oklch(0.1448 0 0);
    --foreground: oklch(0.9027 0.0137 60.56);

    --card: oklch(0.1924 0.0016 17.3);
    --card-foreground: oklch(0.9027 0.0137 60.56);

    --popover: var(--color-white);
    --popover-foreground: oklch(0.9027 0.0137 60.56);

    --primary-foreground: var(--color-white);
    --secondary: --alpha(var(--primary)/10%);
    --secondary-foreground: oklch(0.9027 0.0137 60.56);

    --muted: var(--background);
    --muted-foreground: oklch(0.7262 0.0037 67.77);

    --accent: var(--color-zinc-700);
    --accent-foreground: var(--color-white);

    --input: --alpha(var(--foreground)/15%);
  }

  @apply *:text-foreground selection:bg-muted selection:text-primary;
}
```

This enables all Veil Kit components to inherit the correct theme values.
add `.theme-container` to the `app.html` file to ensure the theme is applied globally:

```html
<body class="theme-container">
  <!-- Your Application -->
</body>
```

## Button Component Usage:
```svelte
<Button variant="default">Default Button</Button>
<Button variant="outline">Outline Button</Button>
<Button size="lg">Large Button</Button>
```

### Button Component Code
```svelte
<script lang="ts" module>
	import type { WithElementRef } from "bits-ui";
	import type { HTMLAnchorAttributes, HTMLButtonAttributes } from "svelte/elements";
	import { type VariantProps, tv } from "tailwind-variants";

	export const buttonVariants = tv({
		base: "inline-flex cursor-pointer items-center justify-center gap-2 rounded-full text-sm font-medium whitespace-nowrap duration-200 focus-visible:ring-1 focus-visible:ring-ring focus-visible:outline-none active:scale-99 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
		variants: {
			variant: {
				default: "bg-foreground text-background hover:brightness-95",
				neutral: "bg-foreground text-background hover:brightness-95",
				destructive:
					"text-destructive-foreground bg-destructive shadow-md hover:bg-destructive/90",
				outline:
					"border border-transparent bg-card text-foreground shadow-sm ring-1 shadow-black/6.5 ring-foreground/15 duration-200 hover:bg-muted/50",
				secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80",
				ghost: "text-foreground/75 hover:bg-foreground/5 hover:text-foreground",
				link: "text-primary underline-offset-4 hover:underline",
			},
			size: {
				default: "h-8 px-3 py-2",
				sm: "h-7 px-2.5 text-sm",
				lg: "h-11 px-6 text-base font-medium",
				icon: "size-9",
			},
		},
		defaultVariants: {
			variant: "default",
			size: "default",
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

### Card Component
The Card component uses rounded-2xl styling with elegant shadow and ring effects.

Variants
-default: White card with subtle ring and shadow
- soft: Muted background, no border
- mixed: Muted background with border
- outline: White card with border ring

Get Full code of card components from /lib/components/ui/veil/card folder

### Input Component
A styled input component with focus ring effects and validation states.

```svelte
<script lang="ts">
	import type { HTMLInputAttributes, HTMLInputTypeAttribute } from "svelte/elements";
	import type { WithElementRef } from "bits-ui";
	import { cn } from "$lib/utils.js";

	type InputType = Exclude<HTMLInputTypeAttribute, "file">;

	type Props = WithElementRef<
		Omit<HTMLInputAttributes, "type"> &
			({ type: "file"; files?: FileList } | { type?: InputType; files?: undefined })
	>;

	let {
		ref = $bindable(null),
		value = $bindable(),
		type,
		files = $bindable(),
		class: className,
		...restProps
	}: Props = $props();
</script>

{#if type === "file"}
	<input
		bind:this={ref}
		class={cn(
			"flex h-8 w-full min-w-0 rounded-md border border-input bg-card px-3 py-1 text-sm outline-none not-dark:bg-card selection:bg-primary selection:text-primary-foreground file:inline-flex file:h-7 file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
			"focus-visible:border-ring focus-visible:ring-[3px] focus-visible:ring-ring/15",
			"aria-invalid:border-destructive aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40",
			className
		)}
		type="file"
		bind:files
		bind:value
		{...restProps}
	/>
{:else}
	<input
		bind:this={ref}
		class={cn(
			"flex h-8 w-full min-w-0 rounded-md border border-input bg-card px-3 py-1 text-sm outline-none not-dark:bg-card selection:bg-primary selection:text-primary-foreground file:inline-flex file:h-7 file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
			"focus-visible:border-ring focus-visible:ring-[3px] focus-visible:ring-ring/15",
			"aria-invalid:border-destructive aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40",
			className
		)}
		{type}
		bind:value
		{...restProps}
	/>
{/if}

```

### Textarea Component
A styled textarea component matching the Input styling.

```svelte
<script lang="ts">
	import type { WithElementRef, WithoutChildren } from "bits-ui";
	import type { HTMLTextareaAttributes } from "svelte/elements";
	import { cn } from "$lib/utils.js";

	let {
		ref = $bindable(null),
		value = $bindable(),
		class: className,
		...restProps
	}: WithoutChildren<WithElementRef<HTMLTextareaAttributes>> = $props();
</script>

<textarea
	bind:this={ref}
	bind:value
	class={cn(
		"flex field-sizing-content min-h-16 w-full rounded-md border border-input px-3 py-2 text-base transition-colors outline-none not-dark:bg-card placeholder:text-muted-foreground focus-visible:border-ring focus-visible:ring-[3px] focus-visible:ring-ring/15 disabled:cursor-not-allowed disabled:opacity-50 aria-invalid:border-destructive aria-invalid:ring-destructive/20 md:text-sm dark:aria-invalid:ring-destructive/40",
		className
	)}
	{...restProps}
></textarea>

```