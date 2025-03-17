import type { Block } from "../../types/blocks";
import { comparator } from "./comparator";
import { contact } from "./contact";
import { cta } from "./cta";
import { faq } from "./faqs";
import { features } from "./features";
import { footer } from "./footer";
import { stats } from "./stats";

export let all_blocks: Block[] = [
  ...stats,
  ...comparator,
  ...footer,
  ...contact,
  ...cta,
  ...features,
  ...faq,
];

export const categories = [...new Set(all_blocks.map((b) => b.category))];
