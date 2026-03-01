<script lang="ts">
  import { all_mists_stats } from "$lib/all_mists/stats";

  const block = all_mists_stats.find((item) => item.slug === "three");

  if (!block) {
    throw new Error("Missing preview block for three in all_mists_stats");
  }

  const PreviewComponent = block.component;
</script>

<PreviewComponent />
