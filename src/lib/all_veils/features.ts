import type { MistBlock } from "$lib/types/mists";

import FeaturesOne from "$lib/components/veil/features/features-one.svelte";
import FeaturesOneCode from "$lib/components/veil/features/features-one.svelte?raw";
import FeaturesTwo from "$lib/components/veil/features/features-two.svelte";
import FeaturesTwoCode from "$lib/components/veil/features/features-two.svelte?raw";
import FeaturesThree from "$lib/components/veil/features/features-three.svelte";
import FeaturesThreeCode from "$lib/components/veil/features/features-three.svelte?raw";

export const all_veils_features: MistBlock[] = [
  {
    slug: "features-one",
    title: "Features One",
    category: "features",
    preview: "/preview/veil/features/features-one",
    itemId: "veil-features-one",
    code: {
      code: FeaturesOneCode,
      lang: "svelte",
    },
    component: FeaturesOne,
  },
  {
    slug: "features-two",
    title: "Features Two",
    category: "features",
    preview: "/preview/veil/features/features-two",
    itemId: "veil-features-two",
    code: {
      code: FeaturesTwoCode,
      lang: "svelte",
    },
    component: FeaturesTwo,
  },
  {
    slug: "features-three",
    title: "Features Three",
    category: "features",
    preview: "/preview/veil/features/features-three",
    itemId: "veil-features-three",
    code: {
      code: FeaturesThreeCode,
      lang: "svelte",
    },
    component: FeaturesThree,
  },
];
