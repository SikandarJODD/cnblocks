<script>
  import Integration1 from "$lib/components/veil/integration/integration-1.svelte";
  import Integration2 from "$lib/components/veil/integration/integration-2.svelte";
  import { setTheme } from "mode-watcher";
  import { onMount } from "svelte";
  onMount(() => {
    setTheme("veil");
  });
</script>

<div class="bg-background">
  <Integration1></Integration1>
  <Integration2 />
</div>
