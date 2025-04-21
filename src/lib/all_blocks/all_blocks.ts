import type { Block } from "../../types/blocks";
import { comparator } from "./comparator";
import { content } from "./content";
import { cta } from "./cta";
import { hero } from "./hero";
import { logocloud } from "./logo-cloud";
import { pricing } from "./pricing";
import { stats } from "./stats";
import { team } from "./team";

export let all_blocks: Record<string, Block[]> = {
  hero,
  content,
  stats,
  cta,
  pricing,
  team,
  comparator,
  logocloud,
};

export let categories = [
  "hero",
  "content",
  "stats",
  "cta",
  "pricing",
  "team",
  "comparator",
  "logocloud",
];
type CategoryBlock = {
  title: string;
  href: string;
};
export let category_blocks: CategoryBlock[] = [
  { title: "Hero", href: "/hero" },
  { title: "Features", href: "/feature" },
  { title: "Content", href: "/content" },
  { title: "Integration", href: "/integration" },
  { title: "Stats", href: "/stats" },
  { title: "Call To Action", href: "/cta" },
  { title: "Pricing", href: "/pricing" },
  { title: "Team", href: "/team" },
  { title: "Comparator", href: "/comparator" },
  { title: "Logo Cloud", href: "/logocloud" },
  { title: "FAQ", href: "/faq" },
  { title: "Footer", href: "/footer" },
  { title: "Contact", href: "/contact" },
  { title: "Signup", href: "/signup" },
  { title: "Login", href: "/login" },
];
/*
feature
footer
contact
testimonial
signup
login
integration
 */

export let getAllBlockNames = () => {
  return Object.values(all_blocks).flatMap((blocks) => {
    return blocks.map((b) => {
      let title = `${b.category}  ${b.title}`;
      let href = `/${b.category}#${b.category}-${b.title}`;
      return { title, href };
    });
  });
};
