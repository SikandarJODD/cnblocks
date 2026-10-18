# Production Tasks

## Launch blockers

- [ ] Replace `page.url.origin` with the production site URL for canonical, Open Graph, Twitter, and JSON-LD metadata.
- [ ] Regenerate `sitemap.xml`: remove preview/dead URLs and include every public Kit, Mist, Veil, and docs route.
- [ ] Make `/mist` useful or redirect it; complete `/templates` and restore metadata on `/docs/mcp`.
- [ ] Fix Veil dark-mode popover colors.
- [ ] Add accessible names to sidebar, scroll-to-top, retry, search, and block icon controls.
- [ ] Remove or remap the unmodified global `d` keyboard shortcut.
- [ ] Fix focusable controls inside `aria-hidden` Mist illustrations.
- [ ] Decide whether forms are demos or functional; label demos clearly or add submit, loading, error, and success states.

## Registry reliability

- [ ] Change `feature-ten -> feature-card` to a local registry dependency.
- [ ] Add the 10 missing Mist hero helper files to `mist-registry.json`.
- [ ] Add installable Mist UI primitives: button, card, input, label, and textarea.
- [ ] Add installable Veil UI primitives: button, card, input, and textarea.
- [ ] Create `mist-theme` and `veil-theme` registry items containing primitives and theme tokens.
- [ ] Convert internal Mist dependencies to `local:` dependencies.
- [ ] Rebuild and commit the stale `static/m` registry output.
- [ ] Add clean-project install tests for representative Kit, Mist, and Veil blocks.

## SEO and content

- [ ] Use one verified block count everywhere; remove the current 50+/150+/200+ mismatch.
- [ ] Keep one homepage `<h1>` and strengthen its supporting product copy.
- [ ] Add unique title, description, canonical, and social metadata to category pages.
- [ ] Add homepage `WebSite` and `CollectionPage`/`ItemList` structured data.
- [ ] Add `theme-color`, `color-scheme`, and an Apple touch icon.

## Performance and polish

- [ ] Optimize the 2.3 MB homepage image and correct its width/height ratio.
- [ ] Lazy-load block components and raw code to reduce the 544 KB feature chunk.
- [ ] Load only required font families and subsets.
- [ ] Replace `transition-all`, layout-property animations, and missing reduced-motion handling.
- [ ] Fix undersized touch targets, `100vh` auth layouts, and missing autocomplete attributes.

## AI-readable docs

- [ ] Add a prerendered `/llms.txt` containing a short, curated project and documentation index.
- [ ] Generate Markdown versions of installation, Mist, Veil, and MCP docs from the same content source.
- [ ] Link `/r/index.json`, `/m/index.json`, and `/v/index.json` from `llms.txt`.
- [ ] Add Markdown alternate links to documentation pages.

## Release verification

- [x] `pnpm check` passes with 0 errors and 0 warnings.
- [x] `pnpm build` completes successfully.
- [x] All three registry schemas build successfully.
- [ ] Test keyboard and screen-reader navigation.
- [ ] Test mobile layout, inputs, safe areas, and motion on real iOS and Android devices.
- [ ] Test every route in light and dark mode.
- [ ] Test installed registry blocks in clean projects before release.

## Future ideas

- [ ] Generate the sitemap and registry integrity report during CI.
- [ ] Add per-category Open Graph images.
- [ ] Add `llms-full.txt` only if it can be generated automatically.
- [ ] Add Lighthouse budgets for LCP, CLS, accessibility, and JavaScript size.
- [ ] Add RSS only if changelog or release content becomes active.
