import type { MistBlock } from "#lib/types/mists.js";
import ComparatorOne from "#lib/components/mist/mcomparator/one.svelte";
import ComparatorOneCode from "#lib/components/mist/mcomparator/one.svelte?raw";
import MistButtonCode from "#lib/components/ui/mist/button/button.svelte?raw";
import { createSimpleMistCodeTreeFor } from "./simple-code-tree.js";

const createSimpleMistCodeTree = createSimpleMistCodeTreeFor("mcomparator");

export const all_mists_comparator: MistBlock[] = [
	{
		slug: "one",
		title: "Basic Comparison Table",
		category: "comparator",
		preview: "/preview/mist/comparator/one",

		itemId: "comparator-one",
		codeTree: createSimpleMistCodeTree([
			{ path: "one.svelte", code: ComparatorOneCode, lang: "svelte" },
			{ path: "ui/button.svelte", code: MistButtonCode, lang: "svelte" },
		]),
		component: ComparatorOne,
	},
];
