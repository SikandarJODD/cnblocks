<script lang="ts">
	import MistBlockPreview from "#lib/components/web/MistBlockPreview.svelte";
	import { all_mists_signup } from "#lib/all_mists/signup.js";
	import { seoMetaTags } from "#lib/config/seo.js";
	import { MetaTags } from "svelte-meta-tags";
</script>

<MetaTags {...seoMetaTags} title="Signup" />

{#each all_mists_signup as block}
	<MistBlockPreview {...block} />
{/each}
