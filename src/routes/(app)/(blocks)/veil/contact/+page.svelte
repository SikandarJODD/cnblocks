<script lang="ts">
	import { all_veils_contact } from "#lib/all_veils/contact.js";
	import MistBlockPreview from "#lib/components/web/MistBlockPreview.svelte";
	import { seoMetaTags } from "#lib/config/seo.js";
	import { MetaTags } from "svelte-meta-tags";
</script>

<MetaTags {...seoMetaTags} title="Contact" />

{#each all_veils_contact as block}
	<MistBlockPreview {...block} />
{/each}
