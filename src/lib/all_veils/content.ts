import type { MistBlock } from "$lib/types/mists";

import ContentOne from "$lib/components/veil/content/content-one.svelte";
import ContentOneCode from "$lib/components/veil/content/content-one.svelte?raw";
import ContentTwo from "$lib/components/veil/content/content-two.svelte";
import ContentTwoCode from "$lib/components/veil/content/content-two.svelte?raw";
import ContentThree from "$lib/components/veil/content/content-three.svelte";
import ContentThreeCode from "$lib/components/veil/content/content-three.svelte?raw";

export const all_veils_content: MistBlock[] = [
	{
		slug: "content-one",
		title: "Content One",
		category: "content",
		preview: "/preview/veil/content/content-one",
		itemId: "content-one",
		code: {
			code: ContentOneCode,
			lang: "svelte",
		},
		component: ContentOne,
	},
	{
		slug: "content-two",
		title: "Content Two",
		category: "content",
		preview: "/preview/veil/content/content-two",
		itemId: "content-two",
		code: {
			code: ContentTwoCode,
			lang: "svelte",
		},
		component: ContentTwo,
	},
	{
		slug: "content-three",
		title: "Content Three",
		category: "content",
		preview: "/preview/veil/content/content-three",
		itemId: "content-three",
		code: {
			code: ContentThreeCode,
			lang: "svelte",
		},
		component: ContentThree,
	},
];
