import type { MistBlock } from "#lib/types/mists.js";
import { createBlockCodeTreeFromCode } from "#lib/tree/types.js";
import { createMistFolderStructure } from "#lib/all_mists/simple-code-tree.js";

import CallToActionOne from "#lib/components/dusk/call-to-action/one.svelte";
import CallToActionOneCode from "#lib/components/dusk/call-to-action/one.svelte?raw";
import CallToActionTwo from "#lib/components/dusk/call-to-action/two.svelte";
import CallToActionTwoCode from "#lib/components/dusk/call-to-action/two.svelte?raw";
import DuskButtonCode from "#lib/components/ui/dusk/button/button.svelte?raw";
import DuskButtonIndexCode from "#lib/components/ui/dusk/button/index.ts?raw";

const buttonCodeFiles = [
	{ path: "ui/button/button.svelte", code: DuskButtonCode, lang: "svelte" as const },
	{ path: "ui/button/index.ts", code: DuskButtonIndexCode, lang: "typescript" as const },
];

const buttonSourceFiles = [
	"components/ui/dusk/button/button.svelte",
	"components/ui/dusk/button/index.ts",
];

export const all_dusk_call_to_action: MistBlock[] = [
	{
		slug: "one",
		title: "Call To Action One",
		category: "call-to-action",
		preview: "/preview/dusk/call-to-action/one",
		previewMode: "inline",
		itemId: "call-to-action-one",
		component: CallToActionOne,
		codeTree: createBlockCodeTreeFromCode(
			[
				{ path: "call-to-action.svelte", code: CallToActionOneCode, lang: "svelte" },
				...buttonCodeFiles,
				{
					path: "folder-structure.md",
					code: createMistFolderStructure([
						"components/dusk/call-to-action/one.svelte",
						...buttonSourceFiles,
					]),
					lang: "markdown",
				},
			],
			{ defaultOpen: false }
		),
	},
	{
		slug: "two",
		title: "Call To Action Two",
		category: "call-to-action",
		preview: "/preview/dusk/call-to-action/two",
		previewMode: "inline",
		itemId: "call-to-action-two",
		component: CallToActionTwo,
		codeTree: createBlockCodeTreeFromCode(
			[
				{ path: "call-to-action.svelte", code: CallToActionTwoCode, lang: "svelte" },
				...buttonCodeFiles,
				{
					path: "folder-structure.md",
					code: createMistFolderStructure([
						"components/dusk/call-to-action/two.svelte",
						...buttonSourceFiles,
					]),
					lang: "markdown",
				},
			],
			{ defaultOpen: false }
		),
	},
];
