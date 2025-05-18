import type { MistBlock } from "$lib/types/mists";
import StatsOne from "$lib/components/mist/mstats/one.svelte";
import StatsTwo from "$lib/components/mist/mstats/two.svelte";
import StatsThree from "$lib/components/mist/mstats/three.svelte";
import StatsFour from "$lib/components/mist/mstats/four.svelte";

import StatsOneCode from "$lib/components/mist/mstats/one.svelte?raw";
import StatsTwoCode from "$lib/components/mist/mstats/two.svelte?raw";
import StatsThreeCode from "$lib/components/mist/mstats/three.svelte?raw";
import StatsFourCode from "$lib/components/mist/mstats/four.svelte?raw";

export const all_mists_stats: MistBlock[] = [
  {
    slug: "one",
    title: "Stats One",
    category: "stats",
    preview: "/preview/mist/stats/one",
    code: {
      code: StatsOneCode,
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
      code: StatsTwoCode,
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
      code: StatsThreeCode,
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
      code: StatsFourCode,
      lang: "svelte",
    },
    component: StatsFour,
  },
];
