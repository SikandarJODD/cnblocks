import type { MistBlock } from "$lib/types/mists";
import LogocloudOne from "$lib/components/mist/logocloud/logocloud-one.svelte";
import LogocloudOneCode from "$lib/components/mist/logocloud/logocloud-one.svelte?raw";
import LogocloudTwo from "$lib/components/mist/logocloud/logocloud-two.svelte";
import LogocloudTwoCode from "$lib/components/mist/logocloud/logocloud-two.svelte?raw";

export const all_mists_logocloud: MistBlock[] = [
  {
    slug: "logocloud-one",
    title: "Logo Cloud One",
    category: "logocloud",
    preview: "/preview/mist/logocloud/one",
    code: {
      code: LogocloudOneCode,
      lang: "svelte",
    },
    component: LogocloudOne,
  },
  {
    slug: "logocloud-two",
    title: "Logo Cloud Two",
    category: "logocloud",
    preview: "/preview/mist/logocloud/two",
    code: {
      code: LogocloudTwoCode,
      lang: "svelte",
    },
    component: LogocloudTwo,
  },
];
