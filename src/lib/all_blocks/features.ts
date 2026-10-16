import type { Block } from "../../types/blocks";
import { createBlockCodeTreeFromCode } from "#lib/tree/types.js";

import FeatureOne from "#lib/components/blocks/feature/feature-one.svelte";
import FeatureTwo from "#lib/components/blocks/feature/feature-two.svelte";
import FeatureThree from "#lib/components/blocks/feature/feature-three.svelte";
import FeatureFour from "#lib/components/blocks/feature/feature-four.svelte";
import FeatureFive from "#lib/components/blocks/feature/feature-five.svelte";
import FeatureSix from "#lib/components/blocks/feature/feature-six.svelte";
import FeatureSeven from "#lib/components/blocks/feature/feature-seven.svelte";
import FeatureEight from "#lib/components/blocks/feature/feature-eight.svelte";
import FeatureNine from "#lib/components/blocks/feature/feature-nine.svelte";
import FeatureTen from "#lib/components/blocks/feature/feature-ten.svelte";
import FeatureEleven from "#lib/components/blocks/feature/feature-eleven.svelte";
import FeatureTwelve from "#lib/components/blocks/feature/feature-twelve.svelte";
import FeatureThirteen from "#lib/components/blocks/feature/feature-thirteen.svelte";
import FeatureFourteen from "#lib/components/blocks/feature/feature-fourteen.svelte";

import CardDecoratorCode from "#lib/components/blocks/feature/card-decorator.svelte?raw";
import FeatureCardCode from "#lib/components/blocks/feature/feature-card.svelte?raw";
import FeatureOneCode from "#lib/components/blocks/feature/feature-one.svelte?raw";
import FeatureTwoCode from "#lib/components/blocks/feature/feature-two.svelte?raw";
import FeatureThreeCode from "#lib/components/blocks/feature/feature-three.svelte?raw";
import FeatureFourCode from "#lib/components/blocks/feature/feature-four.svelte?raw";
import FeatureFiveCode from "#lib/components/blocks/feature/feature-five.svelte?raw";
import FeatureSixCode from "#lib/components/blocks/feature/feature-six.svelte?raw";
import FeatureSevenCode from "#lib/components/blocks/feature/feature-seven.svelte?raw";
import FeatureEightCode from "#lib/components/blocks/feature/feature-eight.svelte?raw";
import FeatureNineCode from "#lib/components/blocks/feature/feature-nine.svelte?raw";
import FeatureTenCode from "#lib/components/blocks/feature/feature-ten.svelte?raw";
import FeatureElevenCode from "#lib/components/blocks/feature/feature-eleven.svelte?raw";
import FeatureTwelveCode from "#lib/components/blocks/feature/feature-twelve.svelte?raw";
import FeatureThirteenCode from "#lib/components/blocks/feature/feature-thirteen.svelte?raw";
import FeatureFourteenCode from "#lib/components/blocks/feature/feature-fourteen.svelte?raw";

const FeatureOneFolderStructure = `# Folder structure

Here is the original folder structure:

    src/lib/
    └── components/
        ├── blocks/
        │   └── feature/
        │       ├── card-decorator.svelte
        │       └── feature-one.svelte
        └── ui/
            └── card/
`;

const FeatureTwoFolderStructure = `# Folder structure

Here is the original folder structure:

    src/lib/
    └── components/
        ├── blocks/
        │   └── feature/
        │       ├── card-decorator.svelte
        │       └── feature-two.svelte
        └── ui/
            └── card/
`;

const FeatureThreeFolderStructure = `# Folder structure

Here is the original folder structure:

    src/lib/
    └── components/
        ├── blocks/
        │   └── feature/
        │       ├── card-decorator.svelte
        │       └── feature-three.svelte
        └── ui/
            └── card/
`;

const FeatureFourFolderStructure = `# Folder structure

Here is the original folder structure:

    src/lib/
    └── components/
        └── blocks/
            └── feature/
                └── feature-four.svelte
`;

const FeatureFiveFolderStructure = `# Folder structure

Here is the original folder structure:

    src/lib/
    └── components/
        └── blocks/
            └── feature/
                └── feature-five.svelte
`;

const FeatureSixFolderStructure = `# Folder structure

Here is the original folder structure:

    src/lib/
    └── components/
        └── blocks/
            └── feature/
                └── feature-six.svelte
`;

const FeatureSevenFolderStructure = `# Folder structure

Here is the original folder structure:

    src/lib/
    └── components/
        └── blocks/
            └── feature/
                └── feature-seven.svelte
`;

const FeatureEightFolderStructure = `# Folder structure

Here is the original folder structure:

    src/lib/
    └── components/
        ├── blocks/
        │   └── feature/
        │       └── feature-eight.svelte
        └── ui/
            └── card/
`;

const FeatureNineFolderStructure = `# Folder structure

Here is the original folder structure:

    src/lib/
    └── components/
        └── blocks/
            └── feature/
                └── feature-nine.svelte
`;

const FeatureTenFolderStructure = `# Folder structure

Here is the original folder structure:

    src/lib/
    └── components/
        ├── blocks/
        │   └── feature/
        │       ├── feature-card.svelte
        │       └── feature-ten.svelte
        └── ui/
            └── card/
`;

const FeatureElevenFolderStructure = `# Folder structure

Here is the original folder structure:

    src/lib/
    └── components/
        └── blocks/
            └── feature/
                └── feature-eleven.svelte
`;

const FeatureTwelveFolderStructure = `# Folder structure

Here is the original folder structure:

    src/lib/
    └── components/
        └── blocks/
            └── feature/
                └── feature-twelve.svelte
`;

const FeatureThirteenFolderStructure = `# Folder structure

Here is the original folder structure:

    src/lib/
    └── components/
        └── blocks/
            └── feature/
                └── feature-thirteen.svelte
`;

const FeatureFourteenFolderStructure = `# Folder structure

Here is the original folder structure:

    src/lib/
    └── components/
        └── blocks/
            └── feature/
                └── feature-fourteen.svelte
`;

export const feature: Block[] = [
	{
		itemId: "feature-one",
		slug: "feature",
		title: "one",
		category: "feature",
		preview: "/preview/feature/one",
		codeTree: createBlockCodeTreeFromCode(
			[
				{ path: "feature-one.svelte", code: FeatureOneCode, lang: "svelte" },
				{ path: "card-decorator.svelte", code: CardDecoratorCode, lang: "svelte" },
				{
					path: "folder-structure.md",
					code: FeatureOneFolderStructure,
					lang: "markdown",
				},
			],
			{ defaultOpen: false }
		),
		component: FeatureOne,
	},
	{
		itemId: "feature-two",
		slug: "feature",
		title: "two",
		category: "feature",
		preview: "/preview/feature/two",
		codeTree: createBlockCodeTreeFromCode(
			[
				{ path: "feature-two.svelte", code: FeatureTwoCode, lang: "svelte" },
				{ path: "card-decorator.svelte", code: CardDecoratorCode, lang: "svelte" },
				{
					path: "folder-structure.md",
					code: FeatureTwoFolderStructure,
					lang: "markdown",
				},
			],
			{ defaultOpen: false }
		),
		component: FeatureTwo,
	},
	{
		itemId: "feature-three",
		slug: "feature",
		title: "three",
		category: "feature",
		preview: "/preview/feature/three",
		codeTree: createBlockCodeTreeFromCode(
			[
				{ path: "feature-three.svelte", code: FeatureThreeCode, lang: "svelte" },
				{ path: "card-decorator.svelte", code: CardDecoratorCode, lang: "svelte" },
				{
					path: "folder-structure.md",
					code: FeatureThreeFolderStructure,
					lang: "markdown",
				},
			],
			{ defaultOpen: false }
		),
		component: FeatureThree,
	},
	{
		itemId: "feature-four",
		slug: "feature",
		title: "four",
		category: "feature",
		preview: "/preview/feature/four",
		codeTree: createBlockCodeTreeFromCode(
			[
				{ path: "feature-four.svelte", code: FeatureFourCode, lang: "svelte" },
				{
					path: "folder-structure.md",
					code: FeatureFourFolderStructure,
					lang: "markdown",
				},
			],
			{ defaultOpen: false }
		),
		component: FeatureFour,
	},
	{
		itemId: "feature-five",
		slug: "feature",
		title: "five",
		category: "feature",
		preview: "/preview/feature/five",
		codeTree: createBlockCodeTreeFromCode(
			[
				{ path: "feature-five.svelte", code: FeatureFiveCode, lang: "svelte" },
				{
					path: "folder-structure.md",
					code: FeatureFiveFolderStructure,
					lang: "markdown",
				},
			],
			{ defaultOpen: false }
		),
		component: FeatureFive,
	},
	{
		itemId: "feature-six",
		slug: "feature",
		title: "six",
		category: "feature",
		preview: "/preview/feature/six",
		codeTree: createBlockCodeTreeFromCode(
			[
				{ path: "feature-six.svelte", code: FeatureSixCode, lang: "svelte" },
				{
					path: "folder-structure.md",
					code: FeatureSixFolderStructure,
					lang: "markdown",
				},
			],
			{ defaultOpen: false }
		),
		component: FeatureSix,
	},
	{
		itemId: "feature-seven",
		slug: "feature",
		title: "seven",
		category: "feature",
		preview: "/preview/feature/seven",
		codeTree: createBlockCodeTreeFromCode(
			[
				{ path: "feature-seven.svelte", code: FeatureSevenCode, lang: "svelte" },
				{
					path: "folder-structure.md",
					code: FeatureSevenFolderStructure,
					lang: "markdown",
				},
			],
			{ defaultOpen: false }
		),
		component: FeatureSeven,
	},
	{
		itemId: "feature-eight",
		slug: "feature",
		title: "eight",
		category: "feature",
		preview: "/preview/feature/eight",
		codeTree: createBlockCodeTreeFromCode(
			[
				{ path: "feature-eight.svelte", code: FeatureEightCode, lang: "svelte" },
				{
					path: "folder-structure.md",
					code: FeatureEightFolderStructure,
					lang: "markdown",
				},
			],
			{ defaultOpen: false }
		),
		component: FeatureEight,
	},
	{
		itemId: "feature-nine",
		slug: "feature",
		title: "nine",
		category: "feature",
		preview: "/preview/feature/nine",
		codeTree: createBlockCodeTreeFromCode(
			[
				{ path: "feature-nine.svelte", code: FeatureNineCode, lang: "svelte" },
				{
					path: "folder-structure.md",
					code: FeatureNineFolderStructure,
					lang: "markdown",
				},
			],
			{ defaultOpen: false }
		),
		component: FeatureNine,
	},
	{
		itemId: "feature-ten",
		slug: "feature",
		title: "ten",
		category: "feature",
		preview: "/preview/feature/ten",
		codeTree: createBlockCodeTreeFromCode(
			[
				{ path: "feature-ten.svelte", code: FeatureTenCode, lang: "svelte" },
				{ path: "feature-card.svelte", code: FeatureCardCode, lang: "svelte" },
				{
					path: "folder-structure.md",
					code: FeatureTenFolderStructure,
					lang: "markdown",
				},
			],
			{ defaultOpen: false }
		),
		component: FeatureTen,
	},
	{
		itemId: "feature-eleven",
		slug: "feature",
		title: "eleven",
		category: "feature",
		preview: "/preview/feature/eleven",
		codeTree: createBlockCodeTreeFromCode(
			[
				{ path: "feature-eleven.svelte", code: FeatureElevenCode, lang: "svelte" },
				{
					path: "folder-structure.md",
					code: FeatureElevenFolderStructure,
					lang: "markdown",
				},
			],
			{ defaultOpen: false }
		),
		component: FeatureEleven,
	},
	{
		itemId: "feature-twelve",
		slug: "feature",
		title: "twelve",
		category: "feature",
		preview: "/preview/feature/twelve",
		codeTree: createBlockCodeTreeFromCode(
			[
				{ path: "feature-twelve.svelte", code: FeatureTwelveCode, lang: "svelte" },
				{
					path: "folder-structure.md",
					code: FeatureTwelveFolderStructure,
					lang: "markdown",
				},
			],
			{ defaultOpen: false }
		),
		component: FeatureTwelve,
	},
	{
		itemId: "feature-thirteen",
		slug: "feature",
		title: "thirteen",
		category: "feature",
		preview: "/preview/feature/thirteen",
		codeTree: createBlockCodeTreeFromCode(
			[
				{ path: "feature-thirteen.svelte", code: FeatureThirteenCode, lang: "svelte" },
				{
					path: "folder-structure.md",
					code: FeatureThirteenFolderStructure,
					lang: "markdown",
				},
			],
			{ defaultOpen: false }
		),
		component: FeatureThirteen,
	},
	{
		itemId: "feature-fourteen",
		slug: "feature",
		title: "fourteen",
		category: "feature",
		preview: "/preview/feature/fourteen",
		codeTree: createBlockCodeTreeFromCode(
			[
				{ path: "feature-fourteen.svelte", code: FeatureFourteenCode, lang: "svelte" },
				{
					path: "folder-structure.md",
					code: FeatureFourteenFolderStructure,
					lang: "markdown",
				},
			],
			{ defaultOpen: false }
		),
		component: FeatureFourteen,
	},
];
