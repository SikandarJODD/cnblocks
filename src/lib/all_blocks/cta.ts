import type { Block } from "../../types/blocks";
import { getBlock } from "$lib";

// Components
import CtaOne from "$lib/components/blocks/cta/cta-one.svelte";
import CtaTwo from "$lib/components/blocks/cta/cta-two.svelte";
import CtaThree from "$lib/components/blocks/cta/cta-three.svelte";

// Code
import CtaOneCode from "$lib/components/blocks/cta/cta-one.svelte?raw";
import CtaTwoCode from "$lib/components/blocks/cta/cta-two.svelte?raw";
import CtaThreeCode from "$lib/components/blocks/cta/cta-three.svelte?raw";

let codes = [CtaOneCode, CtaTwoCode, CtaThreeCode];
let components = [CtaOne, CtaTwo, CtaThree];

export let cta: Block[] = getBlock(
  components.length,
  "cta",
  codes,
  components
);
