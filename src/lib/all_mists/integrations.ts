import type { MistBlock } from "$lib/types/mists";
import IntegrationOne from "$lib/components/mist/mintegration/one.svelte";
import IntegrationOneCode from "$lib/components/mist/mintegration/one.svelte?raw";
import IntegrationTwo from "$lib/components/mist/mintegration/two.svelte";
import IntegrationTwoCode from "$lib/components/mist/mintegration/two.svelte?raw";
import IntegrationThree from "$lib/components/mist/mintegration/three.svelte";
import IntegrationThreeCode from "$lib/components/mist/mintegration/three.svelte?raw";

export const all_mists_integrations: MistBlock[] = [
  {
    slug: "one",
    title: "Simple Integration List",
    category: "integration",
    preview: "/preview/mist/integration/one",
    code: {
      code: IntegrationOneCode,
      lang: "svelte",
    },
    component: IntegrationOne,
  },
  {
    slug: "two",
    title: "Centered Integration List",
    category: "integration",
    preview: "/preview/mist/integration/two",
    code: {
      code: IntegrationTwoCode,
      lang: "svelte",
    },
    component: IntegrationTwo,
  },
  {
    slug: "three",
    title: "Integration Cards Grid",
    category: "integration",
    preview: "/preview/mist/integration/three",
    code: {
      code: IntegrationThreeCode,
      lang: "svelte",
    },
    component: IntegrationThree,
  },
];
