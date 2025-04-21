<script>
  import { forgot_password } from "$lib/all_blocks/forgot-password";
  import BlockPreview from "$lib/components/web/BlockPreview.svelte";
</script>

{#each forgot_password as block}
  <BlockPreview {...block} />
{/each}