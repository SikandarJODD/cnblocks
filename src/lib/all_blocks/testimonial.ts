import type { Block } from "../../types/blocks";
import { getBlock } from "$lib";

// Components
import TestOne from "$lib/components/blocks/testimonials/test-one.svelte";
import TestTwo from "$lib/components/blocks/testimonials/test-two.svelte";
import TestThree from "$lib/components/blocks/testimonials/test-three.svelte";
import TestFour from "$lib/components/blocks/testimonials/test-four.svelte";
import TestFive from "$lib/components/blocks/testimonials/test-five.svelte";
import TestSix from "$lib/components/blocks/testimonials/test-six.svelte";

// Code
import TestOneCode from "$lib/components/blocks/testimonials/test-one.svelte?raw";
import TestTwoCode from "$lib/components/blocks/testimonials/test-two.svelte?raw";
import TestThreeCode from "$lib/components/blocks/testimonials/test-three.svelte?raw";
import TestFourCode from "$lib/components/blocks/testimonials/test-four.svelte?raw";
import TestFiveCode from "$lib/components/blocks/testimonials/test-five.svelte?raw";
import TestSixCode from "$lib/components/blocks/testimonials/test-six.svelte?raw";

let codes = [
  TestOneCode,
  TestTwoCode,
  TestThreeCode,
  TestFourCode,
  TestFiveCode,
  TestSixCode,
]
let components = [
  TestOne,
  TestTwo,
  TestThree,
  TestFour,
  TestFive,
  TestSix,
]

export let testimonials: Block[] = getBlock(
  components.length,
  "testimonials",
  codes,
  components
);
