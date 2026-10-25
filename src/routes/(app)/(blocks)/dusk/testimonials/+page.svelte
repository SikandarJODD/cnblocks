<script lang="ts">
	import { all_dusk_testimonials } from "#lib/all_dusk/testimonials.ts";
	import MistBlockPreview from "#lib/components/web/MistBlockPreview.svelte";
</script>

{#each all_dusk_testimonials as block}
	<MistBlockPreview {...block} />
{/each}
