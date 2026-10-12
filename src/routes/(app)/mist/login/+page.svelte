<script lang="ts">
	import MistBlockPreview from "#lib/components/web/MistBlockPreview.svelte";
	import { all_mists_login } from "#lib/all_mists/login.js";
	import { seoMetaTags } from "#lib/config/seo.js";
	import { MetaTags } from "svelte-meta-tags";
</script>

<MetaTags {...seoMetaTags} title="Login" />

{#each all_mists_login as block}
	<MistBlockPreview {...block} />
{/each}
