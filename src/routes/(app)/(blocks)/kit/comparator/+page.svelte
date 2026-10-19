<script>
	import { comparator } from "#lib/all_blocks/comparator.js";
	import BlockPreview from "#lib/components/web/BlockPreview.svelte";
</script>

{#each comparator as block}
	<BlockPreview {...block} />
{/each}
