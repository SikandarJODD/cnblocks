export type CategoryContent = {
	name: string;
	description: string;
};

const categoryContent: Record<string, CategoryContent> = {
	header: {
		name: "Header",
		description:
			"The header is the one block every visitor uses without thinking about it. It has to explain the site structure, expose the right actions, and stay out of the way once the page starts selling.",
	},
	hero: {
		name: "Hero",
		description:
			"A hero block is not the place to be mysterious. It is the place to say what you sell, who it helps, and what the visitor should do next.",
	},
	feature: {
		name: "Feature",
		description:
			"Feature sections usually come right after the hero, which means they inherit a hard job: prove the headline without asking the visitor to read a product manual.",
	},
	content: {
		name: "Content",
		description:
			"Content blocks are the quiet parts of a marketing site: text sections, article layouts, rich copy, side notes, and explanatory panels.",
	},
	integration: {
		name: "Integration",
		description:
			"Integration sections are not logo dumps. They answer a practical question: will this product work with the tools my team already depends on?",
	},
	stats: {
		name: "Stats",
		description:
			"A stats section can make a page feel credible in five seconds. It can also make the page feel fake just as quickly.",
	},
	cta: {
		name: "Call to action",
		description:
			"A CTA section should not introduce a new argument. It should collect the momentum the page already built and point it at one action.",
	},
	pricing: {
		name: "Pricing",
		description:
			"Pricing sections are where interest turns into evaluation. The visitor is no longer asking what the product is; they are asking which plan fits and what happens if they choose wrong.",
	},
	testimonial: {
		name: "Testimonial",
		description:
			"A testimonial section should not read like a praise wall. Good social proof is specific: it names the problem, the result, and the person or team behind the quote.",
	},
	team: {
		name: "Team",
		description:
			"Team sections help buyers, candidates, and partners understand who is behind the product. They should create confidence, not just display headshots.",
	},
	comparator: {
		name: "Comparison",
		description:
			"Comparison sections exist for one reason: the buyer is deciding between options and needs the differences made visible.",
	},
	"logo-cloud": {
		name: "Logo cloud",
		description:
			"A logo cloud is the shortest form of social proof on a SaaS page. It says: teams like yours already recognize or use this product.",
	},
	faq: {
		name: "FAQ",
		description:
			"An FAQ section is not filler. It is where you answer the questions that would otherwise block signup, demo requests, or purchase approval.",
	},
	footer: {
		name: "Footer",
		description:
			"A footer is not just a place to park leftover links. It is the site map people use when they are done with the page but not done with the product.",
	},
	contact: {
		name: "Contact",
		description:
			"A good contact page does two jobs: it routes the visitor to the right team and sets a clear expectation for what happens next.",
	},
	signup: {
		name: "Sign up",
		description:
			"A signup page has to collect enough information to create an account without making the product feel heavy before the first session starts.",
	},
	login: {
		name: "Login",
		description:
			"A login page has to collect enough information to let the user in without making the product feel heavy before the first session starts.",
	},
	"forgot-password": {
		name: "Forgot password",
		description:
			"Forgot-password flows happen when the user is already blocked. The page should reduce stress, avoid leaking account existence, and make the next step obvious.",
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
