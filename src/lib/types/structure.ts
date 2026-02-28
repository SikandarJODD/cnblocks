import type { Component } from "svelte";
import type { Example } from "./examples";
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

export type PropDef = {
	name: string;
	type: string;
	default?: string;
	required?: boolean;
	description?: string;
};

export type PropsTable = {
	name: string;
	desc?: string;
	props: PropDef[];
};

export type InstallComponentDocs = {
	installCode?: CodeBlock | CodeBlock[];
	tailwind?: CodeBlock;
	folderStructure?: string;
	packages?: string[];
};

export type ComponentDoc = ComponentMeta & {
	preview?: Component;
	installBlock?: InstallComponentDocs;
	previewCode?: CodeBlock | CodeBlock[];
	examples?: Example[];
	seo: SEO;
	/** @deprecated Use installBlock.tailwind instead */
	tailwind?: CodeBlock;
	props?: PropsTable[];
	folderStructure?: string;
	/** @deprecated Use installBlock.packages instead */
	packages?: string[];
};
