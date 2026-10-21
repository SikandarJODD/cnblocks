# Dusk Theme Setup

Dusk uses the shadcn-svelte Zinc palette with Dusk-specific button, card, input, and label primitives.

## Install with CLI

```bash
pnpm dlx shadcn-svelte@latest add https://sv-blocks.vercel.app/d/dusk-theme.json
```

This installs the Dusk theme tokens and all required primitives under `src/lib/components/ui/dusk`.

## Folder structure

```text
src/lib/components/ui/dusk/
├── button/
├── card/
├── input/
└── label/
```

## Manual setup

Add the scoped Zinc tokens to `src/themes.css`:

```css
[data-theme="dusk"] .theme-container {
	--radius: 0.625rem;
	--background: oklch(1 0 0);
	--foreground: oklch(0.141 0.005 285.823);
	--card: oklch(1 0 0);
	--card-foreground: oklch(0.141 0.005 285.823);
	--popover: oklch(1 0 0);
	--popover-foreground: oklch(0.141 0.005 285.823);
	--primary: oklch(0.21 0.006 285.885);
	--primary-foreground: oklch(0.985 0 0);
	--secondary: oklch(0.967 0.001 286.375);
	--secondary-foreground: oklch(0.21 0.006 285.885);
	--muted: oklch(0.967 0.001 286.375);
	--muted-foreground: oklch(0.552 0.016 285.938);
	--accent: oklch(0.967 0.001 286.375);
	--accent-foreground: oklch(0.21 0.006 285.885);
	--destructive: oklch(0.577 0.245 27.325);
	--border: oklch(0.92 0.004 286.32);
	--input: oklch(0.92 0.004 286.32);
	--ring: oklch(0.705 0.015 286.067);

	@variant dark {
		--background: oklch(0.141 0.005 285.823);
		--foreground: oklch(0.985 0 0);
		--card: oklch(0.21 0.006 285.885);
		--card-foreground: oklch(0.985 0 0);
		--popover: oklch(0.21 0.006 285.885);
		--popover-foreground: oklch(0.985 0 0);
		--primary: oklch(0.92 0.004 286.32);
		--primary-foreground: oklch(0.21 0.006 285.885);
		--secondary: oklch(0.274 0.006 286.033);
		--secondary-foreground: oklch(0.985 0 0);
		--muted: oklch(0.274 0.006 286.033);
		--muted-foreground: oklch(0.705 0.015 286.067);
		--accent: oklch(0.274 0.006 286.033);
		--accent-foreground: oklch(0.985 0 0);
		--destructive: oklch(0.704 0.191 22.216);
		--border: oklch(1 0 0 / 10%);
		--input: oklch(1 0 0 / 15%);
		--ring: oklch(0.552 0.016 285.938);
	}
}
```

Apply it at the application root:

```html
<body data-theme="dusk" class="theme-container">
	<!-- Your application -->
</body>
```

## Required components

- `#lib/components/ui/dusk/button`
- `#lib/components/ui/dusk/card`
- `#lib/components/ui/dusk/input`
- `#lib/components/ui/dusk/label`

## Usage

```svelte
<script lang="ts">
	import { Button } from "#lib/components/ui/dusk/button/index.js";
	import { Card, CardContent, CardHeader, CardTitle } from "#lib/components/ui/dusk/card/index.js";
	import { Input } from "#lib/components/ui/dusk/input/index.js";
	import { Label } from "#lib/components/ui/dusk/label/index.js";
</script>

<Card variant="soft">
	<CardHeader><CardTitle>Join the waitlist</CardTitle></CardHeader>
	<CardContent>
		<Label for="email">Email address</Label>
		<Input id="email" type="email" placeholder="you@example.com" />
		<Button>Join now</Button>
	</CardContent>
</Card>
```

## What’s next?

Explore the [Dusk blocks](/dusk/hero).
