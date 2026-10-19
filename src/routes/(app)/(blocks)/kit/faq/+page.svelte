<script>
	import { faq } from "#lib/all_blocks/faq.js";
	import BlockPreview from "#lib/components/web/BlockPreview.svelte";
</script>

{#each faq as block}
	<BlockPreview {...block} />
{/each}
