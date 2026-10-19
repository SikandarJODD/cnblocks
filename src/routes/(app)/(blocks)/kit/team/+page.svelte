<script>
	import { team } from "#lib/all_blocks/team.js";
	import BlockPreview from "#lib/components/web/BlockPreview.svelte";
</script>

{#each team as block}
	<BlockPreview {...block} />
{/each}
