<script lang="ts">
	import { all_dusk_pricing } from "#lib/all_dusk/pricing.ts";
	import MistBlockPreview from "#lib/components/web/MistBlockPreview.svelte";
</script>

{#each all_dusk_pricing as block}
	<MistBlockPreview {...block} />
{/each}
