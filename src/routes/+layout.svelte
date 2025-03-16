<script lang="ts">
  import { ModeWatcher } from "mode-watcher";
  import "../app.css";
  import Header from "$lib/web/layouts/Header.svelte";
  let { children } = $props();
</script>

<ModeWatcher defaultMode="system" />
<Header />
{@render children()}
