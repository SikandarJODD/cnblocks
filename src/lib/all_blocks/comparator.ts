import type { Block } from "../../types/blocks";
import { createBlockCodeTreeFromCode } from "#lib/tree/types.js";

import ComparatorOne from "#lib/components/blocks/comparator/comparator-one.svelte";
import ComparatorOneCode from "#lib/components/blocks/comparator/comparator-one.svelte?raw";

const ComparatorOneFolderStructure = `# Folder structure

Here is the original folder structure:

    src/lib/
    └── components/
        ├── blocks/
        │   └── comparator/
        │       └── comparator-one.svelte
        └── ui/
            └── button/
`;

export const comparator: Block[] = [
	{
		itemId: "comparator-one",
		slug: "comparator",
		title: "one",
		category: "comparator",
		preview: "/preview/comparator/one",
		codeTree: createBlockCodeTreeFromCode(
			[
				{ path: "comparator-one.svelte", code: ComparatorOneCode, lang: "svelte" },
				{
					path: "folder-structure.md",
					code: ComparatorOneFolderStructure,
					lang: "markdown",
				},
			],
			{ defaultOpen: false }
		),
		component: ComparatorOne,
	},
];
