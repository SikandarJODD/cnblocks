<script lang="ts">
  import MistCategoryNav from "$lib/web/layouts/MistCategoryNav.svelte";
  import type { Snippet } from "svelte";

  let { children }: { children: Snippet } = $props();
</script>

<div>
  <MistCategoryNav />
  <section>
    <div
      class="h-6 w-full bg-[repeating-linear-gradient(-45deg,var(--color-border),var(--color-border)_1px,transparent_1px,transparent_6px)] opacity-35"
    ></div>
  </section>
  {@render children()}
</div>
