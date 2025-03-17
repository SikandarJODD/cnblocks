import type { Block } from "../../types/blocks";
import { getBlock } from "$lib";

// Components
import CtaOne from "$lib/components/blocks/call-to-action/cta-one.svelte";
import CtaTwo from "$lib/components/blocks/call-to-action/cta-two.svelte";
import CtaThree from "$lib/components/blocks/call-to-action/cta-three.svelte";

// Code
import CtaOneCode from "$lib/components/blocks/call-to-action/cta-one.svelte?raw";
import CtaTwoCode from "$lib/components/blocks/call-to-action/cta-two.svelte?raw";
import CtaThreeCode from "$lib/components/blocks/call-to-action/cta-three.svelte?raw";

let codes = [CtaOneCode, CtaTwoCode, CtaThreeCode];
let components = [CtaOne, CtaTwo, CtaThree];

export let cta: Block[] = getBlock(
  components.length,
  "call-to-action",
  codes,
  components
);
