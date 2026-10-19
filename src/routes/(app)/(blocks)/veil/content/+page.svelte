<script lang="ts">
	import { all_veils_content } from "#lib/all_veils/content.js";
	import MistBlockPreview from "#lib/components/web/MistBlockPreview.svelte";
</script>


{#each all_veils_content as block}
	<MistBlockPreview {...block} />
{/each}
