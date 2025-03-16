<script>
  import { page } from "$app/state";

  let pathname = $derived(
    "/" + page.url.pathname.split("/").filter(Boolean)[0] || "/"
  );
  $inspect(pathname);
</script>

<h1>This is a dynamic route with a catch-all parameter.</h1>
<p>route is {pathname}</p>
