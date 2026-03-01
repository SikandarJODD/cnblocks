<script lang="ts">
  import { faq } from "$lib/all_blocks/faq";

  const block = faq.find((item) => item.title === "one");

  if (!block) {
    throw new Error("Missing preview block for one in faq");
  }

  const PreviewComponent = block.component;
</script>

<PreviewComponent />
