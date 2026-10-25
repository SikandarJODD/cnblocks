import type { MistBlock } from "#lib/types/mists.js";
import { createBlockCodeTreeFromCode } from "#lib/tree/types.js";
import { createMistFolderStructure } from "#lib/all_mists/simple-code-tree.js";

import FaqsOne from "#lib/components/dusk/faqs/one.svelte";
import FaqsOneCode from "#lib/components/dusk/faqs/one.svelte?raw";
import AccordionContentCode from "#lib/components/ui/accordion/accordion-content.svelte?raw";
import AccordionItemCode from "#lib/components/ui/accordion/accordion-item.svelte?raw";
import AccordionTriggerCode from "#lib/components/ui/accordion/accordion-trigger.svelte?raw";
import AccordionIndexCode from "#lib/components/ui/accordion/index.ts?raw";

export const all_dusk_faqs: MistBlock[] = [
	{
		slug: "one",
		title: "FAQs One",
		category: "faqs",
		preview: "/preview/dusk/faqs/one",
		previewMode: "inline",
		itemId: "faqs-one",
		component: FaqsOne,
		codeTree: createBlockCodeTreeFromCode(
			[
				{ path: "faqs.svelte", code: FaqsOneCode, lang: "svelte" },
				{
					path: "ui/accordion/accordion-content.svelte",
					code: AccordionContentCode,
					lang: "svelte",
				},
				{
					path: "ui/accordion/accordion-item.svelte",
					code: AccordionItemCode,
					lang: "svelte",
				},
				{
					path: "ui/accordion/accordion-trigger.svelte",
					code: AccordionTriggerCode,
					lang: "svelte",
				},
				{ path: "ui/accordion/index.ts", code: AccordionIndexCode, lang: "typescript" },
				{
					path: "folder-structure.md",
					code: createMistFolderStructure([
						"components/dusk/faqs/one.svelte",
						"components/ui/accordion/accordion-content.svelte",
						"components/ui/accordion/accordion-item.svelte",
						"components/ui/accordion/accordion-trigger.svelte",
						"components/ui/accordion/index.ts",
					]),
					lang: "markdown",
				},
			],
			{ defaultOpen: false }
		),
	},
];
