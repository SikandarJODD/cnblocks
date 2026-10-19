<script>
	import { mistCtaBlocks } from "#lib/config/mist-blocks.js";
	import MistBlockPreview from "#lib/components/web/MistBlockPreview.svelte";
</script>

{#each mistCtaBlocks as block}
	<MistBlockPreview {...block} />
{/each}
