<script>
	import { contact } from "#lib/all_blocks/contact.js";
	import BlockPreview from "#lib/components/web/BlockPreview.svelte";
</script>

{#each contact as block}
	<BlockPreview {...block} />
{/each}
