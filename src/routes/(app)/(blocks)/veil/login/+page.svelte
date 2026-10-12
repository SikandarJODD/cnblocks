<script lang="ts">
	import { all_veils_login } from "#lib/all_veils/login.js";
	import MistBlockPreview from "#lib/components/web/MistBlockPreview.svelte";
	import { seoMetaTags } from "#lib/config/seo.js";
	import { MetaTags } from "svelte-meta-tags";
</script>

<MetaTags {...seoMetaTags} title="Login" />

{#each all_veils_login as block}
	<MistBlockPreview {...block} />
{/each}
