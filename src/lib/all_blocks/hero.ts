import type { Block } from "../../types/blocks";
import { getBlock } from "$lib";

// Components
import HeroOne from "$lib/components/blocks/hero/hero-one.svelte";
import HeroTwo from "$lib/components/blocks/hero/hero-two.svelte";
import HeroThree from "$lib/components/blocks/hero/hero-three.svelte";
import HeroFour from "$lib/components/blocks/hero/hero-four.svelte";
import HeroFive from "$lib/components/blocks/hero/hero-five.svelte";
import HeroSix from "$lib/components/blocks/hero/hero-six.svelte";
import HeroSeven from "$lib/components/blocks/hero/hero-seven.svelte";
import HeroEight from "$lib/components/blocks/hero/hero-eight.svelte";
import HeroNine from "$lib/components/blocks/hero/hero-nine.svelte";

// Code
import HeroOneCode from "$lib/components/blocks/hero/hero-one.svelte?raw";
import HeroTwoCode from "$lib/components/blocks/hero/hero-two.svelte?raw";
import HeroThreeCode from "$lib/components/blocks/hero/hero-three.svelte?raw";
import HeroFourCode from "$lib/components/blocks/hero/hero-four.svelte?raw";
import HeroFiveCode from "$lib/components/blocks/hero/hero-five.svelte?raw";
import HeroSixCode from "$lib/components/blocks/hero/hero-six.svelte?raw";
import HeroSevenCode from "$lib/components/blocks/hero/hero-seven.svelte?raw";
import HeroEightCode from "$lib/components/blocks/hero/hero-eight.svelte?raw";
import HeroNineCode from "$lib/components/blocks/hero/hero-nine.svelte?raw";


let codes = [
  HeroOneCode,
  HeroTwoCode,
  HeroThreeCode,
  HeroFourCode,
  HeroFiveCode,
  HeroSixCode,
  HeroSevenCode,
  HeroEightCode,
  HeroNineCode
];
let components = [
  HeroOne,
  HeroTwo,
  HeroThree,
  HeroFour,
  HeroFive,
  HeroSix,
  HeroSeven,
  HeroEight,
  HeroNine,
];

export let hero: Block[] = getBlock(
  components.length,
  "hero",
  codes,
  components
);
