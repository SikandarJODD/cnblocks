import type { SEO } from "$lib/types/seo";

export type DocsV2GroupKey = "guide" | "theme" | "resources";

export type DocsV2PageKey =
	| "introduction"
	| "installation"
	| "mistTheme"
	| "veilTheme"
	| "mcp"
	| "sponsors";

export type DocsV2PageMeta = {
	key: DocsV2PageKey;
	path: string;
	navTitle: string;
	group: DocsV2GroupKey;
	toc?: boolean;
	seo: SEO;
};

export type DocsV2NavItem = {
	title: string;
	url: string;
	badge?: string;
	external?: boolean;
};

export type DocsV2FooterAction = {
	key: "feedback" | "sponsor";
	title: string;
	url: string;
	external?: boolean;
};

const docsKeywords = [
	"svelte",
	"sveltekit",
	"svelte 5",
	"shadcn-svelte",
	"tailwind css",
	"marketing blocks",
	"cnblocks",
];

export const docsV2PageMap: Record<DocsV2PageKey, DocsV2PageMeta> = {
	introduction: {
		key: "introduction",
		path: "/v2-docs",
		navTitle: "Introduction",
		group: "guide",
		toc: true,
		seo: {
			title: "Docs Introduction",
			description:
				"Overview of Svelte Shadcn Blocks, supported variants, and how to get started quickly.",
			keywords: [...docsKeywords, "introduction", "overview"],
		},
	},
	installation: {
		key: "installation",
		path: "/v2-docs/installation",
		navTitle: "Installation",
		group: "guide",
		toc: true,
		seo: {
			title: "Docs Installation",
			description:
				"Install and configure Svelte Shadcn Blocks with shadcn-svelte and jsrepo CLI.",
			keywords: [...docsKeywords, "installation", "jsrepo"],
		},
	},
	mistTheme: {
		key: "mistTheme",
		path: "/v2-docs/mist-theme",
		navTitle: "Mist Theme Setup",
		group: "theme",
		toc: true,
		seo: {
			title: "Mist Theme Setup - Notion-Inspired Marketing Pages",
			description:
				"Craft sleek, Notion-inspired marketing pages. Built on top of Shadcn Svelte UI.",
			keywords: [...docsKeywords, "mist", "theme setup"],
		},
	},
	veilTheme: {
		key: "veilTheme",
		path: "/v2-docs/veil-theme",
		navTitle: "Veil Theme Setup",
		group: "theme",
		toc: true,
		seo: {
			title: "Veil Theme Setup",
			description:
				"Apply Veil theme tokens and update button, card, input, and textarea primitives for consistent UI styling.",
			keywords: [
				...docsKeywords,
				"veil",
				"theme setup",
				"button",
				"card",
				"input",
				"textarea",
				"theme variables",
			],
		},
	},
	mcp: {
		key: "mcp",
		path: "/v2-docs/mcp",
		navTitle: "MCP Server",
		group: "resources",
		toc: true,
		seo: {
			title: "MCP Server Setup",
			description:
				"Configure MCP Server integration for Cursor and Windsurf with Svelte Shadcn Blocks.",
			keywords: [...docsKeywords, "mcp", "cursor", "windsurf"],
		},
	},
	sponsors: {
		key: "sponsors",
		path: "/v2-docs/sponsors",
		navTitle: "Sponsors",
		group: "resources",
		toc: true,
		seo: {
			title: "Sponsors",
			description:
				"Support Svelte Shadcn Blocks and learn how to become a sponsor of the project.",
			keywords: [...docsKeywords, "sponsors", "community", "support"],
		},
	},
};

export const docsV2Pages = Object.values(docsV2PageMap);

export const docsV2GuideItems: DocsV2NavItem[] = docsV2Pages
	.filter((item) => item.group === "guide")
	.map((item) => ({
		title: item.navTitle,
		url: item.path,
	}));

export const docsV2ThemeItems: DocsV2NavItem[] = docsV2Pages
	.filter((item) => item.group === "theme")
	.map((item) => ({
		title: item.navTitle,
		url: item.path,
	}));

export const docsV2ResourceItems: DocsV2NavItem[] = [
	...docsV2Pages
		.filter((item) => item.group === "resources")
		.map((item) => ({
			title: item.navTitle,
			url: item.path,
			badge: item.key === "mcp" ? "New" : undefined,
		})),
	// {
	// 	title: "Static Docs (Normal)",
	// 	url: "/static/docs/normal/hero-one.txt",
	// 	badge: "TXT",
	// },
	// {
	// 	title: "Static Docs (Mist)",
	// 	url: "/static/docs/mist/hero-one.txt",
	// 	badge: "TXT",
	// },
];

export const docsV2TemplateItems: DocsV2NavItem[] = [
	{
		title: "Startup Template",
		url: "/templates",
	},
	{
		title: "Startup Template Veil Theme",
		url: "/veil",
		badge: "veil",
	},
	{
		title: "Mist Variant",
		url: "/mist/hero",
		badge: "mist",
	},
];

export const docsV2FooterActions: DocsV2FooterAction[] = [
	{
		key: "feedback",
		title: "Send Feedback",
		url: "https://github.com/SikandarJODD/cnblocks/issues",
		external: true,
	},
	{
		key: "sponsor",
		title: "Sponsor Project",
		url: "https://github.com/sponsors/SikandarJODD",
		external: true,
	},
];
