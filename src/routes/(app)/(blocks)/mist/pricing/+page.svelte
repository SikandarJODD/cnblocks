<script>
	import { all_mists_pricing } from "#lib/all_mists/pricing.js";
	import MistBlockPreview from "#lib/components/web/MistBlockPreview.svelte";
</script>

{#each all_mists_pricing as block}
	<MistBlockPreview {...block} />
{/each}
