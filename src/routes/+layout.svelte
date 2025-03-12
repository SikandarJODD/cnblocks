<script lang="ts">
  import { ModeWatcher } from "mode-watcher";
  import "../app.css";
  let { children } = $props();
</script>

<ModeWatcher defaultMode="system" />

{@render children()}
