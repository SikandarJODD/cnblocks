import type { Block } from "../../types/blocks";
import { comparator } from "./comparator";
import { contact } from "./contact";
import { content } from "./content";
import { cta } from "./cta";
import { faq } from "./faqs";
import { features } from "./features";
import { footer } from "./footer";
import { hero } from "./hero";
import { login } from "./login";
import { logocloud } from "./logo-cloud";
import { pricing } from "./pricing";
import { signup } from "./signup";
import { stats } from "./stats";
import { teams } from "./team";
import { testimonials } from "./testimonial";

export let all_blocks: Block[] = [
  ...stats,
  ...comparator,
  ...footer,
  ...contact,
  ...cta,
  ...features,
  ...faq,
  ...signup,
  ...login,
  ...teams,
  ...hero,
  ...logocloud,
  ...pricing,
  ...testimonials,
  ...content,
];

export const categories = [...new Set(all_blocks.map((b) => b.category))];
