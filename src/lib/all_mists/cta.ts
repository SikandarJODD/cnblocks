import type { MistBlock } from "$lib/types/mists";
import CtaOne from "$lib/components/mist/cta/cta-one.svelte";
import CtaTwo from "$lib/components/mist/cta/cta-two.svelte";
import CtaThree from "$lib/components/mist/cta/cta-three.svelte";

const ctaOneCode = await import("$lib/components/mist/cta/cta-one.svelte?raw");
const ctaTwoCode = await import("$lib/components/mist/cta/cta-two.svelte?raw");
const ctaThreeCode = await import(
  "$lib/components/mist/cta/cta-three.svelte?raw"
);

export const all_mists_cta: MistBlock[] = [
  {
    slug: "one",
    title: "CTA One",
    category: "cta",
    preview: "/preview/mist/cta/one",
    code: {
      code: ctaOneCode.default,
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
      code: ctaTwoCode.default,
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
      code: ctaThreeCode.default,
      lang: "svelte",
    },
    component: CtaThree,
  },
];
