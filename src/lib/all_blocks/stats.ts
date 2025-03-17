import type { Block } from "../../types/blocks";
import { getBlock } from "$lib";
// Components

import StatsOne from "$lib/components/blocks/stats/stats-one.svelte";
import StatsTwo from "$lib/components/blocks/stats/stats-two.svelte";
import StatsThree from "$lib/components/blocks/stats/stats-three.svelte";
import StatsFour from "$lib/components/blocks/stats/stats-four.svelte";
// Code
import StatsOneCode from "$lib/components/blocks/stats/stats-one.svelte?raw";
import StatsTwoCode from "$lib/components/blocks/stats/stats-two.svelte?raw";
import StatsThreeCode from "$lib/components/blocks/stats/stats-three.svelte?raw";
import StatsFourCode from "$lib/components/blocks/stats/stats-four.svelte?raw";

let comps = [StatsOneCode, StatsTwoCode, StatsThreeCode, StatsFourCode];
let components = [StatsOne, StatsTwo, StatsThree, StatsFour];

export let stats: Block[] = getBlock(4, "stats", comps, components);
