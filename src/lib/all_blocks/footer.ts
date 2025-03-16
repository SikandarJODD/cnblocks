import type { Block } from "../../types/blocks";
import { getBlock } from "$lib";
import FooterOne from "$lib/components/blocks/footer/footer-one.svelte?raw";
import FooterTwo from "$lib/components/blocks/footer/footer-two.svelte?raw";
import FooterThree from "$lib/components/blocks/footer/footer-three.svelte?raw";
import FooterFour from "$lib/components/blocks/footer/footer-four.svelte?raw";
import FooterFive from "$lib/components/blocks/footer/footer-five.svelte?raw";

let comps = [FooterOne, FooterTwo, FooterThree, FooterFour, FooterFive];

export let footer: Block[] = getBlock(comps.length, comps, "footer");
