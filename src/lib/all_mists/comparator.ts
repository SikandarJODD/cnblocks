import type { MistBlock } from "$lib/types/mists";
import ComparatorOne from "$lib/components/mist/mcomparator/one.svelte";
import ComparatorOneCode from "$lib/components/mist/mcomparator/one.svelte?raw";

export const all_mists_comparator: MistBlock[] = [
  {
    slug: "one",
    title: "Basic Comparison Table",
    category: "comparator",
    preview: "/preview/mist/comparator/one",
    code: [
      {
        code: ComparatorOneCode,
        lang: "svelte",
      },
    ],
    component: ComparatorOne,
  },
];
