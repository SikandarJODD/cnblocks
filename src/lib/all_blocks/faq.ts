import type { Block } from "../../types/blocks";
import { createBlockCodeTreeFromCode } from "#lib/tree/types.js";

import FaqOne from "#lib/components/blocks/faq/faq-one.svelte";
import FaqTwo from "#lib/components/blocks/faq/faq-two.svelte";
import FaqThree from "#lib/components/blocks/faq/faq-three.svelte";
import FaqFour from "#lib/components/blocks/faq/faq-four.svelte";
import FaqOneCode from "#lib/components/blocks/faq/faq-one.svelte?raw";
import FaqTwoCode from "#lib/components/blocks/faq/faq-two.svelte?raw";
import FaqThreeCode from "#lib/components/blocks/faq/faq-three.svelte?raw";
import FaqFourCode from "#lib/components/blocks/faq/faq-four.svelte?raw";

const FaqOneFolderStructure = `# Folder structure

Here is the original folder structure:

    src/lib/
    └── components/
        └── blocks/
            └── faq/
                └── faq-one.svelte
`;

const FaqTwoFolderStructure = `# Folder structure

Here is the original folder structure:

    src/lib/
    └── components/
        ├── blocks/
        │   └── faq/
        │       └── faq-two.svelte
        └── ui/
            └── accordion/
`;

const FaqThreeFolderStructure = `# Folder structure

Here is the original folder structure:

    src/lib/
    └── components/
        ├── blocks/
        │   └── faq/
        │       └── faq-three.svelte
        └── ui/
            └── accordion/
`;

const FaqFourFolderStructure = `# Folder structure

Here is the original folder structure:

    src/lib/
    └── components/
        ├── blocks/
        │   └── faq/
        │       └── faq-four.svelte
        └── ui/
            └── accordion/
`;

export const faq: Block[] = [
	{
		itemId: "faq-one",
		slug: "faq",
		title: "one",
		category: "faq",
		preview: "/preview/faq/one",
		codeTree: createBlockCodeTreeFromCode(
			[
				{ path: "faq-one.svelte", code: FaqOneCode, lang: "svelte" },
				{ path: "folder-structure.md", code: FaqOneFolderStructure, lang: "markdown" },
			],
			{ defaultOpen: false }
		),
		component: FaqOne,
	},
	{
		itemId: "faq-two",
		slug: "faq",
		title: "two",
		category: "faq",
		preview: "/preview/faq/two",
		codeTree: createBlockCodeTreeFromCode(
			[
				{ path: "faq-two.svelte", code: FaqTwoCode, lang: "svelte" },
				{ path: "folder-structure.md", code: FaqTwoFolderStructure, lang: "markdown" },
			],
			{ defaultOpen: false }
		),
		component: FaqTwo,
	},
	{
		itemId: "faq-three",
		slug: "faq",
		title: "three",
		category: "faq",
		preview: "/preview/faq/three",
		codeTree: createBlockCodeTreeFromCode(
			[
				{ path: "faq-three.svelte", code: FaqThreeCode, lang: "svelte" },
				{ path: "folder-structure.md", code: FaqThreeFolderStructure, lang: "markdown" },
			],
			{ defaultOpen: false }
		),
		component: FaqThree,
	},
	{
		itemId: "faq-four",
		slug: "faq",
		title: "four",
		category: "faq",
		preview: "/preview/faq/four",
		codeTree: createBlockCodeTreeFromCode(
			[
				{ path: "faq-four.svelte", code: FaqFourCode, lang: "svelte" },
				{ path: "folder-structure.md", code: FaqFourFolderStructure, lang: "markdown" },
			],
			{ defaultOpen: false }
		),
		component: FaqFour,
	},
];
