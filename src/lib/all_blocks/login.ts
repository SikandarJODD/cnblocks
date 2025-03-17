import type { Block } from "../../types/blocks";
import { getBlock } from "$lib";

// Components
import LoginOne from "$lib/components/blocks/login/login-one.svelte";
import LoginTwo from "$lib/components/blocks/login/login-two.svelte";
import LoginThree from "$lib/components/blocks/login/login-three.svelte";

// Code
import LoginOneCode from "$lib/components/blocks/login/login-one.svelte?raw";
import LoginTwoCode from "$lib/components/blocks/login/login-two.svelte?raw";
import LoginThreeCode from "$lib/components/blocks/login/login-three.svelte?raw";

let codes = [LoginOneCode, LoginTwoCode, LoginThreeCode];
let components = [LoginOne, LoginTwo, LoginThree];

export let login: Block[] = getBlock(
  components.length,
  "login",
  codes,
  components
);
