<script lang="ts">
  import MistBlockPreview from "$lib/components/web/MistBlockPreview.svelte";
  import { all_mists_forgot_password } from "$lib/all_mists/forgot_password";
  import { seoMetaTags } from "$lib/config/seo";
  import { MetaTags } from "svelte-meta-tags";
</script>

<MetaTags {...seoMetaTags} title="Forgot Password" />

{#each all_mists_forgot_password as block}
  <MistBlockPreview {...block} />
{/each}
