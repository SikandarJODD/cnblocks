<script>
	import { mistStatsBlocks } from "#lib/config/mist-blocks.js";
	import MistBlockPreview from "#lib/components/web/MistBlockPreview.svelte";
</script>


{#each mistStatsBlocks as block}
	<MistBlockPreview {...block} />
{/each}
