<script lang="ts">
	import { all_veils_call_to_action } from "#lib/all_veils/call-to-action.js";
	import MistBlockPreview from "#lib/components/web/MistBlockPreview.svelte";
</script>


{#each all_veils_call_to_action as block}
	<MistBlockPreview {...block} />
{/each}
