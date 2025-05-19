<script lang="ts">
  import { cn } from "$lib/utils";
  import type { Snippet } from "svelte";

  let {
    children,
    class: _class = "",
    isCenter = false,
  }: {
    children: Snippet;
    class?: string;
    isCenter?: boolean;
  } = $props();
</script>

<div
  class={cn(
    "relative z-30 flex size-12 rounded-full border bg-white shadow-sm shadow-black/5 dark:bg-white/5 dark:backdrop-blur-md",
    _class
  )}
>
  <div class={cn("m-auto size-fit *:size-5", isCenter && "*:size-8")}>
    {@render children()}
  </div>
</div>
