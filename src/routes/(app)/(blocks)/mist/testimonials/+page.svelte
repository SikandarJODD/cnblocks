<script lang="ts">
	import { all_mists_testimonial } from "#lib/all_mists/testimonial.js";
	import MistBlockPreview from "#lib/components/web/MistBlockPreview.svelte";
</script>


{#each all_mists_testimonial as block}
	<MistBlockPreview {...block} />
{/each}
