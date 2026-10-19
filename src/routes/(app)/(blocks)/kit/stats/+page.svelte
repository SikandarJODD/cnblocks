<script>
	import { stats } from "#lib/all_blocks/stats.js";
	import BlockPreview from "#lib/components/web/BlockPreview.svelte";
</script>

{#each stats as block}
	<BlockPreview {...block} />
{/each}
