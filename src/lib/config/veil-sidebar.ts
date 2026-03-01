export type GettingStartedLink = {
  title: string;
  href: string;
};

export type VeilComponentItem = {
  title: string;
  href: string;
  count: number;
};

export type VeilSidebarConfig = {
  gettingStarted: GettingStartedLink[];
  components: VeilComponentItem[];
  developerLinks: GettingStartedLink[];
  totalComponents: number;
};

const gettingStarted: GettingStartedLink[] = [
  { title: "Introduction", href: "/veil" },
  { title: "Installation", href: "/docs/installation" },
  { title: "Theme Setup", href: "/docs/installation" },
];

const components: VeilComponentItem[] = [
  { title: "Hero", href: "/veil#components-hero", count: 5 },
  { title: "Header", href: "/veil#components-header", count: 4 },
  { title: "Features", href: "/veil#components-features", count: 3 },
  { title: "Content", href: "/veil#components-content", count: 3 },
  { title: "Integration", href: "/veil#components-integration", count: 2 },
  { title: "Call To Action", href: "/veil#components-call-to-action", count: 4 },
  { title: "Stats", href: "/veil/stats", count: 4 },
  { title: "Pricing", href: "/veil#components-pricing", count: 3 },
  { title: "Testimonial", href: "/veil#components-testimonial", count: 4 },
  { title: "Team", href: "/veil#components-team", count: 2 },
  { title: "Logo Cloud", href: "/veil#components-logo-cloud", count: 2 },
  { title: "FAQs", href: "/veil#components-faqs", count: 4 },
  { title: "Contact", href: "/veil#components-contact", count: 2 },
  { title: "Signup", href: "/veil#components-signup", count: 3 },
  { title: "Login", href: "/veil#components-login", count: 3 },
  { title: "Forgot Password", href: "/veil#components-forgot-password", count: 3 },
  { title: "Comparator", href: "/veil#components-comparator", count: 3 },
  { title: "Footer", href: "/veil#components-footer", count: 6 },
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
