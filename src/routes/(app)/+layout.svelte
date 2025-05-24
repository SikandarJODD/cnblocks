<script lang="ts">
  import Header from "$lib/web/layouts/Header.svelte";
  import SiteFooter from "$lib/web/layouts/SiteFooter.svelte";
  let { children } = $props();
</script>

<Header />
{@render children()}
<SiteFooter />
