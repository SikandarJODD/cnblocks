import type { BlockCodeSource } from "#lib/tree/types.js";
import type { Component } from "svelte";

export type PreviewMode = "inline" | "iframe";

type MistBlockBase = {
	itemId?: string;
	slug: string;
	title: string;
	category: string;
	preview: string;
	previewMode?: PreviewMode;
	previewHeight?: number;
	component: Component;
};

export type MistBlock = MistBlockBase & BlockCodeSource;
