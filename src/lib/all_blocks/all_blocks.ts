import type { Block } from "../../types/blocks";
import { comparator } from "./comparator";
import { content } from "./content";
import { cta } from "./cta";
import { logocloud } from "./logo-cloud";
import { pricing } from "./pricing";
import { stats } from "./stats";
import { team } from "./team";

export let all_blocks: Record<string, Block[]> = {
  content,
  stats,
  cta,
  pricing,
  team,
  comparator,
  logocloud,
};



