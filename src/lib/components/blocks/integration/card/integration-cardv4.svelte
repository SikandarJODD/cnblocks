<script lang="ts">
  import type { Snippet } from "svelte";

  let {
    children,
    class: _class,
    position,
    isCenter,
  }: {
    children: Snippet;
    class?: string;
    position?: string;
    isCenter?: boolean;
  } = $props();
</script>

<div
  class={[
    "bg-background relative flex size-12 rounded-xl border dark:bg-transparent",
    _class,
  ]}
>
  <div
    class={["relative z-20 m-auto size-fit *:size-6", isCenter && "*:size-8"]}
  >
    {@render children()}
  </div>
  {#if position && !isCenter}
    <div
      class={[
        "bg-linear-to-r to-muted-foreground/25 absolute z-10 h-px",
        position === "left-top" &&
          "left-full top-1/2 w-[130px] origin-left rotate-[25deg]",
        position === "left-middle" && "left-full top-1/2 w-[120px] origin-left",
        position === "left-bottom" &&
          "left-full top-1/2 w-[130px] origin-left rotate-[-25deg]",
        position === "right-top" &&
          "bg-linear-to-l right-full top-1/2 w-[130px] origin-right rotate-[-25deg]",
        position === "right-middle" &&
          "bg-linear-to-l right-full top-1/2 w-[120px] origin-right",
        position === "right-bottom" &&
          "bg-linear-to-l right-full top-1/2 w-[130px] origin-right rotate-[25deg]",
      ]}
    ></div>
  {/if}
</div>
