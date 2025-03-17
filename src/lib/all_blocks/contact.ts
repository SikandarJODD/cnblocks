import type { Block } from "../../types/blocks";
import { getBlock } from "$lib";
// Components
import ContactOne from "$lib/components/blocks/contact/contact-one.svelte";
import ContactTwo from "$lib/components/blocks/contact/contact-two.svelte";

// Code
import ContactOneCode from "$lib/components/blocks/contact/contact-one.svelte?raw";
import ContactTwoCode from "$lib/components/blocks/contact/contact-two.svelte?raw";

let codes = [ContactOneCode, ContactTwoCode];
let comps = [ContactOne, ContactTwo];

export let contact: Block[] = getBlock(comps.length, "contact", codes, comps);
