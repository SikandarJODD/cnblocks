<script lang="ts">
  import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,
  } from "$lib/components/ui/tooltip";
  import { Button, type ButtonProps } from "$lib/components/ui/button";

  import { UseClipboard } from "$lib/hooks/use-clipboard.svelte";
  import { cn } from "$lib/utils.js";
  import { scale } from "svelte/transition";
  import type { Snippet } from "svelte";

  import Check from "@lucide/svelte/icons/check";
  import Copy from "@lucide/svelte/icons/copy";
  import X from "@lucide/svelte/icons/x";

  interface Props extends Omit<ButtonProps, "href"> {
    text: string;
    icon?: Snippet<[]>;
    animationDuration?: number;
    onCopy?: (status: UseClipboard["status"]) => void;
  }

  let {
    text,
    icon,
    animationDuration = 300,
    variant = "ghost",
    size = "icon",
    onCopy,
    class: className,
    ...restProps
  }: Props = $props();

  const clipboard = new UseClipboard({ delay: 1500 });
</script>

<TooltipProvider delayDuration={0}>
  <Tooltip>
    <TooltipTrigger>
      <Button
        {...restProps}
        {variant}
        {size}
        class={cn("h-8 w-8 z-50", className)}
        type="button"
        name="copy"
        tabindex={-1}
        onclick={async () => {
          const status = await clipboard.copy(text);
          onCopy?.(status);
        }}
      >
        {#if clipboard.status === "success"}
          <div in:scale={{ duration: animationDuration, start: 0.5 }}>
            <Check class="text-[#10B981] !size-3.5" />
            <span class="sr-only">Copied</span>
          </div>
        {:else if clipboard.status === "failure"}
          <div in:scale={{ duration: animationDuration, start: 0.5 }}>
            <X class="!size-3.5" />
            <span class="sr-only">Failed to copy</span>
          </div>
        {:else}
          <div in:scale={{ duration: animationDuration, start: 0.5 }}>
            {#if icon}
              {@render icon()}
            {:else}
              <Copy class="!size-3.5 opacity-50" />
            {/if}
            <span class="sr-only">Copy</span>
          </div>
        {/if}
      </Button>
    </TooltipTrigger>
    <TooltipContent align="start" side="top" class="px-2 py-1 text-[10px]"
      >Copy Code</TooltipContent
    >
  </Tooltip>
</TooltipProvider>
