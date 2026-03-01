<script lang="ts">
  import { all_mists_footer } from "$lib/all_mists/footer";

  const block = all_mists_footer.find((item) => item.slug === "four");

  if (!block) {
    throw new Error("Missing preview block for four in all_mists_footer");
  }

  const PreviewComponent = block.component;
</script>

<PreviewComponent />
