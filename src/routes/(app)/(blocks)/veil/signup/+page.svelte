<script lang="ts">
	import { all_veils_signup } from "#lib/all_veils/signup.js";
	import MistBlockPreview from "#lib/components/web/MistBlockPreview.svelte";
</script>


{#each all_veils_signup as block}
	<MistBlockPreview {...block} />
{/each}
