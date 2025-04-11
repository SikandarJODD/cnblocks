<script lang="ts">
  import CategoryNavigation from "$lib/web/layouts/CategoryNavigation.svelte";
  import type { Snippet } from "svelte";

  let { children }: { children: Snippet } = $props();
</script>

<div>
  <CategoryNavigation  />
  {@render children()}
</div>
