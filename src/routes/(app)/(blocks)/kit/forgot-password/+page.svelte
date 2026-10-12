<script>
	import { forgot_password } from "#lib/all_blocks/forgot-password.js";
	import BlockPreview from "#lib/components/web/BlockPreview.svelte";
	import { seoMetaTags } from "#lib/config/seo.js";
	import { MetaTags } from "svelte-meta-tags";
</script>

<MetaTags {...seoMetaTags} title="Forgot Password" />

{#each forgot_password as block}
	<BlockPreview {...block} />
{/each}
