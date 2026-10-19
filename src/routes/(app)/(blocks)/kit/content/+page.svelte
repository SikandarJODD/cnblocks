<script>
	import { content } from "#lib/all_blocks/content.js";
	import BlockPreview from "#lib/components/web/BlockPreview.svelte";
</script>

{#each content as block}
	<BlockPreview {...block} />
{/each}
