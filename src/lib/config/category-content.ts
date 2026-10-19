export type CategoryContent = {
	name: string;
	description: string;
};

const categoryContent: Record<string, CategoryContent> = {
	header: {
		name: "Header",
		description: "Header blocks help people navigate your site and find key actions.",
	},
	hero: {
		name: "Hero",
		description: "Hero blocks introduce your product with a clear message and action.",
	},
	feature: {
		name: "Feature",
		description: "Feature blocks show what your product does and why it is useful.",
	},
	content: {
		name: "Content",
		description:
			"Content blocks present text, articles, and product details in a clear layout.",
	},
	integration: {
		name: "Integration",
		description: "Integration blocks show the tools and services that work with your product.",
	},
	stats: {
		name: "Stats",
		description: "Stats blocks highlight important numbers and results.",
	},
	cta: {
		name: "Call to action",
		description: "Call to action blocks guide people toward the next step.",
	},
	pricing: {
		name: "Pricing",
		description: "Pricing blocks make plans, prices, and features easy to compare.",
	},
	testimonial: {
		name: "Testimonial",
		description: "Testimonial blocks share customer feedback and help build trust.",
	},
	team: {
		name: "Team",
		description: "Team blocks introduce the people behind your product.",
	},
	comparator: {
		name: "Comparison",
		description: "Comparison blocks help people compare products, plans, or features.",
	},
	"logo-cloud": {
		name: "Logo cloud",
		description: "Logo cloud blocks display customers, partners, or supported tools.",
	},
	faq: {
		name: "FAQ",
		description: "FAQ blocks answer common questions in a clear and simple format.",
	},
	footer: {
		name: "Footer",
		description: "Footer blocks organize useful links and details at the end of a page.",
	},
	contact: {
		name: "Contact",
		description: "Contact blocks make it easy for people to send a message.",
	},
	signup: {
		name: "Sign up",
		description: "Sign-up blocks help people create an account or start using your product.",
	},
	login: {
		name: "Login",
		description: "Login blocks give returning users a clear way to access their account.",
	},
	"forgot-password": {
		name: "Forgot password",
		description: "Forgot password blocks help users recover access to their account.",
	},
};

const categoryAliases: Record<string, string> = {
	"call-to-action": "cta",
	faqs: "faq",
	features: "feature",
	integrations: "integration",
	logocloud: "logo-cloud",
	testimonials: "testimonial",
};

export function getCategoryContent(pathname: string): CategoryContent | undefined {
	const slug = pathname.split("/").filter(Boolean).at(-1);
	if (!slug) return;

	return categoryContent[categoryAliases[slug] ?? slug];
}
