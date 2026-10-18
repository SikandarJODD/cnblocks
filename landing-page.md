# Landing Page Plan

## Goal

Present Svelte Shadcn Blocks as the fastest way to build polished Svelte interfaces from open-source, production-ready blocks. The page should quickly answer:

1. What is it?
2. What can I build with it?
3. Why should I trust it?
4. How do I add a block?

Primary audience: Svelte developers building marketing sites, product pages, dashboards, and documentation.

## Recommended Section Order

### 1. Hero

- Eyebrow: `Open-source blocks for Svelte`
- Headline: `Build polished Svelte pages, block by block.`
- Supporting copy: `200+ responsive and accessible UI and marketing blocks, available in Mist and Veil. Install with the shadcn-svelte CLI or copy the code into your project.`
- Primary CTA: `Explore blocks` → `/kit/hero`
- Secondary CTA: `Get started` → `/docs/installation`
- Include a compact, copyable CLI command below the CTAs so the installation model is obvious immediately.
- Hero visual: a curated collage or browser-frame preview of real blocks, not an abstract illustration.

The hero should communicate the product before mentioning every capability. Keep GitHub stars or sponsor avatars out of the main headline area unless the numbers are fetched reliably.

### 2. Flagship Feature Showcase

Adapt [`src/lib/components/mist/mfeature/seven.svelte`](src/lib/components/mist/mfeature/seven.svelte) for this section.

- Use [`static/images/feature.png`](static/images/feature.png) in its large, full-width card.
- Replace the current AI placeholder content with product-specific copy.
- Suggested large card:
  - Title: `Start from a complete, production-ready block`
  - Copy: `Choose a block, preview it in context, and make the source yours.`
  - Visual: `feature.png`, with descriptive alt text such as `Svelte Shadcn Blocks browser showing the block gallery`.
- Suggested three supporting cards:
  - `Responsive and accessible` — built for mobile, keyboard navigation, and semantic markup.
  - `Light and dark mode` — theme-aware styles without rebuilding each component.
  - `Own the source` — copy and customize local Svelte code with no runtime package lock-in.

Feature Seven is a better fit than Feature Six because the large image card can show the product itself. Do not place both variants on the page: their supporting-card layout is nearly identical and would feel repetitive. Feature Six can remain an alternative if the large screenshot is later removed.

### 3. Two Themes

- Heading: `Two themes. One flexible foundation.`
- Use a side-by-side comparison with a real example from each theme.
- `Mist` — quiet, minimal, documentation-friendly.
- `Veil` — polished, expressive, modern SaaS styling.
- Give each theme its own CTA: `Explore Mist` → `/mist/hero` and `Explore Veil` → `/veil/hero`.
- Include a light/dark toggle for the previews if it can reuse the existing site theme state; otherwise show one light and one dark example without adding a custom control.

Avoid presenting Mist and Veil as separate products. They are two visual starting points within the same library.

### 4. Built for Real Projects

A concise capability grid, not another large bento section:

- Svelte 5 and SvelteKit friendly
- Tailwind CSS v4 and shadcn-svelte foundations
- Responsive layouts
- Accessible interactions and semantic structure
- Light and dark mode
- Fully editable local source

Only make claims that the blocks consistently meet. If accessibility has not been audited across all 200+ blocks, use `accessible foundations` rather than `fully accessible`.

### 5. Open Source

- Heading: `Open source, so the code stays yours.`
- Mention the MIT license, public source, issue tracker, and contribution path.
- CTAs: `View on GitHub` and `Read the docs`.
- If reliable repository data is available, show live stars and contributors. Do not hard-code numbers that will become stale.

### 6. Sponsors and Community

Place [`src/lib/components/base/sponsors/sponsors.svelte`](src/lib/components/base/sponsors/sponsors.svelte) here, after the open-source section and before the final CTA.

- Heading: `Supported by the community`
- Copy: `Sponsorship helps maintain the blocks, documentation, and new theme releases.`
- Show sponsor avatars and names as community recognition—not as customer testimonials.
- CTA: `Sponsor the project` → GitHub Sponsors.
- Link to `/docs/sponsors` for the complete list and support options.

Before reuse, the homepage version should get tighter spacing and a horizontal or compact grid treatment. Keep the full sponsor list on the dedicated sponsors page if the homepage becomes too long.

### 7. Footer

Reuse the existing site footer. Ensure it exposes the essential destinations: Blocks, Mist, Veil, Documentation, GitHub, Sponsors, License, and project credits.

## Suggested Page Narrative

`Promise → proof → real blocks → key benefits → themes → installation → technical confidence → open-source community → action`

## Content and Design Notes

- Use `200+` consistently across the hero, metadata, gallery CTA, and final CTA. The current homepage and README still contain older `150+` and `50+` references.
- Call the CLI `shadcn-svelte CLI` in copy; use its exact current command in the implementation.
- Let real block previews carry the visual identity. Avoid generic gradients, floating badges, and decorative dashboard mockups that are unrelated to this library.
- Keep animation tied to user interaction: theme switching, preview hover, copy confirmation, and button states. Avoid scroll-triggered reveal effects and auto-playing carousels.
- Reserve `feature.png` dimensions to prevent layout shift, and optimize the 2552 × 1912 source for web delivery during implementation.
- Every code sample needs a copy button. Every interactive preview needs keyboard-visible focus states.
- Do not add testimonials until there are real, attributable quotes. Sponsors are recognition and community proof, not user endorsements.

## Recommended Scope for the First Rebuild

Ship these first: Hero, proof strip, block gallery, adapted Mist Feature Seven, theme comparison, installation, open-source section, sponsors, final CTA, and footer. Add usage statistics or testimonials later only when trustworthy data is available.
