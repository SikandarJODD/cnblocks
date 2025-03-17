import type { Block } from "../../types/blocks";
import { getBlock } from "$lib";

// Components
import ContentOne from "$lib/components/blocks/content/content-one.svelte";
import ContentTwo from "$lib/components/blocks/content/content-two.svelte";
import ContentThree from "$lib/components/blocks/content/content-three.svelte";
import ContentFour from "$lib/components/blocks/content/content-four.svelte";
import ContentFive from "$lib/components/blocks/content/content-five.svelte";
import ContentSix from "$lib/components/blocks/content/content-six.svelte";
import ContentSeven from "$lib/components/blocks/content/content-seven.svelte";

// Code
import ContentOneCode from "$lib/components/blocks/content/content-one.svelte?raw";
import ContentTwoCode from "$lib/components/blocks/content/content-two.svelte?raw";
import ContentThreeCode from "$lib/components/blocks/content/content-three.svelte?raw";
import ContentFourCode from "$lib/components/blocks/content/content-four.svelte?raw";
import ContentFiveCode from "$lib/components/blocks/content/content-five.svelte?raw";
import ContentSixCode from "$lib/components/blocks/content/content-six.svelte?raw";
import ContentSevenCode from "$lib/components/blocks/content/content-seven.svelte?raw";

let codes = [
  ContentOneCode,
  ContentTwoCode,
  ContentThreeCode,
  ContentFourCode,
  ContentFiveCode,
  ContentSixCode,
  ContentSevenCode,
];
let components = [
  ContentOne,
  ContentTwo,
  ContentThree,
  ContentFour,
  ContentFive,
  ContentSix,
  ContentSeven,
];

export let content: Block[] = getBlock(
  components.length,
  "content",
  codes,
  components
);
