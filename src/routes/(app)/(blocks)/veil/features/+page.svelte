<script lang="ts">
	import { all_veils_features } from "#lib/all_veils/features.js";
	import MistBlockPreview from "#lib/components/web/MistBlockPreview.svelte";
</script>

{#each all_veils_features as block}
	<MistBlockPreview {...block} />
{/each}
