import type { Block } from "../../types/blocks";
import { getBlock } from "$lib";

import StatsOne from "$lib/components/blocks/stats/stats-one.svelte?raw";
import StatsTwo from "$lib/components/blocks/stats/stats-two.svelte?raw";
import StatsThree from "$lib/components/blocks/stats/stats-three.svelte?raw";
import StatsFour from "$lib/components/blocks/stats/stats-four.svelte?raw";
let comps = [StatsOne, StatsTwo, StatsThree, StatsFour];

export let stats: Block[] = getBlock(4, comps, "stats");
