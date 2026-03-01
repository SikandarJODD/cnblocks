<script lang="ts">
	import { all_veils_team } from '$lib/all_veils/team';
	import MistBlockPreview from '$lib/components/web/MistBlockPreview.svelte';
	import { seoMetaTags } from '$lib/config/seo';
	import { MetaTags } from 'svelte-meta-tags';
</script>

<MetaTags {...seoMetaTags} title="Team" />

{#each all_veils_team as block}
	<MistBlockPreview {...block} />
{/each}
