import type { MistBlock } from "$lib/types/mists";
import ForgotPasswordOne from "$lib/components/mist/mforgot-password/one.svelte";
import ForgotPasswordOneCode from "$lib/components/mist/mforgot-password/one.svelte?raw";
export const all_mists_forgot_password: MistBlock[] = [
  {
    slug: "one",
    title: "Forgot Password One",
    category: "forgot-password",
    preview: "/preview/mist/forgot-password/one",
    code: {
      code: ForgotPasswordOneCode,
      lang: "svelte",
    },
    component: ForgotPasswordOne,
  },
];
