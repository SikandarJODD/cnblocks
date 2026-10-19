<script lang="ts">
	import { all_veils_testimonial } from "#lib/all_veils/testimonial.js";
	import MistBlockPreview from "#lib/components/web/MistBlockPreview.svelte";
</script>


{#each all_veils_testimonial as block}
	<MistBlockPreview {...block} />
{/each}
