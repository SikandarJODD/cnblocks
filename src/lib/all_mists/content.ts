import type { MistBlock } from "#lib/types/mists.js";
import ContentOne from "#lib/components/mist/mcontent/one.svelte";
import ContentOneCode from "#lib/components/mist/mcontent/one.svelte?raw";
import ContentTwo from "#lib/components/mist/mcontent/two.svelte";
import ContentTwoCode from "#lib/components/mist/mcontent/two.svelte?raw";
import ContentThree from "#lib/components/mist/mcontent/three.svelte";
import ContentThreeCode from "#lib/components/mist/mcontent/three.svelte?raw";
import ContentFour from "#lib/components/mist/mcontent/four.svelte";
import ContentFourCode from "#lib/components/mist/mcontent/four.svelte?raw";
import MistButtonCode from "#lib/components/ui/mist/button/button.svelte?raw";
import { createSimpleMistCodeTreeFor } from "./simple-code-tree.js";

const createSimpleMistCodeTree = createSimpleMistCodeTreeFor("mcontent");

export const all_mists_content: MistBlock[] = [
	{
		slug: "one",
		title: "Content One",
		category: "content",
		preview: "/preview/mist/content/one",

		itemId: "content-one",
		codeTree: createSimpleMistCodeTree([
			{ path: "one.svelte", code: ContentOneCode, lang: "svelte" },
			{ path: "ui/button.svelte", code: MistButtonCode, lang: "svelte" },
		]),
		component: ContentOne,
	},
	{
		slug: "two",
		title: "Content Two",
		category: "content",
		preview: "/preview/mist/content/two",

		itemId: "content-two",
		codeTree: createSimpleMistCodeTree([
			{ path: "two.svelte", code: ContentTwoCode, lang: "svelte" },
			{ path: "ui/button.svelte", code: MistButtonCode, lang: "svelte" },
		]),
		component: ContentTwo,
	},
	{
		slug: "three",
		title: "Content Three",
		category: "content",
		preview: "/preview/mist/content/three",

		itemId: "content-three",
		codeTree: createSimpleMistCodeTree([
			{ path: "three.svelte", code: ContentThreeCode, lang: "svelte" },
		]),
		component: ContentThree,
	},
	{
		slug: "four",
		title: "Content Four",
		category: "content",
		preview: "/preview/mist/content/four",

		itemId: "content-four",
		codeTree: createSimpleMistCodeTree([
			{ path: "four.svelte", code: ContentFourCode, lang: "svelte" },
		]),
		component: ContentFour,
	},
];
