export let search_comp: SearchComp[] = [
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

type SearchComp = {
  name: string;
  subcom: SubComp[];
};

type SubComp = {
  name: string;
  href: string;
};
