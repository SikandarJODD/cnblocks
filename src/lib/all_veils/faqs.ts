import type { MistBlock } from "$lib/types/mists";

import FaqsOne from "$lib/components/veil/faqs/faqs-one.svelte";
import FaqsOneCode from "$lib/components/veil/faqs/faqs-one.svelte?raw";
import FaqsTwo from "$lib/components/veil/faqs/faqs-two.svelte";
import FaqsTwoCode from "$lib/components/veil/faqs/faqs-two.svelte?raw";
import FaqsThree from "$lib/components/veil/faqs/faqs-three.svelte";
import FaqsThreeCode from "$lib/components/veil/faqs/faqs-three.svelte?raw";
import FaqsFour from "$lib/components/veil/faqs/faqs-four.svelte";
import FaqsFourCode from "$lib/components/veil/faqs/faqs-four.svelte?raw";

export const all_veils_faqs: MistBlock[] = [
  {
    slug: "faqs-one",
    title: "Faqs One",
    category: "faqs",
    preview: "/preview/veil/faqs/faqs-one",
    itemId: "veil-faqs-one",
    code: {
      code: FaqsOneCode,
      lang: "svelte",
    },
    component: FaqsOne,
  },
  {
    slug: "faqs-two",
    title: "Faqs Two",
    category: "faqs",
    preview: "/preview/veil/faqs/faqs-two",
    itemId: "veil-faqs-two",
    code: {
      code: FaqsTwoCode,
      lang: "svelte",
    },
    component: FaqsTwo,
  },
  {
    slug: "faqs-three",
    title: "Faqs Three",
    category: "faqs",
    preview: "/preview/veil/faqs/faqs-three",
    itemId: "veil-faqs-three",
    code: {
      code: FaqsThreeCode,
      lang: "svelte",
    },
    component: FaqsThree,
  },
  {
    slug: "faqs-four",
    title: "Faqs Four",
    category: "faqs",
    preview: "/preview/veil/faqs/faqs-four",
    itemId: "veil-faqs-four",
    code: {
      code: FaqsFourCode,
      lang: "svelte",
    },
    component: FaqsFour,
  },
];
