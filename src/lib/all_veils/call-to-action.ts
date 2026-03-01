import type { MistBlock } from "$lib/types/mists";

import CallToActionFour from "$lib/components/veil/call-to-action/call-to-action-four.svelte";
import CallToActionFourCode from "$lib/components/veil/call-to-action/call-to-action-four.svelte?raw";
import CallToActionOne from "$lib/components/veil/call-to-action/call-to-action-one.svelte";
import CallToActionOneCode from "$lib/components/veil/call-to-action/call-to-action-one.svelte?raw";
import CallToActionThree from "$lib/components/veil/call-to-action/call-to-action-three.svelte";
import CallToActionThreeCode from "$lib/components/veil/call-to-action/call-to-action-three.svelte?raw";
import CallToActionTwo from "$lib/components/veil/call-to-action/call-to-action-two.svelte";
import CallToActionTwoCode from "$lib/components/veil/call-to-action/call-to-action-two.svelte?raw";

export const all_veils_call_to_action: MistBlock[] = [
  {
    slug: "call-to-action-four",
    title: "Call To Action Four",
    category: "call-to-action",
    preview: "/preview/veil/call-to-action/call-to-action-four",
    itemId: "veil-call-to-action-four",
    code: {
      code: CallToActionFourCode,
      lang: "svelte",
    },
    component: CallToActionFour,
  },
  {
    slug: "call-to-action-one",
    title: "Call To Action One",
    category: "call-to-action",
    preview: "/preview/veil/call-to-action/call-to-action-one",
    itemId: "veil-call-to-action-one",
    code: {
      code: CallToActionOneCode,
      lang: "svelte",
    },
    component: CallToActionOne,
  },
  {
    slug: "call-to-action-three",
    title: "Call To Action Three",
    category: "call-to-action",
    preview: "/preview/veil/call-to-action/call-to-action-three",
    itemId: "veil-call-to-action-three",
    code: {
      code: CallToActionThreeCode,
      lang: "svelte",
    },
    component: CallToActionThree,
  },
  {
    slug: "call-to-action-two",
    title: "Call To Action Two",
    category: "call-to-action",
    preview: "/preview/veil/call-to-action/call-to-action-two",
    itemId: "veil-call-to-action-two",
    code: {
      code: CallToActionTwoCode,
      lang: "svelte",
    },
    component: CallToActionTwo,
  },
];
