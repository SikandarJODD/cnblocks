<script lang="ts">
	import { all_mists_testimonial } from "#lib/all_mists/testimonial.js";
	import MistBlockPreview from "#lib/components/web/MistBlockPreview.svelte";
	import { seoMetaTags } from "#lib/config/seo.js";
	import { MetaTags } from "svelte-meta-tags";
</script>

<MetaTags {...seoMetaTags} title="Testimonials" />

{#each all_mists_testimonial as block}
	<MistBlockPreview {...block} />
{/each}
