import type { MistBlock } from "$lib/types/mists";
import ForgotPasswordOne from "$lib/components/mist/forgot-password/forgot-password-one.svelte";

export const all_mists_forgot_password: MistBlock[] = [
  {
    slug: "one",
    title: "Forgot Password One",
    category: "forgot-password",
    preview: "/preview/mist/forgot-password/one",
    code: {
      code: (
        await import(
          "$lib/components/mist/forgot-password/forgot-password-one.svelte?raw"
        )
      ).default,
      lang: "svelte",
    },
    component: ForgotPasswordOne,
  },
];
