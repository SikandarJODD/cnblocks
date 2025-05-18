<script>
  import { all_mists_footer } from "$lib/all_mists/footer";
  import MistBlockPreview from "$lib/components/web/MistBlockPreview.svelte";
</script>

{#each all_mists_footer as block}
  <MistBlockPreview {...block} />
{/each}
