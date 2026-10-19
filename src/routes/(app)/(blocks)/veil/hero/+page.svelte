<script lang="ts">
	import { all_veils_hero } from "#lib/all_veils/hero.js";
	import MistBlockPreview from "#lib/components/web/MistBlockPreview.svelte";
</script>

{#each all_veils_hero as block}
	<MistBlockPreview {...block} />
{/each}
