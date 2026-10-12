<script>
	import { cta } from "#lib/all_blocks/cta.js";
	import BlockPreview from "#lib/components/web/BlockPreview.svelte";
	import { seoMetaTags } from "#lib/config/seo.js";
	import { MetaTags } from "svelte-meta-tags";
</script>

<MetaTags {...seoMetaTags} title="Call To Action" />
{#each cta as block}
	<BlockPreview {...block} />
{/each}
