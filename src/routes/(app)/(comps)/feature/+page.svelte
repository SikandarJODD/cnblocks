<script>
	import { feature } from "#lib/all_blocks/features.js";
	import BlockPreview from "#lib/components/web/BlockPreview.svelte";
	import { seoMetaTags } from "#lib/config/seo.js";
	import { MetaTags } from "svelte-meta-tags";
</script>

<MetaTags {...seoMetaTags} title="Feature" />

{#each feature as block}
	<BlockPreview {...block} />
{/each}
