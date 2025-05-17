import type { MistBlock } from '$lib/types/mists';
import PricingOne from '$lib/components/mist/pricing/pricing-one.svelte';
import PricingTwo from '$lib/components/mist/pricing/pricing-two.svelte';

import PricingOneCode from "$lib/components/mist/pricing/pricing-one.svelte?raw";
import PricingTwoCode from "$lib/components/mist/pricing/pricing-two.svelte?raw";

export const all_mists_pricing: MistBlock[] = [
  {
    slug: "one",
    title: "Pricing One",
    category: "pricing",
    preview: "/preview/mist/pricing/one",
    code: {
      code: PricingOneCode,
      lang: "svelte",
    },
    component: PricingOne,
  },
  {
    slug: 'two',
    title: 'Pricing Two',
    category: 'pricing',
    preview: '/preview/mist/pricing/two',
    code: {
      code: PricingTwoCode,
      lang: "svelte",
    },
    component: PricingTwo,
  },
];
