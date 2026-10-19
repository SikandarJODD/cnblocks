<script>
	import { logocloud } from "#lib/all_blocks/logo-cloud.js";
	import BlockPreview from "#lib/components/web/BlockPreview.svelte";
</script>

{#each logocloud as block}
	<BlockPreview {...block} />
{/each}
