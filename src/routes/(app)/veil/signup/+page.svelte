<script lang="ts">
	import { all_veils_signup } from '$lib/all_veils/signup';
	import MistBlockPreview from '$lib/components/web/MistBlockPreview.svelte';
	import { seoMetaTags } from '$lib/config/seo';
	import { MetaTags } from 'svelte-meta-tags';
</script>

<MetaTags {...seoMetaTags} title="Signup" />

{#each all_veils_signup as block}
	<MistBlockPreview {...block} />
{/each}
