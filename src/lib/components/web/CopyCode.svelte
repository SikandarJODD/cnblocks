<script lang="ts">
  import { cn } from "$lib/utils.js";
  import { Check, Copy } from "@lucide/svelte";
  import Button from "../ui/button/button.svelte";
  let { code = "" } = $props();
  let copied = $state(false);

  function handleCopy() {
    copied = true;
    navigator.clipboard.writeText(code);
    setTimeout(() => (copied = false), 1200);
  }
</script>

<Button
  variant="secondary"
  aria-label="copy code"
  class="size-8 bg-secondary/60 cursor-pointer "
  size="sm"
  onclick={handleCopy}
>
  <div
    class={cn(
      "transition-all",
      copied ? "scale-100 opacity-100" : "scale-0 opacity-0"
    )}
  >
    <Check class="!size-3.5 text-[#10B981]" />
  </div>
  <div
    class={cn(
      "absolute transition-all",
      copied ? "scale-0 opacity-0" : "scale-100 opacity-100"
    )}
  >
    <Copy class="!size-3.5" />
  </div>
</Button>
