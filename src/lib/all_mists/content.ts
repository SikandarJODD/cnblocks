import type { MistBlock } from "$lib/types/mists";
import ContentOne from "$lib/components/mist/content/content-one.svelte";
import ContentTwo from "$lib/components/mist/content/content-two.svelte";
import ContentThree from "$lib/components/mist/content/content-three.svelte";
import ContentFour from "$lib/components/mist/content/content-four.svelte";

export const all_mists_content: MistBlock[] = [
  {
    slug: "one",
    title: "Content One",
    category: "content",
    preview: "Smart Editor with Tailark integration",
    code: {
      code: (
        await import("$lib/components/mist/content/content-one.svelte?raw")
      ).default,
      lang: "svelte",
    },
    component: ContentOne,
  },
  {
    slug: "two",
    title: "Content Two",
    category: "content",
    preview: "Content layout with two columns",
    code: {
      code: (
        await import("$lib/components/mist/content/content-two.svelte?raw")
      ).default,
      lang: "svelte",
    },
    component: ContentTwo,
  },
  {
    slug: "three",
    title: "Content Three",
    category: "content",
    preview: "Content layout with three sections",
    code: {
      code: (
        await import("$lib/components/mist/content/content-three.svelte?raw")
      ).default,
      lang: "svelte",
    },
    component: ContentThree,
  },
  {
    slug: "four",
    title: "Content Four",
    category: "content",
    preview: "Content layout with four sections",
    code: {
      code: (
        await import("$lib/components/mist/content/content-four.svelte?raw")
      ).default,
      lang: "svelte",
    },
    component: ContentFour,
  },
];
