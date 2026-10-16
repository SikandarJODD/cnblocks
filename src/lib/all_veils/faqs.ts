import type { MistBlock } from "#lib/types/mists.js";

import FaqsOne from "#lib/components/veil/faqs/faqs-one.svelte";
import FaqsOneCode from "#lib/components/veil/faqs/faqs-one.svelte?raw";
import FaqsTwo from "#lib/components/veil/faqs/faqs-two.svelte";
import FaqsTwoCode from "#lib/components/veil/faqs/faqs-two.svelte?raw";
import FaqsThree from "#lib/components/veil/faqs/faqs-three.svelte";
import FaqsThreeCode from "#lib/components/veil/faqs/faqs-three.svelte?raw";
import FaqsFour from "#lib/components/veil/faqs/faqs-four.svelte";
import FaqsFourCode from "#lib/components/veil/faqs/faqs-four.svelte?raw";
import AccordionContentCode from "#lib/components/ui/accordion/accordion-content.svelte?raw";
import AccordionItemCode from "#lib/components/ui/accordion/accordion-item.svelte?raw";
import AccordionTriggerCode from "#lib/components/ui/accordion/accordion-trigger.svelte?raw";
import VeilCardCode from "#lib/components/ui/veil/card/card.svelte?raw";
import { createBlockCodeTreeFromCode } from "#lib/tree/types.js";

const accordionCodeFiles = [
	{ path: "ui/accordion/accordion-content.svelte", code: AccordionContentCode, lang: "svelte" },
	{ path: "ui/accordion/accordion-item.svelte", code: AccordionItemCode, lang: "svelte" },
	{ path: "ui/accordion/accordion-trigger.svelte", code: AccordionTriggerCode, lang: "svelte" },
] as const;

function createFaqsCodeTree(fileName: string, code: string, includeCard = false) {
	const uiTree = includeCard
		? `        ├── accordion/
        │   ├── accordion-content.svelte
        │   ├── accordion-item.svelte
        │   ├── accordion-trigger.svelte
        │   └── index.ts
        └── veil/
            └── card/
                ├── card.svelte
                └── index.ts`
		: `        └── accordion/
            ├── accordion-content.svelte
            ├── accordion-item.svelte
            ├── accordion-trigger.svelte
            └── index.ts`;
	const folderStructure = `# Folder structure

I've simplified the layout to make it easier to browse.

Here is the original folder structure:

    src/lib/
    └── components/
        ├── veil/
        │   └── faqs/
        │       └── ${fileName}
        └── ui/
${uiTree}
`;

	return createBlockCodeTreeFromCode(
		[
			{ path: fileName, code, lang: "svelte" },
			...accordionCodeFiles,
			...(includeCard
				? [{ path: "ui/card.svelte", code: VeilCardCode, lang: "svelte" as const }]
				: []),
			{ path: "folder-structure.md", code: folderStructure, lang: "markdown" },
		],
		{ defaultOpen: false }
	);
}

export const all_veils_faqs: MistBlock[] = [
	{
		slug: "faqs-one",
		title: "Faqs One",
		category: "faqs",
		preview: "/preview/veil/faqs/faqs-one",
		itemId: "faqs-one",
		codeTree: createFaqsCodeTree("faqs-one.svelte", FaqsOneCode, true),
		component: FaqsOne,
	},
	{
		slug: "faqs-two",
		title: "Faqs Two",
		category: "faqs",
		preview: "/preview/veil/faqs/faqs-two",
		itemId: "faqs-two",
		codeTree: createFaqsCodeTree("faqs-two.svelte", FaqsTwoCode),
		component: FaqsTwo,
	},
	{
		slug: "faqs-three",
		title: "Faqs Three",
		category: "faqs",
		preview: "/preview/veil/faqs/faqs-three",
		itemId: "faqs-three",
		codeTree: createFaqsCodeTree("faqs-three.svelte", FaqsThreeCode),
		component: FaqsThree,
	},
	{
		slug: "faqs-four",
		title: "Faqs Four",
		category: "faqs",
		preview: "/preview/veil/faqs/faqs-four",
		itemId: "faqs-four",
		codeTree: createFaqsCodeTree("faqs-four.svelte", FaqsFourCode, true),
		component: FaqsFour,
	},
];
