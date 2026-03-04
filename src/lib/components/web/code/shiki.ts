// Follows the best practices established in https://shiki.matsu.io/guide/best-performance
import { createJavaScriptRegexEngine } from "shiki/engine/javascript";
import { createHighlighterCore } from "shiki/core";

const bundledLanguages = {
	bash: () => import("@shikijs/langs/bash"),
	css: () => import("@shikijs/langs/css"),
	diff: () => import("@shikijs/langs/diff"),
	html: () => import("@shikijs/langs/html"),
	javascript: () => import("@shikijs/langs/javascript"),
	json: () => import("@shikijs/langs/json"),
	markdown: () => import("@shikijs/langs/markdown"),
	svelte: () => import("@shikijs/langs/svelte"),
	typescript: () => import("@shikijs/langs/typescript"),
};

/** The languages configured for the highlighter */
export type SupportedLanguage = keyof typeof bundledLanguages;

/** A preloaded highlighter instance. */
export const highlighter = createHighlighterCore({
	themes: [
		import("@shikijs/themes/github-light"),
		import("@shikijs/themes/github-dark"),
		import("@shikijs/themes/aurora-x"),
	],
	langs: Object.entries(bundledLanguages).map(([_, lang]) => lang),
	engine: createJavaScriptRegexEngine(),
});
