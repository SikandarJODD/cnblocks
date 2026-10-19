import type { MistBlock } from "#lib/types/mists.js";

import ContentOne from "#lib/components/veil/content/content-one.svelte";
import ContentOneCode from "#lib/components/veil/content/content-one.svelte?raw";
import ContentTwo from "#lib/components/veil/content/content-two.svelte";
import ContentTwoCode from "#lib/components/veil/content/content-two.svelte?raw";
import ContentThree from "#lib/components/veil/content/content-three.svelte";
import ContentThreeCode from "#lib/components/veil/content/content-three.svelte?raw";
import { createBlockCodeTreeFromCode } from "#lib/tree/types.js";

function createContentFolderStructure(fileName: string) {
	return `# Folder structure

I've simplified the layout to make it easier to browse.

Here is the original folder structure:

    src/lib/
    └── components/
        └── veil/
            └── content/
                └── ${fileName}
`;
}

export const all_veils_content: MistBlock[] = [
	{
		slug: "content-one",
		title: "Content One",
		category: "content",
		preview: "/preview/veil/content/content-one",
		itemId: "content-one",
		codeTree: createBlockCodeTreeFromCode(
			[
				{ path: "content-one.svelte", code: ContentOneCode, lang: "svelte" },
				{
					path: "folder-structure.md",
					code: createContentFolderStructure("content-one.svelte"),
					lang: "markdown",
				},
			],
			{ defaultOpen: false }
		),
		component: ContentOne,
	},
	{
		slug: "content-two",
		title: "Content Two",
		category: "content",
		preview: "/preview/veil/content/content-two",
		itemId: "content-two",
		codeTree: createBlockCodeTreeFromCode(
			[
				{ path: "content-two.svelte", code: ContentTwoCode, lang: "svelte" },
				{
					path: "folder-structure.md",
					code: createContentFolderStructure("content-two.svelte"),
					lang: "markdown",
				},
			],
			{ defaultOpen: false }
		),
		component: ContentTwo,
	},
	{
		slug: "content-three",
		title: "Content Three",
		category: "content",
		preview: "/preview/veil/content/content-three",
		itemId: "content-three",
		codeTree: createBlockCodeTreeFromCode(
			[
				{ path: "content-three.svelte", code: ContentThreeCode, lang: "svelte" },
				{
					path: "folder-structure.md",
					code: createContentFolderStructure("content-three.svelte"),
					lang: "markdown",
				},
			],
			{ defaultOpen: false }
		),
		component: ContentThree,
	},
];
