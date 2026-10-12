<script>
	import { content } from "#lib/all_blocks/content.js";
	import BlockPreview from "#lib/components/web/BlockPreview.svelte";
	import { seoMetaTags } from "#lib/config/seo.js";
	import { MetaTags } from "svelte-meta-tags";
</script>

<MetaTags {...seoMetaTags} title="Content" />
{#each content as block}
	<BlockPreview {...block} />
{/each}
