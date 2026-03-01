import type { MistBlock } from "$lib/types/mists";

import PricingOne from "$lib/components/veil/pricing/pricing-one.svelte";
import PricingOneCode from "$lib/components/veil/pricing/pricing-one.svelte?raw";
import PricingTwo from "$lib/components/veil/pricing/pricing-two.svelte";
import PricingTwoCode from "$lib/components/veil/pricing/pricing-two.svelte?raw";
import PricingThree from "$lib/components/veil/pricing/pricing-three.svelte";
import PricingThreeCode from "$lib/components/veil/pricing/pricing-three.svelte?raw";

export const all_veils_pricing: MistBlock[] = [
	{
		slug: "pricing-one",
		title: "Pricing One",
		category: "pricing",
		preview: "/preview/veil/pricing/pricing-one",
		itemId: "veil-pricing-one",
		code: {
			code: PricingOneCode,
			lang: "svelte",
		},
		component: PricingOne,
	},
	{
		slug: "pricing-two",
		title: "Pricing Two",
		category: "pricing",
		preview: "/preview/veil/pricing/pricing-two",
		itemId: "veil-pricing-two",
		code: {
			code: PricingTwoCode,
			lang: "svelte",
		},
		component: PricingTwo,
	},
	{
		slug: "pricing-three",
		title: "Pricing Three",
		category: "pricing",
		preview: "/preview/veil/pricing/pricing-three",
		itemId: "veil-pricing-three",
		code: {
			code: PricingThreeCode,
			lang: "svelte",
		},
		component: PricingThree,
	},
];
