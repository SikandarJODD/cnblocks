<script lang="ts">
  import { all_mists_features } from "$lib/all_mists/feature";
  import MistBlockPreview from "$lib/components/web/MistBlockPreview.svelte";
</script>

{#each all_mists_features as block}
  <MistBlockPreview {...block} />
{/each}
