<script lang="ts">
	import { all_veils_team } from "#lib/all_veils/team.js";
	import MistBlockPreview from "#lib/components/web/MistBlockPreview.svelte";
</script>

{#each all_veils_team as block}
	<MistBlockPreview {...block} />
{/each}
