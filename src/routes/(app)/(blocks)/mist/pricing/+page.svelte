<script>
	import { mistPricingBlocks } from "#lib/config/mist-blocks.js";
	import MistBlockPreview from "#lib/components/web/MistBlockPreview.svelte";
</script>

{#each mistPricingBlocks as block}
	<MistBlockPreview {...block} />
{/each}
