<script lang="ts">
	import { all_veils_contact } from "#lib/all_veils/contact.js";
	import MistBlockPreview from "#lib/components/web/MistBlockPreview.svelte";
</script>


{#each all_veils_contact as block}
	<MistBlockPreview {...block} />
{/each}
