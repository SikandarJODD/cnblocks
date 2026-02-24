<script lang="ts">
  import { ModeWatcher, setTheme } from "mode-watcher";
  // import "../app.css";
  import "../shadcn.css";
  let { children } = $props();
</script>

<ModeWatcher defaultMode="system" />

{@render children()}
