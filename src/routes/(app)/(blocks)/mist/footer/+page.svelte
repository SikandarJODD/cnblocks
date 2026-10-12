<script>
	import { all_mists_footer } from "#lib/all_mists/footer.js";
	import MistBlockPreview from "#lib/components/web/MistBlockPreview.svelte";
	import { seoMetaTags } from "#lib/config/seo.js";
	import { MetaTags } from "svelte-meta-tags";
</script>

<MetaTags {...seoMetaTags} title="Footer" />
{#each all_mists_footer as block}
	<MistBlockPreview {...block} />
{/each}
