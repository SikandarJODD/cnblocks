import type { MistBlock } from "#lib/types/mists.js";

import ContactOne from "#lib/components/veil/contact/contact-one.svelte";
import ContactOneCode from "#lib/components/veil/contact/contact-one.svelte?raw";
import ContactTwo from "#lib/components/veil/contact/contact-two.svelte";
import ContactTwoCode from "#lib/components/veil/contact/contact-two.svelte?raw";
import VeilButtonCode from "#lib/components/ui/veil/button/button.svelte?raw";
import VeilCardCode from "#lib/components/ui/veil/card/card.svelte?raw";
import VeilInputCode from "#lib/components/ui/veil/input/input.svelte?raw";
import LabelCode from "#lib/components/ui/label/label.svelte?raw";
import VeilTextareaCode from "#lib/components/ui/veil/textarea/textarea.svelte?raw";
import SelectContentCode from "#lib/components/ui/select/select-content.svelte?raw";
import SelectGroupHeadingCode from "#lib/components/ui/select/select-group-heading.svelte?raw";
import SelectItemCode from "#lib/components/ui/select/select-item.svelte?raw";
import SelectScrollDownButtonCode from "#lib/components/ui/select/select-scroll-down-button.svelte?raw";
import SelectScrollUpButtonCode from "#lib/components/ui/select/select-scroll-up-button.svelte?raw";
import SelectSeparatorCode from "#lib/components/ui/select/select-separator.svelte?raw";
import SelectTriggerCode from "#lib/components/ui/select/select-trigger.svelte?raw";
import { createBlockCodeTreeFromCode } from "#lib/tree/types.js";

const contactUiCodeFiles = [
	{ path: "ui/button.svelte", code: VeilButtonCode, lang: "svelte" },
	{ path: "ui/card.svelte", code: VeilCardCode, lang: "svelte" },
	{ path: "ui/input.svelte", code: VeilInputCode, lang: "svelte" },
	{ path: "ui/label.svelte", code: LabelCode, lang: "svelte" },
	{ path: "ui/textarea.svelte", code: VeilTextareaCode, lang: "svelte" },
] as const;

const selectCodeFiles = [
	{ path: "ui/select/select-content.svelte", code: SelectContentCode, lang: "svelte" },
	{
		path: "ui/select/select-group-heading.svelte",
		code: SelectGroupHeadingCode,
		lang: "svelte",
	},
	{ path: "ui/select/select-item.svelte", code: SelectItemCode, lang: "svelte" },
	{
		path: "ui/select/select-scroll-down-button.svelte",
		code: SelectScrollDownButtonCode,
		lang: "svelte",
	},
	{
		path: "ui/select/select-scroll-up-button.svelte",
		code: SelectScrollUpButtonCode,
		lang: "svelte",
	},
	{ path: "ui/select/select-separator.svelte", code: SelectSeparatorCode, lang: "svelte" },
	{ path: "ui/select/select-trigger.svelte", code: SelectTriggerCode, lang: "svelte" },
] as const;

function createContactFolderStructure(fileName: string, includeSelect = false) {
	const selectTree = includeSelect
		? `        │   ├── select/
        │   │   ├── index.ts
        │   │   ├── select-content.svelte
        │   │   ├── select-group-heading.svelte
        │   │   ├── select-item.svelte
        │   │   ├── select-scroll-down-button.svelte
        │   │   ├── select-scroll-up-button.svelte
        │   │   ├── select-separator.svelte
        │   │   └── select-trigger.svelte
`
		: "";

	return `# Folder structure

I've simplified the layout to make it easier to browse.

Here is the original folder structure:

    src/lib/
    └── components/
        ├── veil/
        │   └── contact/
        │       └── ${fileName}
        └── ui/
${selectTree}        │   ├── label/
        │   │   ├── index.ts
        │   │   └── label.svelte
        │   └── veil/
        │       ├── button/
        │       │   ├── button.svelte
        │       │   └── index.ts
        │       ├── card/
        │       │   ├── card.svelte
        │       │   └── index.ts
        │       ├── input/
        │       │   ├── index.ts
        │       │   └── input.svelte
        │       └── textarea/
        │           ├── index.ts
        │           └── textarea.svelte
`;
}

function createContactCodeTree(fileName: string, code: string, includeSelect = false) {
	return createBlockCodeTreeFromCode(
		[
			{ path: fileName, code, lang: "svelte" },
			...contactUiCodeFiles,
			...(includeSelect ? selectCodeFiles : []),
			{
				path: "folder-structure.md",
				code: createContactFolderStructure(fileName, includeSelect),
				lang: "markdown",
			},
		],
		{ defaultOpen: false }
	);
}

export const all_veils_contact: MistBlock[] = [
	{
		slug: "contact-one",
		title: "Contact One",
		category: "contact",
		preview: "/preview/veil/contact/contact-one",
		itemId: "contact-one",
		codeTree: createContactCodeTree("contact-one.svelte", ContactOneCode),
		component: ContactOne,
	},
	{
		slug: "contact-two",
		title: "Contact Two",
		category: "contact",
		preview: "/preview/veil/contact/contact-two",
		itemId: "contact-two",
		codeTree: createContactCodeTree("contact-two.svelte", ContactTwoCode, true),
		component: ContactTwo,
	},
];
