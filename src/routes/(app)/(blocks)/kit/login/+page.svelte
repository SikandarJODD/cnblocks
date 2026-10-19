<script>
	import { login } from "#lib/all_blocks/login.js";
	import BlockPreview from "#lib/components/web/BlockPreview.svelte";
</script>

{#each login as block}
	<BlockPreview {...block} />
{/each}
