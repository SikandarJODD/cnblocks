<script lang="ts">
  import { feature } from "$lib/all_blocks/features";

  const block = feature.find((item) => item.title === "two");

  if (!block) {
    throw new Error("Missing preview block for two in feature");
  }

  const PreviewComponent = block.component;
</script>

<PreviewComponent />
