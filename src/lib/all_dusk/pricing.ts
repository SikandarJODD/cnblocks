import type { MistBlock } from "#lib/types/mists.js";
import { createBlockCodeTreeFromCode } from "#lib/tree/types.js";
import { createMistFolderStructure } from "#lib/all_mists/simple-code-tree.js";

import PricingOne from "#lib/components/dusk/pricing/one.svelte";
import PricingOneCode from "#lib/components/dusk/pricing/one.svelte?raw";
import PricingTwo from "#lib/components/dusk/pricing/two.svelte";
import PricingTwoCode from "#lib/components/dusk/pricing/two.svelte?raw";
import DuskButtonCode from "#lib/components/ui/dusk/button/button.svelte?raw";
import DuskButtonIndexCode from "#lib/components/ui/dusk/button/index.ts?raw";

const buttonCodeFiles = [
	{ path: "ui/button/button.svelte", code: DuskButtonCode, lang: "svelte" as const },
	{ path: "ui/button/index.ts", code: DuskButtonIndexCode, lang: "typescript" as const },
];

const buttonSourceFiles = [
	"components/ui/dusk/button/button.svelte",
	"components/ui/dusk/button/index.ts",
];

export const all_dusk_pricing: MistBlock[] = [
	{
		slug: "one",
		title: "Pricing One",
		category: "pricing",
		preview: "/preview/dusk/pricing/one",
		previewMode: "inline",
		itemId: "pricing-one",
		component: PricingOne,
		codeTree: createBlockCodeTreeFromCode(
			[
				{ path: "pricing.svelte", code: PricingOneCode, lang: "svelte" },
				...buttonCodeFiles,
				{
					path: "folder-structure.md",
					code: createMistFolderStructure([
						"components/dusk/pricing/one.svelte",
						...buttonSourceFiles,
					]),
					lang: "markdown",
				},
			],
			{ defaultOpen: false }
		),
	},
	{
		slug: "two",
		title: "Pricing Two",
		category: "pricing",
		preview: "/preview/dusk/pricing/two",
		previewMode: "inline",
		itemId: "pricing-two",
		component: PricingTwo,
		codeTree: createBlockCodeTreeFromCode(
			[
				{ path: "pricing.svelte", code: PricingTwoCode, lang: "svelte" },
				...buttonCodeFiles,
				{
					path: "folder-structure.md",
					code: createMistFolderStructure([
						"components/dusk/pricing/two.svelte",
						...buttonSourceFiles,
					]),
					lang: "markdown",
				},
			],
			{ defaultOpen: false }
		),
	},
];
