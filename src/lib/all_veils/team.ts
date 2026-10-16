import type { MistBlock } from "#lib/types/mists.js";

import TeamOne from "#lib/components/veil/team/team-one.svelte";
import TeamOneCode from "#lib/components/veil/team/team-one.svelte?raw";
import TeamTwo from "#lib/components/veil/team/team-two.svelte";
import TeamTwoCode from "#lib/components/veil/team/team-two.svelte?raw";
import { createBlockCodeTreeFromCode } from "#lib/tree/types.js";

function createTeamCodeTree(fileName: string, code: string) {
	const folderStructure = `# Folder structure

I've simplified the layout to make it easier to browse.

Here is the original folder structure:

    src/lib/
    └── components/
        └── veil/
            └── team/
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

export const all_veils_team: MistBlock[] = [
	{
		slug: "team-one",
		title: "Team One",
		category: "team",
		preview: "/preview/veil/team/team-one",
		itemId: "team-one",
		codeTree: createTeamCodeTree("team-one.svelte", TeamOneCode),
		component: TeamOne,
	},
	{
		slug: "team-two",
		title: "Team Two",
		category: "team",
		preview: "/preview/veil/team/team-two",
		itemId: "team-two",
		codeTree: createTeamCodeTree("team-two.svelte", TeamTwoCode),
		component: TeamTwo,
	},
];
