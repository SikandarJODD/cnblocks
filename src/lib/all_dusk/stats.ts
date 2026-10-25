import type { MistBlock } from "#lib/types/mists.js";
import { createBlockCodeTreeFromCode } from "#lib/tree/types.js";
import { createMistFolderStructure } from "#lib/all_mists/simple-code-tree.js";

import StatsOne from "#lib/components/dusk/stats/one.svelte";
import StatsOneCode from "#lib/components/dusk/stats/one.svelte?raw";
import StatsTwo from "#lib/components/dusk/stats/two.svelte";
import StatsTwoCode from "#lib/components/dusk/stats/two.svelte?raw";

export const all_dusk_stats: MistBlock[] = [
	{
		slug: "one",
		title: "Stats One",
		category: "stats",
		preview: "/preview/dusk/stats/one",
		previewMode: "inline",
		itemId: "stats-one",
		component: StatsOne,
		codeTree: createBlockCodeTreeFromCode(
			[
				{ path: "stats.svelte", code: StatsOneCode, lang: "svelte" },
				{
					path: "folder-structure.md",
					code: createMistFolderStructure(["components/dusk/stats/one.svelte"]),
					lang: "markdown",
				},
			],
			{ defaultOpen: false }
		),
	},
	{
		slug: "two",
		title: "Stats Two",
		category: "stats",
		preview: "/preview/dusk/stats/two",
		previewMode: "inline",
		itemId: "stats-two",
		component: StatsTwo,
		codeTree: createBlockCodeTreeFromCode(
			[
				{ path: "stats.svelte", code: StatsTwoCode, lang: "svelte" },
				{
					path: "folder-structure.md",
					code: createMistFolderStructure(["components/dusk/stats/two.svelte"]),
					lang: "markdown",
				},
			],
			{ defaultOpen: false }
		),
	},
];
