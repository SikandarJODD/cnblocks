<script lang="ts">
  import type { Snippet } from "svelte";

  let {
    children,
    class: _class,
    borderClassName,
  }: {
    children?: Snippet;
    class?: string;
    borderClassName?: string;
  } = $props();
</script>

<div
  class={[
    "bg-background relative flex size-20 rounded-xl dark:bg-transparent",
    _class,
  ]}
>
  <div
    role="presentation"
    class={[
      "absolute inset-0 rounded-xl border border-black/20 dark:border-white/25",
      borderClassName,
    ]}
  ></div>
  <div class="relative z-20 m-auto size-fit *:size-8">
    {@render children?.()}
  </div>
</div>
