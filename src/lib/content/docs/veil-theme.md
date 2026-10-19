# Veil Theme Setup

Veil is a polished theme with rounded controls, warm neutral colors, and serif accents. Install its theme tokens and UI primitives before using Veil blocks.

## Install with the CLI

```bash
pnpm dlx shadcn-svelte@latest add https://sv-blocks.vercel.app/v/veil-theme.json
```

This installs the Veil theme and its required components. The CLI may update the theme variables in your main CSS file.

## Apply the theme

Set the theme name and scope on the root body element in `src/app.html`:

```html
<body data-theme="veil" class="theme-container">
	<div style="display: contents">%sveltekit.body%</div>
</body>
```

Veil uses Geist for interface text and Asar for serif accents.

## Required UI primitives

Keep Veil-specific primitives under `src/lib/components/ui/veil/`:

- `button`: rounded action buttons and links
- `card`: `default`, `soft`, `mixed`, and `outline` containers
- `input`: text and file fields
- `textarea`: multiline fields

Import components from their Veil paths. Example:

```svelte
<script lang="ts">
	import { Button } from "$lib/components/ui/veil/button/index.js";
</script>

<Button variant="outline">Learn more</Button>
```

## Use Veil blocks

Browse the Veil collection at https://sv-blocks.vercel.app/veil/hero.

Install a block from the Veil registry:

```bash
pnpm dlx shadcn-svelte@latest add https://sv-blocks.vercel.app/v/hero-one.json
```

Registry index: https://sv-blocks.vercel.app/v/index.json

