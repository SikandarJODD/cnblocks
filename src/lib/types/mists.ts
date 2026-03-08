export type PreviewMode = "inline" | "iframe";

export interface MistBlock {
	itemId?: string;
	slug: string;
	title: string;
	category: string;
	preview: string;
	previewMode?: PreviewMode;
	previewHeight?: number;
	code: MistCode | MistCode[];
	component: any;
}

export interface MistCode {
	name?: string;
	code: string;
	lang?: string;
	highlight?: (number | [number, number])[];
}
