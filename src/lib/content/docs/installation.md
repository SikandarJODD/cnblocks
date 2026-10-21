# Installation

Svelte Marketing Blocks is a collection of reusable marketing sections for SvelteKit. The blocks use Svelte 5, Tailwind CSS, and shadcn-svelte.

Website: https://sv-blocks.vercel.app

## 1. Create a SvelteKit project

Skip this step if you already have a SvelteKit project.

```bash
pnpm dlx sv create my-app
cd my-app
```

## 2. Add Tailwind CSS

```bash
pnpm dlx sv add tailwindcss
```

## 3. Initialize shadcn-svelte

```bash
pnpm dlx shadcn-svelte@latest init
```

## 4. Install a block

Choose one registry family:

```bash
# Kit
pnpm dlx shadcn-svelte@latest add https://sv-blocks.vercel.app/r/hero-one.json

# Mist
pnpm dlx shadcn-svelte@latest add https://sv-blocks.vercel.app/m/hero-one.json

# Veil
pnpm dlx shadcn-svelte@latest add https://sv-blocks.vercel.app/v/hero-one.json

# Dusk
pnpm dlx shadcn-svelte@latest add https://sv-blocks.vercel.app/d/hero-one.json
```

The CLI copies the block and its dependencies into your project. You own the generated code and can edit it directly.

## Registries

- Kit registry: https://sv-blocks.vercel.app/r/index.json
- Mist registry: https://sv-blocks.vercel.app/m/index.json
- Veil registry: https://sv-blocks.vercel.app/v/index.json
- Dusk registry: https://sv-blocks.vercel.app/d/index.json

## Next steps

- Mist theme setup: https://sv-blocks.vercel.app/docs/mist-theme.md
- Veil theme setup: https://sv-blocks.vercel.app/docs/veil-theme.md
- Dusk theme setup: https://sv-blocks.vercel.app/docs/dusk-theme.md
- Browse Kit blocks: https://sv-blocks.vercel.app/kit/hero
- Browse Dusk blocks: https://sv-blocks.vercel.app/dusk/hero
