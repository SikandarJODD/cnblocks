<script lang="ts">
	import { all_veils_logo_cloud } from "#lib/all_veils/logo-cloud.js";
	import MistBlockPreview from "#lib/components/web/MistBlockPreview.svelte";
</script>


{#each all_veils_logo_cloud as block}
	<MistBlockPreview {...block} />
{/each}
