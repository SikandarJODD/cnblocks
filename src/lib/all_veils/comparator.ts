import type { MistBlock } from "#lib/types/mists.js";

import ComparatorOne from "#lib/components/veil/comparator/comparator-one.svelte";
import ComparatorOneCode from "#lib/components/veil/comparator/comparator-one.svelte?raw";
import ComparatorTwo from "#lib/components/veil/comparator/comparator-two.svelte";
import ComparatorTwoCode from "#lib/components/veil/comparator/comparator-two.svelte?raw";
import ComparatorThree from "#lib/components/veil/comparator/comparator-three.svelte";
import ComparatorThreeCode from "#lib/components/veil/comparator/comparator-three.svelte?raw";
import VeilButtonCode from "#lib/components/ui/veil/button/button.svelte?raw";
import VeilCardCode from "#lib/components/ui/veil/card/card.svelte?raw";
import { createBlockCodeTreeFromCode } from "#lib/tree/types.js";

function createComparatorCodeTree(fileName: string, code: string) {
	const folderStructure = `# Folder structure

I've simplified the layout to make it easier to browse.

Here is the original folder structure:

    src/lib/
    └── components/
        ├── veil/
        │   └── comparator/
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

export const all_veils_comparator: MistBlock[] = [
	{
		slug: "comparator-one",
		title: "Comparator One",
		category: "comparator",
		preview: "/preview/veil/comparator/comparator-one",
		itemId: "comparator-one",
		codeTree: createComparatorCodeTree("comparator-one.svelte", ComparatorOneCode),
		component: ComparatorOne,
	},
	{
		slug: "comparator-two",
		title: "Comparator Two",
		category: "comparator",
		preview: "/preview/veil/comparator/comparator-two",
		itemId: "comparator-two",
		codeTree: createComparatorCodeTree("comparator-two.svelte", ComparatorTwoCode),
		component: ComparatorTwo,
	},
	{
		slug: "comparator-three",
		title: "Comparator Three",
		category: "comparator",
		preview: "/preview/veil/comparator/comparator-three",
		itemId: "comparator-three",
		codeTree: createComparatorCodeTree("comparator-three.svelte", ComparatorThreeCode),
		component: ComparatorThree,
	},
];
