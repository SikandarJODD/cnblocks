import FeatureOne from "$lib/components/mist/features/one/feature-one.svelte";
import FeatureOneCode from "$lib/components/mist/features/one/feature-one.svelte?raw";
import FeatureTable from "$lib/components/mist/features/one/feature-table.svelte?raw";

import FeatureTwo from "$lib/components/mist/features/feature-two.svelte";
import FeatureTwoCode from "$lib/components/mist/features/feature-two.svelte?raw";

import FeatureThree from "$lib/components/mist/features/feature-three.svelte";
import FeatureThreeCode from "$lib/components/mist/features/feature-three.svelte?raw";

import FeatureFour from "$lib/components/mist/features/feature-four.svelte";
import FeatureFourCode from "$lib/components/mist/features/feature-four.svelte?raw";

import FeatureFive from "$lib/components/mist/features/feature-five.svelte";
import FeatureFiveCode from "$lib/components/mist/features/feature-five.svelte?raw";

import FeatureSix from "$lib/components/mist/features/feature-six.svelte";
import FeatureSixCode from "$lib/components/mist/features/feature-six.svelte?raw";

import FeatureSeven from "$lib/components/mist/features/feature-seven.svelte";
import FeatureSevenCode from "$lib/components/mist/features/feature-seven.svelte?raw";

import FeatureEight from "$lib/components/mist/features/feature-eight.svelte";
import FeatureEightCode from "$lib/components/mist/features/feature-eight.svelte?raw";

import FeatureNine from "$lib/components/mist/features/feature-nine.svelte";
import FeatureNineCode from "$lib/components/mist/features/feature-nine.svelte?raw";

import FeatureTen from "$lib/components/mist/features/feature-ten.svelte";
import FeatureTenCode from "$lib/components/mist/features/feature-ten.svelte?raw";

import FeatureEleven from "$lib/components/mist/features/feature-eleven.svelte";
import FeatureElevenCode from "$lib/components/mist/features/feature-eleven.svelte?raw";

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
      },
      {
        code: FeatureTable,
        lang: "svelte",
      },
    ],
  },
  {
    slug: "two",
    title: "Feature Two",
    category: "feature",
    preview: "/preview/mist/feature/two",
    component: FeatureTwo,
    code: {
      code: FeatureTwoCode,
      lang: "svelte",
    },
  },
  {
    slug: "three",
    title: "Feature Three",
    category: "feature",
    preview: "/preview/mist/feature/three",
    component: FeatureThree,
    code: {
      code: FeatureThreeCode,
      lang: "svelte",
    },
  },
  {
    slug: "four",
    title: "Feature Four",
    category: "feature",
    preview: "/preview/mist/feature/four",
    component: FeatureFour,
    code: {
      code: FeatureFourCode,
      lang: "svelte",
    },
  },
  {
    slug: "five",
    title: "Feature Five",
    category: "feature",
    preview: "/preview/mist/feature/five",
    component: FeatureFive,
    code: {
      code: FeatureFiveCode,
      lang: "svelte",
    },
  },
  {
    slug: "six",
    title: "Feature Six",
    category: "feature",
    preview: "/preview/mist/feature/six",
    component: FeatureSix,
    code: {
      code: FeatureSixCode,
      lang: "svelte",
    },
  },
  {
    slug: "seven",
    title: "Feature Seven",
    category: "feature",
    preview: "/preview/mist/feature/seven",
    component: FeatureSeven,
    code: {
      code: FeatureSevenCode,
      lang: "svelte",
    },
  },
  {
    slug: "eight",
    title: "Feature Eight",
    category: "feature",
    preview: "/preview/mist/feature/eight",
    component: FeatureEight,
    code: {
      code: FeatureEightCode,
      lang: "svelte",
    },
  },
  {
    slug: "nine",
    title: "Feature Nine",
    category: "feature",
    preview: "/preview/mist/feature/nine",
    component: FeatureNine,
    code: {
      code: FeatureNineCode,
      lang: "svelte",
    },
  },
  {
    slug: "ten",
    title: "Feature Ten",
    category: "feature",
    preview: "/preview/mist/feature/ten",
    component: FeatureTen,
    code: {
      code: FeatureTenCode,
      lang: "svelte",
    },
  },
  {
    slug: "eleven",
    title: "Feature Eleven",
    category: "feature",
    preview: "/preview/mist/feature/eleven",
    component: FeatureEleven,
    code: {
      code: FeatureElevenCode,
      lang: "svelte",
    },
  },
];
