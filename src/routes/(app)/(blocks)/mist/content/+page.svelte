<script>
	import { all_mists_content } from "#lib/all_mists/content.js";
	import MistBlockPreview from "#lib/components/web/MistBlockPreview.svelte";
</script>


{#each all_mists_content as block}
	<MistBlockPreview {...block} />
{/each}
