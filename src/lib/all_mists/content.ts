import type { MistBlock } from "$lib/types/mists";
import ContentOne from "$lib/components/mist/mcontent/one.svelte";
import ContentOneCode from "$lib/components/mist/mcontent/one.svelte?raw";
import ContentTwo from "$lib/components/mist/mcontent/two.svelte";
import ContentTwoCode from "$lib/components/mist/mcontent/two.svelte?raw";
import ContentThree from "$lib/components/mist/mcontent/three.svelte";
import ContentThreeCode from "$lib/components/mist/mcontent/three.svelte?raw";
import ContentFour from "$lib/components/mist/mcontent/four.svelte";
import ContentFourCode from "$lib/components/mist/mcontent/four.svelte?raw";

export const all_mists_content: MistBlock[] = [
  {
    slug: "one",
    title: "Content One",
    category: "content",
    preview: "/preview/mist/content/one",
    code: {
      code: ContentOneCode,
      lang: "svelte"
    },
    component: ContentOne,
  },
  {
    slug: "two",
    title: "Content Two",
    category: "content",
    preview: "/preview/mist/content/two",
    code: {
      code: ContentTwoCode,
      lang: "svelte"
    },
    component: ContentTwo,
  },
  {
    slug: "three",
    title: "Content Three",
    category: "content",
    preview: "/preview/mist/content/three",
    code: {
      code: ContentThreeCode,
      lang: "svelte"
    },
    component: ContentThree,
  },
  {
    slug: "four",
    title: "Content Four",
    category: "content",
    preview: "/preview/mist/content/four",
    code: {
      code: ContentFourCode,
      lang: "svelte"
    },
    component: ContentFour,
  },
];
