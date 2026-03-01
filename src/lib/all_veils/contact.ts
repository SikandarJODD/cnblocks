import type { MistBlock } from "$lib/types/mists";

import ContactOne from "$lib/components/veil/contact/contact-one.svelte";
import ContactOneCode from "$lib/components/veil/contact/contact-one.svelte?raw";
import ContactTwo from "$lib/components/veil/contact/contact-two.svelte";
import ContactTwoCode from "$lib/components/veil/contact/contact-two.svelte?raw";

export const all_veils_contact: MistBlock[] = [
  {
    slug: "contact-one",
    title: "Contact One",
    category: "contact",
    preview: "/preview/veil/contact/contact-one",
    itemId: "veil-contact-one",
    code: {
      code: ContactOneCode,
      lang: "svelte",
    },
    component: ContactOne,
  },
  {
    slug: "contact-two",
    title: "Contact Two",
    category: "contact",
    preview: "/preview/veil/contact/contact-two",
    itemId: "veil-contact-two",
    code: {
      code: ContactTwoCode,
      lang: "svelte",
    },
    component: ContactTwo,
  },
];
