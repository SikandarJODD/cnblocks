import type { Block } from "../../types/blocks";
import { createBlockCodeTreeFromCode } from "#lib/tree/types.js";

import TeamOne from "#lib/components/blocks/team/team-one.svelte";
import TeamTwo from "#lib/components/blocks/team/team-two.svelte";
import TeamOneCode from "#lib/components/blocks/team/team-one.svelte?raw";
import TeamTwoCode from "#lib/components/blocks/team/team-two.svelte?raw";

const TeamOneFolderStructure = `# Folder structure

Here is the original folder structure:

    src/lib/
    └── components/
        └── blocks/
            └── team/
                └── team-one.svelte
`;

const TeamTwoFolderStructure = `# Folder structure

Here is the original folder structure:

    src/lib/
    └── components/
        └── blocks/
            └── team/
                └── team-two.svelte
`;

export const team: Block[] = [
	{
		itemId: "team-one",
		slug: "team",
		title: "one",
		category: "team",
		preview: "/preview/team/one",
		codeTree: createBlockCodeTreeFromCode(
			[
				{ path: "team-one.svelte", code: TeamOneCode, lang: "svelte" },
				{ path: "folder-structure.md", code: TeamOneFolderStructure, lang: "markdown" },
			],
			{ defaultOpen: false }
		),
		component: TeamOne,
	},
	{
		itemId: "team-two",
		slug: "team",
		title: "two",
		category: "team",
		preview: "/preview/team/two",
		codeTree: createBlockCodeTreeFromCode(
			[
				{ path: "team-two.svelte", code: TeamTwoCode, lang: "svelte" },
				{ path: "folder-structure.md", code: TeamTwoFolderStructure, lang: "markdown" },
			],
			{ defaultOpen: false }
		),
		component: TeamTwo,
	},
];
