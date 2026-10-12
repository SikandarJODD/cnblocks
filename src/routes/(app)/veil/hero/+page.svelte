<script lang="ts">
	import { all_veils_hero } from "#lib/all_veils/hero.js";
	import MistBlockPreview from "#lib/components/web/MistBlockPreview.svelte";
	import { seoMetaTags } from "#lib/config/seo.js";
	import { MetaTags } from "svelte-meta-tags";
</script>

<MetaTags {...seoMetaTags} title="Hero" />

{#each all_veils_hero as block}
	<MistBlockPreview {...block} />
{/each}
