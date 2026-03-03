import type { MistBlock } from "$lib/types/mists";

import FooterOne from "$lib/components/veil/footer/footer-one.svelte";
import FooterOneCode from "$lib/components/veil/footer/footer-one.svelte?raw";
import FooterTwo from "$lib/components/veil/footer/footer-two.svelte";
import FooterTwoCode from "$lib/components/veil/footer/footer-two.svelte?raw";
import FooterThree from "$lib/components/veil/footer/footer-three.svelte";
import FooterThreeCode from "$lib/components/veil/footer/footer-three.svelte?raw";
import FooterFour from "$lib/components/veil/footer/footer-four.svelte";
import FooterFourCode from "$lib/components/veil/footer/footer-four.svelte?raw";
import FooterFive from "$lib/components/veil/footer/footer-five.svelte";
import FooterFiveCode from "$lib/components/veil/footer/footer-five.svelte?raw";
import FooterSix from "$lib/components/veil/footer/footer-six.svelte";
import FooterSixCode from "$lib/components/veil/footer/footer-six.svelte?raw";

export const all_veils_footer: MistBlock[] = [
	{
		slug: "footer-one",
		title: "Footer One",
		category: "footer",
		preview: "/preview/veil/footer/footer-one",
		itemId: "veil-footer-one",
		code: {
			code: FooterOneCode,
			lang: "svelte",
		},
		component: FooterOne,
	},
	{
		slug: "footer-two",
		title: "Footer Two",
		category: "footer",
		preview: "/preview/veil/footer/footer-two",
		itemId: "veil-footer-two",
		code: {
			code: FooterTwoCode,
			lang: "svelte",
		},
		component: FooterTwo,
	},
	{
		slug: "footer-three",
		title: "Footer Three",
		category: "footer",
		preview: "/preview/veil/footer/footer-three",
		itemId: "veil-footer-three",
		code: {
			code: FooterThreeCode,
			lang: "svelte",
		},
		component: FooterThree,
	},
	{
		slug: "footer-four",
		title: "Footer Four",
		category: "footer",
		preview: "/preview/veil/footer/footer-four",
		itemId: "veil-footer-four",
		code: {
			code: FooterFourCode,
			lang: "svelte",
		},
		component: FooterFour,
	},
	{
		slug: "footer-five",
		title: "Footer Five",
		category: "footer",
		preview: "/preview/veil/footer/footer-five",
		itemId: "veil-footer-five",
		code: {
			code: FooterFiveCode,
			lang: "svelte",
		},
		component: FooterFive,
	},
	{
		slug: "footer-six",
		title: "Footer Six",
		category: "footer",
		preview: "/preview/veil/footer/footer-six",
		itemId: "veil-footer-six",
		code: {
			code: FooterSixCode,
			lang: "svelte",
		},
		component: FooterSix,
	},
];
