<script lang="ts">
	import { mistTestimonialBlocks } from "#lib/config/mist-blocks.js";
	import MistBlockPreview from "#lib/components/web/MistBlockPreview.svelte";
</script>


{#each mistTestimonialBlocks as block}
	<MistBlockPreview {...block} />
{/each}
