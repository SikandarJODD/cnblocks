import { defineConfig, s } from "velite";

// `s` is extended from Zod with some custom schemas,
// you can also import re-exported `z` from `velite` if you don't need these extension schemas.

export default defineConfig({
  collections: {
    changelog: {
      name: "Changelog",
      pattern: "changelog/**/*.md",
      schema: s.object({
        title: s.string().max(99),
        desc: s.string().max(199).optional(),
        date: s.isodate(),
        content: s.markdown(),
      }),
    },
  },
  output: {
    data: "./src/lib/data/",
    assets: "static/",
    base: "/",
  },
  root: "./src/lib/content/",
});
