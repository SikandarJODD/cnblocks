<script lang="ts">
	import { all_veils_comparator } from '$lib/all_veils/comparator';
	import MistBlockPreview from '$lib/components/web/MistBlockPreview.svelte';
	import { seoMetaTags } from '$lib/config/seo';
	import { MetaTags } from 'svelte-meta-tags';
</script>

<MetaTags {...seoMetaTags} title="Comparator" />

{#each all_veils_comparator as block}
	<MistBlockPreview {...block} />
{/each}
