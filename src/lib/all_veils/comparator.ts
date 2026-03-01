import type { MistBlock } from "$lib/types/mists";

import ComparatorOne from "$lib/components/veil/comparator/comparator-one.svelte";
import ComparatorOneCode from "$lib/components/veil/comparator/comparator-one.svelte?raw";
import ComparatorTwo from "$lib/components/veil/comparator/comparator-two.svelte";
import ComparatorTwoCode from "$lib/components/veil/comparator/comparator-two.svelte?raw";
import ComparatorThree from "$lib/components/veil/comparator/comparator-three.svelte";
import ComparatorThreeCode from "$lib/components/veil/comparator/comparator-three.svelte?raw";

export const all_veils_comparator: MistBlock[] = [
  {
    slug: "comparator-one",
    title: "Comparator One",
    category: "comparator",
    preview: "/preview/veil/comparator/comparator-one",
    itemId: "veil-comparator-one",
    code: {
      code: ComparatorOneCode,
      lang: "svelte",
    },
    component: ComparatorOne,
  },
  {
    slug: "comparator-two",
    title: "Comparator Two",
    category: "comparator",
    preview: "/preview/veil/comparator/comparator-two",
    itemId: "veil-comparator-two",
    code: {
      code: ComparatorTwoCode,
      lang: "svelte",
    },
    component: ComparatorTwo,
  },
  {
    slug: "comparator-three",
    title: "Comparator Three",
    category: "comparator",
    preview: "/preview/veil/comparator/comparator-three",
    itemId: "veil-comparator-three",
    code: {
      code: ComparatorThreeCode,
      lang: "svelte",
    },
    component: ComparatorThree,
  },
];
