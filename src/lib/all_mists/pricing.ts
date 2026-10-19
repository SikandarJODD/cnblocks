import type { MistBlock } from "#lib/types/mists.js";
import PricingOne from "#lib/components/mist/mpricing/one.svelte";
import PricingTwo from "#lib/components/mist/mpricing/two.svelte";

import PricingOneCode from "#lib/components/mist/mpricing/one.svelte?raw";
import PricingTwoCode from "#lib/components/mist/mpricing/two.svelte?raw";
import MistButtonCode from "#lib/components/ui/mist/button/button.svelte?raw";
import MistCardCode from "#lib/components/ui/mist/card/card.svelte?raw";
import MistCardHeaderCode from "#lib/components/ui/mist/card/card-header.svelte?raw";
import MistCardTitleCode from "#lib/components/ui/mist/card/card-title.svelte?raw";
import MistCardDescriptionCode from "#lib/components/ui/mist/card/card-description.svelte?raw";
import SpotifyLogoCode from "#lib/svgs/spotify.svelte?raw";
import SupabaseFullLogoCode from "#lib/svgs/supabase-full.svelte?raw";
import VercelFullLogoCode from "#lib/svgs/vercel-full.svelte?raw";
import { createSimpleMistCodeTreeFor } from "./simple-code-tree.js";

const createSimpleMistCodeTree = createSimpleMistCodeTreeFor("mpricing");

export const all_mists_pricing: MistBlock[] = [
	{
		slug: "one",
		title: "Pricing One",
		category: "pricing",
		preview: "/preview/mist/pricing/one",

		itemId: "pricing-one",
		codeTree: createSimpleMistCodeTree([
			{ path: "one.svelte", code: PricingOneCode, lang: "svelte" },
			{ path: "ui/button.svelte", code: MistButtonCode, lang: "svelte" },
			{ path: "ui/card.svelte", code: MistCardCode, lang: "svelte" },
			{
				path: "logos/spotify.svelte",
				sourcePath: "svgs/spotify.svelte",
				code: SpotifyLogoCode,
				lang: "svelte",
			},
			{
				path: "logos/supabase-full.svelte",
				sourcePath: "svgs/supabase-full.svelte",
				code: SupabaseFullLogoCode,
				lang: "svelte",
			},
			{
				path: "logos/vercel-full.svelte",
				sourcePath: "svgs/vercel-full.svelte",
				code: VercelFullLogoCode,
				lang: "svelte",
			},
		]),
		component: PricingOne,
	},
	{
		slug: "two",
		title: "Pricing Two",
		category: "pricing",
		preview: "/preview/mist/pricing/two",

		itemId: "pricing-two",
		codeTree: createSimpleMistCodeTree([
			{ path: "two.svelte", code: PricingTwoCode, lang: "svelte" },
			{ path: "ui/button.svelte", code: MistButtonCode, lang: "svelte" },
			{ path: "ui/card/card.svelte", code: MistCardCode, lang: "svelte" },
			{ path: "ui/card/card-header.svelte", code: MistCardHeaderCode, lang: "svelte" },
			{ path: "ui/card/card-title.svelte", code: MistCardTitleCode, lang: "svelte" },
			{
				path: "ui/card/card-description.svelte",
				code: MistCardDescriptionCode,
				lang: "svelte",
			},
		]),
		component: PricingTwo,
	},
];
