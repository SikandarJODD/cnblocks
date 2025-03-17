import type { Block } from "../../types/blocks";
import { getBlock } from "$lib";

// Components
import FeatureOne from "$lib/components/blocks/features/FeatureOne.svelte";
import FeatureTwo from "$lib/components/blocks/features/FeatureTwo.svelte";
import FeatureThree from "$lib/components/blocks/features/FeatureThree.svelte";
import FeatureFour from "$lib/components/blocks/features/FeatureFour.svelte";
import FeatureFive from "$lib/components/blocks/features/FeatureFive.svelte";
import FeatureSix from "$lib/components/blocks/features/FeatureSix.svelte";
import FeatureSeven from "$lib/components/blocks/features/FeatureSeven.svelte";
// Code
import FeatureOneCode from "$lib/components/blocks/features/FeatureOne.svelte?raw";
import FeatureTwoCode from "$lib/components/blocks/features/FeatureTwo.svelte?raw";
import FeatureThreeCode from "$lib/components/blocks/features/FeatureThree.svelte?raw";
import FeatureFourCode from "$lib/components/blocks/features/FeatureFour.svelte?raw";
import FeatureFiveCode from "$lib/components/blocks/features/FeatureFive.svelte?raw";
import FeatureSixCode from "$lib/components/blocks/features/FeatureSix.svelte?raw";
import FeatureSevenCode from "$lib/components/blocks/features/FeatureSeven.svelte?raw";

let codes = [
  FeatureOneCode,
  FeatureTwoCode,
  FeatureThreeCode,
  FeatureFourCode,
  FeatureFiveCode,
  FeatureSixCode,
  FeatureSevenCode,
];
let components = [
  FeatureOne,
  FeatureTwo,
  FeatureThree,
  FeatureFour,
  FeatureFive,
  FeatureSix,
  FeatureSeven,
];

export let features: Block[] = getBlock(
  components.length,
  "features",
  codes,
  components
);
