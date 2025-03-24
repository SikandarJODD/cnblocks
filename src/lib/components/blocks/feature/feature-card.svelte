<script lang="ts">
  import Card from "$lib/components/ui/card/card.svelte";
  import { cn } from "$lib/utils";
  import type { Snippet } from "svelte";

  let { children, class: _class = "" }: { children: Snippet; class?: string } =
    $props();
</script>

<Card class={cn("group relative rounded-none shadow-zinc-950/5", _class)}>
  {@render cardDecorator()}
  {@render children()}
</Card>

{#snippet cardDecorator()}
  <span
    class="border-primary absolute -left-px -top-px block size-2"
    style="
      border-top-width: 2px;
      border-left-width: 2px;"
  ></span>
  <span
    class="border-primary absolute -right-px -top-px block size-2"
    style="
      border-top-width: 2px;
      border-right-width: 2px;"
  ></span>
  <span
    class="border-primary absolute -bottom-px -left-px block size-2"
    style="
      border-bottom-width: 2px;
      border-left-width: 2px;"
  ></span>
  <span
    class="border-primary absolute -bottom-px -right-px block size-2"
    style="
      border-bottom-width: 2px;
      border-right-width: 2px;"
  ></span>
{/snippet}
