<script lang="ts">
	import { mistFeatureBlocks } from "#lib/config/mist-blocks.js";
	import MistBlockPreview from "#lib/components/web/MistBlockPreview.svelte";
</script>

{#each mistFeatureBlocks as block}
	<MistBlockPreview {...block} />
{/each}
