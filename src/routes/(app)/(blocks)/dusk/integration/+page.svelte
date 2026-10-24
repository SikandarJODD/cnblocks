<script lang="ts">
	import { all_dusk_integration } from "#lib/all_dusk/integration.ts";
	import MistBlockPreview from "#lib/components/web/MistBlockPreview.svelte";
</script>

{#each all_dusk_integration as block}
	<MistBlockPreview {...block} />
{/each}
