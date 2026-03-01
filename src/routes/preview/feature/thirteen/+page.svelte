<script lang="ts">
  import { feature } from "$lib/all_blocks/features";

  const block = feature.find((item) => item.title === "thirteen");

  if (!block) {
    throw new Error("Missing preview block for thirteen in feature");
  }

  const PreviewComponent = block.component;
</script>

<PreviewComponent />
