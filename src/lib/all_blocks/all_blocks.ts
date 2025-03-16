import type { Block } from "../../types/blocks";
import { comparator } from "./comparator";
import { contact } from "./contact";
import { footer } from "./footer";
import { stats } from "./stats";

export let all_blocks: Block[] = [
  ...stats,
  ...comparator,
  ...contact,
  ...footer,
];

export const categories = [...new Set(all_blocks.map((b) => b.category))];
