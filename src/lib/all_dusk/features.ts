import type { MistBlock } from "#lib/types/mists.js";
import { createBlockCodeTreeFromCode } from "#lib/tree/types.js";
import { createMistFolderStructure } from "#lib/all_mists/simple-code-tree.js";

import FeaturesOne from "#lib/components/dusk/features/one.svelte";
import FeaturesOneCode from "#lib/components/dusk/features/one.svelte?raw";

import FeaturesTwo from "#lib/components/dusk/features/two.svelte";
import FeaturesTwoCode from "#lib/components/dusk/features/two.svelte?raw";

import FeaturesThree from "#lib/components/dusk/features/three.svelte";
import FeaturesThreeCode from "#lib/components/dusk/features/three.svelte?raw";

import FeaturesFour from "#lib/components/dusk/features/four.svelte";
import FeaturesFourCode from "#lib/components/dusk/features/four.svelte?raw";

import FeaturesFive from "#lib/components/dusk/features/five.svelte";
import FeaturesFiveCode from "#lib/components/dusk/features/five.svelte?raw";

import FeaturesSix from "#lib/components/dusk/features/six.svelte";
import FeaturesSixCode from "#lib/components/dusk/features/six.svelte?raw";

import FeaturesSeven from "#lib/components/dusk/features/seven.svelte";
import FeaturesSevenCode from "#lib/components/dusk/features/seven.svelte?raw";

import DuskButtonCode from "#lib/components/ui/dusk/button/button.svelte?raw";
import DuskButtonIndexCode from "#lib/components/ui/dusk/button/index.ts?raw";
import DuskCardActionCode from "#lib/components/ui/dusk/card/card-action.svelte?raw";
import DuskCardContentCode from "#lib/components/ui/dusk/card/card-content.svelte?raw";
import DuskCardDescriptionCode from "#lib/components/ui/dusk/card/card-description.svelte?raw";
import DuskCardFooterCode from "#lib/components/ui/dusk/card/card-footer.svelte?raw";
import DuskCardHeaderCode from "#lib/components/ui/dusk/card/card-header.svelte?raw";
import DuskCardTitleCode from "#lib/components/ui/dusk/card/card-title.svelte?raw";
import DuskCardCode from "#lib/components/ui/dusk/card/card.svelte?raw";
import DuskCardIndexCode from "#lib/components/ui/dusk/card/index.ts?raw";

const buttonCodeFiles = [
	{ path: "ui/button/button.svelte", code: DuskButtonCode, lang: "svelte" as const },
	{ path: "ui/button/index.ts", code: DuskButtonIndexCode, lang: "typescript" as const },
];

const buttonSourceFiles = [
	"components/ui/dusk/button/button.svelte",
	"components/ui/dusk/button/index.ts",
];

const cardCodeFiles = [
	{ path: "ui/card/card.svelte", code: DuskCardCode, lang: "svelte" as const },
	{ path: "ui/card/card-action.svelte", code: DuskCardActionCode, lang: "svelte" as const },
	{ path: "ui/card/card-content.svelte", code: DuskCardContentCode, lang: "svelte" as const },
	{
		path: "ui/card/card-description.svelte",
		code: DuskCardDescriptionCode,
		lang: "svelte" as const,
	},
	{ path: "ui/card/card-footer.svelte", code: DuskCardFooterCode, lang: "svelte" as const },
	{ path: "ui/card/card-header.svelte", code: DuskCardHeaderCode, lang: "svelte" as const },
	{ path: "ui/card/card-title.svelte", code: DuskCardTitleCode, lang: "svelte" as const },
	{ path: "ui/card/index.ts", code: DuskCardIndexCode, lang: "typescript" as const },
];

const cardSourceFiles = [
	"components/ui/dusk/card/card.svelte",
	"components/ui/dusk/card/card-action.svelte",
	"components/ui/dusk/card/card-content.svelte",
	"components/ui/dusk/card/card-description.svelte",
	"components/ui/dusk/card/card-footer.svelte",
	"components/ui/dusk/card/card-header.svelte",
	"components/ui/dusk/card/card-title.svelte",
	"components/ui/dusk/card/index.ts",
];

export const all_dusk_features: MistBlock[] = [
	{
		slug: "one",
		title: "Features One",
		category: "features",
		preview: "/preview/dusk/features/one",
		previewMode: "inline",
		itemId: "features-one",
		component: FeaturesOne,
		codeTree: createBlockCodeTreeFromCode(
			[
				{ path: "features.svelte", code: FeaturesOneCode, lang: "svelte" },
				...cardCodeFiles,
				{
					path: "folder-structure.md",
					code: createMistFolderStructure([
						"components/dusk/features/one.svelte",
						...cardSourceFiles,
					]),
					lang: "markdown",
				},
			],
			{ defaultOpen: false }
		),
	},
	{
		slug: "two",
		title: "Features Two",
		category: "features",
		preview: "/preview/dusk/features/two",
		previewMode: "inline",
		itemId: "features-two",
		component: FeaturesTwo,
		codeTree: createBlockCodeTreeFromCode(
			[
				{ path: "features.svelte", code: FeaturesTwoCode, lang: "svelte" },
				...cardCodeFiles,
				{
					path: "folder-structure.md",
					code: createMistFolderStructure([
						"components/dusk/features/two.svelte",
						...cardSourceFiles,
					]),
					lang: "markdown",
				},
			],
			{ defaultOpen: false }
		),
	},
	{
		slug: "three",
		title: "Features Three",
		category: "features",
		preview: "/preview/dusk/features/three",
		previewMode: "inline",
		itemId: "features-three",
		component: FeaturesThree,
		codeTree: createBlockCodeTreeFromCode(
			[
				{ path: "features.svelte", code: FeaturesThreeCode, lang: "svelte" },
				...buttonCodeFiles,
				...cardCodeFiles,
				{
					path: "folder-structure.md",
					code: createMistFolderStructure([
						"components/dusk/features/three.svelte",
						...buttonSourceFiles,
						...cardSourceFiles,
					]),
					lang: "markdown",
				},
			],
			{ defaultOpen: false }
		),
	},
	{
		slug: "four",
		title: "Features Four",
		category: "features",
		preview: "/preview/dusk/features/four",
		previewMode: "inline",
		itemId: "features-four",
		component: FeaturesFour,
		codeTree: createBlockCodeTreeFromCode(
			[
				{ path: "features.svelte", code: FeaturesFourCode, lang: "svelte" },
				...cardCodeFiles,
				{
					path: "folder-structure.md",
					code: createMistFolderStructure([
						"components/dusk/features/four.svelte",
						...cardSourceFiles,
					]),
					lang: "markdown",
				},
			],
			{ defaultOpen: false }
		),
	},
	{
		slug: "five",
		title: "Features Five",
		category: "features",
		preview: "/preview/dusk/features/five",
		previewMode: "inline",
		itemId: "features-five",
		component: FeaturesFive,
		codeTree: createBlockCodeTreeFromCode(
			[
				{ path: "features.svelte", code: FeaturesFiveCode, lang: "svelte" },
				...buttonCodeFiles,
				{
					path: "folder-structure.md",
					code: createMistFolderStructure([
						"components/dusk/features/five.svelte",
						...buttonSourceFiles,
					]),
					lang: "markdown",
				},
			],
			{ defaultOpen: false }
		),
	},
	{
		slug: "six",
		title: "Features Six",
		category: "features",
		preview: "/preview/dusk/features/six",
		previewMode: "inline",
		itemId: "features-six",
		component: FeaturesSix,
		codeTree: createBlockCodeTreeFromCode(
			[
				{ path: "features.svelte", code: FeaturesSixCode, lang: "svelte" },
				{
					path: "folder-structure.md",
					code: createMistFolderStructure(["components/dusk/features/six.svelte"]),
					lang: "markdown",
				},
			],
			{ defaultOpen: false }
		),
	},
	{
		slug: "seven",
		title: "Features Seven",
		category: "features",
		preview: "/preview/dusk/features/seven",
		previewMode: "inline",
		itemId: "features-seven",
		component: FeaturesSeven,
		codeTree: createBlockCodeTreeFromCode(
			[
				{ path: "features.svelte", code: FeaturesSevenCode, lang: "svelte" },
				{
					path: "folder-structure.md",
					code: createMistFolderStructure(["components/dusk/features/seven.svelte"]),
					lang: "markdown",
				},
			],
			{ defaultOpen: false }
		),
	},
];
