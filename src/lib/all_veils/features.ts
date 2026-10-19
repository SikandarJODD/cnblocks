import type { MistBlock } from "#lib/types/mists.js";

import FeaturesOne from "#lib/components/veil/features/features-one.svelte";
import FeaturesOneCode from "#lib/components/veil/features/features-one.svelte?raw";
import FeaturesTwo from "#lib/components/veil/features/features-two.svelte";
import FeaturesTwoCode from "#lib/components/veil/features/features-two.svelte?raw";
import FeaturesThree from "#lib/components/veil/features/features-three.svelte";
import FeaturesThreeCode from "#lib/components/veil/features/features-three.svelte?raw";
import VeilButtonCode from "#lib/components/ui/veil/button/button.svelte?raw";
import VeilCardCode from "#lib/components/ui/veil/card/card.svelte?raw";
import ClerkLogoCode from "#lib/svgs/clerk.svelte?raw";
import FirebaseLogoCode from "#lib/svgs/firebase.svelte?raw";
import LinearLogoCode from "#lib/svgs/linear.svelte?raw";
import SlackLogoCode from "#lib/svgs/slack.svelte?raw";
import SupabaseLogoCode from "#lib/svgs/supabase.svelte?raw";
import VercelLogoCode from "#lib/svgs/vercel.svelte?raw";
import { createBlockCodeTreeFromCode } from "#lib/tree/types.js";

const featureLogoCodeFiles = [
	{ path: "logos/clerk.svelte", code: ClerkLogoCode, lang: "svelte" },
	{ path: "logos/firebase.svelte", code: FirebaseLogoCode, lang: "svelte" },
	{ path: "logos/linear.svelte", code: LinearLogoCode, lang: "svelte" },
	{ path: "logos/slack.svelte", code: SlackLogoCode, lang: "svelte" },
	{ path: "logos/supabase.svelte", code: SupabaseLogoCode, lang: "svelte" },
	{ path: "logos/vercel.svelte", code: VercelLogoCode, lang: "svelte" },
] as const;

function createFeaturesFolderStructure(fileName: string, uiComponent: "button" | "card") {
	return `# Folder structure

I've simplified the layout to make it easier to browse.

Here is the original folder structure:

    src/lib/
    ├── components/
    │   ├── veil/
    │   │   └── features/
    │   │       └── ${fileName}
    │   └── ui/
    │       └── veil/
    │           └── ${uiComponent}/
    │               ├── ${uiComponent}.svelte
    │               └── index.ts
    └── svgs/
        ├── index.ts
        ├── clerk.svelte
        ├── firebase.svelte
        ├── linear.svelte
        ├── slack.svelte
        ├── supabase.svelte
        └── vercel.svelte
`;
}

export const all_veils_features: MistBlock[] = [
	{
		slug: "features-one",
		title: "Features One",
		category: "features",
		preview: "/preview/veil/features/features-one",
		itemId: "features-one",
		codeTree: createBlockCodeTreeFromCode(
			[
				{ path: "features-one.svelte", code: FeaturesOneCode, lang: "svelte" },
				{ path: "ui/card.svelte", code: VeilCardCode, lang: "svelte" },
				...featureLogoCodeFiles,
				{
					path: "folder-structure.md",
					code: createFeaturesFolderStructure("features-one.svelte", "card"),
					lang: "markdown",
				},
			],
			{ defaultOpen: false }
		),
		component: FeaturesOne,
	},
	{
		slug: "features-two",
		title: "Features Two",
		category: "features",
		preview: "/preview/veil/features/features-two",
		itemId: "features-two",
		codeTree: createBlockCodeTreeFromCode(
			[
				{ path: "features-two.svelte", code: FeaturesTwoCode, lang: "svelte" },
				{ path: "ui/card.svelte", code: VeilCardCode, lang: "svelte" },
				...featureLogoCodeFiles,
				{
					path: "folder-structure.md",
					code: createFeaturesFolderStructure("features-two.svelte", "card"),
					lang: "markdown",
				},
			],
			{ defaultOpen: false }
		),
		component: FeaturesTwo,
	},
	{
		slug: "features-three",
		title: "Features Three",
		category: "features",
		preview: "/preview/veil/features/features-three",
		itemId: "features-three",
		codeTree: createBlockCodeTreeFromCode(
			[
				{ path: "features-three.svelte", code: FeaturesThreeCode, lang: "svelte" },
				{ path: "ui/button.svelte", code: VeilButtonCode, lang: "svelte" },
				...featureLogoCodeFiles,
				{
					path: "folder-structure.md",
					code: createFeaturesFolderStructure("features-three.svelte", "button"),
					lang: "markdown",
				},
			],
			{ defaultOpen: false }
		),
		component: FeaturesThree,
	},
];
