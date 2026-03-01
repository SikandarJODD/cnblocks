<script lang="ts">
  import { all_mists_footer } from "$lib/all_mists/footer";

  const block = all_mists_footer.find((item) => item.slug === "two");

  if (!block) {
    throw new Error("Missing preview block for two in all_mists_footer");
  }

  const PreviewComponent = block.component;
</script>

<PreviewComponent />
