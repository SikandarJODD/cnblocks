import type { Block } from "../../types/blocks";
import { getBlock } from "$lib";

// Components
import TestOne from "$lib/components/blocks/testimonial/testimonial-one.svelte";
import TestTwo from "$lib/components/blocks/testimonial/testimonial-two.svelte";
import TestThree from "$lib/components/blocks/testimonial/testimonial-three.svelte";
import TestFour from "$lib/components/blocks/testimonial/testimonial-four.svelte";
import TestFive from "$lib/components/blocks/testimonial/testimonial-five.svelte";
import TestSix from "$lib/components/blocks/testimonial/testimonial-six.svelte";

// Code
import TestOneCode from "$lib/components/blocks/testimonial/testimonial-one.svelte?raw";
import TestTwoCode from "$lib/components/blocks/testimonial/testimonial-two.svelte?raw";
import TestThreeCode from "$lib/components/blocks/testimonial/testimonial-three.svelte?raw";
import TestFourCode from "$lib/components/blocks/testimonial/testimonial-four.svelte?raw";
import TestFiveCode from "$lib/components/blocks/testimonial/testimonial-five.svelte?raw";
import TestSixCode from "$lib/components/blocks/testimonial/testimonial-six.svelte?raw";

let codes = [
  TestOneCode,
  TestTwoCode,
  TestThreeCode,
  TestFourCode,
  TestFiveCode,
  TestSixCode,
];
let components = [TestOne, TestTwo, TestThree, TestFour, TestFive, TestSix];

export let testimonials: Block[] = getBlock(
  components.length,
  "testimonial",
  codes,
  components
);
