<script>
	import { mistHeroBlocks } from "#lib/config/mist-blocks.js";
	import MistBlockPreview from "#lib/components/web/MistBlockPreview.svelte";
</script>


{#each mistHeroBlocks as block}
	<MistBlockPreview {...block} />
{/each}
