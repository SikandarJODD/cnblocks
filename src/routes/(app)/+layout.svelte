<script lang="ts">
  import { ModeWatcher } from "mode-watcher";
  import Header from "$lib/web/layouts/Header.svelte";
  import SiteFooter from "$lib/web/layouts/SiteFooter.svelte";
  import { Toaster } from "svelte-sonner";
  let { children } = $props();
</script>
<Toaster />

<ModeWatcher defaultMode="system" />
<Header />
{@render children()}
<SiteFooter />
