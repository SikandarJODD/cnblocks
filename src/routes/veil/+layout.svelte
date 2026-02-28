<script lang="ts">
  import Header from "$lib/web/layouts/Header.svelte";
  import AppSidebar from "$lib/components/app-sidebar.svelte";
  import * as Sidebar from "$lib/components/ui/sidebar/index.js";
  let { children } = $props();
</script>

<Header></Header>
<Sidebar.Provider>
  <AppSidebar />
  <div>
    {@render children()}
  </div>
</Sidebar.Provider>
