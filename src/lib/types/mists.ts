export interface MistBlock {
	itemId?: string;
	slug: string;
	title: string;
	category: string;
	preview: string;
	code: MistCode | MistCode[];
	component: any;
}

export interface MistCode {
	name?: string;
	code: string;
	lang?: string;
	highlight?: (number | [number, number])[];
}
