<script lang="ts">
	import { all_mists_features } from "#lib/all_mists/feature.js";
	import MistBlockPreview from "#lib/components/web/MistBlockPreview.svelte";
	import { seoMetaTags } from "#lib/config/seo.js";
	import { MetaTags } from "svelte-meta-tags";
</script>

<MetaTags {...seoMetaTags} title="Feature" />

{#each all_mists_features as block}
	<MistBlockPreview {...block} />
{/each}
