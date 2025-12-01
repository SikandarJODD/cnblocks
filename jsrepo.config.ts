import { defineConfig } from "jsrepo";
import { repository } from "jsrepo/outputs";

export default defineConfig({
	registry: {
		name: "@sv/cnblocks",
		description: "Svelte Shadcn Blocks offers 50+ UI & marketing components for building responsive landing pages.",
		homepage: "https://sv-blocks.vercel.app",
		authors: ["SikandarJODD"],
		bugs: "https://github.com/SikandarJODD/cnblocks/issues",
		repository: "https://github.com/SikandarJODD/cnblocks",
		tags: [
	"ui",
	"components",
	"marketing",
	"blocks",
	"shadcn",
	"svelte",
],
		version: "package",
		access: "public",
		defaultPaths: {
	"blocks": "$lib/components/blocks",
	"mist": "$lib/components/mist",
	"web": "$lib/components/web",
	"magic": "$lib/components/magic",
	"ui": "$lib/components/ui",
	"*": "$lib/components/blocks",
	"hooks": "$lib/hooks",
	"actions": "$lib/actions",
	"utils": "$lib/utils"
},
		excludeDeps: [],
        outputs: [repository({ format: true })],
        items: [
	{
		"name": "comparator-one",
		"description": "Before/after image comparison slider block",
		"add": "when-added",
		"type": "comparator",
		"files": [
			{
				"path": "src/lib/components/blocks/comparator/comparator-one.svelte"
			}
		]
	},
	{
		"name": "contact-one",
		"description": "Contact form with input fields and submit button",
		"add": "when-added",
		"type": "contact",
		"files": [
			{
				"path": "src/lib/components/blocks/contact/contact-one.svelte"
			}
		]
	},
	{
		"name": "contact-two",
		"description": "Two-column contact section with form and info",
		"add": "when-added",
		"type": "contact",
		"files": [
			{
				"path": "src/lib/components/blocks/contact/contact-two.svelte"
			}
		]
	},
	{
		"name": "content-five",
		"description": "Content block with image and text in grid layout",
		"add": "when-added",
		"type": "content",
		"files": [
			{
				"path": "src/lib/components/blocks/content/content-five.svelte"
			}
		]
	},
	{
		"name": "content-four",
		"description": "Content section with feature highlights",
		"add": "when-added",
		"type": "content",
		"files": [
			{
				"path": "src/lib/components/blocks/content/content-four.svelte"
			}
		]
	},
	{
		"name": "content-one",
		"description": "Simple content block with heading and description",
		"add": "when-added",
		"type": "content",
		"files": [
			{
				"path": "src/lib/components/blocks/content/content-one.svelte"
			}
		]
	},
	{
		"name": "content-seven",
		"description": "Content block with alternating layout",
		"add": "when-added",
		"type": "content",
		"files": [
			{
				"path": "src/lib/components/blocks/content/content-seven.svelte"
			}
		]
	},
	{
		"name": "content-six",
		"description": "Content section with icons and descriptions",
		"add": "when-added",
		"type": "content",
		"files": [
			{
				"path": "src/lib/components/blocks/content/content-six.svelte"
			}
		]
	},
	{
		"name": "content-three",
		"description": "Two-column content with image sidebar",
		"add": "when-added",
		"type": "content",
		"files": [
			{
				"path": "src/lib/components/blocks/content/content-three.svelte"
			}
		]
	},
	{
		"name": "content-two",
		"description": "Content block with centered text and CTA",
		"add": "when-added",
		"type": "content",
		"files": [
			{
				"path": "src/lib/components/blocks/content/content-two.svelte"
			}
		]
	},
	{
		"name": "cta-one",
		"description": "Call-to-action block with centered heading and buttons",
		"add": "when-added",
		"type": "cta",
		"files": [
			{
				"path": "src/lib/components/blocks/cta/cta-one.svelte"
			}
		]
	},
	{
		"name": "cta-three",
		"description": "CTA section with background gradient",
		"add": "when-added",
		"type": "cta",
		"files": [
			{
				"path": "src/lib/components/blocks/cta/cta-three.svelte"
			}
		]
	},
	{
		"name": "cta-two",
		"description": "Two-column CTA with text and action buttons",
		"add": "when-added",
		"type": "cta",
		"files": [
			{
				"path": "src/lib/components/blocks/cta/cta-two.svelte"
			}
		]
	},
	{
		"name": "faq-four",
		"description": "FAQ section with search and categories",
		"add": "when-added",
		"type": "faq",
		"files": [
			{
				"path": "src/lib/components/blocks/faq/faq-four.svelte"
			}
		]
	},
	{
		"name": "faq-one",
		"description": "Simple accordion-style FAQ block",
		"add": "when-added",
		"type": "faq",
		"files": [
			{
				"path": "src/lib/components/blocks/faq/faq-one.svelte"
			}
		]
	},
	{
		"name": "faq-three",
		"description": "FAQ with two-column layout",
		"add": "when-added",
		"type": "faq",
		"files": [
			{
				"path": "src/lib/components/blocks/faq/faq-three.svelte"
			}
		]
	},
	{
		"name": "faq-two",
		"description": "FAQ section with expandable items",
		"add": "when-added",
		"type": "faq",
		"files": [
			{
				"path": "src/lib/components/blocks/faq/faq-two.svelte"
			}
		]
	},
	{
		"name": "card-decorator",
		"description": "Decorative card component with visual effects",
		"add": "when-added",
		"type": "feature",
		"files": [
			{
				"path": "src/lib/components/blocks/feature/card-decorator.svelte"
			}
		]
	},
	{
		"name": "feature-card",
		"description": "Reusable feature card with icon and text",
		"add": "when-added",
		"type": "feature",
		"files": [
			{
				"path": "src/lib/components/blocks/feature/feature-card.svelte"
			}
		]
	},
	{
		"name": "feature-eight",
		"description": "Feature grid with icons in circular containers",
		"add": "when-added",
		"type": "feature",
		"files": [
			{
				"path": "src/lib/components/blocks/feature/feature-eight.svelte"
			}
		]
	},
	{
		"name": "feature-eleven",
		"description": "Feature section with alternating image/text rows",
		"add": "when-added",
		"type": "feature",
		"files": [
			{
				"path": "src/lib/components/blocks/feature/feature-eleven.svelte"
			}
		]
	},
	{
		"name": "feature-five",
		"description": "Feature block with large image and bullet points",
		"add": "when-added",
		"type": "feature",
		"files": [
			{
				"path": "src/lib/components/blocks/feature/feature-five.svelte"
			}
		]
	},
	{
		"name": "feature-four",
		"description": "Four-column feature grid with icons",
		"add": "when-added",
		"type": "feature",
		"files": [
			{
				"path": "src/lib/components/blocks/feature/feature-four.svelte"
			}
		]
	},
	{
		"name": "feature-fourteen",
		"description": "Feature section with numbered steps",
		"add": "when-added",
		"type": "feature",
		"files": [
			{
				"path": "src/lib/components/blocks/feature/feature-fourteen.svelte"
			}
		]
	},
	{
		"name": "feature-nine",
		"description": "Feature list with checkmarks and descriptions",
		"add": "when-added",
		"type": "feature",
		"files": [
			{
				"path": "src/lib/components/blocks/feature/feature-nine.svelte"
			}
		]
	},
	{
		"name": "feature-one",
		"description": "Simple three-column feature grid",
		"add": "when-added",
		"type": "feature",
		"files": [
			{
				"path": "src/lib/components/blocks/feature/feature-one.svelte"
			}
		]
	},
	{
		"name": "feature-seven",
		"description": "Feature section with tabs and content panels",
		"add": "when-added",
		"type": "feature",
		"files": [
			{
				"path": "src/lib/components/blocks/feature/feature-seven.svelte"
			}
		]
	},
	{
		"name": "feature-six",
		"description": "Six-column feature grid with hover effects",
		"add": "when-added",
		"type": "feature",
		"files": [
			{
				"path": "src/lib/components/blocks/feature/feature-six.svelte"
			}
		]
	},
	{
		"name": "feature-ten",
		"description": "Feature block with centered image and cards",
		"add": "when-added",
		"type": "feature",
		"files": [
			{
				"path": "src/lib/components/blocks/feature/feature-ten.svelte"
			}
		]
	},
	{
		"name": "feature-thirteen",
		"description": "Feature section with large hero image",
		"add": "when-added",
		"type": "feature",
		"files": [
			{
				"path": "src/lib/components/blocks/feature/feature-thirteen.svelte"
			}
		]
	},
	{
		"name": "feature-three",
		"description": "Three-column feature cards with borders",
		"add": "when-added",
		"type": "feature",
		"files": [
			{
				"path": "src/lib/components/blocks/feature/feature-three.svelte"
			}
		]
	},
	{
		"name": "feature-twelve",
		"description": "Feature grid with gradient backgrounds",
		"add": "when-added",
		"type": "feature",
		"files": [
			{
				"path": "src/lib/components/blocks/feature/feature-twelve.svelte"
			}
		]
	},
	{
		"name": "feature-two",
		"description": "Two-column feature with image on side",
		"add": "when-added",
		"type": "feature",
		"files": [
			{
				"path": "src/lib/components/blocks/feature/feature-two.svelte"
			}
		]
	},
	{
		"name": "footer-five",
		"description": "Footer with newsletter signup and social links",
		"add": "when-added",
		"type": "footer",
		"files": [
			{
				"path": "src/lib/components/blocks/footer/footer-five.svelte"
			}
		]
	},
	{
		"name": "footer-four",
		"description": "Multi-column footer with sitemap links",
		"add": "when-added",
		"type": "footer",
		"files": [
			{
				"path": "src/lib/components/blocks/footer/footer-four.svelte"
			}
		]
	},
	{
		"name": "footer-one",
		"description": "Simple centered footer with logo and links",
		"add": "when-added",
		"type": "footer",
		"files": [
			{
				"path": "src/lib/components/blocks/footer/footer-one.svelte"
			}
		]
	},
	{
		"name": "footer-three",
		"description": "Three-column footer with contact info",
		"add": "when-added",
		"type": "footer",
		"files": [
			{
				"path": "src/lib/components/blocks/footer/footer-three.svelte"
			}
		]
	},
	{
		"name": "footer-two",
		"description": "Two-row footer with links and copyright",
		"add": "when-added",
		"type": "footer",
		"files": [
			{
				"path": "src/lib/components/blocks/footer/footer-two.svelte"
			}
		]
	},
	{
		"name": "forgot-password-one",
		"description": "Forgot password form with email input",
		"add": "when-added",
		"type": "forgot-password",
		"files": [
			{
				"path": "src/lib/components/blocks/forgot-password/forgot-password-one.svelte"
			}
		]
	},
	{
		"name": "forgot-password-two",
		"description": "Password reset form with side illustration",
		"add": "when-added",
		"type": "forgot-password",
		"files": [
			{
				"path": "src/lib/components/blocks/forgot-password/forgot-password-two.svelte"
			}
		]
	},
	{
		"name": "hero-header-eight",
		"description": "Navigation header with dropdown menus",
		"add": "when-added",
		"type": "header",
		"files": [
			{
				"path": "src/lib/components/blocks/header/hero-header-eight.svelte"
			}
		]
	},
	{
		"name": "hero-header-nine",
		"description": "Header with mega menu navigation",
		"add": "when-added",
		"type": "header",
		"files": [
			{
				"path": "src/lib/components/blocks/header/hero-header-nine.svelte"
			}
		]
	},
	{
		"name": "hero-header-seven",
		"description": "Transparent header with centered logo",
		"add": "when-added",
		"type": "header",
		"files": [
			{
				"path": "src/lib/components/blocks/header/hero-header-seven.svelte"
			}
		]
	},
	{
		"name": "hero-header",
		"description": "Standard navigation header with logo and links",
		"add": "when-added",
		"type": "header",
		"files": [
			{
				"path": "src/lib/components/blocks/header/hero-header.svelte"
			}
		]
	},
	{
		"name": "hero-eight",
		"description": "Hero with video background and overlay",
		"add": "when-added",
		"type": "hero",
		"files": [
			{
				"path": "src/lib/components/blocks/hero/hero-eight.svelte"
			}
		]
	},
	{
		"name": "hero-five",
		"description": "Hero section with app mockup image",
		"add": "when-added",
		"type": "hero",
		"files": [
			{
				"path": "src/lib/components/blocks/hero/hero-five.svelte"
			}
		]
	},
	{
		"name": "hero-four",
		"description": "Split hero with image on right side",
		"add": "when-added",
		"type": "hero",
		"files": [
			{
				"path": "src/lib/components/blocks/hero/hero-four.svelte"
			}
		]
	},
	{
		"name": "hero-nine",
		"description": "Hero with animated background elements",
		"add": "when-added",
		"type": "hero",
		"files": [
			{
				"path": "src/lib/components/blocks/hero/hero-nine.svelte"
			}
		]
	},
	{
		"name": "hero-one",
		"description": "Classic centered hero with headline and CTA",
		"add": "when-added",
		"type": "hero",
		"files": [
			{
				"path": "src/lib/components/blocks/hero/hero-one.svelte"
			}
		]
	},
	{
		"name": "hero-seven",
		"description": "Hero with gradient background and stats",
		"add": "when-added",
		"type": "hero",
		"files": [
			{
				"path": "src/lib/components/blocks/hero/hero-seven.svelte"
			}
		]
	},
	{
		"name": "hero-six",
		"description": "Hero section with logo cloud below",
		"add": "when-added",
		"type": "hero",
		"files": [
			{
				"path": "src/lib/components/blocks/hero/hero-six.svelte"
			}
		]
	},
	{
		"name": "hero-three",
		"description": "Hero with background image and overlay",
		"add": "when-added",
		"type": "hero",
		"files": [
			{
				"path": "src/lib/components/blocks/hero/hero-three.svelte"
			}
		]
	},
	{
		"name": "hero-two",
		"description": "Two-column hero with image carousel",
		"add": "when-added",
		"type": "hero",
		"files": [
			{
				"path": "src/lib/components/blocks/hero/hero-two.svelte"
			}
		]
	},
	{
		"name": "integration-cards",
		"description": "Collection of integration card variants for logos",
		"add": "when-added",
		"type": "integration",
		"files": [
			{
				"path": "src/lib/components/blocks/integration/card",
				"files": [
					{
						"path": "integration-card.svelte"
					},
					{
						"path": "integration-cardv2.svelte"
					},
					{
						"path": "integration-cardv3.svelte"
					},
					{
						"path": "integration-cardv4.svelte"
					},
					{
						"path": "integration-cardv5.svelte"
					},
					{
						"path": "integration-cardv7.svelte"
					},
					{
						"path": "integration-cardv8.svelte"
					}
				]
			}
		]
	},
	{
		"name": "integration-eight",
		"description": "Integration grid with animated connections",
		"add": "when-added",
		"type": "integration",
		"files": [
			{
				"path": "src/lib/components/blocks/integration/integration-eight.svelte"
			}
		]
	},
	{
		"name": "integration-five",
		"description": "Integration showcase with hover details",
		"add": "when-added",
		"type": "integration",
		"files": [
			{
				"path": "src/lib/components/blocks/integration/integration-five.svelte"
			}
		]
	},
	{
		"name": "integration-four",
		"description": "Four-column integration logo grid",
		"add": "when-added",
		"type": "integration",
		"files": [
			{
				"path": "src/lib/components/blocks/integration/integration-four.svelte"
			}
		]
	},
	{
		"name": "integration-one",
		"description": "Simple integration logos in grid layout",
		"add": "when-added",
		"type": "integration",
		"files": [
			{
				"path": "src/lib/components/blocks/integration/integration-one.svelte"
			}
		]
	},
	{
		"name": "integration-seven",
		"description": "Integration section with categories",
		"add": "when-added",
		"type": "integration",
		"files": [
			{
				"path": "src/lib/components/blocks/integration/integration-seven.svelte"
			}
		]
	},
	{
		"name": "integration-six",
		"description": "Integration cards with descriptions",
		"add": "when-added",
		"type": "integration",
		"files": [
			{
				"path": "src/lib/components/blocks/integration/integration-six.svelte"
			}
		]
	},
	{
		"name": "integration-three",
		"description": "Three-column integration with icons",
		"add": "when-added",
		"type": "integration",
		"files": [
			{
				"path": "src/lib/components/blocks/integration/integration-three.svelte"
			}
		]
	},
	{
		"name": "integration-two",
		"description": "Two-row integration logo marquee",
		"add": "when-added",
		"type": "integration",
		"files": [
			{
				"path": "src/lib/components/blocks/integration/integration-two.svelte"
			}
		]
	},
	{
		"name": "login-one",
		"description": "Simple centered login form with inputs",
		"add": "when-added",
		"type": "login",
		"files": [
			{
				"path": "src/lib/components/blocks/login/login-one.svelte"
			}
		]
	},
	{
		"name": "login-three",
		"description": "Login form with social auth buttons",
		"add": "when-added",
		"type": "login",
		"files": [
			{
				"path": "src/lib/components/blocks/login/login-three.svelte"
			}
		]
	},
	{
		"name": "login-two",
		"description": "Split login with side illustration",
		"add": "when-added",
		"type": "login",
		"files": [
			{
				"path": "src/lib/components/blocks/login/login-two.svelte"
			}
		]
	},
	{
		"name": "logo-gemini",
		"description": "Google Gemini AI logo SVG component",
		"add": "when-added",
		"type": "logos",
		"files": [
			{
				"path": "src/lib/components/blocks/logos/Gemini.svelte"
			}
		]
	},
	{
		"name": "logo-google-palm",
		"description": "Google PaLM AI logo SVG component",
		"add": "when-added",
		"type": "logos",
		"files": [
			{
				"path": "src/lib/components/blocks/logos/GooglePaLM.svelte"
			}
		]
	},
	{
		"name": "logo-collection",
		"description": "Logo collection utilities and exports",
		"add": "when-added",
		"type": "logos",
		"files": [
			{
				"path": "src/lib/components/blocks/logos/logos.ts"
			}
		]
	},
	{
		"name": "logo-magic-ui",
		"description": "Magic UI logo SVG component",
		"add": "when-added",
		"type": "logos",
		"files": [
			{
				"path": "src/lib/components/blocks/logos/MagicUI.svelte"
			}
		]
	},
	{
		"name": "logo-media-wiki",
		"description": "MediaWiki logo SVG component",
		"add": "when-added",
		"type": "logos",
		"files": [
			{
				"path": "src/lib/components/blocks/logos/MediaWiki.svelte"
			}
		]
	},
	{
		"name": "logo-replit",
		"description": "Replit logo SVG component",
		"add": "when-added",
		"type": "logos",
		"files": [
			{
				"path": "src/lib/components/blocks/logos/Replit.svelte"
			}
		]
	},
	{
		"name": "logo-vscodium",
		"description": "VSCodium logo SVG component",
		"add": "when-added",
		"type": "logos",
		"files": [
			{
				"path": "src/lib/components/blocks/logos/VSCodium.svelte"
			}
		]
	},
	{
		"name": "pricing-five",
		"description": "Pricing table with feature comparison",
		"add": "when-added",
		"type": "pricing",
		"files": [
			{
				"path": "src/lib/components/blocks/pricing/pricing-five.svelte"
			}
		]
	},
	{
		"name": "pricing-four",
		"description": "Four-tier pricing with toggle switch",
		"add": "when-added",
		"type": "pricing",
		"files": [
			{
				"path": "src/lib/components/blocks/pricing/pricing-four.svelte"
			}
		]
	},
	{
		"name": "pricing-one",
		"description": "Simple three-tier pricing cards",
		"add": "when-added",
		"type": "pricing",
		"files": [
			{
				"path": "src/lib/components/blocks/pricing/pricing-one.svelte"
			}
		]
	},
	{
		"name": "pricing-three",
		"description": "Pricing with highlighted popular plan",
		"add": "when-added",
		"type": "pricing",
		"files": [
			{
				"path": "src/lib/components/blocks/pricing/pricing-three.svelte"
			}
		]
	},
	{
		"name": "pricing-two",
		"description": "Two-column pricing with monthly/yearly toggle",
		"add": "when-added",
		"type": "pricing",
		"files": [
			{
				"path": "src/lib/components/blocks/pricing/pricing-two.svelte"
			}
		]
	},
	{
		"name": "signup-one",
		"description": "Simple centered signup form",
		"add": "when-added",
		"type": "signup",
		"files": [
			{
				"path": "src/lib/components/blocks/signup/signup-one.svelte"
			}
		]
	},
	{
		"name": "signup-three",
		"description": "Signup form with social auth options",
		"add": "when-added",
		"type": "signup",
		"files": [
			{
				"path": "src/lib/components/blocks/signup/signup-three.svelte"
			}
		]
	},
	{
		"name": "signup-two",
		"description": "Split signup with side illustration",
		"add": "when-added",
		"type": "signup",
		"files": [
			{
				"path": "src/lib/components/blocks/signup/signup-two.svelte"
			}
		]
	},
	{
		"name": "stats-four",
		"description": "Four-column stats with icons",
		"add": "when-added",
		"type": "stats",
		"files": [
			{
				"path": "src/lib/components/blocks/stats/stats-four.svelte"
			}
		]
	},
	{
		"name": "stats-one",
		"description": "Simple stats row with large numbers",
		"add": "when-added",
		"type": "stats",
		"files": [
			{
				"path": "src/lib/components/blocks/stats/stats-one.svelte"
			}
		]
	},
	{
		"name": "stats-three",
		"description": "Stats cards with descriptions",
		"add": "when-added",
		"type": "stats",
		"files": [
			{
				"path": "src/lib/components/blocks/stats/stats-three.svelte"
			}
		]
	},
	{
		"name": "stats-two",
		"description": "Two-column stats with side image",
		"add": "when-added",
		"type": "stats",
		"files": [
			{
				"path": "src/lib/components/blocks/stats/stats-two.svelte"
			}
		]
	},
	{
		"name": "team-one",
		"description": "Team grid with member photos and roles",
		"add": "when-added",
		"type": "team",
		"files": [
			{
				"path": "src/lib/components/blocks/team/team-one.svelte"
			}
		]
	},
	{
		"name": "team-two",
		"description": "Team section with social links",
		"add": "when-added",
		"type": "team",
		"files": [
			{
				"path": "src/lib/components/blocks/team/team-two.svelte"
			}
		]
	},
	{
		"name": "testimonial-five",
		"description": "Testimonial carousel with navigation",
		"add": "when-added",
		"type": "testimonial",
		"files": [
			{
				"path": "src/lib/components/blocks/testimonial/testimonial-five.svelte"
			}
		]
	},
	{
		"name": "testimonial-four",
		"description": "Four-column testimonial grid",
		"add": "when-added",
		"type": "testimonial",
		"files": [
			{
				"path": "src/lib/components/blocks/testimonial/testimonial-four.svelte"
			}
		]
	},
	{
		"name": "testimonial-one",
		"description": "Simple centered testimonial quote",
		"add": "when-added",
		"type": "testimonial",
		"files": [
			{
				"path": "src/lib/components/blocks/testimonial/testimonial-one.svelte"
			}
		]
	},
	{
		"name": "testimonial-six",
		"description": "Testimonial with video embed",
		"add": "when-added",
		"type": "testimonial",
		"files": [
			{
				"path": "src/lib/components/blocks/testimonial/testimonial-six.svelte"
			}
		]
	},
	{
		"name": "testimonial-three",
		"description": "Three-column testimonial cards",
		"add": "when-added",
		"type": "testimonial",
		"files": [
			{
				"path": "src/lib/components/blocks/testimonial/testimonial-three.svelte"
			}
		]
	},
	{
		"name": "testimonial-two",
		"description": "Two-column testimonial with photos",
		"add": "when-added",
		"type": "testimonial",
		"files": [
			{
				"path": "src/lib/components/blocks/testimonial/testimonial-two.svelte"
			}
		]
	},
	{
		"name": "mcomparator-one",
		"description": "Mist-style before/after image comparison",
		"add": "when-added",
		"type": "mcomparator",
		"files": [
			{
				"path": "src/lib/components/mist/mcomparator/one.svelte"
			}
		]
	},
	{
		"name": "mcontact-one",
		"description": "Mist-style minimal contact form",
		"add": "when-added",
		"type": "mcontact",
		"files": [
			{
				"path": "src/lib/components/mist/mcontact/one.svelte"
			}
		]
	},
	{
		"name": "mcontent-four",
		"description": "Mist-style content with feature grid",
		"add": "when-added",
		"type": "mcontent",
		"files": [
			{
				"path": "src/lib/components/mist/mcontent/four.svelte"
			}
		]
	},
	{
		"name": "mcontent-one",
		"description": "Mist-style simple content block",
		"add": "when-added",
		"type": "mcontent",
		"files": [
			{
				"path": "src/lib/components/mist/mcontent/one.svelte"
			}
		]
	},
	{
		"name": "mcontent-three",
		"description": "Mist-style content with side image",
		"add": "when-added",
		"type": "mcontent",
		"files": [
			{
				"path": "src/lib/components/mist/mcontent/three.svelte"
			}
		]
	},
	{
		"name": "mcontent-two",
		"description": "Mist-style two-column content",
		"add": "when-added",
		"type": "mcontent",
		"files": [
			{
				"path": "src/lib/components/mist/mcontent/two.svelte"
			}
		]
	},
	{
		"name": "mcta-one",
		"description": "Mist-style centered CTA block",
		"add": "when-added",
		"type": "mcta",
		"files": [
			{
				"path": "src/lib/components/mist/mcta/one.svelte"
			}
		]
	},
	{
		"name": "mcta-three",
		"description": "Mist-style CTA with background",
		"add": "when-added",
		"type": "mcta",
		"files": [
			{
				"path": "src/lib/components/mist/mcta/three.svelte"
			}
		]
	},
	{
		"name": "mcta-two",
		"description": "Mist-style two-column CTA",
		"add": "when-added",
		"type": "mcta",
		"files": [
			{
				"path": "src/lib/components/mist/mcta/two.svelte"
			}
		]
	},
	{
		"name": "mfeature-eight",
		"description": "Mist-style feature with icon grid",
		"add": "when-added",
		"type": "mfeature",
		"files": [
			{
				"path": "src/lib/components/mist/mfeature/eight.svelte"
			}
		]
	},
	{
		"name": "mfeature-eleven",
		"description": "Mist-style feature with alternating rows",
		"add": "when-added",
		"type": "mfeature",
		"files": [
			{
				"path": "src/lib/components/mist/mfeature/eleven.svelte"
			}
		]
	},
	{
		"name": "mfeature-table",
		"description": "Mist-style feature comparison table",
		"add": "when-added",
		"type": "mfeature",
		"files": [
			{
				"path": "src/lib/components/mist/mfeature/feature-table.svelte"
			}
		]
	},
	{
		"name": "mfeature-five",
		"description": "Mist-style feature with bullet points",
		"add": "when-added",
		"type": "mfeature",
		"files": [
			{
				"path": "src/lib/components/mist/mfeature/five.svelte"
			}
		]
	},
	{
		"name": "mfeature-four",
		"description": "Mist-style four-column feature grid",
		"add": "when-added",
		"type": "mfeature",
		"files": [
			{
				"path": "src/lib/components/mist/mfeature/four.svelte"
			}
		]
	},
	{
		"name": "mfeature-nine",
		"description": "Mist-style feature with checkmarks",
		"add": "when-added",
		"type": "mfeature",
		"files": [
			{
				"path": "src/lib/components/mist/mfeature/nine.svelte"
			}
		]
	},
	{
		"name": "mfeature-one",
		"description": "Mist-style simple feature grid",
		"add": "when-added",
		"type": "mfeature",
		"files": [
			{
				"path": "src/lib/components/mist/mfeature/one.svelte"
			}
		]
	},
	{
		"name": "mfeature-seven",
		"description": "Mist-style feature with tabs",
		"add": "when-added",
		"type": "mfeature",
		"files": [
			{
				"path": "src/lib/components/mist/mfeature/seven.svelte"
			}
		]
	},
	{
		"name": "mfeature-six",
		"description": "Mist-style six-column feature grid",
		"add": "when-added",
		"type": "mfeature",
		"files": [
			{
				"path": "src/lib/components/mist/mfeature/six.svelte"
			}
		]
	},
	{
		"name": "mfeature-ten",
		"description": "Mist-style feature with centered image",
		"add": "when-added",
		"type": "mfeature",
		"files": [
			{
				"path": "src/lib/components/mist/mfeature/ten.svelte"
			}
		]
	},
	{
		"name": "mfeature-three",
		"description": "Mist-style three-column feature cards",
		"add": "when-added",
		"type": "mfeature",
		"files": [
			{
				"path": "src/lib/components/mist/mfeature/three.svelte"
			}
		]
	},
	{
		"name": "mfeature-two",
		"description": "Mist-style feature with side image",
		"add": "when-added",
		"type": "mfeature",
		"files": [
			{
				"path": "src/lib/components/mist/mfeature/two.svelte"
			}
		]
	},
	{
		"name": "mfooter-four",
		"description": "Mist-style multi-column footer",
		"add": "when-added",
		"type": "mfooter",
		"files": [
			{
				"path": "src/lib/components/mist/mfooter/four.svelte"
			}
		]
	},
	{
		"name": "mfooter-one",
		"description": "Mist-style simple centered footer",
		"add": "when-added",
		"type": "mfooter",
		"files": [
			{
				"path": "src/lib/components/mist/mfooter/one.svelte"
			}
		]
	},
	{
		"name": "mfooter-three",
		"description": "Mist-style footer with contact info",
		"add": "when-added",
		"type": "mfooter",
		"files": [
			{
				"path": "src/lib/components/mist/mfooter/three.svelte"
			}
		]
	},
	{
		"name": "mfooter-two",
		"description": "Mist-style two-row footer",
		"add": "when-added",
		"type": "mfooter",
		"files": [
			{
				"path": "src/lib/components/mist/mfooter/two.svelte"
			}
		]
	},
	{
		"name": "mforgot-password-one",
		"description": "Mist-style password reset form",
		"add": "when-added",
		"type": "mforgot-password",
		"files": [
			{
				"path": "src/lib/components/mist/mforgot-password/one.svelte"
			}
		]
	},
	{
		"name": "mhero-five",
		"description": "Mist-style hero with app mockup",
		"add": "when-added",
		"type": "mhero",
		"files": [
			{
				"path": "src/lib/components/mist/mhero/five",
				"files": [
					{
						"path": "hero-five.svelte"
					}
				]
			}
		]
	},
	{
		"name": "mhero-four",
		"description": "Mist-style split hero with image",
		"add": "when-added",
		"type": "mhero",
		"files": [
			{
				"path": "src/lib/components/mist/mhero/four",
				"files": [
					{
						"path": "header.svelte"
					},
					{
						"path": "hero-four.svelte"
					}
				]
			}
		]
	},
	{
		"name": "mhero-one",
		"description": "Mist-style centered hero with CTA",
		"add": "when-added",
		"type": "mhero",
		"files": [
			{
				"path": "src/lib/components/mist/mhero/one",
				"files": [
					{
						"path": "header.svelte"
					},
					{
						"path": "hero-one.svelte"
					}
				]
			}
		]
	},
	{
		"name": "mhero-six",
		"description": "Mist-style hero with logo cloud",
		"add": "when-added",
		"type": "mhero",
		"files": [
			{
				"path": "src/lib/components/mist/mhero/six",
				"files": [
					{
						"path": "hero-six.svelte"
					}
				]
			}
		]
	},
	{
		"name": "mhero-three",
		"description": "Mist-style hero with background",
		"add": "when-added",
		"type": "mhero",
		"files": [
			{
				"path": "src/lib/components/mist/mhero/three",
				"files": [
					{
						"path": "header.svelte"
					},
					{
						"path": "hero-three.svelte"
					}
				]
			}
		]
	},
	{
		"name": "mhero-two",
		"description": "Mist-style two-column hero",
		"add": "when-added",
		"type": "mhero",
		"files": [
			{
				"path": "src/lib/components/mist/mhero/two",
				"files": [
					{
						"path": "header.svelte"
					},
					{
						"path": "hero-two.svelte"
					}
				]
			}
		]
	},
	{
		"name": "mintegration-card",
		"description": "Mist-style integration logo card",
		"add": "when-added",
		"type": "mintegration",
		"files": [
			{
				"path": "src/lib/components/mist/mintegration/integration-card.svelte"
			}
		]
	},
	{
		"name": "mintegration-one",
		"description": "Mist-style integration grid",
		"add": "when-added",
		"type": "mintegration",
		"files": [
			{
				"path": "src/lib/components/mist/mintegration/one.svelte"
			}
		]
	},
	{
		"name": "mintegration-three",
		"description": "Mist-style integration with icons",
		"add": "when-added",
		"type": "mintegration",
		"files": [
			{
				"path": "src/lib/components/mist/mintegration/three.svelte"
			}
		]
	},
	{
		"name": "mintegration-two",
		"description": "Mist-style integration marquee",
		"add": "when-added",
		"type": "mintegration",
		"files": [
			{
				"path": "src/lib/components/mist/mintegration/two.svelte"
			}
		]
	},
	{
		"name": "mlogin-one",
		"description": "Mist-style minimal login form",
		"add": "when-added",
		"type": "mlogin",
		"files": [
			{
				"path": "src/lib/components/mist/mlogin/one.svelte"
			}
		]
	},
	{
		"name": "mlogocloud-one",
		"description": "Mist-style grayscale logo cloud",
		"add": "when-added",
		"type": "mlogocloud",
		"files": [
			{
				"path": "src/lib/components/mist/mlogocloud/one.svelte"
			}
		]
	},
	{
		"name": "mlogocloud-two",
		"description": "Mist-style logo cloud with hover",
		"add": "when-added",
		"type": "mlogocloud",
		"files": [
			{
				"path": "src/lib/components/mist/mlogocloud/two.svelte"
			}
		]
	},
	{
		"name": "mlogo-gemini",
		"description": "Mist-style Gemini AI logo SVG",
		"add": "when-added",
		"type": "mlogos",
		"files": [
			{
				"path": "src/lib/components/mist/mlogos/Gemini.svelte"
			}
		]
	},
	{
		"name": "mlogo-google-palm",
		"description": "Mist-style Google PaLM logo SVG",
		"add": "when-added",
		"type": "mlogos",
		"files": [
			{
				"path": "src/lib/components/mist/mlogos/GooglePaLM.svelte"
			}
		]
	},
	{
		"name": "mlogo-collection",
		"description": "Mist-style logo collection utilities",
		"add": "when-added",
		"type": "mlogos",
		"files": [
			{
				"path": "src/lib/components/mist/mlogos/logos.ts"
			}
		]
	},
	{
		"name": "mlogo-magic-ui",
		"description": "Mist-style Magic UI logo SVG",
		"add": "when-added",
		"type": "mlogos",
		"files": [
			{
				"path": "src/lib/components/mist/mlogos/MagicUI.svelte"
			}
		]
	},
	{
		"name": "mlogo-media-wiki",
		"description": "Mist-style MediaWiki logo SVG",
		"add": "when-added",
		"type": "mlogos",
		"files": [
			{
				"path": "src/lib/components/mist/mlogos/MediaWiki.svelte"
			}
		]
	},
	{
		"name": "mlogo-replit",
		"description": "Mist-style Replit logo SVG",
		"add": "when-added",
		"type": "mlogos",
		"files": [
			{
				"path": "src/lib/components/mist/mlogos/Replit.svelte"
			}
		]
	},
	{
		"name": "mlogo-vscodium",
		"description": "Mist-style VSCodium logo SVG",
		"add": "when-added",
		"type": "mlogos",
		"files": [
			{
				"path": "src/lib/components/mist/mlogos/VSCodium.svelte"
			}
		]
	},
	{
		"name": "mpricing-one",
		"description": "Mist-style simple pricing cards",
		"add": "when-added",
		"type": "mpricing",
		"files": [
			{
				"path": "src/lib/components/mist/mpricing/one.svelte"
			}
		]
	},
	{
		"name": "mpricing-two",
		"description": "Mist-style pricing with toggle",
		"add": "when-added",
		"type": "mpricing",
		"files": [
			{
				"path": "src/lib/components/mist/mpricing/two.svelte"
			}
		]
	},
	{
		"name": "msignup-one",
		"description": "Mist-style minimal signup form",
		"add": "when-added",
		"type": "msignup",
		"files": [
			{
				"path": "src/lib/components/mist/msignup/one.svelte"
			}
		]
	},
	{
		"name": "mstats-four",
		"description": "Mist-style four-column stats",
		"add": "when-added",
		"type": "mstats",
		"files": [
			{
				"path": "src/lib/components/mist/mstats/four.svelte"
			}
		]
	},
	{
		"name": "mstats-one",
		"description": "Mist-style simple stats row",
		"add": "when-added",
		"type": "mstats",
		"files": [
			{
				"path": "src/lib/components/mist/mstats/one.svelte"
			}
		]
	},
	{
		"name": "mstats-three",
		"description": "Mist-style stats with descriptions",
		"add": "when-added",
		"type": "mstats",
		"files": [
			{
				"path": "src/lib/components/mist/mstats/three.svelte"
			}
		]
	},
	{
		"name": "mstats-two",
		"description": "Mist-style two-column stats",
		"add": "when-added",
		"type": "mstats",
		"files": [
			{
				"path": "src/lib/components/mist/mstats/two.svelte"
			}
		]
	},
	{
		"name": "mteam-one",
		"description": "Mist-style team member grid",
		"add": "when-added",
		"type": "mteam",
		"files": [
			{
				"path": "src/lib/components/mist/mteam/one.svelte"
			}
		]
	},
	{
		"name": "mteam-two",
		"description": "Mist-style team with social links",
		"add": "when-added",
		"type": "mteam",
		"files": [
			{
				"path": "src/lib/components/mist/mteam/two.svelte"
			}
		]
	},
	{
		"name": "mtestimonial-five",
		"description": "Mist-style testimonial carousel",
		"add": "when-added",
		"type": "mtestimonial",
		"files": [
			{
				"path": "src/lib/components/mist/mtestimonial/five.svelte"
			}
		]
	},
	{
		"name": "mtestimonial-four",
		"description": "Mist-style four-column testimonials",
		"add": "when-added",
		"type": "mtestimonial",
		"files": [
			{
				"path": "src/lib/components/mist/mtestimonial/four.svelte"
			}
		]
	},
	{
		"name": "mtestimonial-one",
		"description": "Mist-style centered testimonial",
		"add": "when-added",
		"type": "mtestimonial",
		"files": [
			{
				"path": "src/lib/components/mist/mtestimonial/one.svelte"
			}
		]
	},
	{
		"name": "mtestimonial-three",
		"description": "Mist-style three-column testimonials",
		"add": "when-added",
		"type": "mtestimonial",
		"files": [
			{
				"path": "src/lib/components/mist/mtestimonial/three.svelte"
			}
		]
	},
	{
		"name": "mtestimonial-two",
		"description": "Mist-style two-column testimonials",
		"add": "when-added",
		"type": "mtestimonial",
		"files": [
			{
				"path": "src/lib/components/mist/mtestimonial/two.svelte"
			}
		]
	},
	{
		"name": "marquee",
		"description": "Animated horizontal scrolling marquee",
		"add": "when-needed",
		"type": "magic",
		"files": [
			{
				"path": "src/lib/components/magic/Marquee.svelte"
			}
		]
	},
	{
		"name": "progressive-blur",
		"description": "Progressive blur effect component",
		"add": "when-needed",
		"type": "magic",
		"files": [
			{
				"path": "src/lib/components/magic/ProgressiveBlur.svelte"
			}
		]
	},
	{
		"name": "accordion",
		"description": "Collapsible accordion component",
		"add": "when-needed",
		"type": "ui",
		"files": [
			{
				"path": "src/lib/components/ui/accordion",
				"files": [
					{
						"path": "accordion-content.svelte"
					},
					{
						"path": "accordion-item.svelte"
					},
					{
						"path": "accordion-trigger.svelte"
					},
					{
						"path": "index.ts"
					}
				]
			}
		]
	},
	{
		"name": "avatar",
		"description": "User avatar with image and fallback",
		"add": "when-needed",
		"type": "ui",
		"files": [
			{
				"path": "src/lib/components/ui/avatar",
				"files": [
					{
						"path": "avatar-fallback.svelte"
					},
					{
						"path": "avatar-image.svelte"
					},
					{
						"path": "avatar.svelte"
					},
					{
						"path": "index.ts"
					}
				]
			}
		]
	},
	{
		"name": "button",
		"description": "Button component with variants",
		"add": "when-needed",
		"type": "ui",
		"files": [
			{
				"path": "src/lib/components/ui/button",
				"files": [
					{
						"path": "animated-button.svelte"
					},
					{
						"path": "button.svelte"
					},
					{
						"path": "index.ts"
					}
				]
			}
		]
	},
	{
		"name": "card",
		"description": "Card container with header and footer",
		"add": "when-needed",
		"type": "ui",
		"files": [
			{
				"path": "src/lib/components/ui/card",
				"files": [
					{
						"path": "card-content.svelte"
					},
					{
						"path": "card-description.svelte"
					},
					{
						"path": "card-footer.svelte"
					},
					{
						"path": "card-header.svelte"
					},
					{
						"path": "card-title.svelte"
					},
					{
						"path": "card.svelte"
					},
					{
						"path": "index.ts"
					}
				]
			}
		]
	},
	{
		"name": "hover-card",
		"description": "Card that appears on hover",
		"add": "when-needed",
		"type": "ui",
		"files": [
			{
				"path": "src/lib/components/ui/hover-card",
				"files": [
					{
						"path": "hover-card-content.svelte"
					},
					{
						"path": "index.ts"
					}
				]
			}
		]
	},
	{
		"name": "input",
		"description": "Text input field component",
		"add": "when-needed",
		"type": "ui",
		"files": [
			{
				"path": "src/lib/components/ui/input",
				"files": [
					{
						"path": "index.ts"
					},
					{
						"path": "input.svelte"
					}
				]
			}
		]
	},
	{
		"name": "label",
		"description": "Form label component",
		"add": "when-needed",
		"type": "ui",
		"files": [
			{
				"path": "src/lib/components/ui/label",
				"files": [
					{
						"path": "index.ts"
					},
					{
						"path": "label.svelte"
					}
				]
			}
		]
	},
	{
		"name": "select",
		"description": "Dropdown select component",
		"add": "when-needed",
		"type": "ui",
		"files": [
			{
				"path": "src/lib/components/ui/select",
				"files": [
					{
						"path": "index.ts"
					},
					{
						"path": "select-content.svelte"
					},
					{
						"path": "select-group-heading.svelte"
					},
					{
						"path": "select-item.svelte"
					},
					{
						"path": "select-scroll-down-button.svelte"
					},
					{
						"path": "select-scroll-up-button.svelte"
					},
					{
						"path": "select-separator.svelte"
					},
					{
						"path": "select-trigger.svelte"
					}
				]
			}
		]
	},
	{
		"name": "separator",
		"description": "Visual separator line component",
		"add": "when-needed",
		"type": "ui",
		"files": [
			{
				"path": "src/lib/components/ui/separator",
				"files": [
					{
						"path": "index.ts"
					},
					{
						"path": "separator.svelte"
					}
				]
			}
		]
	},
	{
		"name": "textarea",
		"description": "Multi-line text input component",
		"add": "when-needed",
		"type": "ui",
		"files": [
			{
				"path": "src/lib/components/ui/textarea",
				"files": [
					{
						"path": "index.ts"
					},
					{
						"path": "textarea.svelte"
					}
				]
			}
		]
	},
	{
		"name": "toggle",
		"description": "Toggle button component",
		"add": "when-needed",
		"type": "ui",
		"files": [
			{
				"path": "src/lib/components/ui/toggle",
				"files": [
					{
						"path": "index.ts"
					},
					{
						"path": "toggle.svelte"
					}
				]
			}
		]
	},
	{
		"name": "toggle-group",
		"description": "Group of toggle buttons",
		"add": "when-needed",
		"type": "ui",
		"files": [
			{
				"path": "src/lib/components/ui/toggle-group",
				"files": [
					{
						"path": "index.ts"
					},
					{
						"path": "toggle-group-item.svelte"
					},
					{
						"path": "toggle-group.svelte"
					}
				]
			}
		]
	},
	{
		"name": "utils",
		"description": "Utility functions for styling",
		"add": "when-needed",
		"type": "lib",
		"files": [
			{
				"path": "src/lib/utils.ts"
			}
		]
	},
	{
		"name": "cursor-rules",
		"description": "Cursor IDE rules for Svelte Shadcn Blocks",
		"title": "Svelte Shadcn Blocks Cursor Rules",
		"add": "optionally-on-init",
		"type": "config",
		"files": [
			{
				"path": "./.cursor/rules/svelte-blocks.mdc",
				"target": "./.cursor/rules/svelte-blocks.mdc"
			}
		]
	}
]
    },
	registries: [
	"github/ieedan/shadcn-svelte-extras"
],
	paths: {
	"*": "$lib/components/blocks",
	"ui": "$lib/components/ui",
	"hooks": "$lib/hooks",
	"utils": "$lib/utils"
},
});