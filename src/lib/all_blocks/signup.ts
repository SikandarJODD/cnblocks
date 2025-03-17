import type { Block } from "../../types/blocks";
import { getBlock } from "$lib";

// Components
import SignupOne from "$lib/components/blocks/signup/signup-one.svelte";
import SignupTwo from "$lib/components/blocks/signup/signup-two.svelte";
import SignupThree from "$lib/components/blocks/signup/signup-three.svelte";

// Code
import SignupOneCode from "$lib/components/blocks/signup/signup-one.svelte?raw";
import SignupTwoCode from "$lib/components/blocks/signup/signup-two.svelte?raw";
import SignupThreeCode from "$lib/components/blocks/signup/signup-three.svelte?raw";

let codes = [SignupOneCode, SignupTwoCode, SignupThreeCode];
let components = [SignupOne, SignupTwo, SignupThree];

export let signup: Block[] = getBlock(
  components.length,
  "signup",
  codes,
  components
);
