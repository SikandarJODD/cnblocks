import type { Block } from "../../types/blocks";
import { createBlockCodeTreeFromCode } from "#lib/tree/types.js";

import CtaOne from "#lib/components/blocks/cta/cta-one.svelte";
import CtaTwo from "#lib/components/blocks/cta/cta-two.svelte";
import CtaThree from "#lib/components/blocks/cta/cta-three.svelte";
import CtaOneCode from "#lib/components/blocks/cta/cta-one.svelte?raw";
import CtaTwoCode from "#lib/components/blocks/cta/cta-two.svelte?raw";
import CtaThreeCode from "#lib/components/blocks/cta/cta-three.svelte?raw";

const CtaOneFolderStructure = `# Folder structure

Here is the original folder structure:

    src/lib/
    └── components/
        ├── blocks/
        │   └── cta/
        │       └── cta-one.svelte
        └── ui/
            └── button/
`;

const CtaTwoFolderStructure = `# Folder structure

Here is the original folder structure:

    src/lib/
    └── components/
        ├── blocks/
        │   └── cta/
        │       └── cta-two.svelte
        └── ui/
            └── button/
`;

const CtaThreeFolderStructure = `# Folder structure

Here is the original folder structure:

    src/lib/
    └── components/
        ├── blocks/
        │   └── cta/
        │       └── cta-three.svelte
        └── ui/
            └── button/
`;

export const cta: Block[] = [
	{
		itemId: "cta-one",
		slug: "cta",
		title: "one",
		category: "cta",
		preview: "/preview/cta/one",
		codeTree: createBlockCodeTreeFromCode(
			[
				{ path: "cta-one.svelte", code: CtaOneCode, lang: "svelte" },
				{ path: "folder-structure.md", code: CtaOneFolderStructure, lang: "markdown" },
			],
			{ defaultOpen: false }
		),
		component: CtaOne,
	},
	{
		itemId: "cta-two",
		slug: "cta",
		title: "two",
		category: "cta",
		preview: "/preview/cta/two",
		codeTree: createBlockCodeTreeFromCode(
			[
				{ path: "cta-two.svelte", code: CtaTwoCode, lang: "svelte" },
				{ path: "folder-structure.md", code: CtaTwoFolderStructure, lang: "markdown" },
			],
			{ defaultOpen: false }
		),
		component: CtaTwo,
	},
	{
		itemId: "cta-three",
		slug: "cta",
		title: "three",
		category: "cta",
		preview: "/preview/cta/three",
		codeTree: createBlockCodeTreeFromCode(
			[
				{ path: "cta-three.svelte", code: CtaThreeCode, lang: "svelte" },
				{ path: "folder-structure.md", code: CtaThreeFolderStructure, lang: "markdown" },
			],
			{ defaultOpen: false }
		),
		component: CtaThree,
	},
];
