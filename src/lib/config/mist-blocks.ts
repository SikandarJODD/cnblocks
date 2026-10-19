import type { MistBlock } from "#lib/types/mists.js";

type MistBlockEntry = readonly [slug: string, title: string];
type MistBlockLoader = () => Promise<MistBlock[]>;

export type LazyMistBlock = {
	itemId: string;
	slug: string;
	title: string;
	category: string;
	preview: string;
	previewMode: "iframe";
	loadBlock: () => Promise<MistBlock>;
};

function createMistBlocks(
	category: string,
	entries: MistBlockEntry[],
	loadBlocks: MistBlockLoader
): LazyMistBlock[] {
	return entries.map(([slug, title]) => ({
		itemId: `${category}-${slug}`,
		slug,
		title,
		category,
		preview: `/preview/mist/${category}/${slug}`,
		previewMode: "iframe",
		loadBlock: async () => {
			const block = (await loadBlocks()).find((item) => item.slug === slug);
			if (!block) throw new Error(`Mist block not found: ${category}/${slug}`);
			return block;
		},
	}));
}

export const mistComparatorBlocks = createMistBlocks(
	"comparator",
	[["one", "Basic Comparison Table"]],
	async () => (await import("#lib/all_mists/comparator.js")).all_mists_comparator
);

export const mistContactBlocks = createMistBlocks(
	"contact",
	[["one", "Contact Form One"]],
	async () => (await import("#lib/all_mists/contact.js")).all_mists_contact
);

export const mistContentBlocks = createMistBlocks(
	"content",
	[
		["one", "Content One"],
		["two", "Content Two"],
		["three", "Content Three"],
		["four", "Content Four"],
	],
	async () => (await import("#lib/all_mists/content.js")).all_mists_content
);

export const mistCtaBlocks = createMistBlocks(
	"cta",
	[
		["one", "CTA One"],
		["two", "CTA Two"],
		["three", "CTA Three"],
	],
	async () => (await import("#lib/all_mists/cta.js")).all_mists_cta
);

export const mistFeatureBlocks = createMistBlocks(
	"feature",
	[
		["one", "Feature One"],
		["two", "Feature Two"],
		["three", "Feature Three"],
		["four", "Feature Four"],
		["five", "Feature Five"],
		["six", "Feature Six"],
		["seven", "Feature Seven"],
		["eight", "Feature Eight"],
		["nine", "Feature Nine"],
		["ten", "Feature Ten"],
		["eleven", "Feature Eleven"],
	],
	async () => (await import("#lib/all_mists/feature.js")).all_mists_features
);

export const mistFooterBlocks = createMistBlocks(
	"footer",
	[
		["one", "Footer One"],
		["two", "Footer Two"],
		["three", "Footer Three"],
		["four", "Footer Four"],
	],
	async () => (await import("#lib/all_mists/footer.js")).all_mists_footer
);

export const mistForgotPasswordBlocks = createMistBlocks(
	"forgot-password",
	[["one", "Forgot Password One"]],
	async () =>
		(await import("#lib/all_mists/forgot_password.js")).all_mists_forgot_password
);

export const mistHeroBlocks = createMistBlocks(
	"hero",
	[
		["one", "one"],
		["two", "Hero Two"],
		["three", "Hero Three"],
		["four", "Hero Four"],
		["five", "Hero Five"],
		["six", "Hero Six"],
	],
	async () => (await import("#lib/all_mists/hero.js")).all_mists_heros
);

export const mistIntegrationBlocks = createMistBlocks(
	"integration",
	[
		["one", "Simple Integration List"],
		["two", "Centered Integration List"],
		["three", "Integration Cards Grid"],
	],
	async () => (await import("#lib/all_mists/integrations.js")).all_mists_integrations
);

export const mistLoginBlocks = createMistBlocks(
	"login",
	[["one", "Login One"]],
	async () => (await import("#lib/all_mists/login.js")).all_mists_login
);

export const mistLogoCloudBlocks = createMistBlocks(
	"logocloud",
	[
		["one", "Logo Cloud One"],
		["two", "Logo Cloud Two"],
	],
	async () => (await import("#lib/all_mists/logocloud.js")).all_mists_logocloud
);

export const mistPricingBlocks = createMistBlocks(
	"pricing",
	[
		["one", "Pricing One"],
		["two", "Pricing Two"],
	],
	async () => (await import("#lib/all_mists/pricing.js")).all_mists_pricing
);

export const mistSignupBlocks = createMistBlocks(
	"signup",
	[["one", "Signup One"]],
	async () => (await import("#lib/all_mists/signup.js")).all_mists_signup
);

export const mistStatsBlocks = createMistBlocks(
	"stats",
	[
		["one", "Stats One"],
		["two", "Stats Two"],
		["three", "Stats Three"],
		["four", "Stats Four"],
	],
	async () => (await import("#lib/all_mists/stats.js")).all_mists_stats
);

export const mistTeamBlocks = createMistBlocks(
	"team",
	[
		["one", "Team One"],
		["two", "Team Two"],
	],
	async () => (await import("#lib/all_mists/team.js")).all_mists_team
);

export const mistTestimonialBlocks = createMistBlocks(
	"testimonial",
	[
		["one", "Simple Testimonial"],
		["two", "Grid Testimonials"],
		["three", "Star Rating Testimonials"],
		["four", "Avatar Testimonial"],
		["five", "Centered Quote Testimonial"],
	],
	async () => (await import("#lib/all_mists/testimonial.js")).all_mists_testimonial
);
