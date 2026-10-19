<script lang="ts">
	import { all_veils_integration } from "#lib/all_veils/integration.js";
	import MistBlockPreview from "#lib/components/web/MistBlockPreview.svelte";
</script>

{#each all_veils_integration as block}
	<MistBlockPreview {...block} />
{/each}
