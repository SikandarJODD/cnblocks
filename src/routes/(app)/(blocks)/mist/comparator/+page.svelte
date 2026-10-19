<script>
	import { mistComparatorBlocks } from "#lib/config/mist-blocks.js";
	import MistBlockPreview from "#lib/components/web/MistBlockPreview.svelte";
</script>

{#each mistComparatorBlocks as block}
	<MistBlockPreview {...block} />
{/each}
