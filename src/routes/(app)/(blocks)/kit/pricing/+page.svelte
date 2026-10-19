<script>
	import { pricing } from "#lib/all_blocks/pricing.js";
	import BlockPreview from "#lib/components/web/BlockPreview.svelte";
</script>

{#each pricing as block}
	<BlockPreview {...block} />
{/each}
