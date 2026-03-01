<script lang="ts">
  import { team } from "$lib/all_blocks/team";

  const block = team.find((item) => item.title === "two");

  if (!block) {
    throw new Error("Missing preview block for two in team");
  }

  const PreviewComponent = block.component;
</script>

<PreviewComponent />
