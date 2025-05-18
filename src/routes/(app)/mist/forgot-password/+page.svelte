<script lang="ts">
  import MistBlockPreview from "$lib/components/web/MistBlockPreview.svelte";
  import { all_mists_forgot_password } from "$lib/all_mists/forgot_password";
</script>

{#each all_mists_forgot_password as block}
  <MistBlockPreview {...block} />
{/each}
