export type GettingStartedLink = {
  title: string;
  href: string;
};

export type VeilComponentCategory = {
  title: string;
  slug: string;
  href: string;
  count: number;
};

export type VeilSidebarConfig = {
  gettingStarted: GettingStartedLink[];
  components: VeilComponentCategory[];
  developerLinks: GettingStartedLink[];
  totalComponents: number;
};

const gettingStarted: GettingStartedLink[] = [
  { title: "Introduction", href: "/docs" },
  { title: "Installation", href: "/docs/installation" },
  { title: "Theme Setup", href: "/veil#theme-setup" },
];

const components: VeilComponentCategory[] = [
  { title: "Hero", slug: "hero", href: "/veil#components-hero", count: 5 },
  { title: "Header", slug: "header", href: "/veil#components-header", count: 4 },
  { title: "Features", slug: "features", href: "/veil#components-features", count: 3 },
  { title: "Content", slug: "content", href: "/veil#components-content", count: 3 },
  { title: "Integration", slug: "integration", href: "/veil#components-integration", count: 2 },
  { title: "Call To Action", slug: "call-to-action", href: "/veil#components-call-to-action", count: 4 },
  { title: "Stats", slug: "stats", href: "/veil#components-stats", count: 4 },
  { title: "Pricing", slug: "pricing", href: "/veil#components-pricing", count: 3 },
  { title: "Testimonial", slug: "testimonial", href: "/veil#components-testimonial", count: 4 },
  { title: "Team", slug: "team", href: "/veil#components-team", count: 2 },
  { title: "Logo Cloud", slug: "logo-cloud", href: "/veil#components-logo-cloud", count: 2 },
  { title: "FAQs", slug: "faqs", href: "/veil#components-faqs", count: 4 },
  { title: "Contact", slug: "contact", href: "/veil#components-contact", count: 2 },
  { title: "Signup", slug: "signup", href: "/veil#components-signup", count: 3 },
  { title: "Login", slug: "login", href: "/veil#components-login", count: 3 },
  { title: "Forgot Password", slug: "forgot-password", href: "/veil#components-forgot-password", count: 3 },
  { title: "Comparator", slug: "comparator", href: "/veil#components-comparator", count: 3 },
  { title: "Footer", slug: "footer", href: "/veil#components-footer", count: 6 },
];

const developerLinks: GettingStartedLink[] = [
  { title: "Veil Source", href: "/veil#components" },
  { title: "Installation Docs", href: "/docs/installation" },
];

const totalComponents = components.reduce((sum, component) => sum + component.count, 0);

export const veilSidebarConfig: VeilSidebarConfig = {
  gettingStarted,
  components,
  developerLinks,
  totalComponents,
};
