import type { Block } from "../../types/blocks";
import { getBlock } from "$lib";

// Components
import TeamOne from "$lib/components/blocks/team/team-one.svelte";
import TeamTwo from "$lib/components/blocks/team/team-two.svelte";

// Code
import TeamOneCode from "$lib/components/blocks/team/team-one.svelte?raw";
import TeamTwoCode from "$lib/components/blocks/team/team-two.svelte?raw";

let codes = [TeamOneCode, TeamTwoCode];
let components = [TeamOne, TeamTwo];

export let teams: Block[] = getBlock(
  components.length,
  "teams",
  codes,
  components
);
