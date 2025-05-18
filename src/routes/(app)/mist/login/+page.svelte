<script lang="ts">
  import MistBlockPreview from "$lib/components/web/MistBlockPreview.svelte";
  import { all_mists_login } from "$lib/all_mists/login";
</script>

{#each all_mists_login as block}
  <MistBlockPreview {...block} />
{/each}
