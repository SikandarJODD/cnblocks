<script lang="ts">
	import { all_veils_header } from "#lib/all_veils/header.js";
	import MistBlockPreview from "#lib/components/web/MistBlockPreview.svelte";
</script>

{#each all_veils_header as block}
	<MistBlockPreview {...block} />
{/each}
