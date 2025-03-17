import type { Block } from "../../types/blocks";
import { getBlock } from "$lib";
import ComparatorCode from "$lib/components/blocks/comparator/comparator.svelte?raw";
import Comparator from "$lib/components/blocks/comparator/comparator.svelte";

let code = [ComparatorCode];
let comps = [Comparator];

export let comparator: Block[] = getBlock(
  comps.length,
  "comparator",
  code,
  comps
);
