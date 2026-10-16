import type { MistBlock } from "#lib/types/mists.js";
import TeamOne from "#lib/components/mist/mteam/one.svelte";
import TeamTwo from "#lib/components/mist/mteam/two.svelte";
import TeamOneCode from "#lib/components/mist/mteam/one.svelte?raw";
import TeamTwoCode from "#lib/components/mist/mteam/two.svelte?raw";
import MistButtonCode from "#lib/components/ui/mist/button/button.svelte?raw";
import { createSimpleMistCodeTreeFor } from "./simple-code-tree.js";

const createSimpleMistCodeTree = createSimpleMistCodeTreeFor("mteam");

export const all_mists_team: MistBlock[] = [
	{
		slug: "one",
		title: "Team One",
		category: "team",
		preview: "/preview/mist/team/one",

		itemId: "team-one",
		codeTree: createSimpleMistCodeTree([
			{ path: "one.svelte", code: TeamOneCode, lang: "svelte" },
			{ path: "ui/button.svelte", code: MistButtonCode, lang: "svelte" },
		]),
		component: TeamOne,
	},
	{
		slug: "two",
		title: "Team Two",
		category: "team",
		preview: "/preview/mist/team/two",

		itemId: "team-two",
		codeTree: createSimpleMistCodeTree([
			{ path: "two.svelte", code: TeamTwoCode, lang: "svelte" },
			{ path: "ui/button.svelte", code: MistButtonCode, lang: "svelte" },
		]),
		component: TeamTwo,
	},
];
