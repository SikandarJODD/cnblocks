<script lang="ts">
	import MistBlockPreview from "#lib/components/web/MistBlockPreview.svelte";
	import { mistSignupBlocks } from "#lib/config/mist-blocks.js";
</script>


{#each mistSignupBlocks as block}
	<MistBlockPreview {...block} />
{/each}
