<script>
  import { faq } from "$lib/all_blocks/faqs";
  import BlockPreview from "$lib/components/web/BlockPreview.svelte";
</script>

{#each faq as block}
  <BlockPreview {...block} />
{/each}
