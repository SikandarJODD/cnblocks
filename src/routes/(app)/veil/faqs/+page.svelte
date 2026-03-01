<script lang="ts">
	import { all_veils_faqs } from "$lib/all_veils/faqs";
	import MistBlockPreview from "$lib/components/web/MistBlockPreview.svelte";
	import { seoMetaTags } from "$lib/config/seo";
	import { MetaTags } from "svelte-meta-tags";
</script>

<MetaTags {...seoMetaTags} title="FAQs" />

{#each all_veils_faqs as block}
	<MistBlockPreview {...block} />
{/each}
