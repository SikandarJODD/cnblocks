<script>
	import { footer } from "#lib/all_blocks/footer.js";
	import BlockPreview from "#lib/components/web/BlockPreview.svelte";
	import { seoMetaTags } from "#lib/config/seo.js";
	import { MetaTags } from "svelte-meta-tags";
</script>

<MetaTags {...seoMetaTags} title="Footer" />
{#each footer as block}
	<BlockPreview {...block} />
{/each}
