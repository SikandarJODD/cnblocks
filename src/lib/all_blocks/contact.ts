import type { Block } from "../../types/blocks";
import { getBlock } from "$lib";
import ContactOne from "$lib/components/blocks/contact/contact-one.svelte?raw";
import ContactTwo from "$lib/components/blocks/contact/contact-two.svelte?raw";

let comps = [ContactOne, ContactTwo];

export let contact: Block[] = getBlock(comps.length, comps, "contact");
