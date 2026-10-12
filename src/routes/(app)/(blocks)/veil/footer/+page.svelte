<script lang="ts">
	import { all_veils_footer } from "#lib/all_veils/footer.js";
	import MistBlockPreview from "#lib/components/web/MistBlockPreview.svelte";
	import { seoMetaTags } from "#lib/config/seo.js";
	import { MetaTags } from "svelte-meta-tags";
</script>

<MetaTags {...seoMetaTags} title="Footer" />

{#each all_veils_footer as block}
	<MistBlockPreview {...block} />
{/each}
