<script lang="ts">
  import { feature } from "$lib/all_blocks/features";

  const block = feature.find((item) => item.title === "four");

  if (!block) {
    throw new Error("Missing preview block for four in feature");
  }

  const PreviewComponent = block.component;
</script>

<PreviewComponent />
