<script>
	import { all_mists_integrations } from "#lib/all_mists/integrations.js";
	import MistBlockPreview from "#lib/components/web/MistBlockPreview.svelte";
	import { seoMetaTags } from "#lib/config/seo.js";
	import { MetaTags } from "svelte-meta-tags";
</script>

<MetaTags {...seoMetaTags} title="Integrations" />

{#each all_mists_integrations as block}
	<MistBlockPreview {...block} />
{/each}
