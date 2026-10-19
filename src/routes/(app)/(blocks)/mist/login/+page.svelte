<script lang="ts">
	import MistBlockPreview from "#lib/components/web/MistBlockPreview.svelte";
	import { mistLoginBlocks } from "#lib/config/mist-blocks.js";
</script>

{#each mistLoginBlocks as block}
	<MistBlockPreview {...block} />
{/each}
