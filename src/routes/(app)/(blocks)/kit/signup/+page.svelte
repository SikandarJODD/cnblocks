<script>
	import { signup } from "#lib/all_blocks/signup.js";
	import BlockPreview from "#lib/components/web/BlockPreview.svelte";
	import { seoMetaTags } from "#lib/config/seo.js";
	import { MetaTags } from "svelte-meta-tags";
</script>

<MetaTags {...seoMetaTags} title="Sign Up" />

{#each signup as block}
	<BlockPreview {...block} />
{/each}
