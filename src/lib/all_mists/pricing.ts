import type { MistBlock } from '$lib/types/mists';
import PricingOne from '$lib/components/mist/pricing/pricing-one.svelte';
import PricingTwo from '$lib/components/mist/pricing/pricing-two.svelte';

const pricingOneCode = await import('$lib/components/mist/pricing/pricing-one.svelte?raw');
const pricingTwoCode = await import('$lib/components/mist/pricing/pricing-two.svelte?raw');

export const all_mists_pricing: MistBlock[] = [
  {
    slug: "one",
    title: "Pricing One",
    category: "pricing",
    preview: "/preview/mist/pricing/one",
    code: {
      code: pricingOneCode.default,
      lang: 'svelte'
    },
    component: PricingOne
  },
  {
    slug: 'two',
    title: 'Pricing Two',
    category: 'pricing',
    preview: '/preview/mist/pricing/two',
    code: {
      code: pricingTwoCode.default,
      lang: 'svelte'
    },
    component: PricingTwo
  }
];
