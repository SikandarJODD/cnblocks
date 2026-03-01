import type { Component } from "svelte";
import type { SEO } from "./seo";
import type { CodeBlock } from "$lib/components/ui/code";

export type ComponentBadge = "new" | "beta" | "updated" | "deprecated";

export type ComponentMeta = {
	id: string;
	title: string;
	description: string;
	category?: string;
	badge?: ComponentBadge;
};


export type ComponentDoc = ComponentMeta & {
	preview?: Component;
	previewCode?: CodeBlock | CodeBlock[];
	previewAddItem?: string;
	previewRegistryOptions?: readonly string[];
	previewRegistry?: string;
	previewHref?: string;
	seo: SEO;
};
