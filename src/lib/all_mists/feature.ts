import FeatureOne from "$lib/components/mist/mfeature/one.svelte";
import FeatureOneCode from "$lib/components/mist/mfeature/one.svelte?raw";
import FeatureTable from "$lib/components/mist/mfeature/feature-table.svelte?raw";

import FeatureTwo from "$lib/components/mist/mfeature/two.svelte";
import FeatureTwoCode from "$lib/components/mist/mfeature/two.svelte?raw";

import FeatureThree from "$lib/components/mist/mfeature/three.svelte";
import FeatureThreeCode from "$lib/components/mist/mfeature/three.svelte?raw";

import FeatureFour from "$lib/components/mist/mfeature/four.svelte";
import FeatureFourCode from "$lib/components/mist/mfeature/four.svelte?raw";

import FeatureFive from "$lib/components/mist/mfeature/five.svelte";
import FeatureFiveCode from "$lib/components/mist/mfeature/five.svelte?raw";

import FeatureSix from "$lib/components/mist/mfeature/six.svelte";
import FeatureSixCode from "$lib/components/mist/mfeature/six.svelte?raw";

import FeatureSeven from "$lib/components/mist/mfeature/seven.svelte";
import FeatureSevenCode from "$lib/components/mist/mfeature/seven.svelte?raw";

import FeatureEight from "$lib/components/mist/mfeature/eight.svelte";
import FeatureEightCode from "$lib/components/mist/mfeature/eight.svelte?raw";

import FeatureNine from "$lib/components/mist/mfeature/nine.svelte";
import FeatureNineCode from "$lib/components/mist/mfeature/nine.svelte?raw";

import FeatureTen from "$lib/components/mist/mfeature/ten.svelte";
import FeatureTenCode from "$lib/components/mist/mfeature/ten.svelte?raw";

import FeatureEleven from "$lib/components/mist/mfeature/eleven.svelte";
import FeatureElevenCode from "$lib/components/mist/mfeature/eleven.svelte?raw";

import CardCode from "$lib/components/ui/card/card.svelte?raw";

import type { MistBlock } from "$lib/types/mists";

export const all_mists_features: MistBlock[] = [
  {
    slug: "one",
    title: "Feature One",
    category: "feature",
    preview: "/preview/mist/feature/one",
    component: FeatureOne,
    code: [
      {
        code: FeatureOneCode,
        lang: "svelte",
        name: "Feature.svelte",
      },
      {
        code: FeatureTable,
        lang: "svelte",
        name: "FeatureTable.svelte",
      },
      {
        code: CardCode,
        lang: "svelte",
        name: "Card.svelte",
        highlight: [10],
      },
    ],
  },
  {
    slug: "two",
    title: "Feature Two",
    category: "feature",
    preview: "/preview/mist/feature/two",
    component: FeatureTwo,
    code: [
      {
        code: FeatureTwoCode,
        lang: "svelte",
        name: "Feature.svelte",
      },
      {
        code: CardCode,
        lang: "svelte",
        name: "Card.svelte",
        highlight: [10],
      },
    ],
  },
  {
    slug: "three",
    title: "Feature Three",
    category: "feature",
    preview: "/preview/mist/feature/three",
    component: FeatureThree,
    code: [
      {
        code: FeatureThreeCode,
        lang: "svelte",
        name: "Feature.svelte",
      },
      {
        code: CardCode,
        lang: "svelte",
        name: "Card.svelte",
        highlight: [10],
      },
    ],
  },
  {
    slug: "four",
    title: "Feature Four",
    category: "feature",
    preview: "/preview/mist/feature/four",
    component: FeatureFour,
    code: [
      {
        code: FeatureFourCode,
        lang: "svelte",
        name: "Feature.svelte",
      },
      {
        code: CardCode,
        lang: "svelte",
        name: "Card.svelte",
        highlight: [10],
      },
    ],
  },
  {
    slug: "five",
    title: "Feature Five",
    category: "feature",
    preview: "/preview/mist/feature/five",
    component: FeatureFive,
    code: [
      {
        code: FeatureFiveCode,
        lang: "svelte",
        name: "Feature.svelte",
      },
      {
        code: CardCode,
        lang: "svelte",
        name: "Card.svelte",
        highlight: [10],
      },
    ],
  },
  {
    slug: "six",
    title: "Feature Six",
    category: "feature",
    preview: "/preview/mist/feature/six",
    component: FeatureSix,
    code: [
      {
        code: FeatureSixCode,
        lang: "svelte",
        name: "Feature.svelte",
      },
      {
        code: CardCode,
        lang: "svelte",
        name: "Card.svelte",
        highlight: [10],
      },
    ],
  },
  {
    slug: "seven",
    title: "Feature Seven",
    category: "feature",
    preview: "/preview/mist/feature/seven",
    component: FeatureSeven,
    code: [
      {
        code: FeatureSevenCode,
        lang: "svelte",
        name: "Feature.svelte",
      },
      {
        code: CardCode,
        lang: "svelte",
        name: "Card.svelte",
        highlight: [10],
      },
    ],
  },
  {
    slug: "eight",
    title: "Feature Eight",
    category: "feature",
    preview: "/preview/mist/feature/eight",
    component: FeatureEight,
    code: [
      {
        code: FeatureEightCode,
        lang: "svelte",
        name: "Feature.svelte",
      },
      {
        code: CardCode,
        lang: "svelte",
        name: "Card.svelte",
        highlight: [10],
      },
    ],
  },
  {
    slug: "nine",
    title: "Feature Nine",
    category: "feature",
    preview: "/preview/mist/feature/nine",
    component: FeatureNine,
    code: [
      {
        code: FeatureNineCode,
        lang: "svelte",
        name: "Feature.svelte",
      },
      {
        code: CardCode,
        lang: "svelte",
        name: "Card.svelte",
        highlight: [10],
      },
    ],
  },
  {
    slug: "ten",
    title: "Feature Ten",
    category: "feature",
    preview: "/preview/mist/feature/ten",
    component: FeatureTen,
    code: [
      {
        code: FeatureTenCode,
        lang: "svelte",
        name: "Feature.svelte",
      },
      {
        code: CardCode,
        lang: "svelte",
        name: "Card.svelte",
        highlight: [10],
      },
    ],
  },
  {
    slug: "eleven",
    title: "Feature Eleven",
    category: "feature",
    preview: "/preview/mist/feature/eleven",
    component: FeatureEleven,
    code: [
      {
        code: FeatureElevenCode,
        lang: "svelte",
        name: "Feature.svelte",
      },
      {
        code: CardCode,
        lang: "svelte",
        name: "Card.svelte",
        highlight: [10],
      },
    ],
  },
];
