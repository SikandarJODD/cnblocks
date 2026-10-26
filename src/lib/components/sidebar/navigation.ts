import {
	all_dusks_category_block,
	all_mists_category_block,
	all_veils_category_block,
	category_blocks,
} from "#lib/all_blocks/category_block.js";

export type NavigationItem = {
	title: string;
	href: string;
	coming_soon?: boolean;
};

export type CategoryItem = NavigationItem & {
	count?: number;
};

export type BlockLibrary = NavigationItem & {
	key: "kit" | "mist" | "veil" | "dusk";
	categories: CategoryItem[];
	count: number;
};

const withTotal = (categories: CategoryItem[]) =>
	categories.reduce((total, category) => total + (category.count ?? 0), 0);

const kitCategories: CategoryItem[] = [
	...category_blocks.map((category) => ({
		title: category.title,
		href: category.href,
		count: category.length,
	})),
	{ title: "Testimonials", href: "/kit/testimonial", count: 6 },
];

const mistCategories: CategoryItem[] = [
	...all_mists_category_block.map((category) => ({
		title: category.title,
		href: category.href,
		count: category.length,
	})),
	{ title: "Testimonials", href: "/mist/testimonials", count: 5 },
];

const veilCategories: CategoryItem[] = all_veils_category_block.map((category) => ({
	title: category.title,
	href: category.href,
	count: category.length,
}));

const duskCategories: CategoryItem[] = all_dusks_category_block.map((category) => ({
	title: category.title,
	href: category.href,
	count: category.length,
}));

export const blockLibraries: BlockLibrary[] = [
	{
		key: "kit",
		title: "Kit",
		href: "/kit/hero",
		categories: kitCategories,
		count: withTotal(kitCategories),
	},
	{
		key: "mist",
		title: "Mist",
		href: "/mist/hero",
		categories: mistCategories,
		count: withTotal(mistCategories),
	},
	{
		key: "veil",
		title: "Veil",
		href: "/veil/hero",
		categories: veilCategories,
		count: withTotal(veilCategories),
	},
	{
		key: "dusk",
		title: "Dusk",
		href: "/dusk/hero",
		categories: duskCategories,
		count: withTotal(duskCategories),
	},
];

export const primaryNavigation: NavigationItem[] = [
	// { title: "Pages", href: "/", coming_soon: true },
	// { title: "Templates", href: "/templates", coming_soon: true },
	{ title: "Docs", href: "/docs" },
	{ title: "Explore more projects", href: "/projects" },
];

// const sidebarProjects: NavigationItem[] = [
// 	{ title: "Svelte Animations", href: "https://sv-animations.vercel.app" },
// 	{ title: "Svelte 4 Animations", href: "https://animation-svelte.vercel.app" },
// 	{ title: "Svelte Datatable Components", href: "https://sv-table.vercel.app" },
// 	{ title: "Svelte Chan Components", href: "https://sv-chan.vercel.app" },
// 	{ title: "Svelte Efferd Blocks", href: "https://sv-efferd.pages.dev" },
// 	{ title: "Svelte Dot Matrix", href: "https://sv-matrix.vercel.app" },
// 	{ title: "Svelte Form Builder", href: "https://svelte-form-builder.vercel.app" },
// 	{ title: "Svelte Particles", href: "https://sv-particles.vercel.app/particles/button" },
// 	{ title: "Svelte Globe Examples", href: "https://sv-globe.vercel.app" },
// 	{ title: "Svelte AI Elements", href: "https://sv-ai-elements.vercel.app" },
// 	{ title: "Svelte Agentation", href: "https://sv-agentation.com" },
// ];

export const docsNavigation: NavigationItem[] = [
	{ title: "Introduction", href: "/docs" },
	{ title: "Installation", href: "/docs/installation" },
	{ title: "Mist Theme Setup", href: "/docs/mist-theme" },
	{ title: "Veil Theme Setup", href: "/docs/veil-theme" },
	{ title: "Dusk Theme Setup", href: "/docs/dusk-theme" },
];

export function getBlockLibrary(pathname: string) {
	return blockLibraries.find((library) => pathname.startsWith(`/${library.key}`));
}

export function isCurrentPath(pathname: string, href: string) {
	return href === "/" ? pathname === href : pathname === href || pathname.startsWith(`${href}/`);
}
