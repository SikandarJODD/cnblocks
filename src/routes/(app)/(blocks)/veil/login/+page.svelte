<script lang="ts">
	import { all_veils_login } from "#lib/all_veils/login.js";
	import MistBlockPreview from "#lib/components/web/MistBlockPreview.svelte";
</script>

{#each all_veils_login as block}
	<MistBlockPreview {...block} />
{/each}
