import type { Block } from "../../types/blocks";
import { createBlockCodeTreeFromCode } from "#lib/tree/types.js";

import PricingOne from "#lib/components/blocks/pricing/pricing-one.svelte";
import PricingTwo from "#lib/components/blocks/pricing/pricing-two.svelte";
import PricingThree from "#lib/components/blocks/pricing/pricing-three.svelte";
import PricingFour from "#lib/components/blocks/pricing/pricing-four.svelte";
import PricingFive from "#lib/components/blocks/pricing/pricing-five.svelte";
import PricingOneCode from "#lib/components/blocks/pricing/pricing-one.svelte?raw";
import PricingTwoCode from "#lib/components/blocks/pricing/pricing-two.svelte?raw";
import PricingThreeCode from "#lib/components/blocks/pricing/pricing-three.svelte?raw";
import PricingFourCode from "#lib/components/blocks/pricing/pricing-four.svelte?raw";
import PricingFiveCode from "#lib/components/blocks/pricing/pricing-five.svelte?raw";
import FigmaCode from "#lib/svgs/figma.svelte?raw";
import FirebaseFullCode from "#lib/svgs/firebase-full.svelte?raw";
import SpotifyCode from "#lib/svgs/spotify.svelte?raw";
import SupabaseFullCode from "#lib/svgs/supabase-full.svelte?raw";
import VercelFullCode from "#lib/svgs/vercel-full.svelte?raw";

const PricingOneFolderStructure = `# Folder structure

Here is the original folder structure:

    src/lib/
    └── components/
        ├── blocks/
        │   └── pricing/
        │       └── pricing-one.svelte
        └── ui/
            ├── button/
            └── card/
`;

const PricingTwoFolderStructure = `# Folder structure

Here is the original folder structure:

    src/lib/
    └── components/
        ├── blocks/
        │   └── pricing/
        │       └── pricing-two.svelte
        └── ui/
            ├── button/
            └── card/
`;

const PricingThreeFolderStructure = `# Folder structure

Here is the original folder structure:

    src/lib/
    └── components/
        ├── blocks/
        │   └── pricing/
        │       └── pricing-three.svelte
        └── ui/
            ├── button/
            └── card/
`;

const PricingFourFolderStructure = `# Folder structure

Here is the original folder structure:

    src/lib/
    └── components/
        ├── blocks/
        │   └── pricing/
        │       └── pricing-four.svelte
        └── ui/
            └── button/
`;

const PricingFiveFolderStructure = `# Folder structure

Here is the original folder structure:

    src/lib/
    ├── components/
    │   ├── blocks/
    │   │   └── pricing/
    │   │       └── pricing-five.svelte
    │   └── ui/
    │       └── button/
    └── svgs/
        ├── index.ts
        ├── figma.svelte
        ├── firebase-full.svelte
        ├── spotify.svelte
        ├── supabase-full.svelte
        └── vercel-full.svelte
`;

export const pricing: Block[] = [
	{
		itemId: "pricing-one",
		slug: "pricing",
		title: "one",
		category: "pricing",
		preview: "/preview/pricing/one",
		codeTree: createBlockCodeTreeFromCode(
			[
				{ path: "pricing-one.svelte", code: PricingOneCode, lang: "svelte" },
				{ path: "folder-structure.md", code: PricingOneFolderStructure, lang: "markdown" },
			],
			{ defaultOpen: false }
		),
		component: PricingOne,
	},
	{
		itemId: "pricing-two",
		slug: "pricing",
		title: "two",
		category: "pricing",
		preview: "/preview/pricing/two",
		codeTree: createBlockCodeTreeFromCode(
			[
				{ path: "pricing-two.svelte", code: PricingTwoCode, lang: "svelte" },
				{ path: "folder-structure.md", code: PricingTwoFolderStructure, lang: "markdown" },
			],
			{ defaultOpen: false }
		),
		component: PricingTwo,
	},
	{
		itemId: "pricing-three",
		slug: "pricing",
		title: "three",
		category: "pricing",
		preview: "/preview/pricing/three",
		codeTree: createBlockCodeTreeFromCode(
			[
				{ path: "pricing-three.svelte", code: PricingThreeCode, lang: "svelte" },
				{
					path: "folder-structure.md",
					code: PricingThreeFolderStructure,
					lang: "markdown",
				},
			],
			{ defaultOpen: false }
		),
		component: PricingThree,
	},
	{
		itemId: "pricing-four",
		slug: "pricing",
		title: "four",
		category: "pricing",
		preview: "/preview/pricing/four",
		codeTree: createBlockCodeTreeFromCode(
			[
				{ path: "pricing-four.svelte", code: PricingFourCode, lang: "svelte" },
				{ path: "folder-structure.md", code: PricingFourFolderStructure, lang: "markdown" },
			],
			{ defaultOpen: false }
		),
		component: PricingFour,
	},
	{
		itemId: "pricing-five",
		slug: "pricing",
		title: "five",
		category: "pricing",
		preview: "/preview/pricing/five",
		codeTree: createBlockCodeTreeFromCode(
			[
				{ path: "pricing-five.svelte", code: PricingFiveCode, lang: "svelte" },
				{ path: "svgs/figma.svelte", code: FigmaCode, lang: "svelte" },
				{ path: "svgs/firebase-full.svelte", code: FirebaseFullCode, lang: "svelte" },
				{ path: "svgs/spotify.svelte", code: SpotifyCode, lang: "svelte" },
				{ path: "svgs/supabase-full.svelte", code: SupabaseFullCode, lang: "svelte" },
				{ path: "svgs/vercel-full.svelte", code: VercelFullCode, lang: "svelte" },
				{ path: "folder-structure.md", code: PricingFiveFolderStructure, lang: "markdown" },
			],
			{ defaultOpen: false }
		),
		component: PricingFive,
	},
];
