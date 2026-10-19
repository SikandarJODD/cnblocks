import type { MistBlock } from "#lib/types/mists.js";

import StatsOne from "#lib/components/veil/stats/stats-one.svelte";
import StatsOneCode from "#lib/components/veil/stats/stats-one.svelte?raw";
import StatsTwo from "#lib/components/veil/stats/stats-two.svelte";
import StatsTwoCode from "#lib/components/veil/stats/stats-two.svelte?raw";
import StatsThree from "#lib/components/veil/stats/stats-three.svelte";
import StatsThreeCode from "#lib/components/veil/stats/stats-three.svelte?raw";
import StatsFour from "#lib/components/veil/stats/stats-four.svelte";
import StatsFourCode from "#lib/components/veil/stats/stats-four.svelte?raw";
import { createBlockCodeTreeFromCode } from "#lib/tree/types.js";

function createStatsCodeTree(fileName: string, code: string) {
	const folderStructure = `# Folder structure

I've simplified the layout to make it easier to browse.

Here is the original folder structure:

    src/lib/
    └── components/
        └── veil/
            └── stats/
                └── ${fileName}
`;

	return createBlockCodeTreeFromCode(
		[
			{ path: fileName, code, lang: "svelte" },
			{ path: "folder-structure.md", code: folderStructure, lang: "markdown" },
		],
		{ defaultOpen: false }
	);
}

export const all_veils_stats: MistBlock[] = [
	{
		slug: "stats-one",
		title: "Stats One",
		category: "stats",
		preview: "/preview/veil/stats/stats-one",
		itemId: "stats-one",
		codeTree: createStatsCodeTree("stats-one.svelte", StatsOneCode),
		component: StatsOne,
	},
	{
		slug: "stats-two",
		title: "Stats Two",
		category: "stats",
		preview: "/preview/veil/stats/stats-two",
		itemId: "stats-two",
		codeTree: createStatsCodeTree("stats-two.svelte", StatsTwoCode),
		component: StatsTwo,
	},
	{
		slug: "stats-three",
		title: "Stats Three",
		category: "stats",
		preview: "/preview/veil/stats/stats-three",
		itemId: "stats-three",
		codeTree: createStatsCodeTree("stats-three.svelte", StatsThreeCode),
		component: StatsThree,
	},
	{
		slug: "stats-four",
		title: "Stats Four",
		category: "stats",
		preview: "/preview/veil/stats/stats-four",
		itemId: "stats-four",
		codeTree: createStatsCodeTree("stats-four.svelte", StatsFourCode),
		component: StatsFour,
	},
];
