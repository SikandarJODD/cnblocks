<script lang="ts">
	import { all_dusk_call_to_action } from "#lib/all_dusk/call-to-action.ts";
	import MistBlockPreview from "#lib/components/web/MistBlockPreview.svelte";
</script>

{#each all_dusk_call_to_action as block}
	<MistBlockPreview {...block} />
{/each}
