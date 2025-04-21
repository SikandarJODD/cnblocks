import type { Block } from "../../types/blocks";
import { getBlock } from "$lib";
// Components
import Faq from "$lib/components/blocks/faq/faq.svelte";
import FaqTwo from "$lib/components/blocks/faq/faq-two.svelte";
import FaqThree from "$lib/components/blocks/faq/faq-three.svelte";
import FaqFour from "$lib/components/blocks/faq/faq-four.svelte";

// Code
import FaqCode from "$lib/components/blocks/faq/faq.svelte?raw";
import FaqTwoCode from "$lib/components/blocks/faq/faq-two.svelte?raw";
import FaqThreeCode from "$lib/components/blocks/faq/faq-three.svelte?raw";
import FaqFourCode from "$lib/components/blocks/faq/faq-four.svelte?raw";

let codes = [FaqCode, FaqTwoCode, FaqThreeCode, FaqFourCode];
let components = [Faq, FaqTwo, FaqThree, FaqFour];

export let faq: Block[] = getBlock(components.length, "faq", codes, components);
