<script lang="ts">
	import { all_veils_stats } from "#lib/all_veils/stats.js";
	import MistBlockPreview from "#lib/components/web/MistBlockPreview.svelte";
</script>

{#each all_veils_stats as block}
	<MistBlockPreview {...block} />
{/each}
