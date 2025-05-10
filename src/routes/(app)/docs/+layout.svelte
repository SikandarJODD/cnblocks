<script lang="ts">
  import Sidebar from "$lib/web/docs/Sidebar.svelte";

  let { children } = $props();
</script>

<div class="flex mt-10 lg:gap-12 max-w-6xl min-h-[52vh] mx-auto">
  <div>
    <Sidebar />
  </div>
  <div class="w-full h-fit px-6">
    {@render children()}
  </div>
</div>
