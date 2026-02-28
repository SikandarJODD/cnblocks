// Follows the best practices established in https://shiki.matsu.io/guide/best-performance
import { createJavaScriptRegexEngine } from "shiki/engine/javascript";
import { createHighlighterCore } from "shiki/core";

const bundledLanguages = {
	bash: () => import("@shikijs/langs/bash"),
	diff: () => import("@shikijs/langs/diff"),
	javascript: () => import("@shikijs/langs/javascript"),
	json: () => import("@shikijs/langs/json"),
	svelte: () => import("@shikijs/langs/svelte"),
	typescript: () => import("@shikijs/langs/typescript"),
	css: () => import("@shikijs/langs/css"),
	markdown: () => import("@shikijs/langs/markdown"),
};

/** The languages configured for the highlighter */
export type SupportedLanguage = keyof typeof bundledLanguages;

/** A preloaded highlighter instance. */
export const highlighter = createHighlighterCore({
	themes: [import("@shikijs/themes/github-light-default"), import("@shikijs/themes/vesper")],
	langs: Object.entries(bundledLanguages).map(([_, lang]) => lang),
	engine: createJavaScriptRegexEngine(),
});
