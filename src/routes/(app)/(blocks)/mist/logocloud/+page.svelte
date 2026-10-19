<script>
	import { mistLogoCloudBlocks } from "#lib/config/mist-blocks.js";
	import MistBlockPreview from "#lib/components/web/MistBlockPreview.svelte";
</script>


{#each mistLogoCloudBlocks as block}
	<MistBlockPreview {...block} />
{/each}
