import type { MistBlock } from "$lib/types/mists";

import HeaderFour from "$lib/components/veil/header/header-four.svelte";
import HeaderFourCode from "$lib/components/veil/header/header-four.svelte?raw";
import HeaderOne from "$lib/components/veil/header/header-one.svelte";
import HeaderOneCode from "$lib/components/veil/header/header-one.svelte?raw";
import HeaderThree from "$lib/components/veil/header/header-three.svelte";
import HeaderThreeCode from "$lib/components/veil/header/header-three.svelte?raw";
import HeaderTwo from "$lib/components/veil/header/header-two.svelte";
import HeaderTwoCode from "$lib/components/veil/header/header-two.svelte?raw";

export const all_veils_header: MistBlock[] = [
  {
    slug: "header-four",
    title: "Header Four",
    category: "header",
    preview: "/preview/veil/header/header-four",
    itemId: "veil-header-four",
    code: {
      code: HeaderFourCode,
      lang: "svelte",
    },
    component: HeaderFour,
  },
  {
    slug: "header-one",
    title: "Header One",
    category: "header",
    preview: "/preview/veil/header/header-one",
    itemId: "veil-header-one",
    code: {
      code: HeaderOneCode,
      lang: "svelte",
    },
    component: HeaderOne,
  },
  {
    slug: "header-three",
    title: "Header Three",
    category: "header",
    preview: "/preview/veil/header/header-three",
    itemId: "veil-header-three",
    code: {
      code: HeaderThreeCode,
      lang: "svelte",
    },
    component: HeaderThree,
  },
  {
    slug: "header-two",
    title: "Header Two",
    category: "header",
    preview: "/preview/veil/header/header-two",
    itemId: "veil-header-two",
    code: {
      code: HeaderTwoCode,
      lang: "svelte",
    },
    component: HeaderTwo,
  },
];
