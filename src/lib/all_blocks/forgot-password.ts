import type { Block } from "../../types/blocks";
import { createBlockCodeTreeFromCode } from "#lib/tree/types.js";

import ForgotPasswordOne from "#lib/components/blocks/forgot-password/forgot-password-one.svelte";
import ForgotPasswordTwo from "#lib/components/blocks/forgot-password/forgot-password-two.svelte";
import ForgotPasswordOneCode from "#lib/components/blocks/forgot-password/forgot-password-one.svelte?raw";
import ForgotPasswordTwoCode from "#lib/components/blocks/forgot-password/forgot-password-two.svelte?raw";

const ForgotPasswordOneFolderStructure = `# Folder structure

Here is the original folder structure:

    src/lib/
    └── components/
        ├── blocks/
        │   └── forgot-password/
        │       └── forgot-password-one.svelte
        └── ui/
            ├── button/
            ├── input/
            └── label/
`;

const ForgotPasswordTwoFolderStructure = `# Folder structure

Here is the original folder structure:

    src/lib/
    └── components/
        ├── blocks/
        │   └── forgot-password/
        │       └── forgot-password-two.svelte
        └── ui/
            ├── button/
            ├── input/
            └── label/
`;

export const forgot_password: Block[] = [
	{
		itemId: "forgot-password-one",
		slug: "forgot-password",
		title: "one",
		category: "forgot-password",
		preview: "/preview/forgot-password/one",
		codeTree: createBlockCodeTreeFromCode(
			[
				{
					path: "forgot-password-one.svelte",
					code: ForgotPasswordOneCode,
					lang: "svelte",
				},
				{
					path: "folder-structure.md",
					code: ForgotPasswordOneFolderStructure,
					lang: "markdown",
				},
			],
			{ defaultOpen: false }
		),
		component: ForgotPasswordOne,
	},
	{
		itemId: "forgot-password-two",
		slug: "forgot-password",
		title: "two",
		category: "forgot-password",
		preview: "/preview/forgot-password/two",
		codeTree: createBlockCodeTreeFromCode(
			[
				{
					path: "forgot-password-two.svelte",
					code: ForgotPasswordTwoCode,
					lang: "svelte",
				},
				{
					path: "folder-structure.md",
					code: ForgotPasswordTwoFolderStructure,
					lang: "markdown",
				},
			],
			{ defaultOpen: false }
		),
		component: ForgotPasswordTwo,
	},
];
