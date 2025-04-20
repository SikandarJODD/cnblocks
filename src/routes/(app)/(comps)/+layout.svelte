<script lang="ts">
  import CategoryNavigation from "$lib/web/layouts/CategoryNavigation.svelte";
  import type { Snippet } from "svelte";

  let { children }: { children: Snippet } = $props();
</script>

<div>
  <CategoryNavigation />
  <section>
    <div
      class="h-6 w-full bg-[repeating-linear-gradient(-45deg,var(--color-border),var(--color-border)_1px,transparent_1px,transparent_6px)] opacity-35"
    ></div>
  </section>
  {@render children()}
</div>
