import FeatureOne from "#lib/components/mist/mfeature/one.svelte";
import FeatureOneCode from "#lib/components/mist/mfeature/one.svelte?raw";
import FeatureTable from "#lib/components/mist/mfeature/feature-table.svelte?raw";

import FeatureTwo from "#lib/components/mist/mfeature/two.svelte";
import FeatureTwoCode from "#lib/components/mist/mfeature/two.svelte?raw";

import FeatureThree from "#lib/components/mist/mfeature/three.svelte";
import FeatureThreeCode from "#lib/components/mist/mfeature/three.svelte?raw";

import FeatureFour from "#lib/components/mist/mfeature/four.svelte";
import FeatureFourCode from "#lib/components/mist/mfeature/four.svelte?raw";

import FeatureFive from "#lib/components/mist/mfeature/five.svelte";
import FeatureFiveCode from "#lib/components/mist/mfeature/five.svelte?raw";

import FeatureSix from "#lib/components/mist/mfeature/six.svelte";
import FeatureSixCode from "#lib/components/mist/mfeature/six.svelte?raw";

import FeatureSeven from "#lib/components/mist/mfeature/seven.svelte";
import FeatureSevenCode from "#lib/components/mist/mfeature/seven.svelte?raw";

import FeatureEight from "#lib/components/mist/mfeature/eight.svelte";
import FeatureEightCode from "#lib/components/mist/mfeature/eight.svelte?raw";

import FeatureNine from "#lib/components/mist/mfeature/nine.svelte";
import FeatureNineCode from "#lib/components/mist/mfeature/nine.svelte?raw";

import FeatureTen from "#lib/components/mist/mfeature/ten.svelte";
import FeatureTenCode from "#lib/components/mist/mfeature/ten.svelte?raw";

import FeatureEleven from "#lib/components/mist/mfeature/eleven.svelte";
import FeatureElevenCode from "#lib/components/mist/mfeature/eleven.svelte?raw";

import CardCode from "#lib/components/ui/mist/card/card.svelte?raw";
import ButtonCode from "#lib/components/ui/mist/button/button.svelte?raw";

import type { MistBlock } from "#lib/types/mists.js";
import { createSimpleMistCodeTreeFor } from "./simple-code-tree.js";

const createSimpleMistCodeTree = createSimpleMistCodeTreeFor("mfeature");

export const all_mists_features: MistBlock[] = [
	{
		slug: "one",
		title: "Feature One",
		category: "feature",
		preview: "/preview/mist/feature/one",

		itemId: "feature-one",
		component: FeatureOne,
		codeTree: createSimpleMistCodeTree([
			{ path: "feature.svelte", folderName: "one.svelte", code: FeatureOneCode, lang: "svelte" },
			{ path: "feature-table.svelte", code: FeatureTable, lang: "svelte" },
			{ path: "ui/card.svelte", code: CardCode, lang: "svelte", highlight: [10] },
		]),
	},
	{
		slug: "two",
		title: "Feature Two",
		category: "feature",
		preview: "/preview/mist/feature/two",

		itemId: "feature-two",
		component: FeatureTwo,
		codeTree: createSimpleMistCodeTree([
			{ path: "feature.svelte", folderName: "two.svelte", code: FeatureTwoCode, lang: "svelte" },
			{ path: "ui/card.svelte", code: CardCode, lang: "svelte", highlight: [10] },
		]),
	},
	{
		slug: "three",
		title: "Feature Three",
		category: "feature",
		preview: "/preview/mist/feature/three",

		itemId: "feature-three",
		component: FeatureThree,
		codeTree: createSimpleMistCodeTree([
			{ path: "feature.svelte", folderName: "three.svelte", code: FeatureThreeCode, lang: "svelte" },
			{ path: "ui/card.svelte", code: CardCode, lang: "svelte", highlight: [10] },
			{ path: "ui/button.svelte", code: ButtonCode, lang: "svelte" },
		]),
	},
	{
		slug: "four",
		title: "Feature Four",
		category: "feature",
		preview: "/preview/mist/feature/four",

		itemId: "feature-four",
		component: FeatureFour,
		codeTree: createSimpleMistCodeTree([
			{ path: "feature.svelte", folderName: "four.svelte", code: FeatureFourCode, lang: "svelte" },
			{ path: "ui/card.svelte", code: CardCode, lang: "svelte", highlight: [10] },
			{ path: "ui/button.svelte", code: ButtonCode, lang: "svelte" },
		]),
	},
	{
		slug: "five",
		title: "Feature Five",
		category: "feature",
		preview: "/preview/mist/feature/five",

		itemId: "feature-five",
		component: FeatureFive,
		codeTree: createSimpleMistCodeTree([
			{ path: "feature.svelte", folderName: "five.svelte", code: FeatureFiveCode, lang: "svelte" },
			{ path: "ui/button.svelte", code: ButtonCode, lang: "svelte" },
		]),
	},
	{
		slug: "six",
		title: "Feature Six",
		category: "feature",
		preview: "/preview/mist/feature/six",

		itemId: "feature-six",
		component: FeatureSix,
		codeTree: createSimpleMistCodeTree([
			{ path: "feature.svelte", folderName: "six.svelte", code: FeatureSixCode, lang: "svelte" },
			{ path: "ui/card.svelte", code: CardCode, lang: "svelte", highlight: [10] },
			{ path: "ui/button.svelte", code: ButtonCode, lang: "svelte" },
		]),
	},
	{
		slug: "seven",
		title: "Feature Seven",
		category: "feature",
		preview: "/preview/mist/feature/seven",

		itemId: "feature-seven",
		component: FeatureSeven,
		codeTree: createSimpleMistCodeTree([
			{ path: "feature.svelte", folderName: "seven.svelte", code: FeatureSevenCode, lang: "svelte" },
			{ path: "ui/card.svelte", code: CardCode, lang: "svelte", highlight: [10] },
			{ path: "ui/button.svelte", code: ButtonCode, lang: "svelte" },
		]),
	},
	{
		slug: "eight",
		title: "Feature Eight",
		category: "feature",
		preview: "/preview/mist/feature/eight",

		itemId: "feature-eight",
		component: FeatureEight,
		codeTree: createSimpleMistCodeTree([
			{ path: "feature.svelte", folderName: "eight.svelte", code: FeatureEightCode, lang: "svelte" },
			{ path: "ui/card.svelte", code: CardCode, lang: "svelte", highlight: [10] },
		]),
	},
	{
		slug: "nine",
		title: "Feature Nine",
		category: "feature",
		preview: "/preview/mist/feature/nine",

		itemId: "feature-nine",
		component: FeatureNine,
		codeTree: createSimpleMistCodeTree([
			{ path: "feature.svelte", folderName: "nine.svelte", code: FeatureNineCode, lang: "svelte" },
			{ path: "ui/card.svelte", code: CardCode, lang: "svelte", highlight: [10] },
			{ path: "ui/button.svelte", code: ButtonCode, lang: "svelte" },
		]),
	},
	{
		slug: "ten",
		title: "Feature Ten",
		category: "feature",
		preview: "/preview/mist/feature/ten",

		itemId: "feature-ten",
		component: FeatureTen,
		codeTree: createSimpleMistCodeTree([
			{ path: "feature.svelte", folderName: "ten.svelte", code: FeatureTenCode, lang: "svelte" },
			{ path: "ui/card.svelte", code: CardCode, lang: "svelte", highlight: [10] },
			{ path: "ui/button.svelte", code: ButtonCode, lang: "svelte" },
		]),
	},
	{
		slug: "eleven",
		title: "Feature Eleven",
		category: "feature",
		preview: "/preview/mist/feature/eleven",

		itemId: "feature-eleven",
		component: FeatureEleven,
		codeTree: createSimpleMistCodeTree([
			{
				path: "feature.svelte",
				folderName: "eleven.svelte",
				code: FeatureElevenCode,
				lang: "svelte",
			},
			{ path: "ui/card.svelte", code: CardCode, lang: "svelte", highlight: [10] },
			{ path: "ui/button.svelte", code: ButtonCode, lang: "svelte" },
		]),
	},
];
