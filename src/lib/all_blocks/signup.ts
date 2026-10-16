import type { Block } from "../../types/blocks";
import { createBlockCodeTreeFromCode } from "#lib/tree/types.js";

import SignupOne from "#lib/components/blocks/signup/signup-one.svelte";
import SignupTwo from "#lib/components/blocks/signup/signup-two.svelte";
import SignupThree from "#lib/components/blocks/signup/signup-three.svelte";
import SignupOneCode from "#lib/components/blocks/signup/signup-one.svelte?raw";
import SignupTwoCode from "#lib/components/blocks/signup/signup-two.svelte?raw";
import SignupThreeCode from "#lib/components/blocks/signup/signup-three.svelte?raw";

const SignupOneFolderStructure = `# Folder structure

Here is the original folder structure:

    src/lib/
    └── components/
        ├── blocks/
        │   └── signup/
        │       └── signup-one.svelte
        └── ui/
            ├── button/
            ├── input/
            └── label/
`;

const SignupTwoFolderStructure = `# Folder structure

Here is the original folder structure:

    src/lib/
    └── components/
        ├── blocks/
        │   └── signup/
        │       └── signup-two.svelte
        └── ui/
            ├── button/
            ├── input/
            └── label/
`;

const SignupThreeFolderStructure = `# Folder structure

Here is the original folder structure:

    src/lib/
    └── components/
        ├── blocks/
        │   └── signup/
        │       └── signup-three.svelte
        └── ui/
            ├── button/
            ├── input/
            └── label/
`;

export const signup: Block[] = [
	{
		itemId: "signup-one",
		slug: "signup",
		title: "one",
		category: "signup",
		preview: "/preview/signup/one",
		codeTree: createBlockCodeTreeFromCode(
			[
				{ path: "signup-one.svelte", code: SignupOneCode, lang: "svelte" },
				{ path: "folder-structure.md", code: SignupOneFolderStructure, lang: "markdown" },
			],
			{ defaultOpen: false }
		),
		component: SignupOne,
	},
	{
		itemId: "signup-two",
		slug: "signup",
		title: "two",
		category: "signup",
		preview: "/preview/signup/two",
		codeTree: createBlockCodeTreeFromCode(
			[
				{ path: "signup-two.svelte", code: SignupTwoCode, lang: "svelte" },
				{ path: "folder-structure.md", code: SignupTwoFolderStructure, lang: "markdown" },
			],
			{ defaultOpen: false }
		),
		component: SignupTwo,
	},
	{
		itemId: "signup-three",
		slug: "signup",
		title: "three",
		category: "signup",
		preview: "/preview/signup/three",
		codeTree: createBlockCodeTreeFromCode(
			[
				{ path: "signup-three.svelte", code: SignupThreeCode, lang: "svelte" },
				{ path: "folder-structure.md", code: SignupThreeFolderStructure, lang: "markdown" },
			],
			{ defaultOpen: false }
		),
		component: SignupThree,
	},
];
