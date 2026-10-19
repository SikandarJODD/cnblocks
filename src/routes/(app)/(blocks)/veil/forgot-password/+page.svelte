<script lang="ts">
	import { all_veils_forgot_password } from "#lib/all_veils/forgot-password.js";
	import MistBlockPreview from "#lib/components/web/MistBlockPreview.svelte";
</script>


{#each all_veils_forgot_password as block}
	<MistBlockPreview {...block} />
{/each}
