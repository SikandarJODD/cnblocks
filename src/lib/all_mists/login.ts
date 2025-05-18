import type { MistBlock } from "$lib/types/mists";
import LoginOne from "$lib/components/mist/mlogin/one.svelte";
import LoginOneCode from "$lib/components/mist/mlogin/one.svelte?raw";

export const all_mists_login: MistBlock[] = [
  {
    slug: "one",
    title: 'Login One',
    category: 'login',
    preview: '/preview/mist/login/one',
    code: {
      code: LoginOneCode,
      lang: 'svelte'
    },
    component: LoginOne
  }
];
