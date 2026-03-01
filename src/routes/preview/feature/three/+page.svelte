<script lang="ts">
  import { feature } from "$lib/all_blocks/features";

  const block = feature.find((item) => item.title === "three");

  if (!block) {
    throw new Error("Missing preview block for three in feature");
  }

  const PreviewComponent = block.component;
</script>

<PreviewComponent />
