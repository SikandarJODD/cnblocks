<script>
	import { feature } from "#lib/all_blocks/features.js";
	import BlockPreview from "#lib/components/web/BlockPreview.svelte";
</script>


{#each feature as block}
	<BlockPreview {...block} />
{/each}
