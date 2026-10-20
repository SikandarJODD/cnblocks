<script lang="ts">
	import { all_dusk_hero } from "#lib/all_dusk/hero.js";
	import MistBlockPreview from "#lib/components/web/MistBlockPreview.svelte";
</script>

{#each all_dusk_hero as block}
	<MistBlockPreview {...block} />
{/each}
