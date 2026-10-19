<script>
	import { mistContactBlocks } from "#lib/config/mist-blocks.js";
	import MistBlockPreview from "#lib/components/web/MistBlockPreview.svelte";
</script>

{#each mistContactBlocks as block}
	<MistBlockPreview {...block} />
{/each}
