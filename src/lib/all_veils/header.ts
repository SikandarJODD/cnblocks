import type { MistBlock } from "$lib/types/mists";

import HeaderOne from "$lib/components/veil/header/header-one.svelte";
import HeaderOneCode from "$lib/components/veil/header/header-one.svelte?raw";
import HeaderTwo from "$lib/components/veil/header/header-two.svelte";
import HeaderTwoCode from "$lib/components/veil/header/header-two.svelte?raw";
import HeaderThree from "$lib/components/veil/header/header-three.svelte";
import HeaderThreeCode from "$lib/components/veil/header/header-three.svelte?raw";
import HeaderFour from "$lib/components/veil/header/header-four.svelte";
import HeaderFourCode from "$lib/components/veil/header/header-four.svelte?raw";

export const all_veils_header: MistBlock[] = [
	{
		slug: "header-one",
		title: "Header One",
		category: "header",
		preview: "/preview/veil/header/header-one",
		previewMode: "iframe",
		previewHeight: 640,
		itemId: "veil-header-one",
		code: {
			code: HeaderOneCode,
			lang: "svelte",
		},
		component: HeaderOne,
	},
	{
		slug: "header-two",
		title: "Header Two",
		category: "header",
		preview: "/preview/veil/header/header-two",
		previewMode: "iframe",
		previewHeight: 640,
		itemId: "veil-header-two",
		code: {
			code: HeaderTwoCode,
			lang: "svelte",
		},
		component: HeaderTwo,
	},
	{
		slug: "header-three",
		title: "Header Three",
		category: "header",
		preview: "/preview/veil/header/header-three",
		previewMode: "iframe",
		previewHeight: 640,
		itemId: "veil-header-three",
		code: {
			code: HeaderThreeCode,
			lang: "svelte",
		},
		component: HeaderThree,
	},
	{
		slug: "header-four",
		title: "Header Four",
		category: "header",
		preview: "/preview/veil/header/header-four",
		previewMode: "iframe",
		previewHeight: 640,
		itemId: "veil-header-four",
		code: {
			code: HeaderFourCode,
			lang: "svelte",
		},
		component: HeaderFour,
	},
];
