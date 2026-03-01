<script lang="ts">
	import { all_veils_forgot_password } from "$lib/all_veils/forgot-password";
	import MistBlockPreview from "$lib/components/web/MistBlockPreview.svelte";
	import { seoMetaTags } from "$lib/config/seo";
	import { MetaTags } from "svelte-meta-tags";
</script>

<MetaTags {...seoMetaTags} title="Forgot Password" />

{#each all_veils_forgot_password as block}
	<MistBlockPreview {...block} />
{/each}
