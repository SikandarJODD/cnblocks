import type { MistBlock } from "$lib/types/mists";
import SignupOne from "$lib/components/mist/signup/signup-one.svelte";
import SignupOneCode from "$lib/components/mist/signup/signup-one.svelte?raw";
export const all_mists_signup: MistBlock[] = [
  {
    slug: "one",
    title: "Signup One",
    category: "signup",
    preview: "/preview/mist/signup/one",
    code: [
      {
        code: SignupOneCode,
        lang: "svelte",
      },
    ],
    component: SignupOne,
  },
];
