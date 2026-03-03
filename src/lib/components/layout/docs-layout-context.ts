import { getContext, setContext } from "svelte";

const DOCS_LAYOUT_CONTEXT = Symbol("docs-layout-context");

export type DocsLayoutContext = {
	registerDocContent: (el: HTMLElement | undefined) => void;
};

export function setDocsLayoutContext(context: DocsLayoutContext) {
	setContext(DOCS_LAYOUT_CONTEXT, context);
}

export function getDocsLayoutContext() {
	const context = getContext<DocsLayoutContext | undefined>(DOCS_LAYOUT_CONTEXT);

	if (!context) {
		throw new Error("Docs layout context is missing.");
	}

	return context;
}
