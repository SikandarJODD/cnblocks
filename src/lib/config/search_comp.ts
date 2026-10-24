const kitSearchComponents = [
	{
		name: "Hero",
		subcom: [
			{ name: "Hero One", href: "/hero#hero-one" },
			{ name: "Hero Two", href: "/hero#hero-two" },
			{ name: "Hero Three", href: "/hero#hero-three" },
			{ name: "Hero Four", href: "/hero#hero-four" },
			{ name: "Hero Five", href: "/hero#hero-five" },
			{ name: "Hero Six", href: "/hero#hero-six" },
			{ name: "Hero Seven", href: "/hero#hero-seven" },
			{ name: "Hero Eight", href: "/hero#hero-eight" },
			{ name: "Hero Nine", href: "/hero#hero-nine" },
		],
	},
	{
		name: "Features",
		subcom: [
			{ name: "Feature One", href: "/feature#feature-one" },
			{ name: "Feature Two", href: "/feature#feature-two" },
			{ name: "Feature Three", href: "/feature#feature-three" },
			{ name: "Feature Four", href: "/feature#feature-four" },
			{ name: "Feature Five", href: "/feature#feature-five" },
			{ name: "Feature Six", href: "/feature#feature-six" },
			{ name: "Feature Seven", href: "/feature#feature-seven" },
			{ name: "Feature Eight", href: "/feature#feature-eight" },
			{ name: "Feature Nine", href: "/feature#feature-nine" },
			{ name: "Feature Ten", href: "/feature#feature-ten" },
			{ name: "Feature Eleven", href: "/feature#feature-eleven" },
			{ name: "Feature Twelve", href: "/feature#feature-twelve" },
			{ name: "Feature Thirteen", href: "/feature#feature-thirteen" },
			{ name: "Feature Fourteen", href: "/feature#feature-fourteen" },
			{ name: "Feature Fifteen", href: "/feature#feature-fifteen" },
			{ name: "Feature Sixteen", href: "/feature#feature-sixteen" },
			{ name: "Feature Seventeen", href: "/feature#feature-seventeen" },
			{ name: "Feature Eighteen", href: "/feature#feature-eighteen" },
			{ name: "Feature Nineteen", href: "/feature#feature-nineteen" },
			{ name: "Feature Twenty", href: "/feature#feature-twenty" },
		],
	},
	{
		name: "Content",
		subcom: [
			{ name: "Content One", href: "/content#content-one" },
			{ name: "Content Two", href: "/content#content-two" },
			{ name: "Content Three", href: "/content#content-three" },
			{ name: "Content Four", href: "/content#content-four" },
			{ name: "Content Five", href: "/content#content-five" },
			{ name: "Content Six", href: "/content#content-six" },
			{ name: "Content Seven", href: "/content#content-seven" },
		],
	},
	{
		name: "Integration",
		subcom: [
			{ name: "Integration One", href: "/integration#integration-one" },
			{ name: "Integration Two", href: "/integration#integration-two" },
			{ name: "Integration Three", href: "/integration#integration-three" },
			{ name: "Integration Four", href: "/integration#integration-four" },
			{ name: "Integration Five", href: "/integration#integration-five" },
			{ name: "Integration Six", href: "/integration#integration-six" },
			{ name: "Integration Seven", href: "/integration#integration-seven" },
			{ name: "Integration Eight", href: "/integration#integration-eight" },
		],
	},
	{
		name: "Stats",
		subcom: [
			{ name: "Stats One", href: "/stats#stats-one" },
			{ name: "Stats Two", href: "/stats#stats-two" },
			{ name: "Stats Three", href: "/stats#stats-three" },
			{ name: "Stats Four", href: "/stats#stats-four" },
		],
	},
	{
		name: "CTA",
		subcom: [
			{ name: "CTA One", href: "/cta#cta-one" },
			{ name: "CTA Two", href: "/cta#cta-two" },
			{ name: "CTA Three", href: "/cta#cta-three" },
		],
	},
	{
		name: "Pricing",
		subcom: [
			{ name: "Pricing One", href: "/pricing#pricing-one" },
			{ name: "Pricing Two", href: "/pricing#pricing-two" },
			{ name: "Pricing Three", href: "/pricing#pricing-three" },
			{ name: "Pricing Four", href: "/pricing#pricing-four" },
			{ name: "Pricing Five", href: "/pricing#pricing-five" },
		],
	},
	{
		name: "Team",
		subcom: [
			{ name: "Team One", href: "/team#team-one" },
			{ name: "Team Two", href: "/team#team-two" },
		],
	},
	{
		name: "Comparator",
		subcom: [{ name: "Comparator One", href: "/comparator#comparator-one" }],
	},
	{
		name: "Logo Cloud",
		subcom: [
			{ name: "Logo Cloud One", href: "/logocloud#logo-cloud-one" },
			{ name: "Logo Cloud Two", href: "/logocloud#logo-cloud-two" },
			{ name: "Logo Cloud Three", href: "/logocloud#logo-cloud-three" },
		],
	},
	{
		name: "FAQ",
		subcom: [
			{ name: "FAQ One", href: "/faq#faq-one" },
			{ name: "FAQ Two", href: "/faq#faq-two" },
			{ name: "FAQ Three", href: "/faq#faq-three" },
			{ name: "FAQ Four", href: "/faq#faq-four" },
		],
	},
	{
		name: "Footer",
		subcom: [
			{ name: "Footer One", href: "/footer#footer-one" },
			{ name: "Footer Two", href: "/footer#footer-two" },
			{ name: "Footer Three", href: "/footer#footer-three" },
			{ name: "Footer Four", href: "/footer#footer-four" },
			{ name: "Footer Five", href: "/footer#footer-five" },
		],
	},
	{
		name: "Contact",
		subcom: [
			{ name: "Contact One", href: "/contact#contact-one" },
			{ name: "Contact Two", href: "/contact#contact-two" },
		],
	},
	{
		name: "Signup",
		subcom: [
			{ name: "Signup One", href: "/signup#signup-one" },
			{ name: "Signup Two", href: "/signup#signup-two" },
			{ name: "Signup Three", href: "/signup#signup-three" },
		],
	},
	{
		name: "Login",
		subcom: [
			{ name: "Login One", href: "/login#login-one" },
			{ name: "Login Two", href: "/login#login-two" },
			{ name: "Login Three", href: "/login#login-three" },
		],
	},
	{
		name: "Forgot Password",
		subcom: [
			{
				name: "Forgot Password One",
				href: "/forgot-password#forgot-password-one",
			},
			{
				name: "Forgot Password Two",
				href: "/forgot-password#forgot-password-two",
			},
		],
	},
];

const kitComponents: SearchComp[] = kitSearchComponents.map((group) => ({
	...group,
	subcom: group.subcom.map((item) => ({
		...item,
		href: `/kit${item.href}`,
		library: "kit" as const,
	})),
}));

const numberWords = [
	"One",
	"Two",
	"Three",
	"Four",
	"Five",
	"Six",
	"Seven",
	"Eight",
	"Nine",
	"Ten",
	"Eleven",
] as const;

function numberedItems(
	name: string,
	count: number,
	href: string,
	library: SearchLibrary,
	slugPrefix?: string
): SubComp[] {
	return Array.from({ length: count }, (_, index) => {
		const number = numberWords[index] ?? String(index + 1);
		const slug = slugPrefix ? `${slugPrefix}-${number.toLowerCase()}` : number.toLowerCase();

		return { name: `${name} ${number}`, href: `${href}#${slug}`, library };
	});
}

const mistSearchComponents: SearchComp[] = [
	{
		name: "Hero",
		subcom: numberedItems("Hero", 6, "/mist/hero", "mist", "hero"),
	},
	{
		name: "Features",
		subcom: numberedItems("Feature", 11, "/mist/feature", "mist", "feature"),
	},
	{
		name: "Content",
		subcom: numberedItems("Content", 4, "/mist/content", "mist", "content"),
	},
	{
		name: "Integration",
		subcom: [
			{
				name: "Simple Integration List",
				href: "/mist/integrations#integration-one",
				library: "mist",
			},
			{
				name: "Centered Integration List",
				href: "/mist/integrations#integration-two",
				library: "mist",
			},
			{
				name: "Integration Cards Grid",
				href: "/mist/integrations#integration-three",
				library: "mist",
			},
		],
	},
	{
		name: "Stats",
		subcom: numberedItems("Stats", 4, "/mist/stats", "mist", "stats"),
	},
	{
		name: "CTA",
		subcom: numberedItems("CTA", 3, "/mist/cta", "mist", "cta"),
	},
	{
		name: "Pricing",
		subcom: numberedItems("Pricing", 2, "/mist/pricing", "mist", "pricing"),
	},
	{
		name: "Team",
		subcom: numberedItems("Team", 2, "/mist/team", "mist", "team"),
	},
	{
		name: "Comparator",
		subcom: [
			{
				name: "Basic Comparison Table",
				href: "/mist/comparator#comparator-one",
				library: "mist",
			},
		],
	},
	{
		name: "Logo Cloud",
		subcom: numberedItems("Logo Cloud", 2, "/mist/logocloud", "mist", "logocloud"),
	},
	{
		name: "Footer",
		subcom: numberedItems("Footer", 4, "/mist/footer", "mist", "footer"),
	},
	{
		name: "Contact",
		subcom: [
			{
				name: "Contact Form One",
				href: "/mist/contact#contact-one",
				library: "mist",
			},
		],
	},
	{
		name: "Signup",
		subcom: numberedItems("Signup", 1, "/mist/signup", "mist", "signup"),
	},
	{
		name: "Login",
		subcom: numberedItems("Login", 1, "/mist/login", "mist", "login"),
	},
	{
		name: "Forgot Password",
		subcom: numberedItems(
			"Forgot Password",
			1,
			"/mist/forgot-password",
			"mist",
			"forgot-password"
		),
	},
	{
		name: "Testimonials",
		subcom: [
			{
				name: "Simple Testimonial",
				href: "/mist/testimonials#testimonial-one",
				library: "mist",
			},
			{
				name: "Grid Testimonials",
				href: "/mist/testimonials#testimonial-two",
				library: "mist",
			},
			{
				name: "Star Rating Testimonials",
				href: "/mist/testimonials#testimonial-three",
				library: "mist",
			},
			{
				name: "Avatar Testimonial",
				href: "/mist/testimonials#testimonial-four",
				library: "mist",
			},
			{
				name: "Centered Quote Testimonial",
				href: "/mist/testimonials#testimonial-five",
				library: "mist",
			},
		],
	},
];

const veilSearchComponents: SearchComp[] = [
	{
		name: "Hero",
		subcom: numberedItems("Hero", 5, "/veil/hero", "veil", "hero"),
	},
	{
		name: "Header",
		subcom: numberedItems("Header", 4, "/veil/header", "veil", "header"),
	},
	{
		name: "Features",
		subcom: numberedItems("Features", 3, "/veil/features", "veil", "features"),
	},
	{
		name: "Content",
		subcom: numberedItems("Content", 3, "/veil/content", "veil", "content"),
	},
	{
		name: "Integration",
		subcom: numberedItems("Integration", 2, "/veil/integration", "veil", "integration"),
	},
	{
		name: "CTA",
		subcom: numberedItems(
			"Call To Action",
			4,
			"/veil/call-to-action",
			"veil",
			"call-to-action"
		),
	},
	{
		name: "Stats",
		subcom: numberedItems("Stats", 4, "/veil/stats", "veil", "stats"),
	},
	{
		name: "Pricing",
		subcom: numberedItems("Pricing", 3, "/veil/pricing", "veil", "pricing"),
	},
	{
		name: "Testimonials",
		subcom: numberedItems("Testimonial", 4, "/veil/testimonial", "veil", "testimonial"),
	},
	{
		name: "Team",
		subcom: numberedItems("Team", 2, "/veil/team", "veil", "team"),
	},
	{
		name: "Logo Cloud",
		subcom: numberedItems("Logo Cloud", 2, "/veil/logo-cloud", "veil", "logo-cloud"),
	},
	{
		name: "FAQ",
		subcom: numberedItems("FAQs", 4, "/veil/faqs", "veil", "faqs"),
	},
	{
		name: "Contact",
		subcom: numberedItems("Contact", 2, "/veil/contact", "veil", "contact"),
	},
	{
		name: "Signup",
		subcom: numberedItems("Signup", 3, "/veil/signup", "veil", "signup"),
	},
	{
		name: "Login",
		subcom: numberedItems("Login", 3, "/veil/login", "veil", "login"),
	},
	{
		name: "Forgot Password",
		subcom: numberedItems(
			"Forgot Password",
			3,
			"/veil/forgot-password",
			"veil",
			"forgot-password"
		),
	},
	{
		name: "Comparator",
		subcom: numberedItems("Comparator", 3, "/veil/comparator", "veil", "comparator"),
	},
	{
		name: "Footer",
		subcom: numberedItems("Footer", 6, "/veil/footer", "veil", "footer"),
	},
];

const duskSearchComponents: SearchComp[] = [
	{
		name: "Hero",
		subcom: numberedItems("Hero", 10, "/dusk/hero", "dusk", "hero"),
	},
	{
		name: "Features",
		subcom: numberedItems("Features", 7, "/dusk/features", "dusk", "features"),
	},
	{
		name: "Content",
		subcom: numberedItems("Content", 3, "/dusk/content", "dusk", "content"),
	},
	{
		name: "Integration",
		subcom: numberedItems("Integration", 1, "/dusk/integration", "dusk", "integration"),
	},
	{
		name: "Stats",
		subcom: numberedItems("Stats", 2, "/dusk/stats", "dusk", "stats"),
	},
	{
		name: "CTA",
		subcom: numberedItems(
			"Call To Action",
			2,
			"/dusk/call-to-action",
			"dusk",
			"call-to-action"
		),
	},
	{
		name: "Pricing",
		subcom: numberedItems("Pricing", 2, "/dusk/pricing", "dusk", "pricing"),
	},
	{
		name: "Team",
		subcom: numberedItems("Team", 2, "/dusk/team", "dusk", "team"),
	},
	{
		name: "Logo Cloud",
		subcom: numberedItems("Logo Cloud", 4, "/dusk/logo-cloud", "dusk", "logo-cloud"),
	},
	{
		name: "FAQ",
		subcom: numberedItems("FAQs", 1, "/dusk/faqs", "dusk", "faqs"),
	},
	{
		name: "Footer",
		subcom: numberedItems("Footer", 2, "/dusk/footer", "dusk", "footer"),
	},
];

function mergeSearchComponents(groups: SearchComp[]): SearchComp[] {
	const merged = new Map<string, SearchComp>();

	for (const group of groups) {
		const existing = merged.get(group.name);
		if (existing) {
			existing.subcom.push(...group.subcom);
		} else {
			merged.set(group.name, { ...group, subcom: [...group.subcom] });
		}
	}

	return [...merged.values()];
}

export const search_comp = mergeSearchComponents([
	...kitComponents,
	...mistSearchComponents,
	...veilSearchComponents,
	...duskSearchComponents,
]);

export type SearchLibrary = "kit" | "mist" | "veil" | "dusk";

export type SearchComp = {
	name: string;
	subcom: SubComp[];
};

export type SubComp = {
	name: string;
	href: string;
	library: SearchLibrary;
};
