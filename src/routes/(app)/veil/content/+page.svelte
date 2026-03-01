<script lang="ts">
	import { all_veils_content } from "$lib/all_veils/content";
	import MistBlockPreview from "$lib/components/web/MistBlockPreview.svelte";
	import { seoMetaTags } from "$lib/config/seo";
	import { MetaTags } from "svelte-meta-tags";
</script>

<MetaTags {...seoMetaTags} title="Content" />

{#each all_veils_content as block}
	<MistBlockPreview {...block} />
{/each}
