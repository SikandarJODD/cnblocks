import type { Block } from "../../types/blocks";
import { createBlockCodeTreeFromCode } from "#lib/tree/types.js";

import ContentOne from "#lib/components/blocks/content/content-one.svelte";
import ContentTwo from "#lib/components/blocks/content/content-two.svelte";
import ContentThree from "#lib/components/blocks/content/content-three.svelte";
import ContentFour from "#lib/components/blocks/content/content-four.svelte";
import ContentFive from "#lib/components/blocks/content/content-five.svelte";
import ContentSix from "#lib/components/blocks/content/content-six.svelte";
import ContentSeven from "#lib/components/blocks/content/content-seven.svelte";

import ContentOneCode from "#lib/components/blocks/content/content-one.svelte?raw";
import ContentTwoCode from "#lib/components/blocks/content/content-two.svelte?raw";
import ContentThreeCode from "#lib/components/blocks/content/content-three.svelte?raw";
import ContentFourCode from "#lib/components/blocks/content/content-four.svelte?raw";
import ContentFiveCode from "#lib/components/blocks/content/content-five.svelte?raw";
import ContentSixCode from "#lib/components/blocks/content/content-six.svelte?raw";
import ContentSevenCode from "#lib/components/blocks/content/content-seven.svelte?raw";

const ContentOneFolderStructure = `# Folder structure

Here is the original folder structure:

    src/lib/
    └── components/
        └── blocks/
            └── content/
                └── content-one.svelte
`;

const ContentTwoFolderStructure = `# Folder structure

Here is the original folder structure:

    src/lib/
    └── components/
        └── blocks/
            └── content/
                └── content-two.svelte
`;

const ContentThreeFolderStructure = `# Folder structure

Here is the original folder structure:

    src/lib/
    └── components/
        ├── blocks/
        │   └── content/
        │       └── content-three.svelte
        └── ui/
            └── button/
`;

const ContentFourFolderStructure = `# Folder structure

Here is the original folder structure:

    src/lib/
    └── components/
        ├── blocks/
        │   └── content/
        │       └── content-four.svelte
        └── ui/
            └── button/
`;

const ContentFiveFolderStructure = `# Folder structure

Here is the original folder structure:

    src/lib/
    └── components/
        └── blocks/
            └── content/
                └── content-five.svelte
`;

const ContentSixFolderStructure = `# Folder structure

Here is the original folder structure:

    src/lib/
    └── components/
        └── blocks/
            └── content/
                └── content-six.svelte
`;

const ContentSevenFolderStructure = `# Folder structure

Here is the original folder structure:

    src/lib/
    └── components/
        └── blocks/
            └── content/
                └── content-seven.svelte
`;

export const content: Block[] = [
	{
		itemId: "content-one",
		slug: "content",
		title: "one",
		category: "content",
		preview: "/preview/content/one",
		codeTree: createBlockCodeTreeFromCode(
			[
				{ path: "content-one.svelte", code: ContentOneCode, lang: "svelte" },
				{
					path: "folder-structure.md",
					code: ContentOneFolderStructure,
					lang: "markdown",
				},
			],
			{ defaultOpen: false }
		),
		component: ContentOne,
	},
	{
		itemId: "content-two",
		slug: "content",
		title: "two",
		category: "content",
		preview: "/preview/content/two",
		codeTree: createBlockCodeTreeFromCode(
			[
				{ path: "content-two.svelte", code: ContentTwoCode, lang: "svelte" },
				{
					path: "folder-structure.md",
					code: ContentTwoFolderStructure,
					lang: "markdown",
				},
			],
			{ defaultOpen: false }
		),
		component: ContentTwo,
	},
	{
		itemId: "content-three",
		slug: "content",
		title: "three",
		category: "content",
		preview: "/preview/content/three",
		codeTree: createBlockCodeTreeFromCode(
			[
				{ path: "content-three.svelte", code: ContentThreeCode, lang: "svelte" },
				{
					path: "folder-structure.md",
					code: ContentThreeFolderStructure,
					lang: "markdown",
				},
			],
			{ defaultOpen: false }
		),
		component: ContentThree,
	},
	{
		itemId: "content-four",
		slug: "content",
		title: "four",
		category: "content",
		preview: "/preview/content/four",
		codeTree: createBlockCodeTreeFromCode(
			[
				{ path: "content-four.svelte", code: ContentFourCode, lang: "svelte" },
				{
					path: "folder-structure.md",
					code: ContentFourFolderStructure,
					lang: "markdown",
				},
			],
			{ defaultOpen: false }
		),
		component: ContentFour,
	},
	{
		itemId: "content-five",
		slug: "content",
		title: "five",
		category: "content",
		preview: "/preview/content/five",
		codeTree: createBlockCodeTreeFromCode(
			[
				{ path: "content-five.svelte", code: ContentFiveCode, lang: "svelte" },
				{
					path: "folder-structure.md",
					code: ContentFiveFolderStructure,
					lang: "markdown",
				},
			],
			{ defaultOpen: false }
		),
		component: ContentFive,
	},
	{
		itemId: "content-six",
		slug: "content",
		title: "six",
		category: "content",
		preview: "/preview/content/six",
		codeTree: createBlockCodeTreeFromCode(
			[
				{ path: "content-six.svelte", code: ContentSixCode, lang: "svelte" },
				{
					path: "folder-structure.md",
					code: ContentSixFolderStructure,
					lang: "markdown",
				},
			],
			{ defaultOpen: false }
		),
		component: ContentSix,
	},
	{
		itemId: "content-seven",
		slug: "content",
		title: "seven",
		category: "content",
		preview: "/preview/content/seven",
		codeTree: createBlockCodeTreeFromCode(
			[
				{ path: "content-seven.svelte", code: ContentSevenCode, lang: "svelte" },
				{
					path: "folder-structure.md",
					code: ContentSevenFolderStructure,
					lang: "markdown",
				},
			],
			{ defaultOpen: false }
		),
		component: ContentSeven,
	},
];
