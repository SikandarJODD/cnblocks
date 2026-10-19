<script lang="ts">
	import MistBlockPreview from "#lib/components/web/MistBlockPreview.svelte";
	import { mistForgotPasswordBlocks } from "#lib/config/mist-blocks.js";
</script>

{#each mistForgotPasswordBlocks as block}
	<MistBlockPreview {...block} />
{/each}
