# Mist Theme Setup

Mist is a clean, documentation-inspired theme for Svelte Marketing Blocks. Install its theme tokens and UI primitives before using Mist blocks.

## Install with the CLI

```bash
pnpm dlx shadcn-svelte@latest add https://sv-blocks.vercel.app/m/mist-theme.json
```

This installs the Mist theme and its required components. The CLI may update the theme variables in your main CSS file.

## Apply the theme

Set the theme name and scope on the root body element in `src/app.html`:

```html
<body data-theme="mist" class="theme-container">
	<div style="display: contents">%sveltekit.body%</div>
</body>
```

## Required UI primitives

Keep Mist-specific primitives under `src/lib/components/ui/mist/`:

- `button`: action buttons and links
- `card`: content containers with `soft` and `mixed` variants
- `input`: text and file fields
- `label`: accessible form labels
- `textarea`: multiline fields

Import components from their Mist paths. Example:

```svelte
<script lang="ts">
	import { Button } from "$lib/components/ui/mist/button/index.js";
</script>

<Button variant="neutral">Continue</Button>
```

## Use Mist blocks

Browse the Mist collection at https://sv-blocks.vercel.app/mist/hero.

Install a block from the Mist registry:

```bash
pnpm dlx shadcn-svelte@latest add https://sv-blocks.vercel.app/m/hero-one.json
```

Registry index: https://sv-blocks.vercel.app/m/index.json

