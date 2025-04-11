import type { Block } from "../../types/blocks";
import { getBlock } from "$lib";

// comps
import IntegrationOne from "$lib/components/blocks/integrations/integration-one.svelte";
import IntegrationTwo from "$lib/components/blocks/integrations/integration-two.svelte";
import IntegrationThree from "$lib/components/blocks/integrations/integration-three.svelte";
import IntegrationFour from "$lib/components/blocks/integrations/integration-four.svelte";
import IntegrationFive from "$lib/components/blocks/integrations/integration-five.svelte";
import IntegrationSix from "$lib/components/blocks/integrations/integration-six.svelte";
import IntegrationSeven from "$lib/components/blocks/integrations/integration-seven.svelte";
import IntegrationEight from "$lib/components/blocks/integrations/integration-eight.svelte";

// codes
import IntegrationOneCode from "$lib/components/blocks/integrations/integration-one.svelte?raw";
import IntegrationTwoCode from "$lib/components/blocks/integrations/integration-two.svelte?raw";
import IntegrationThreeCode from "$lib/components/blocks/integrations/integration-three.svelte?raw";
import IntegrationFourCode from "$lib/components/blocks/integrations/integration-four.svelte?raw";
import IntegrationFiveCode from "$lib/components/blocks/integrations/integration-five.svelte?raw";
import IntegrationSixCode from "$lib/components/blocks/integrations/integration-six.svelte?raw";
import IntegrationSevenCode from "$lib/components/blocks/integrations/integration-seven.svelte?raw";
import IntegrationEightCode from "$lib/components/blocks/integrations/integration-eight.svelte?raw";

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
