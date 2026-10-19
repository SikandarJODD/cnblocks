<script>
	import { mistFooterBlocks } from "#lib/config/mist-blocks.js";
	import MistBlockPreview from "#lib/components/web/MistBlockPreview.svelte";
</script>

{#each mistFooterBlocks as block}
	<MistBlockPreview {...block} />
{/each}
