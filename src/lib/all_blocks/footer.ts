import type { Block } from "../../types/blocks";
import { createBlockCodeTreeFromCode } from "#lib/tree/types.js";

import FooterOne from "#lib/components/blocks/footer/footer-one.svelte";
import FooterTwo from "#lib/components/blocks/footer/footer-two.svelte";
import FooterThree from "#lib/components/blocks/footer/footer-three.svelte";
import FooterFour from "#lib/components/blocks/footer/footer-four.svelte";
import FooterFive from "#lib/components/blocks/footer/footer-five.svelte";
import FooterOneCode from "#lib/components/blocks/footer/footer-one.svelte?raw";
import FooterTwoCode from "#lib/components/blocks/footer/footer-two.svelte?raw";
import FooterThreeCode from "#lib/components/blocks/footer/footer-three.svelte?raw";
import FooterFourCode from "#lib/components/blocks/footer/footer-four.svelte?raw";
import FooterFiveCode from "#lib/components/blocks/footer/footer-five.svelte?raw";

const FooterOneFolderStructure = `# Folder structure

Here is the original folder structure:

    src/lib/
    └── components/
        └── blocks/
            └── footer/
                └── footer-one.svelte
`;

const FooterTwoFolderStructure = `# Folder structure

Here is the original folder structure:

    src/lib/
    └── components/
        └── blocks/
            └── footer/
                └── footer-two.svelte
`;

const FooterThreeFolderStructure = `# Folder structure

Here is the original folder structure:

    src/lib/
    └── components/
        ├── blocks/
        │   └── footer/
        │       └── footer-three.svelte
        └── ui/
            ├── button/
            ├── input/
            └── label/
`;

const FooterFourFolderStructure = `# Folder structure

Here is the original folder structure:

    src/lib/
    └── components/
        └── blocks/
            └── footer/
                └── footer-four.svelte
`;

const FooterFiveFolderStructure = `# Folder structure

Here is the original folder structure:

    src/lib/
    └── components/
        ├── blocks/
        │   └── footer/
        │       └── footer-five.svelte
        └── ui/
            ├── button/
            ├── input/
            └── label/
`;

export const footer: Block[] = [
	{
		itemId: "footer-one",
		slug: "footer",
		title: "one",
		category: "footer",
		preview: "/preview/footer/one",
		codeTree: createBlockCodeTreeFromCode(
			[
				{ path: "footer-one.svelte", code: FooterOneCode, lang: "svelte" },
				{ path: "folder-structure.md", code: FooterOneFolderStructure, lang: "markdown" },
			],
			{ defaultOpen: false }
		),
		component: FooterOne,
	},
	{
		itemId: "footer-two",
		slug: "footer",
		title: "two",
		category: "footer",
		preview: "/preview/footer/two",
		codeTree: createBlockCodeTreeFromCode(
			[
				{ path: "footer-two.svelte", code: FooterTwoCode, lang: "svelte" },
				{ path: "folder-structure.md", code: FooterTwoFolderStructure, lang: "markdown" },
			],
			{ defaultOpen: false }
		),
		component: FooterTwo,
	},
	{
		itemId: "footer-three",
		slug: "footer",
		title: "three",
		category: "footer",
		preview: "/preview/footer/three",
		codeTree: createBlockCodeTreeFromCode(
			[
				{ path: "footer-three.svelte", code: FooterThreeCode, lang: "svelte" },
				{ path: "folder-structure.md", code: FooterThreeFolderStructure, lang: "markdown" },
			],
			{ defaultOpen: false }
		),
		component: FooterThree,
	},
	{
		itemId: "footer-four",
		slug: "footer",
		title: "four",
		category: "footer",
		preview: "/preview/footer/four",
		codeTree: createBlockCodeTreeFromCode(
			[
				{ path: "footer-four.svelte", code: FooterFourCode, lang: "svelte" },
				{ path: "folder-structure.md", code: FooterFourFolderStructure, lang: "markdown" },
			],
			{ defaultOpen: false }
		),
		component: FooterFour,
	},
	{
		itemId: "footer-five",
		slug: "footer",
		title: "five",
		category: "footer",
		preview: "/preview/footer/five",
		codeTree: createBlockCodeTreeFromCode(
			[
				{ path: "footer-five.svelte", code: FooterFiveCode, lang: "svelte" },
				{ path: "folder-structure.md", code: FooterFiveFolderStructure, lang: "markdown" },
			],
			{ defaultOpen: false }
		),
		component: FooterFive,
	},
];
