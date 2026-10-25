<script lang="ts">
	import { all_dusk_faqs } from "#lib/all_dusk/faqs.ts";
	import MistBlockPreview from "#lib/components/web/MistBlockPreview.svelte";
</script>

{#each all_dusk_faqs as block}
	<MistBlockPreview {...block} />
{/each}
