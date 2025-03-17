import type { Block } from "../../types/blocks";
import { getBlock } from "$lib";

// Components
import HeroOne from "$lib/components/blocks/hero/hero-one.svelte";
import HeroTwo from "$lib/components/blocks/hero/hero-two.svelte";
import HeroFive from "$lib/components/blocks/hero/hero-five.svelte";
import HeroSeven from "$lib/components/blocks/hero/hero-seven.svelte";
import HeroEight from "$lib/components/blocks/hero/hero-eight.svelte";

// Code
import HeroOneCode from "$lib/components/blocks/hero/hero-one.svelte?raw";
import HeroTwoCode from "$lib/components/blocks/hero/hero-two.svelte?raw";
import HeroFiveCode from "$lib/components/blocks/hero/hero-five.svelte?raw";
import HeroSevenCode from "$lib/components/blocks/hero/hero-seven.svelte?raw";
import HeroEightCode from "$lib/components/blocks/hero/hero-eight.svelte?raw";

let codes = [HeroOneCode, HeroTwoCode, HeroFiveCode, HeroSevenCode, HeroEightCode];
let components = [HeroOne, HeroTwo, HeroFive, HeroSeven, HeroEight];

export let hero: Block[] = getBlock(
  components.length,
  "hero",
  codes,
  components
);
