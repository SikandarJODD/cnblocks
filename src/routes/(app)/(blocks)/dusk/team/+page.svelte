<script lang="ts">
	import { all_dusk_team } from "#lib/all_dusk/team.ts";
	import MistBlockPreview from "#lib/components/web/MistBlockPreview.svelte";
</script>

{#each all_dusk_team as block}
	<MistBlockPreview {...block} />
{/each}
