<script>
	import { integration } from "#lib/all_blocks/integration.js";
	import BlockPreview from "#lib/components/web/BlockPreview.svelte";
	import { seoMetaTags } from "#lib/config/seo.js";
	import { MetaTags } from "svelte-meta-tags";
</script>

<MetaTags {...seoMetaTags} title="Integration" />

{#each integration as block}
	<BlockPreview {...block} />
{/each}
