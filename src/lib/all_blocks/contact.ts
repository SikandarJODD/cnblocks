import type { Block } from "../../types/blocks";
import { createBlockCodeTreeFromCode } from "#lib/tree/types.js";

import ContactOne from "#lib/components/blocks/contact/contact-one.svelte";
import ContactTwo from "#lib/components/blocks/contact/contact-two.svelte";
import ContactOneCode from "#lib/components/blocks/contact/contact-one.svelte?raw";
import ContactTwoCode from "#lib/components/blocks/contact/contact-two.svelte?raw";

const ContactOneFolderStructure = `# Folder structure

Here is the original folder structure:

    src/lib/
    └── components/
        ├── blocks/
        │   └── contact/
        │       └── contact-one.svelte
        └── ui/
            ├── button/
            ├── card/
            ├── input/
            ├── label/
            ├── select/
            └── textarea/
`;

const ContactTwoFolderStructure = `# Folder structure

Here is the original folder structure:

    src/lib/
    └── components/
        ├── blocks/
        │   └── contact/
        │       └── contact-two.svelte
        └── ui/
            ├── button/
            ├── card/
            ├── input/
            ├── label/
            ├── select/
            └── textarea/
`;

export const contact: Block[] = [
	{
		itemId: "contact-one",
		slug: "contact",
		title: "one",
		category: "contact",
		preview: "/preview/contact/one",
		codeTree: createBlockCodeTreeFromCode(
			[
				{ path: "contact-one.svelte", code: ContactOneCode, lang: "svelte" },
				{ path: "folder-structure.md", code: ContactOneFolderStructure, lang: "markdown" },
			],
			{ defaultOpen: false }
		),
		component: ContactOne,
	},
	{
		itemId: "contact-two",
		slug: "contact",
		title: "two",
		category: "contact",
		preview: "/preview/contact/two",
		codeTree: createBlockCodeTreeFromCode(
			[
				{ path: "contact-two.svelte", code: ContactTwoCode, lang: "svelte" },
				{ path: "folder-structure.md", code: ContactTwoFolderStructure, lang: "markdown" },
			],
			{ defaultOpen: false }
		),
		component: ContactTwo,
	},
];
