import type { Block } from "../../types/blocks";
import { getBlock } from "$lib";

// Components
import LogoOne from "$lib/components/blocks/logo-cloud/logo-cloud-one.svelte";
import LogoTwo from "$lib/components/blocks/logo-cloud/logo-cloud-two.svelte";
import LogoThree from "$lib/components/blocks/logo-cloud/logo-cloud-three.svelte";

// Code
import LogoOneCode from "$lib/components/blocks/logo-cloud/logo-cloud-one.svelte?raw";
import LogoTwoCode from "$lib/components/blocks/logo-cloud/logo-cloud-two.svelte?raw";
import LogoThreeCode from "$lib/components/blocks/logo-cloud/logo-cloud-three.svelte?raw";

let codes = [LogoOneCode, LogoTwoCode, LogoThreeCode];
let components = [LogoOne, LogoTwo, LogoThree];

export let logocloud: Block[] = getBlock(
  components.length,
  "logo-cloud",
  codes,
  components
);
