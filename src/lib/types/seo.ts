export type SEO = {
	title: string;
	description: string;
	keywords?: string[];
	canonical?: string;
	noindex?: boolean;
	images?: {
		url: string;
		width?: number;
		height?: number;
		alt?: string;
	}[];
};
