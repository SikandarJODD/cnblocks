import type { MistBlock } from "$lib/types/mists";
import ComparatorOne from "$lib/components/mist/comparator/comparator-one.svelte";

export const all_mists_comparator: MistBlock[] = [
  {
    slug: "one",
    title: "Basic Comparison Table",
    category: "comparator",
    preview: "/preview/mist/comparator/one",
    code: [
      {
        code: (
          await import(
            "$lib/components/mist/comparator/comparator-one.svelte?raw"
          )
        ).default,
        lang: "svelte",
      },
    ],
    component: ComparatorOne,
  },
];
