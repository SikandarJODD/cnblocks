<script>
	import { logocloud } from "$lib/all_blocks/logo-cloud";
	import BlockPreview from "$lib/components/web/BlockPreview.svelte";
	import { seoMetaTags } from "$lib/config/seo";
	import { MetaTags } from "svelte-meta-tags";
</script>

<MetaTags {...seoMetaTags} title="Logo Cloud" />
{#each logocloud as block}
	<BlockPreview {...block} />
{/each}
