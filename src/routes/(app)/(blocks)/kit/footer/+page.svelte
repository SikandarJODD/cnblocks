<script>
	import { footer } from "#lib/all_blocks/footer.js";
	import BlockPreview from "#lib/components/web/BlockPreview.svelte";
</script>

{#each footer as block}
	<BlockPreview {...block} />
{/each}
