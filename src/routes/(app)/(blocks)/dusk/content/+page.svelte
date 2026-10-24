<script lang="ts">
	import { all_dusk_content } from "#lib/all_dusk/content.ts";
	import MistBlockPreview from "#lib/components/web/MistBlockPreview.svelte";
</script>

{#each all_dusk_content as block}
	<MistBlockPreview {...block} />
{/each}
