<script>
	import { mistTeamBlocks } from "#lib/config/mist-blocks.js";
	import MistBlockPreview from "#lib/components/web/MistBlockPreview.svelte";
</script>

{#each mistTeamBlocks as block}
	<MistBlockPreview {...block} />
{/each}
