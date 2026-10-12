<script lang="ts">
	import { all_veils_faqs } from "#lib/all_veils/faqs.js";
	import MistBlockPreview from "#lib/components/web/MistBlockPreview.svelte";
	import { seoMetaTags } from "#lib/config/seo.js";
	import { MetaTags } from "svelte-meta-tags";
</script>

<MetaTags {...seoMetaTags} title="FAQs" />

{#each all_veils_faqs as block}
	<MistBlockPreview {...block} />
{/each}
