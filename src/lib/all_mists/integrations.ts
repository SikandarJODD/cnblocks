import type { MistBlock } from "$lib/types/mists";
import IntegrationOne from "$lib/components/mist/integration/integration-one.svelte";
import IntegrationTwo from "$lib/components/mist/integration/integration-two.svelte";
import IntegrationThree from "$lib/components/mist/integration/integration-three.svelte";

export const all_mists_integrations: MistBlock[] = [
  {
    slug: "one",
    title: "Simple Integration List",
    category: "integration",
    preview: "/preview/mist/integration/one",
    code: {
      code: (
        await import(
          "$lib/components/mist/integration/integration-one.svelte?raw"
        )
      ).default,
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
      code: (
        await import(
          "$lib/components/mist/integration/integration-two.svelte?raw"
        )
      ).default,
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
      code: (
        await import(
          "$lib/components/mist/integration/integration-three.svelte?raw"
        )
      ).default,
      lang: "svelte",
    },
    component: IntegrationThree,
  },
];
