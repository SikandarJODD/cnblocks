import type { MistBlock } from "#lib/types/mists.js";
import { createBlockCodeTreeFromCode } from "#lib/tree/types.js";
import { createMistFolderStructure } from "#lib/all_mists/simple-code-tree.js";

import TeamOne from "#lib/components/dusk/team/one.svelte";
import TeamOneCode from "#lib/components/dusk/team/one.svelte?raw";
import TeamTwo from "#lib/components/dusk/team/two.svelte";
import TeamTwoCode from "#lib/components/dusk/team/two.svelte?raw";
import DuskButtonCode from "#lib/components/ui/dusk/button/button.svelte?raw";
import DuskButtonIndexCode from "#lib/components/ui/dusk/button/index.ts?raw";

export const all_dusk_team: MistBlock[] = [
	{
		slug: "one",
		title: "Team One",
		category: "team",
		preview: "/preview/dusk/team/one",
		previewMode: "inline",
		itemId: "team-one",
		component: TeamOne,
		codeTree: createBlockCodeTreeFromCode(
			[
				{ path: "team.svelte", code: TeamOneCode, lang: "svelte" },
				{ path: "ui/button/button.svelte", code: DuskButtonCode, lang: "svelte" },
				{ path: "ui/button/index.ts", code: DuskButtonIndexCode, lang: "typescript" },
				{
					path: "folder-structure.md",
					code: createMistFolderStructure([
						"components/dusk/team/one.svelte",
						"components/ui/dusk/button/button.svelte",
						"components/ui/dusk/button/index.ts",
					]),
					lang: "markdown",
				},
			],
			{ defaultOpen: false }
		),
	},
	{
		slug: "two",
		title: "Team Two",
		category: "team",
		preview: "/preview/dusk/team/two",
		previewMode: "inline",
		itemId: "team-two",
		component: TeamTwo,
		codeTree: createBlockCodeTreeFromCode(
			[
				{ path: "team.svelte", code: TeamTwoCode, lang: "svelte" },
				{
					path: "folder-structure.md",
					code: createMistFolderStructure(["components/dusk/team/two.svelte"]),
					lang: "markdown",
				},
			],
			{ defaultOpen: false }
		),
	},
];
