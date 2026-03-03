import type { MistBlock } from "$lib/types/mists";

import HeroOne from "$lib/components/veil/hero/hero-one.svelte";
import HeroOneCode from "$lib/components/veil/hero/hero-one.svelte?raw";
import HeroTwo from "$lib/components/veil/hero/hero-two.svelte";
import HeroTwoCode from "$lib/components/veil/hero/hero-two.svelte?raw";
import HeroThree from "$lib/components/veil/hero/hero-three.svelte";
import HeroThreeCode from "$lib/components/veil/hero/hero-three.svelte?raw";
import HeroFour from "$lib/components/veil/hero/hero-four.svelte";
import HeroFourCode from "$lib/components/veil/hero/hero-four.svelte?raw";
import HeroFive from "$lib/components/veil/hero/hero-five.svelte";
import HeroFiveCode from "$lib/components/veil/hero/hero-five.svelte?raw";

export const all_veils_hero: MistBlock[] = [
	{
		slug: "hero-one",
		title: "Hero One",
		category: "hero",
		preview: "/preview/veil/hero/hero-one",
		itemId: "veil-hero-one",
		code: {
			code: HeroOneCode,
			lang: "svelte",
		},
		component: HeroOne,
	},
	{
		slug: "hero-two",
		title: "Hero Two",
		category: "hero",
		preview: "/preview/veil/hero/hero-two",
		itemId: "veil-hero-two",
		code: {
			code: HeroTwoCode,
			lang: "svelte",
		},
		component: HeroTwo,
	},
	{
		slug: "hero-three",
		title: "Hero Three",
		category: "hero",
		preview: "/preview/veil/hero/hero-three",
		itemId: "veil-hero-three",
		code: {
			code: HeroThreeCode,
			lang: "svelte",
		},
		component: HeroThree,
	},
	{
		slug: "hero-four",
		title: "Hero Four",
		category: "hero",
		preview: "/preview/veil/hero/hero-four",
		itemId: "veil-hero-four",
		code: {
			code: HeroFourCode,
			lang: "svelte",
		},
		component: HeroFour,
	},
	{
		slug: "hero-five",
		title: "Hero Five",
		category: "hero",
		preview: "/preview/veil/hero/hero-five",
		itemId: "veil-hero-five",
		code: {
			code: HeroFiveCode,
			lang: "svelte",
		},
		component: HeroFive,
	},
];
