import HeroOne from "$lib/components/mist/mhero/one/hero-one.svelte";
import HeroOneCode from "$lib/components/mist/mhero/one/hero-one.svelte?raw";

import HeroTwo from "$lib/components/mist/mhero/two/hero-two.svelte";
import HeroTwoCode from "$lib/components/mist/mhero/two/hero-two.svelte?raw";

import HeroThree from "$lib/components/mist/mhero/three/hero-three.svelte";
import HeroThreeCode from "$lib/components/mist/mhero/three/hero-three.svelte?raw";

import HeroFour from "$lib/components/mist/mhero/four/hero-four.svelte";
import HeroFourCode from "$lib/components/mist/mhero/four/hero-four.svelte?raw";

import HeroFive from "$lib/components/mist/mhero/five/hero-five.svelte";
import HeroFiveCode from "$lib/components/mist/mhero/five/hero-five.svelte?raw";

import HeroSix from "$lib/components/mist/mhero/six/hero-six.svelte";
import HeroSixCode from "$lib/components/mist/mhero/six/hero-six.svelte?raw";

import type { MistBlock } from "$lib/types/mists";

export const all_mists_heros: MistBlock[] = [
  {
    slug: "one",
    title: "one",
    category: "hero",
    preview: "/preview/mist/hero/one",
    component: HeroOne,
    code: {
      code: HeroOneCode,
      lang: "svelte",
      hightlight: "svelte",
    },
  },
  {
    slug: "two",
    title: "Hero Two",
    category: "hero",
    preview: "/preview/mist/hero/two",
    component: HeroTwo,
    code: {
      code: HeroTwoCode,
      lang: "svelte",
      hightlight: "svelte",
    },
  },
  {
    slug: "three",
    title: "Hero Three",
    category: "hero",
    preview: "/preview/mist/hero/three",
    component: HeroThree,
    code: {
      code: HeroThreeCode,
      lang: "svelte",
      hightlight: "svelte",
    },
  },
  {
    slug: "four",
    title: "Hero Four",
    category: "hero",
    preview: "/preview/mist/hero/four",
    component: HeroFour,
    code: {
      code: HeroFourCode,
      lang: "svelte",
      hightlight: "svelte",
    },
  },
  {
    slug: "five",
    title: "Hero Five",
    category: "hero",
    preview: "/preview/mist/hero/five",
    component: HeroFive,
    code: {
      code: HeroFiveCode,
      lang: "svelte",
      hightlight: "svelte",
    },
  },
  {
    slug: "six",
    title: "Hero Six",
    category: "hero",
    preview: "/preview/mist/hero/six",
    component: HeroSix,
    code: {
      code: HeroSixCode,
      lang: "svelte",
      hightlight: "svelte",
    },
  },
];
