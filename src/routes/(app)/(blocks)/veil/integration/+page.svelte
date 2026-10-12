<script lang="ts">
	import { all_veils_integration } from "#lib/all_veils/integration.js";
	import MistBlockPreview from "#lib/components/web/MistBlockPreview.svelte";
	import { seoMetaTags } from "#lib/config/seo.js";
	import { MetaTags } from "svelte-meta-tags";
</script>

<MetaTags {...seoMetaTags} title="Integration" />

{#each all_veils_integration as block}
	<MistBlockPreview {...block} />
{/each}
