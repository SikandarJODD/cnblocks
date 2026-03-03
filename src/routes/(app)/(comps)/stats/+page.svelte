<script>
	import { stats } from "$lib/all_blocks/stats";
	import BlockPreview from "$lib/components/web/BlockPreview.svelte";
	import { seoMetaTags } from "$lib/config/seo";
	import { MetaTags } from "svelte-meta-tags";
</script>

<MetaTags {...seoMetaTags} title="Stats" />
{#each stats as block}
	<BlockPreview {...block} />
{/each}
