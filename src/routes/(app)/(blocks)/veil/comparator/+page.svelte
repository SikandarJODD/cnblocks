<script lang="ts">
	import { all_veils_comparator } from "#lib/all_veils/comparator.js";
	import MistBlockPreview from "#lib/components/web/MistBlockPreview.svelte";
</script>


{#each all_veils_comparator as block}
	<MistBlockPreview {...block} />
{/each}
