<script>
	import { signup } from "#lib/all_blocks/signup.js";
	import BlockPreview from "#lib/components/web/BlockPreview.svelte";
</script>

{#each signup as block}
	<BlockPreview {...block} />
{/each}
