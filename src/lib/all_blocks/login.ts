import type { Block } from "../../types/blocks";
import { createBlockCodeTreeFromCode } from "#lib/tree/types.js";

import LoginOne from "#lib/components/blocks/login/login-one.svelte";
import LoginTwo from "#lib/components/blocks/login/login-two.svelte";
import LoginThree from "#lib/components/blocks/login/login-three.svelte";
import LoginOneCode from "#lib/components/blocks/login/login-one.svelte?raw";
import LoginTwoCode from "#lib/components/blocks/login/login-two.svelte?raw";
import LoginThreeCode from "#lib/components/blocks/login/login-three.svelte?raw";

const LoginOneFolderStructure = `# Folder structure

Here is the original folder structure:

    src/lib/
    └── components/
        ├── blocks/
        │   └── login/
        │       └── login-one.svelte
        └── ui/
            ├── button/
            ├── input/
            └── label/
`;

const LoginTwoFolderStructure = `# Folder structure

Here is the original folder structure:

    src/lib/
    └── components/
        ├── blocks/
        │   └── login/
        │       └── login-two.svelte
        └── ui/
            ├── button/
            ├── input/
            └── label/
`;

const LoginThreeFolderStructure = `# Folder structure

Here is the original folder structure:

    src/lib/
    └── components/
        ├── blocks/
        │   └── login/
        │       └── login-three.svelte
        └── ui/
            ├── button/
            ├── input/
            └── label/
`;

export const login: Block[] = [
	{
		itemId: "login-one",
		slug: "login",
		title: "one",
		category: "login",
		preview: "/preview/login/one",
		codeTree: createBlockCodeTreeFromCode(
			[
				{ path: "login-one.svelte", code: LoginOneCode, lang: "svelte" },
				{ path: "folder-structure.md", code: LoginOneFolderStructure, lang: "markdown" },
			],
			{ defaultOpen: false }
		),
		component: LoginOne,
	},
	{
		itemId: "login-two",
		slug: "login",
		title: "two",
		category: "login",
		preview: "/preview/login/two",
		codeTree: createBlockCodeTreeFromCode(
			[
				{ path: "login-two.svelte", code: LoginTwoCode, lang: "svelte" },
				{ path: "folder-structure.md", code: LoginTwoFolderStructure, lang: "markdown" },
			],
			{ defaultOpen: false }
		),
		component: LoginTwo,
	},
	{
		itemId: "login-three",
		slug: "login",
		title: "three",
		category: "login",
		preview: "/preview/login/three",
		codeTree: createBlockCodeTreeFromCode(
			[
				{ path: "login-three.svelte", code: LoginThreeCode, lang: "svelte" },
				{ path: "folder-structure.md", code: LoginThreeFolderStructure, lang: "markdown" },
			],
			{ defaultOpen: false }
		),
		component: LoginThree,
	},
];
