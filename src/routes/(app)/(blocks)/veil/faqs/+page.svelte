<script lang="ts">
	import { all_veils_faqs } from "#lib/all_veils/faqs.js";
	import MistBlockPreview from "#lib/components/web/MistBlockPreview.svelte";
</script>


{#each all_veils_faqs as block}
	<MistBlockPreview {...block} />
{/each}
