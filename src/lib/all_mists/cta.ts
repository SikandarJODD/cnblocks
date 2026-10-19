import type { MistBlock } from "#lib/types/mists.js";
import CtaOne from "#lib/components/mist/mcta/one.svelte";
import CtaOneCode from "#lib/components/mist/mcta/one.svelte?raw";
import CtaTwo from "#lib/components/mist/mcta/two.svelte";
import CtaTwoCode from "#lib/components/mist/mcta/two.svelte?raw";
import CtaThree from "#lib/components/mist/mcta/three.svelte";
import CtaThreeCode from "#lib/components/mist/mcta/three.svelte?raw";
import MistButtonCode from "#lib/components/ui/mist/button/button.svelte?raw";
import { createSimpleMistCodeTreeFor } from "./simple-code-tree.js";

const createSimpleMistCodeTree = createSimpleMistCodeTreeFor("mcta");

export const all_mists_cta: MistBlock[] = [
	{
		slug: "one",
		title: "CTA One",
		category: "cta",
		preview: "/preview/mist/cta/one",

		itemId: "cta-one",
		codeTree: createSimpleMistCodeTree([
			{ path: "one.svelte", code: CtaOneCode, lang: "svelte" },
			{ path: "ui/button.svelte", code: MistButtonCode, lang: "svelte" },
		]),
		component: CtaOne,
	},
	{
		slug: "two",
		title: "CTA Two",
		category: "cta",
		preview: "/preview/mist/cta/two",

		itemId: "cta-two",
		codeTree: createSimpleMistCodeTree([
			{ path: "two.svelte", code: CtaTwoCode, lang: "svelte" },
			{ path: "ui/button.svelte", code: MistButtonCode, lang: "svelte" },
		]),
		component: CtaTwo,
	},
	{
		slug: "three",
		title: "CTA Three",
		category: "cta",
		preview: "/preview/mist/cta/three",

		itemId: "cta-three",
		codeTree: createSimpleMistCodeTree([
			{ path: "three.svelte", code: CtaThreeCode, lang: "svelte" },
			{ path: "ui/button.svelte", code: MistButtonCode, lang: "svelte" },
		]),
		component: CtaThree,
	},
];
