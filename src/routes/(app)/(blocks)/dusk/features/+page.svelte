<script lang="ts">
	import { all_dusk_features } from "#lib/all_dusk/features.ts";
	import MistBlockPreview from "#lib/components/web/MistBlockPreview.svelte";
</script>

{#each all_dusk_features as block}
	<MistBlockPreview {...block} />
{/each}
