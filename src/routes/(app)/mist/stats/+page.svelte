<script>
	import { all_mists_stats } from "#lib/all_mists/stats.js";
	import MistBlockPreview from "#lib/components/web/MistBlockPreview.svelte";
	import { seoMetaTags } from "#lib/config/seo.js";
	import { MetaTags } from "svelte-meta-tags";
</script>

<MetaTags {...seoMetaTags} title="Stats" />

{#each all_mists_stats as block}
	<MistBlockPreview {...block} />
{/each}
