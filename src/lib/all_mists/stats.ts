import type { MistBlock } from "$lib/types/mists";
import StatsOne from "$lib/components/mist/stats/stats-one.svelte";
import StatsTwo from "$lib/components/mist/stats/stats-two.svelte";
import StatsThree from "$lib/components/mist/stats/stats-three.svelte";
import StatsFour from "$lib/components/mist/stats/stats-four.svelte";

const statsOneCode = await import(
  "$lib/components/mist/stats/stats-one.svelte?raw"
);
const statsTwoCode = await import(
  "$lib/components/mist/stats/stats-two.svelte?raw"
);
const statsThreeCode = await import(
  "$lib/components/mist/stats/stats-three.svelte?raw"
);
const statsFourCode = await import(
  "$lib/components/mist/stats/stats-four.svelte?raw"
);

export const all_mists_stats: MistBlock[] = [
  {
    slug: "one",
    title: "Stats One",
    category: "stats",
    preview: "/preview/mist/stats/one",
    code: {
      code: statsOneCode.default,
      lang: "svelte",
    },
    component: StatsOne,
  },
  {
    slug: "two",
    title: "Stats Two",
    category: "stats",
    preview: "/preview/mist/stats/two",
    code: {
      code: statsTwoCode.default,
      lang: "svelte",
    },
    component: StatsTwo,
  },
  {
    slug: "three",
    title: "Stats Three",
    category: "stats",
    preview: "/preview/mist/stats/three",
    code: {
      code: statsThreeCode.default,
      lang: "svelte",
    },
    component: StatsThree,
  },
  {
    slug: "four",
    title: "Stats Four",
    category: "stats",
    preview: "/preview/mist/stats/four",
    code: {
      code: statsFourCode.default,
      lang: "svelte",
    },
    component: StatsFour,
  },
];
