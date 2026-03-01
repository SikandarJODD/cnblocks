import type { MistBlock } from "$lib/types/mists";

import LogoCloudOne from "$lib/components/veil/logo-cloud/logo-cloud-one.svelte";
import LogoCloudOneCode from "$lib/components/veil/logo-cloud/logo-cloud-one.svelte?raw";
import LogoCloudTwo from "$lib/components/veil/logo-cloud/logo-cloud-two.svelte";
import LogoCloudTwoCode from "$lib/components/veil/logo-cloud/logo-cloud-two.svelte?raw";

export const all_veils_logo_cloud: MistBlock[] = [
  {
    slug: "logo-cloud-one",
    title: "Logo Cloud One",
    category: "logo-cloud",
    preview: "/preview/veil/logo-cloud/logo-cloud-one",
    itemId: "veil-logo-cloud-one",
    code: {
      code: LogoCloudOneCode,
      lang: "svelte",
    },
    component: LogoCloudOne,
  },
  {
    slug: "logo-cloud-two",
    title: "Logo Cloud Two",
    category: "logo-cloud",
    preview: "/preview/veil/logo-cloud/logo-cloud-two",
    itemId: "veil-logo-cloud-two",
    code: {
      code: LogoCloudTwoCode,
      lang: "svelte",
    },
    component: LogoCloudTwo,
  },
];
