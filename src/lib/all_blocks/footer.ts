import type { Block } from "../../types/blocks";
import { getBlock } from "$lib";
// Components
import FooterOne from "$lib/components/blocks/footer/footer-one.svelte";
import FooterTwo from "$lib/components/blocks/footer/footer-two.svelte";
import FooterThree from "$lib/components/blocks/footer/footer-three.svelte";
import FooterFour from "$lib/components/blocks/footer/footer-four.svelte";
import FooterFive from "$lib/components/blocks/footer/footer-five.svelte";

// Code
import FooterOneCode from "$lib/components/blocks/footer/footer-one.svelte?raw";
import FooterTwoCode from "$lib/components/blocks/footer/footer-two.svelte?raw";
import FooterThreeCode from "$lib/components/blocks/footer/footer-three.svelte?raw";
import FooterFourCode from "$lib/components/blocks/footer/footer-four.svelte?raw";
import FooterFiveCode from "$lib/components/blocks/footer/footer-five.svelte?raw";

let codes = [
  FooterOneCode,
  FooterTwoCode,
  FooterThreeCode,
  FooterFourCode,
  FooterFiveCode,
];
let comps = [FooterOne, FooterTwo, FooterThree, FooterFour, FooterFive];

export let footer: Block[] = getBlock(comps.length, "footer", codes, comps);
