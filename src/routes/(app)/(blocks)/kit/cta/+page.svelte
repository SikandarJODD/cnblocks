<script>
	import { cta } from "#lib/all_blocks/cta.js";
	import BlockPreview from "#lib/components/web/BlockPreview.svelte";
</script>

{#each cta as block}
	<BlockPreview {...block} />
{/each}
