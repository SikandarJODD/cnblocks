import type { MistBlock } from "$lib/types/mists";

import TeamOne from "$lib/components/veil/team/team-one.svelte";
import TeamOneCode from "$lib/components/veil/team/team-one.svelte?raw";
import TeamTwo from "$lib/components/veil/team/team-two.svelte";
import TeamTwoCode from "$lib/components/veil/team/team-two.svelte?raw";

export const all_veils_team: MistBlock[] = [
	{
		slug: "team-one",
		title: "Team One",
		category: "team",
		preview: "/preview/veil/team/team-one",
		itemId: "veil-team-one",
		code: {
			code: TeamOneCode,
			lang: "svelte",
		},
		component: TeamOne,
	},
	{
		slug: "team-two",
		title: "Team Two",
		category: "team",
		preview: "/preview/veil/team/team-two",
		itemId: "veil-team-two",
		code: {
			code: TeamTwoCode,
			lang: "svelte",
		},
		component: TeamTwo,
	},
];
