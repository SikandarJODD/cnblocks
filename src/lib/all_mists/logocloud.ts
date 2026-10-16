import type { MistBlock } from "#lib/types/mists.js";
import LogocloudOne from "#lib/components/mist/mlogocloud/one.svelte";
import LogocloudOneCode from "#lib/components/mist/mlogocloud/one.svelte?raw";
import LogocloudTwo from "#lib/components/mist/mlogocloud/two.svelte";
import LogocloudTwoCode from "#lib/components/mist/mlogocloud/two.svelte?raw";
import HuluLogoCode from "#lib/svgs/hulu.svelte?raw";
import SpotifyLogoCode from "#lib/svgs/spotify.svelte?raw";
import SupabaseFullLogoCode from "#lib/svgs/supabase-full.svelte?raw";
import VercelFullLogoCode from "#lib/svgs/vercel-full.svelte?raw";
import { createSimpleMistCodeTreeFor } from "./simple-code-tree.js";

const createSimpleMistCodeTree = createSimpleMistCodeTreeFor("mlogocloud");

const logoCodeFiles = [
	{ path: "logos/hulu.svelte", sourcePath: "svgs/hulu.svelte", code: HuluLogoCode, lang: "svelte" },
	{ path: "logos/spotify.svelte", sourcePath: "svgs/spotify.svelte", code: SpotifyLogoCode, lang: "svelte" },
	{ path: "logos/supabase-full.svelte", sourcePath: "svgs/supabase-full.svelte", code: SupabaseFullLogoCode, lang: "svelte" },
	{ path: "logos/vercel-full.svelte", sourcePath: "svgs/vercel-full.svelte", code: VercelFullLogoCode, lang: "svelte" },
] as const;

export const all_mists_logocloud: MistBlock[] = [
	{
		slug: "one",
		title: "Logo Cloud One",
		category: "logocloud",
		preview: "/preview/mist/logocloud/one",

		itemId: "logocloud-one",
		codeTree: createSimpleMistCodeTree([
			{ path: "one.svelte", code: LogocloudOneCode, lang: "svelte" },
			...logoCodeFiles,
		]),
		component: LogocloudOne,
	},
	{
		slug: "two",
		title: "Logo Cloud Two",
		category: "logocloud",
		preview: "/preview/mist/logocloud/two",

		itemId: "logocloud-two",
		codeTree: createSimpleMistCodeTree([
			{ path: "two.svelte", code: LogocloudTwoCode, lang: "svelte" },
			...logoCodeFiles,
		]),
		component: LogocloudTwo,
	},
];
