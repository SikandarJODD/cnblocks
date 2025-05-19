import type { Block } from "../../types/blocks";
import { getBlock } from "$lib";

// comps
import IntegrationOne from "$lib/components/blocks/integration/integration-one.svelte";
import IntegrationTwo from "$lib/components/blocks/integration/integration-two.svelte";
import IntegrationThree from "$lib/components/blocks/integration/integration-three.svelte";
import IntegrationFour from "$lib/components/blocks/integration/integration-four.svelte";
import IntegrationFive from "$lib/components/blocks/integration/integration-five.svelte";
import IntegrationSix from "$lib/components/blocks/integration/integration-six.svelte";
import IntegrationSeven from "$lib/components/blocks/integration/integration-seven.svelte";
import IntegrationEight from "$lib/components/blocks/integration/integration-eight.svelte";

// codes
import IntegrationOneCode from "$lib/components/blocks/integration/integration-one.svelte?raw";
import IntegrationTwoCode from "$lib/components/blocks/integration/integration-two.svelte?raw";
import IntegrationThreeCode from "$lib/components/blocks/integration/integration-three.svelte?raw";
import IntegrationFourCode from "$lib/components/blocks/integration/integration-four.svelte?raw";
import IntegrationFiveCode from "$lib/components/blocks/integration/integration-five.svelte?raw";
import IntegrationSixCode from "$lib/components/blocks/integration/integration-six.svelte?raw";
import IntegrationSevenCode from "$lib/components/blocks/integration/integration-seven.svelte?raw";
import IntegrationEightCode from "$lib/components/blocks/integration/integration-eight.svelte?raw";

let codes = [
  IntegrationOneCode,
  IntegrationTwoCode,
  IntegrationThreeCode,
  IntegrationFourCode,
  IntegrationFiveCode,
  IntegrationSixCode,
  IntegrationSevenCode,
  IntegrationEightCode,
];
let components = [
  IntegrationOne,
  IntegrationTwo,
  IntegrationThree,
  IntegrationFour,
  IntegrationFive,
  IntegrationSix,
  IntegrationSeven,
  IntegrationEight,
];

export let integration: Block[] = getBlock(
  components.length,
  "integration",
  codes,
  components
);
