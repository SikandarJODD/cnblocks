import type { Block } from "../../types/blocks";
import { createBlockCodeTreeFromCode } from "#lib/tree/types.js";

import StatsOne from "#lib/components/blocks/stats/stats-one.svelte";
import StatsTwo from "#lib/components/blocks/stats/stats-two.svelte";
import StatsThree from "#lib/components/blocks/stats/stats-three.svelte";
import StatsFour from "#lib/components/blocks/stats/stats-four.svelte";
import StatsOneCode from "#lib/components/blocks/stats/stats-one.svelte?raw";
import StatsTwoCode from "#lib/components/blocks/stats/stats-two.svelte?raw";
import StatsThreeCode from "#lib/components/blocks/stats/stats-three.svelte?raw";
import StatsFourCode from "#lib/components/blocks/stats/stats-four.svelte?raw";
import SpotifyCode from "#lib/svgs/spotify.svelte?raw";

const StatsOneFolderStructure = `# Folder structure

Here is the original folder structure:

    src/lib/
    └── components/
        └── blocks/
            └── stats/
                └── stats-one.svelte
`;

const StatsTwoFolderStructure = `# Folder structure

Here is the original folder structure:

    src/lib/
    └── components/
        └── blocks/
            └── stats/
                └── stats-two.svelte
`;

const StatsThreeFolderStructure = `# Folder structure

Here is the original folder structure:

    src/lib/
    └── components/
        └── blocks/
            └── stats/
                └── stats-three.svelte
`;

const StatsFourFolderStructure = `# Folder structure

Here is the original folder structure:

    src/lib/
    ├── components/
    │   └── blocks/
    │       └── stats/
    │           └── stats-four.svelte
    └── svgs/
        ├── index.ts
        └── spotify.svelte
`;

export const stats: Block[] = [
	{
		itemId: "stats-one",
		slug: "stats",
		title: "one",
		category: "stats",
		preview: "/preview/stats/one",
		codeTree: createBlockCodeTreeFromCode(
			[
				{ path: "stats-one.svelte", code: StatsOneCode, lang: "svelte" },
				{ path: "folder-structure.md", code: StatsOneFolderStructure, lang: "markdown" },
			],
			{ defaultOpen: false }
		),
		component: StatsOne,
	},
	{
		itemId: "stats-two",
		slug: "stats",
		title: "two",
		category: "stats",
		preview: "/preview/stats/two",
		codeTree: createBlockCodeTreeFromCode(
			[
				{ path: "stats-two.svelte", code: StatsTwoCode, lang: "svelte" },
				{ path: "folder-structure.md", code: StatsTwoFolderStructure, lang: "markdown" },
			],
			{ defaultOpen: false }
		),
		component: StatsTwo,
	},
	{
		itemId: "stats-three",
		slug: "stats",
		title: "three",
		category: "stats",
		preview: "/preview/stats/three",
		codeTree: createBlockCodeTreeFromCode(
			[
				{ path: "stats-three.svelte", code: StatsThreeCode, lang: "svelte" },
				{ path: "folder-structure.md", code: StatsThreeFolderStructure, lang: "markdown" },
			],
			{ defaultOpen: false }
		),
		component: StatsThree,
	},
	{
		itemId: "stats-four",
		slug: "stats",
		title: "four",
		category: "stats",
		preview: "/preview/stats/four",
		codeTree: createBlockCodeTreeFromCode(
			[
				{ path: "stats-four.svelte", code: StatsFourCode, lang: "svelte" },
				{ path: "svgs/spotify.svelte", code: SpotifyCode, lang: "svelte" },
				{ path: "folder-structure.md", code: StatsFourFolderStructure, lang: "markdown" },
			],
			{ defaultOpen: false }
		),
		component: StatsFour,
	},
];
