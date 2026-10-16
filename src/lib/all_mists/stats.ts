import type { MistBlock } from "#lib/types/mists.js";
import StatsOne from "#lib/components/mist/mstats/one.svelte";
import StatsTwo from "#lib/components/mist/mstats/two.svelte";
import StatsThree from "#lib/components/mist/mstats/three.svelte";
import StatsFour from "#lib/components/mist/mstats/four.svelte";

import StatsOneCode from "#lib/components/mist/mstats/one.svelte?raw";
import StatsTwoCode from "#lib/components/mist/mstats/two.svelte?raw";
import StatsThreeCode from "#lib/components/mist/mstats/three.svelte?raw";
import StatsFourCode from "#lib/components/mist/mstats/four.svelte?raw";
import MistCardCode from "#lib/components/ui/mist/card/card.svelte?raw";
import { createSimpleMistCodeTreeFor } from "./simple-code-tree.js";

const createSimpleMistCodeTree = createSimpleMistCodeTreeFor("mstats");

export const all_mists_stats: MistBlock[] = [
	{
		slug: "one",
		title: "Stats One",
		category: "stats",
		preview: "/preview/mist/stats/one",

		itemId: "stats-one",
		codeTree: createSimpleMistCodeTree([
			{ path: "one.svelte", code: StatsOneCode, lang: "svelte" },
			{ path: "ui/card.svelte", code: MistCardCode, lang: "svelte" },
		]),
		component: StatsOne,
	},
	{
		slug: "two",
		title: "Stats Two",
		category: "stats",
		preview: "/preview/mist/stats/two",

		itemId: "stats-two",
		codeTree: createSimpleMistCodeTree([
			{ path: "two.svelte", code: StatsTwoCode, lang: "svelte" },
		]),
		component: StatsTwo,
	},
	{
		slug: "three",
		title: "Stats Three",
		category: "stats",
		preview: "/preview/mist/stats/three",

		itemId: "stats-three",
		codeTree: createSimpleMistCodeTree([
			{ path: "three.svelte", code: StatsThreeCode, lang: "svelte" },
		]),
		component: StatsThree,
	},
	{
		slug: "four",
		title: "Stats Four",
		category: "stats",
		preview: "/preview/mist/stats/four",

		itemId: "stats-four",
		codeTree: createSimpleMistCodeTree([
			{ path: "four.svelte", code: StatsFourCode, lang: "svelte" },
		]),
		component: StatsFour,
	},
];
