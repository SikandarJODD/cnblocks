<script lang="ts">
	import { all_dusk_logo_cloud } from "#lib/all_dusk/logo-cloud.ts";
	import MistBlockPreview from "#lib/components/web/MistBlockPreview.svelte";
</script>

{#each all_dusk_logo_cloud as block}
	<MistBlockPreview {...block} />
{/each}
