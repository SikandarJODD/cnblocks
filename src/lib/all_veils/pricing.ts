import type { MistBlock } from "#lib/types/mists.js";

import PricingOne from "#lib/components/veil/pricing/pricing-one.svelte";
import PricingOneCode from "#lib/components/veil/pricing/pricing-one.svelte?raw";
import PricingTwo from "#lib/components/veil/pricing/pricing-two.svelte";
import PricingTwoCode from "#lib/components/veil/pricing/pricing-two.svelte?raw";
import PricingThree from "#lib/components/veil/pricing/pricing-three.svelte";
import PricingThreeCode from "#lib/components/veil/pricing/pricing-three.svelte?raw";
import VeilButtonCode from "#lib/components/ui/veil/button/button.svelte?raw";
import VeilCardCode from "#lib/components/ui/veil/card/card.svelte?raw";
import { createBlockCodeTreeFromCode } from "#lib/tree/types.js";

function createPricingCodeTree(fileName: string, code: string) {
	const folderStructure = `# Folder structure

I've simplified the layout to make it easier to browse.

Here is the original folder structure:

    src/lib/
    └── components/
        ├── veil/
        │   └── pricing/
        │       └── ${fileName}
        └── ui/
            └── veil/
                ├── button/
                │   ├── button.svelte
                │   └── index.ts
                └── card/
                    ├── card.svelte
                    └── index.ts
`;

	return createBlockCodeTreeFromCode(
		[
			{ path: fileName, code, lang: "svelte" },
			{ path: "ui/button.svelte", code: VeilButtonCode, lang: "svelte" },
			{ path: "ui/card.svelte", code: VeilCardCode, lang: "svelte" },
			{ path: "folder-structure.md", code: folderStructure, lang: "markdown" },
		],
		{ defaultOpen: false }
	);
}

export const all_veils_pricing: MistBlock[] = [
	{
		slug: "pricing-one",
		title: "Pricing One",
		category: "pricing",
		preview: "/preview/veil/pricing/pricing-one",
		itemId: "pricing-one",
		codeTree: createPricingCodeTree("pricing-one.svelte", PricingOneCode),
		component: PricingOne,
	},
	{
		slug: "pricing-two",
		title: "Pricing Two",
		category: "pricing",
		preview: "/preview/veil/pricing/pricing-two",
		itemId: "pricing-two",
		codeTree: createPricingCodeTree("pricing-two.svelte", PricingTwoCode),
		component: PricingTwo,
	},
	{
		slug: "pricing-three",
		title: "Pricing Three",
		category: "pricing",
		preview: "/preview/veil/pricing/pricing-three",
		itemId: "pricing-three",
		codeTree: createPricingCodeTree("pricing-three.svelte", PricingThreeCode),
		component: PricingThree,
	},
];
