<script lang="ts">
	import { all_veils_integration } from '$lib/all_veils/integration';
	import MistBlockPreview from '$lib/components/web/MistBlockPreview.svelte';
	import { seoMetaTags } from '$lib/config/seo';
	import { MetaTags } from 'svelte-meta-tags';
</script>

<MetaTags {...seoMetaTags} title="Integration" />

{#each all_veils_integration as block}
	<MistBlockPreview {...block} />
{/each}
