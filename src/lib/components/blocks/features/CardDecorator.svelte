<script lang="ts">
  import type { Snippet } from "svelte";

  let { children }: { children: Snippet } = $props();
</script>

<div
  class="relative mx-auto size-36 duration-500 ease-in transition-all [--color-border:color-mix(in_oklab,var(--color-zinc-950)10%,transparent)] group-hover:[--color-border:color-mix(in_oklab,var(--color-zinc-950)20%,transparent)] dark:[--color-border:color-mix(in_oklab,var(--color-white)15%,transparent)] dark:group-hover:bg-white/5 dark:group-hover:[--color-border:color-mix(in_oklab,var(--color-white)20%,transparent)]"
>
  <div
    class="absolute inset-0 bg-[linear-gradient(to_right,var(--color-border)_1px,transparent_1px),linear-gradient(to_bottom,var(--color-border)_1px,transparent_1px)] bg-[size:24px_24px]"
  ></div>
  <div
    class="bg-radial to-background absolute inset-0 from-transparent to-75%"
  ></div>
  <div
    class="bg-background absolute inset-0 m-auto flex size-12 items-center justify-center border-l border-t"
  >
    {@render children()}
  </div>
</div>
