<script>
	import { all_mists_logocloud } from "#lib/all_mists/logocloud.js";
	import MistBlockPreview from "#lib/components/web/MistBlockPreview.svelte";
	import { seoMetaTags } from "#lib/config/seo.js";
	import { MetaTags } from "svelte-meta-tags";
</script>

<MetaTags {...seoMetaTags} title="Logo Cloud" />

{#each all_mists_logocloud as block}
	<MistBlockPreview {...block} />
{/each}
