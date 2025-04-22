<script lang="ts">
  import { ModeWatcher } from "mode-watcher";
  import Header from "$lib/web/layouts/Header.svelte";
  import SiteFooter from "$lib/web/layouts/SiteFooter.svelte";
  let { children } = $props();
</script>

<ModeWatcher defaultMode="system" />
<!-- <Header /> -->
{@render children()}
<SiteFooter />
