import type { Block } from "../../types/blocks";
import { getBlock } from "$lib";
import ForgotPasswordOne from "$lib/components/blocks/forgot-password/forgot-password-one.svelte";
import ForgotPasswordTwo from "$lib/components/blocks/forgot-password/forgot-password-two.svelte";

// Code
import ForgotPasswordOneCode from "$lib/components/blocks/forgot-password/forgot-password-one.svelte?raw";
import ForgotPasswordTwoCode from "$lib/components/blocks/forgot-password/forgot-password-two.svelte?raw";

let comps = [ForgotPasswordOne, ForgotPasswordTwo];
let code = [ForgotPasswordOneCode, ForgotPasswordTwoCode];

export let forgot_password: Block[] = getBlock(
  comps.length,
  "forgot-password",
  code,
  comps
);
