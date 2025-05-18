import type { MistBlock } from "$lib/types/mists";
import CtaOne from "$lib/components/mist/mcta/one.svelte";
import CtaOneCode from "$lib/components/mist/mcta/one.svelte?raw";
import CtaTwo from "$lib/components/mist/mcta/two.svelte";
import CtaTwoCode from "$lib/components/mist/mcta/two.svelte?raw";
import CtaThree from "$lib/components/mist/mcta/three.svelte";
import CtaThreeCode from "$lib/components/mist/mcta/three.svelte?raw";

export const all_mists_cta: MistBlock[] = [
  {
    slug: "one",
    title: "CTA One",
    category: "cta",
    preview: "/preview/mist/cta/one",
    code: {
      code: CtaOneCode,
      lang: "svelte",
    },
    component: CtaOne,
  },
  {
    slug: "two",
    title: "CTA Two",
    category: "cta",
    preview: "/preview/mist/cta/two",
    code: {
      code: CtaTwoCode,
      lang: "svelte",
    },
    component: CtaTwo,
  },
  {
    slug: "three",
    title: "CTA Three",
    category: "cta",
    preview: "/preview/mist/cta/three",
    code: {
      code: CtaThreeCode,
      lang: "svelte",
    },
    component: CtaThree,
  },
];
