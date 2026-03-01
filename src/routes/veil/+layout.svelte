<script lang="ts">
  import Header from "$lib/web/layouts/Header.svelte";
  import * as Sidebar from "$lib/components/ui/sidebar/index.js";
  import VeilSidebar from "$lib/components/layouts/veil-sidebar.svelte";
  let { children } = $props();
</script>

<Header></Header>
<Sidebar.Provider>
  <VeilSidebar></VeilSidebar>
  <div class="w-full px-10  py-6">
    {@render children()}
  </div>
</Sidebar.Provider>
