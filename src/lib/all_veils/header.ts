import type { MistBlock } from "#lib/types/mists.js";

import HeaderOne from "#lib/components/veil/header/header-one.svelte";
import HeaderOneCode from "#lib/components/veil/header/header-one.svelte?raw";
import HeaderTwo from "#lib/components/veil/header/header-two.svelte";
import HeaderTwoCode from "#lib/components/veil/header/header-two.svelte?raw";
import HeaderThree from "#lib/components/veil/header/header-three.svelte";
import HeaderThreeCode from "#lib/components/veil/header/header-three.svelte?raw";
import HeaderFour from "#lib/components/veil/header/header-four.svelte";
import HeaderFourCode from "#lib/components/veil/header/header-four.svelte?raw";
import VeilButtonCode from "#lib/components/ui/veil/button/button.svelte?raw";
import LogoCode from "#lib/components/web/Logo.svelte?raw";
import { createBlockCodeTreeFromCode } from "#lib/tree/types.js";

const HeaderOneFolderStructure = `# Folder structure

I've simplified the layout to make it easier to browse.

Here is the original folder structure:

    src/lib/
    └── components/
        ├── veil/
        │   └── header/
        │       └── header-one.svelte
        ├── ui/
        │   └── veil/
        │       └── button/
        │           ├── button.svelte
        │           └── index.ts
        └── web/
            └── Logo.svelte
`;

const HeaderTwoFolderStructure = `# Folder structure

I've simplified the layout to make it easier to browse.

Here is the original folder structure:

    src/lib/
    └── components/
        ├── veil/
        │   └── header/
        │       └── header-two.svelte
        ├── ui/
        │   └── veil/
        │       └── button/
        │           ├── button.svelte
        │           └── index.ts
        └── web/
            └── Logo.svelte
`;

const HeaderThreeFolderStructure = `# Folder structure

I've simplified the layout to make it easier to browse.

Here is the original folder structure:

    src/lib/
    └── components/
        ├── veil/
        │   └── header/
        │       └── header-three.svelte
        ├── ui/
        │   └── veil/
        │       └── button/
        │           ├── button.svelte
        │           └── index.ts
        └── web/
            └── Logo.svelte
`;

const HeaderFourFolderStructure = `# Folder structure

I've simplified the layout to make it easier to browse.

Here is the original folder structure:

    src/lib/
    └── components/
        ├── veil/
        │   └── header/
        │       └── header-four.svelte
        ├── ui/
        │   └── veil/
        │       └── button/
        │           ├── button.svelte
        │           └── index.ts
        └── web/
            └── Logo.svelte
`;

export const all_veils_header: MistBlock[] = [
	{
		slug: "header-one",
		title: "Header One",
		category: "header",
		preview: "/preview/veil/header/header-one",
		previewMode: "inline",
		itemId: "header-one",
		codeTree: createBlockCodeTreeFromCode(
			[
				{ path: "header-one.svelte", code: HeaderOneCode, lang: "svelte" },
				{
					path: "Logo.svelte",
					code: LogoCode,
					lang: "svelte",
				},
				{
					path: "ui/button.svelte",
					code: VeilButtonCode,
					lang: "svelte",
				},
				{
					path: "folder-structure.md",
					code: HeaderOneFolderStructure,
					lang: "markdown",
				},
			],
			{ defaultOpen: false }
		),
		component: HeaderOne,
	},
	{
		slug: "header-two",
		title: "Header Two",
		category: "header",
		preview: "/preview/veil/header/header-two",
		previewMode: "inline",
		itemId: "header-two",
		codeTree: createBlockCodeTreeFromCode(
			[
				{ path: "header-two.svelte", code: HeaderTwoCode, lang: "svelte" },
				{
					path: "Logo.svelte",
					code: LogoCode,
					lang: "svelte",
				},
				{
					path: "ui/button.svelte",
					code: VeilButtonCode,
					lang: "svelte",
				},
				{
					path: "folder-structure.md",
					code: HeaderTwoFolderStructure,
					lang: "markdown",
				},
			],
			{ defaultOpen: false }
		),
		component: HeaderTwo,
	},
	{
		slug: "header-three",
		title: "Header Three",
		category: "header",
		preview: "/preview/veil/header/header-three",
		previewMode: "inline",
		itemId: "header-three",
		codeTree: createBlockCodeTreeFromCode(
			[
				{ path: "header-three.svelte", code: HeaderThreeCode, lang: "svelte" },
				{
					path: "Logo.svelte",
					code: LogoCode,
					lang: "svelte",
				},
				{
					path: "ui/button.svelte",
					code: VeilButtonCode,
					lang: "svelte",
				},
				{
					path: "folder-structure.md",
					code: HeaderThreeFolderStructure,
					lang: "markdown",
				},
			],
			{ defaultOpen: false }
		),
		component: HeaderThree,
	},
	{
		slug: "header-four",
		title: "Header Four",
		category: "header",
		preview: "/preview/veil/header/header-four",
		previewMode: "inline",
		itemId: "header-four",
		codeTree: createBlockCodeTreeFromCode(
			[
				{ path: "header-four.svelte", code: HeaderFourCode, lang: "svelte" },
				{
					path: "Logo.svelte",
					code: LogoCode,
					lang: "svelte",
				},
				{
					path: "ui/button.svelte",
					code: VeilButtonCode,
					lang: "svelte",
				},
				{
					path: "folder-structure.md",
					code: HeaderFourFolderStructure,
					lang: "markdown",
				},
			],
			{ defaultOpen: false }
		),
		component: HeaderFour,
	},
];
