<script lang="ts">
  import MistBlockPreview from "$lib/components/web/MistBlockPreview.svelte";
  import { all_mists_signup } from "$lib/all_mists/signup";
</script>

{#each all_mists_signup as block}
  <MistBlockPreview {...block} />
{/each}
