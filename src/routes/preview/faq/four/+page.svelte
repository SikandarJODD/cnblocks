<script lang="ts">
  import { faq } from "$lib/all_blocks/faq";

  const block = faq.find((item) => item.title === "four");

  if (!block) {
    throw new Error("Missing preview block for four in faq");
  }

  const PreviewComponent = block.component;
</script>

<PreviewComponent />
