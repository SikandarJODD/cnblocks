import type { Block } from "../../types/blocks";
import { getBlock } from "$lib";

// Components
import FeatureOne from "$lib/components/blocks/feature/feature-one.svelte";
import FeatureTwo from "$lib/components/blocks/feature/feature-two.svelte";
import FeatureThree from "$lib/components/blocks/feature/feature-three.svelte";
import FeatureFour from "$lib/components/blocks/feature/feature-four.svelte";
import FeatureFive from "$lib/components/blocks/feature/feature-five.svelte";
import FeatureSix from "$lib/components/blocks/feature/feature-six.svelte";
import FeatureSeven from "$lib/components/blocks/feature/feature-seven.svelte";
import FeatureEight from "$lib/components/blocks/feature/feature-eight.svelte";
import FeatureNine from "$lib/components/blocks/feature/feature-nine.svelte";
import FeatureTen from "$lib/components/blocks/feature/feature-ten.svelte";

// Code
import FeatureOneCode from "$lib/components/blocks/feature/feature-one.svelte?raw";
import FeatureTwoCode from "$lib/components/blocks/feature/feature-two.svelte?raw";
import FeatureThreeCode from "$lib/components/blocks/feature/feature-three.svelte?raw";
import FeatureFourCode from "$lib/components/blocks/feature/feature-four.svelte?raw";
import FeatureFiveCode from "$lib/components/blocks/feature/feature-five.svelte?raw";
import FeatureSixCode from "$lib/components/blocks/feature/feature-six.svelte?raw";
import FeatureSevenCode from "$lib/components/blocks/feature/feature-seven.svelte?raw";
import FeatureEightCode from "$lib/components/blocks/feature/feature-eight.svelte?raw";
import FeatureNineCode from "$lib/components/blocks/feature/feature-nine.svelte?raw";
import FeatureTenCode from "$lib/components/blocks/feature/feature-ten.svelte?raw";

let codes = [
  FeatureOneCode,
  FeatureTwoCode,
  FeatureThreeCode,
  FeatureFourCode,
  FeatureFiveCode,
  FeatureSixCode,
  FeatureSevenCode,
  FeatureEightCode,
  FeatureNineCode,
  FeatureTenCode,
];
let components = [
  FeatureOne,
  FeatureTwo,
  FeatureThree,
  FeatureFour,
  FeatureFive,
  FeatureSix,
  FeatureSeven,
  FeatureEight,
  FeatureNine,
  FeatureTen,
];

export let feature: Block[] = getBlock(
  components.length,
  "feature",
  codes,
  components
);
