import type { Block } from "../../types/blocks";
import { getBlock } from "$lib";
// Components
import FaqOne from "$lib/components/blocks/faq/faq-one.svelte";
import FaqTwo from "$lib/components/blocks/faq/faq-two.svelte";
import FaqThree from "$lib/components/blocks/faq/faq-three.svelte";
import FaqFour from "$lib/components/blocks/faq/faq-four.svelte";

// Code
import FaqOneCode from "$lib/components/blocks/faq/faq-one.svelte?raw";
import FaqTwoCode from "$lib/components/blocks/faq/faq-two.svelte?raw";
import FaqThreeCode from "$lib/components/blocks/faq/faq-three.svelte?raw";
import FaqFourCode from "$lib/components/blocks/faq/faq-four.svelte?raw";

let comp = [FaqOne, FaqTwo, FaqThree, FaqFour];
let codes = [FaqOneCode, FaqTwoCode, FaqThreeCode, FaqFourCode];

export let faq: Block[] = getBlock(comp.length, "faq", codes, comp);
