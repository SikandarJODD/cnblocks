<script lang="ts">
  import { pricing } from "$lib/all_blocks/pricing";

  const block = pricing.find((item) => item.title === "one");

  if (!block) {
    throw new Error("Missing preview block for one in pricing");
  }

  const PreviewComponent = block.component;
</script>

<PreviewComponent />
