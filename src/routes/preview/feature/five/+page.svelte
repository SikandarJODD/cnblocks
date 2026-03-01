<script lang="ts">
  import { feature } from "$lib/all_blocks/features";

  const block = feature.find((item) => item.title === "five");

  if (!block) {
    throw new Error("Missing preview block for five in feature");
  }

  const PreviewComponent = block.component;
</script>

<PreviewComponent />
