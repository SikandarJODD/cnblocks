import type { MistBlock } from "$lib/types/mists";

import StatsOne from "$lib/components/veil/stats/stats-one.svelte";
import StatsOneCode from "$lib/components/veil/stats/stats-one.svelte?raw";
import StatsTwo from "$lib/components/veil/stats/stats-two.svelte";
import StatsTwoCode from "$lib/components/veil/stats/stats-two.svelte?raw";
import StatsThree from "$lib/components/veil/stats/stats-three.svelte";
import StatsThreeCode from "$lib/components/veil/stats/stats-three.svelte?raw";
import StatsFour from "$lib/components/veil/stats/stats-four.svelte";
import StatsFourCode from "$lib/components/veil/stats/stats-four.svelte?raw";

export const all_veils_stats: MistBlock[] = [
	{
		slug: "stats-one",
		title: "Stats One",
		category: "stats",
		preview: "/preview/veil/stats/stats-one",
		itemId: "veil-stats-one",
		code: {
			code: StatsOneCode,
			lang: "svelte",
		},
		component: StatsOne,
	},
	{
		slug: "stats-two",
		title: "Stats Two",
		category: "stats",
		preview: "/preview/veil/stats/stats-two",
		itemId: "veil-stats-two",
		code: {
			code: StatsTwoCode,
			lang: "svelte",
		},
		component: StatsTwo,
	},
	{
		slug: "stats-three",
		title: "Stats Three",
		category: "stats",
		preview: "/preview/veil/stats/stats-three",
		itemId: "veil-stats-three",
		code: {
			code: StatsThreeCode,
			lang: "svelte",
		},
		component: StatsThree,
	},
	{
		slug: "stats-four",
		title: "Stats Four",
		category: "stats",
		preview: "/preview/veil/stats/stats-four",
		itemId: "veil-stats-four",
		code: {
			code: StatsFourCode,
			lang: "svelte",
		},
		component: StatsFour,
	},
];
