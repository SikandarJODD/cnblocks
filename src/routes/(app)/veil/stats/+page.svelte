<script lang="ts">
	import { all_veils_stats } from '$lib/all_veils/stats';
	import MistBlockPreview from '$lib/components/web/MistBlockPreview.svelte';
	import { seoMetaTags } from '$lib/config/seo';
	import { MetaTags } from 'svelte-meta-tags';
</script>

<MetaTags {...seoMetaTags} title="Stats" />

{#each all_veils_stats as block}
	<MistBlockPreview {...block} />
{/each}
