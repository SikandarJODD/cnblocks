<script lang="ts">
  import { categories } from "$lib/all_blocks/all_blocks";
  import CategoryNavigation from "$lib/web/layouts/CategoryNavigation.svelte";
  import type { Snippet } from "svelte";

  let { children }: { children: Snippet } = $props();
</script>

<div>
  <CategoryNavigation {categories} />
  {@render children()}
</div>
