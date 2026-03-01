<script lang="ts">
  import { page } from "$app/state";
  import { ModeWatcher, setTheme, theme } from "mode-watcher";
  // import "../app.css";
  import "../shadcn.css";
  import { onMount } from "svelte";
  let { children } = $props();

  function resolveTheme(pathname: string): "veil" | "mist" | "default" {
    if (pathname === "/veil" || pathname.startsWith("/veil/")) {
      return "veil";
    }

    if (pathname === "/preview/veil" || pathname.startsWith("/preview/veil/")) {
      return "veil";
    }

    if (pathname === "/mist" || pathname.startsWith("/mist/")) {
      return "mist";
    }

    if (pathname === "/preview/mist" || pathname.startsWith("/preview/mist/")) {
      return "mist";
    }

    return "default";
  }

  const activeRouteTheme = $derived(resolveTheme(page.url.pathname));

  // $effect(() => {
  //   if (theme.current !== activeRouteTheme) {
  //     setTheme(activeRouteTheme);
  //   }
  // });
  onMount(()=>{
    setTheme("veil")
  })
</script>

<ModeWatcher />

{@render children()}
