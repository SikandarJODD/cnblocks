// Follows the best practices established in https://shiki.matsu.io/guide/best-performance
import { createJavaScriptRegexEngine } from "shiki/engine/javascript";
import { createHighlighterCore } from "shiki/core";

const bundledLanguages = {
	bash: () => import("@shikijs/langs/bash"),
	javascript: () => import("@shikijs/langs/javascript"),
	svelte: () => import("@shikijs/langs/svelte"),
	typescript: () => import("@shikijs/langs/typescript"),
	css: () => import("@shikijs/langs/css"),
	html: () => import("@shikijs/langs/html"),
	json: () => import("@shikijs/langs/json"),
	markdown: () => import("@shikijs/langs/markdown"),
	// diff: () => import("@shikijs/langs/diff"),
};

/** The languages configured for the highlighter */
export type SupportedLanguage = keyof typeof bundledLanguages;

/** A preloaded highlighter instance. */
export const highlighter = createHighlighterCore({
	themes: [
		import("@shikijs/themes/github-light-default"),
		import("@shikijs/themes/vesper"),
		import("@shikijs/themes/github-dark-default"),
	],
	langs: Object.entries(bundledLanguages).map(([_, lang]) => lang),
	engine: createJavaScriptRegexEngine(),
});
