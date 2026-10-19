<script lang="ts">
	import { all_veils_pricing } from "#lib/all_veils/pricing.js";
	import MistBlockPreview from "#lib/components/web/MistBlockPreview.svelte";
</script>


{#each all_veils_pricing as block}
	<MistBlockPreview {...block} />
{/each}
