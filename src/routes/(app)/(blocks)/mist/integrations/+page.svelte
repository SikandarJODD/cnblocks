<script>
	import { mistIntegrationBlocks } from "#lib/config/mist-blocks.js";
	import MistBlockPreview from "#lib/components/web/MistBlockPreview.svelte";
</script>


{#each mistIntegrationBlocks as block}
	<MistBlockPreview {...block} />
{/each}
