<script>
	import { all_mists_team } from "#lib/all_mists/team.js";
	import MistBlockPreview from "#lib/components/web/MistBlockPreview.svelte";
	import { seoMetaTags } from "#lib/config/seo.js";
	import { MetaTags } from "svelte-meta-tags";
</script>

<MetaTags {...seoMetaTags} title="Team" />
{#each all_mists_team as block}
	<MistBlockPreview {...block} />
{/each}
