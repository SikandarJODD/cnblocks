import type { MistBlock } from "#lib/types/mists.js";

import CallToActionOne from "#lib/components/veil/call-to-action/call-to-action-one.svelte";
import CallToActionOneCode from "#lib/components/veil/call-to-action/call-to-action-one.svelte?raw";
import CallToActionTwo from "#lib/components/veil/call-to-action/call-to-action-two.svelte";
import CallToActionTwoCode from "#lib/components/veil/call-to-action/call-to-action-two.svelte?raw";
import CallToActionThree from "#lib/components/veil/call-to-action/call-to-action-three.svelte";
import CallToActionThreeCode from "#lib/components/veil/call-to-action/call-to-action-three.svelte?raw";
import CallToActionFour from "#lib/components/veil/call-to-action/call-to-action-four.svelte";
import CallToActionFourCode from "#lib/components/veil/call-to-action/call-to-action-four.svelte?raw";
import VeilButtonCode from "#lib/components/ui/veil/button/button.svelte?raw";
import VeilCardCode from "#lib/components/ui/veil/card/card.svelte?raw";
import { createBlockCodeTreeFromCode } from "#lib/tree/types.js";

function createCallToActionCodeTree(fileName: string, code: string, includeCard = false) {
	const uiTree = includeCard
		? `                ├── button/
                │   ├── button.svelte
                │   └── index.ts
                └── card/
                    ├── card.svelte
                    └── index.ts`
		: `                └── button/
                    ├── button.svelte
                    └── index.ts`;

	const folderStructure = `# Folder structure

I've simplified the layout to make it easier to browse.

Here is the original folder structure:

    src/lib/
    └── components/
        ├── veil/
        │   └── call-to-action/
        │       └── ${fileName}
        └── ui/
            └── veil/
${uiTree}
`;

	return createBlockCodeTreeFromCode(
		[
			{ path: fileName, code, lang: "svelte" },
			{ path: "ui/button.svelte", code: VeilButtonCode, lang: "svelte" },
			...(includeCard
				? [{ path: "ui/card.svelte", code: VeilCardCode, lang: "svelte" as const }]
				: []),
			{ path: "folder-structure.md", code: folderStructure, lang: "markdown" },
		],
		{ defaultOpen: false }
	);
}

export const all_veils_call_to_action: MistBlock[] = [
	{
		slug: "call-to-action-one",
		title: "Call To Action One",
		category: "call-to-action",
		preview: "/preview/veil/call-to-action/call-to-action-one",
		itemId: "call-to-action-one",
		codeTree: createCallToActionCodeTree("call-to-action-one.svelte", CallToActionOneCode),
		component: CallToActionOne,
	},
	{
		slug: "call-to-action-two",
		title: "Call To Action Two",
		category: "call-to-action",
		preview: "/preview/veil/call-to-action/call-to-action-two",
		itemId: "call-to-action-two",
		codeTree: createCallToActionCodeTree(
			"call-to-action-two.svelte",
			CallToActionTwoCode,
			true
		),
		component: CallToActionTwo,
	},
	{
		slug: "call-to-action-three",
		title: "Call To Action Three",
		category: "call-to-action",
		preview: "/preview/veil/call-to-action/call-to-action-three",
		itemId: "call-to-action-three",
		codeTree: createCallToActionCodeTree(
			"call-to-action-three.svelte",
			CallToActionThreeCode
		),
		component: CallToActionThree,
	},
	{
		slug: "call-to-action-four",
		title: "Call To Action Four",
		category: "call-to-action",
		preview: "/preview/veil/call-to-action/call-to-action-four",
		itemId: "call-to-action-four",
		codeTree: createCallToActionCodeTree(
			"call-to-action-four.svelte",
			CallToActionFourCode,
			true
		),
		component: CallToActionFour,
	},
];
