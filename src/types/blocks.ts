import type { SupportedLanguage } from "$lib/components/ui/code/shiki";
import type { Component } from "svelte";

export type PreviewMode = "inline" | "iframe";

export interface Block {
	itemId?: string;
	slug: string;
	title: string;
	category: string;
	preview: string;
	previewMode?: PreviewMode;
	previewHeight?: number;
	code: MistCode | MistCode[];
	component: Component;
}

export interface MistCode {
	name?: string;
	code: string;
	lang?: SupportedLanguage;
	highlight?: (number | [number, number])[];
}
