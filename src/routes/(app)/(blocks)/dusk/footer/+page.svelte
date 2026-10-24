<script lang="ts">
	import { all_dusk_footer } from "#lib/all_dusk/footer.ts";
	import MistBlockPreview from "#lib/components/web/MistBlockPreview.svelte";
</script>

{#each all_dusk_footer as block}
	<MistBlockPreview {...block} />
{/each}
