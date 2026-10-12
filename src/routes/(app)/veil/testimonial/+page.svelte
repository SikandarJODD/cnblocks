<script lang="ts">
	import { all_veils_testimonial } from "#lib/all_veils/testimonial.js";
	import MistBlockPreview from "#lib/components/web/MistBlockPreview.svelte";
	import { seoMetaTags } from "#lib/config/seo.js";
	import { MetaTags } from "svelte-meta-tags";
</script>

<MetaTags {...seoMetaTags} title="Testimonial" />

{#each all_veils_testimonial as block}
	<MistBlockPreview {...block} />
{/each}
