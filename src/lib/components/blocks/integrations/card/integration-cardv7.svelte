<script lang="ts">
  import type { Snippet } from "svelte";
  let {
    children,
    class: _class = "",
    isCenter = false,
  }: { children: Snippet; class?: string; isCenter?: boolean } = $props();
</script>

<div
  class={[
    "bg-background relative z-20 flex size-12 rounded-full border",
    _class,
  ]}
>
  <div class={["m-auto size-fit *:size-5", isCenter && "*:size-8"]}>
    {@render children()}
  </div>
</div>
