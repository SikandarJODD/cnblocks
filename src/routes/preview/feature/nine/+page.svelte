<script lang="ts">
  import { feature } from "$lib/all_blocks/features";

  const block = feature.find((item) => item.title === "nine");

  if (!block) {
    throw new Error("Missing preview block for nine in feature");
  }

  const PreviewComponent = block.component;
</script>

<PreviewComponent />
