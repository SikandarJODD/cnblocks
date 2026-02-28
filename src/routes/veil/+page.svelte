<script lang="ts">
  import VeilSidebar from "$lib/components/veil/veil-sidebar.svelte";
  import { setTheme } from "mode-watcher";
  import { onMount } from "svelte";

  onMount(() => {
    setTheme("veil");
  });
</script>

<VeilSidebar />
