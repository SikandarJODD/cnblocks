import type { MistBlock } from "#lib/types/mists.js";
import { createBlockCodeTreeFromCode } from "#lib/tree/types.js";
import { createMistFolderStructure } from "#lib/all_mists/simple-code-tree.js";

import ContentOne from "#lib/components/dusk/content/one.svelte";
import ContentOneCode from "#lib/components/dusk/content/one.svelte?raw";
import ContentTwo from "#lib/components/dusk/content/two.svelte";
import ContentTwoCode from "#lib/components/dusk/content/two.svelte?raw";
import ContentThree from "#lib/components/dusk/content/three.svelte";
import ContentThreeCode from "#lib/components/dusk/content/three.svelte?raw";
import DuskButtonCode from "#lib/components/ui/dusk/button/button.svelte?raw";
import DuskButtonIndexCode from "#lib/components/ui/dusk/button/index.ts?raw";

export const all_dusk_content: MistBlock[] = [
	{
		slug: "one",
		title: "Content One",
		category: "content",
		preview: "/preview/dusk/content/one",
		previewMode: "inline",
		itemId: "content-one",
		component: ContentOne,
		codeTree: createBlockCodeTreeFromCode(
			[
				{ path: "content.svelte", code: ContentOneCode, lang: "svelte" },
				{ path: "ui/button/button.svelte", code: DuskButtonCode, lang: "svelte" },
				{ path: "ui/button/index.ts", code: DuskButtonIndexCode, lang: "typescript" },
				{
					path: "folder-structure.md",
					code: createMistFolderStructure([
						"components/dusk/content/one.svelte",
						"components/ui/dusk/button/button.svelte",
						"components/ui/dusk/button/index.ts",
					]),
					lang: "markdown",
				},
			],
			{ defaultOpen: false }
		),
	},
	{
		slug: "two",
		title: "Content Two",
		category: "content",
		preview: "/preview/dusk/content/two",
		previewMode: "inline",
		itemId: "content-two",
		component: ContentTwo,
		codeTree: createBlockCodeTreeFromCode(
			[
				{ path: "content.svelte", code: ContentTwoCode, lang: "svelte" },
				{
					path: "folder-structure.md",
					code: createMistFolderStructure(["components/dusk/content/two.svelte"]),
					lang: "markdown",
				},
			],
			{ defaultOpen: false }
		),
	},
	{
		slug: "three",
		title: "Content Three",
		category: "content",
		preview: "/preview/dusk/content/three",
		previewMode: "inline",
		itemId: "content-three",
		component: ContentThree,
		codeTree: createBlockCodeTreeFromCode(
			[
				{ path: "content.svelte", code: ContentThreeCode, lang: "svelte" },
				{
					path: "folder-structure.md",
					code: createMistFolderStructure(["components/dusk/content/three.svelte"]),
					lang: "markdown",
				},
			],
			{ defaultOpen: false }
		),
	},
];
