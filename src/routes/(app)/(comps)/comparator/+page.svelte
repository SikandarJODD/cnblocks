<script>
	import { comparator } from "#lib/all_blocks/comparator.js";
	import BlockPreview from "#lib/components/web/BlockPreview.svelte";
	import { seoMetaTags } from "#lib/config/seo.js";
	import { MetaTags } from "svelte-meta-tags";
</script>

<MetaTags {...seoMetaTags} title="Comparator" />
{#each comparator as block}
	<BlockPreview {...block} />
{/each}
