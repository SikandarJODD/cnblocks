import type { Block } from "../../types/blocks";
import { getBlock } from "$lib";
// Components
import Faq from "$lib/components/blocks/faq/faq.svelte";

// Code
import FaqCode from "$lib/components/blocks/faq/faq.svelte?raw";

let codes = [FaqCode];
let components = [Faq];

export let faq: Block[] = getBlock(
  components.length,
  "faq",
  codes,
  components
);
