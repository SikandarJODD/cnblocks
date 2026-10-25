<script lang="ts">
	import { all_dusk_stats } from "#lib/all_dusk/stats.ts";
	import MistBlockPreview from "#lib/components/web/MistBlockPreview.svelte";
</script>

{#each all_dusk_stats as block}
	<MistBlockPreview {...block} />
{/each}
