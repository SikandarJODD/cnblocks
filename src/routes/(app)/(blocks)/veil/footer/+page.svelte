<script lang="ts">
	import { all_veils_footer } from "#lib/all_veils/footer.js";
	import MistBlockPreview from "#lib/components/web/MistBlockPreview.svelte";
</script>

{#each all_veils_footer as block}
	<MistBlockPreview {...block} />
{/each}
