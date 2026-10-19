<script>
	import { mistContentBlocks } from "#lib/config/mist-blocks.js";
	import MistBlockPreview from "#lib/components/web/MistBlockPreview.svelte";
</script>


{#each mistContentBlocks as block}
	<MistBlockPreview {...block} />
{/each}
