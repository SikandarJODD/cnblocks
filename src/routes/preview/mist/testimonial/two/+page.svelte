<script lang="ts">
  import { all_mists_testimonial } from "$lib/all_mists/testimonial";

  const block = all_mists_testimonial.find((item) => item.slug === "two");

  if (!block) {
    throw new Error("Missing preview block for two in all_mists_testimonial");
  }

  const PreviewComponent = block.component;
</script>

<PreviewComponent />
