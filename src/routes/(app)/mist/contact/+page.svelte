<script>
  import { all_mists_contact } from "$lib/all_mists/contact";
  import MistBlockPreview from "$lib/components/web/MistBlockPreview.svelte";
</script>

{#each all_mists_contact as block}
  <MistBlockPreview {...block} />
{/each}
