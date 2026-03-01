<script lang="ts">
  import { content } from "$lib/all_blocks/content";

  const block = content.find((item) => item.title === "two");

  if (!block) {
    throw new Error("Missing preview block for two in content");
  }

  const PreviewComponent = block.component;
</script>

<PreviewComponent />
