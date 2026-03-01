<script lang="ts">
  import { faq } from "$lib/all_blocks/faq";

  const block = faq.find((item) => item.title === "two");

  if (!block) {
    throw new Error("Missing preview block for two in faq");
  }

  const PreviewComponent = block.component;
</script>

<PreviewComponent />
