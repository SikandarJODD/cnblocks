<script lang="ts">
  import CodeBlock from "./CodeBlock.svelte";
  import type { MistCode } from "./MistBlockPreview.svelte";
  import ChevronDown from "@lucide/svelte/icons/chevron-down";
  import Button from "../ui/button/button.svelte";
  import { cn } from "$lib/utils";
  import Check from "@lucide/svelte/icons/check";
  import Copy from "@lucide/svelte/icons/copy";
  import { UseClipboard } from "$lib/hooks/use-clipboard.svelte";
  import { scale } from "svelte/transition";
  import Code from "./code/code.svelte";

  let {
    code,
  }: {
    code: MistCode | MistCode[];
  } = $props();
  let selectedIndex = $state(0);
  let clipboard = new UseClipboard({ delay: 1500 });

  let copyCode = () => {
    if (Array.isArray(code)) {
      clipboard.copy(code[selectedIndex].code);
    } else {
      clipboard.copy(code.code);
    }
  };
</script>

{#if Array.isArray(code)}
  <div class="flex">
    <div
      class="hidden w-56 bg-neutral-50 font-mono text-black dark:text-white [--color-background:var(--color-zinc-900)] [--color-foreground:white] [--color-muted:var(--color-zinc-800)] sm:block dark:bg-zinc-900/25"
    >
      <div class="pb-5.5 pt-1.5 font-mono">
        <div>
          <div
            class="pr-5.5 font-mono dark:hover:bg-muted/50 flex items-center gap-1.5 py-2 pl-4 hover:bg-white/5 text-xs"
          >
            <ChevronDown class="size-4 opacity-50" />
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="size-4"
              viewBox="0 0 16 16"
            >
              <path
                fill="none"
                stroke="#cad3f5"
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M4.5 4.5H12c.83 0 1.5.67 1.5 1.5v.5m-7.5 7H2A1.5 1.5 0 0 1 .5 12V3.5a1 1 0 0 1 1-1h5a1 1 0 0 1 1 1v1"
                stroke-width={1}
              ></path>
              <path
                fill="none"
                stroke="#a6da95"
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M8 10.278c0-.576.468-1.044 1.044-1.044h1.045v-.19a1.044 1.044 0 0 1 2.088 0v.19h1.045c.576 0 1.044.468 1.044 1.044v1.045h.19a1.044 1.044 0 1 1 0 2.088h-.19v1.045c0 .576-.468 1.044-1.044 1.044h-1.045v-.19a1.044 1.044 0 1 0-2.088 0v.19H8v-2.089h.19a1.044 1.044 0 0 0 0-2.088H8Z"
                stroke-width={1}
              ></path>
            </svg>
            <span>components</span>
          </div>

          {#each code as item, index}
            <Button
              class={cn(
                "pr-5.5 flex w-full items-center justify-start gap-1.5 py-2 pl-12 hover:dark:bg-zinc-900 hover:bg-neutral-200/70 rounded-none text-xs",
                selectedIndex === index &&
                  "dark:bg-zinc-800/50 bg-neutral-200/70"
              )}
              variant="ghost"
              onclick={() => (selectedIndex = index)}
            >
              <svg
                viewBox="0 0 256 308"
                width="256"
                height="308"
                class="size-3.5"
                xmlns="http://www.w3.org/2000/svg"
                preserveAspectRatio="xMidYMid"
                ><path
                  d="M239.682 40.707C211.113-.182 154.69-12.301 113.895 13.69L42.247 59.356a82.198 82.198 0 0 0-37.135 55.056 86.566 86.566 0 0 0 8.536 55.576 82.425 82.425 0 0 0-12.296 30.719 87.596 87.596 0 0 0 14.964 66.244c28.574 40.893 84.997 53.007 125.787 27.016l71.648-45.664a82.182 82.182 0 0 0 37.135-55.057 86.601 86.601 0 0 0-8.53-55.577 82.409 82.409 0 0 0 12.29-30.718 87.573 87.573 0 0 0-14.963-66.244"
                  fill="#FF3E00"
                /><path
                  d="M106.889 270.841c-23.102 6.007-47.497-3.036-61.103-22.648a52.685 52.685 0 0 1-9.003-39.85 49.978 49.978 0 0 1 1.713-6.693l1.35-4.115 3.671 2.697a92.447 92.447 0 0 0 28.036 14.007l2.663.808-.245 2.659a16.067 16.067 0 0 0 2.89 10.656 17.143 17.143 0 0 0 18.397 6.828 15.786 15.786 0 0 0 4.403-1.935l71.67-45.672a14.922 14.922 0 0 0 6.734-9.977 15.923 15.923 0 0 0-2.713-12.011 17.156 17.156 0 0 0-18.404-6.832 15.78 15.78 0 0 0-4.396 1.933l-27.35 17.434a52.298 52.298 0 0 1-14.553 6.391c-23.101 6.007-47.497-3.036-61.101-22.649a52.681 52.681 0 0 1-9.004-39.849 49.428 49.428 0 0 1 22.34-33.114l71.664-45.677a52.218 52.218 0 0 1 14.563-6.398c23.101-6.007 47.497 3.036 61.101 22.648a52.685 52.685 0 0 1 9.004 39.85 50.559 50.559 0 0 1-1.713 6.692l-1.35 4.116-3.67-2.693a92.373 92.373 0 0 0-28.037-14.013l-2.664-.809.246-2.658a16.099 16.099 0 0 0-2.89-10.656 17.143 17.143 0 0 0-18.398-6.828 15.786 15.786 0 0 0-4.402 1.935l-71.67 45.674a14.898 14.898 0 0 0-6.73 9.975 15.9 15.9 0 0 0 2.709 12.012 17.156 17.156 0 0 0 18.404 6.832 15.841 15.841 0 0 0 4.402-1.935l27.345-17.427a52.147 52.147 0 0 1 14.552-6.397c23.101-6.006 47.497 3.037 61.102 22.65a52.681 52.681 0 0 1 9.003 39.848 49.453 49.453 0 0 1-22.34 33.12l-71.664 45.673a52.218 52.218 0 0 1-14.563 6.398"
                  fill="#FFF"
                /></svg
              >
              <span>{item?.name || "Untitled"}</span>
            </Button>
          {/each}
        </div>
      </div>
    </div>
    <div class="relative w-full sm:w-[calc(100%-14rem)] min-h-[32rem]">
      <!-- <CopyButton {copied} onCopy={copy} /> -->
      {#key selectedIndex}
        {@render CopyButton()}
        <!-- <CodeBlock code={code[selectedIndex].code} /> -->
        <Code
          code={code[selectedIndex].code}
          highlight={code[selectedIndex]?.highlight}
        />
      {/key}
    </div>
  </div>
{:else}
  <!-- {@render CopyButton()} -->
  <!-- <CodeBlock code={code.code} /> -->
  <div class='relative sm:w-full h-[36rem]'>
    <Code code={code.code} highlight={code?.highlight} />
  </div>
{/if}

{#snippet CopyButton()}
  <Button
    class="absolute top-2 right-2 h-8 w-8 z-50 backdrop-blur-sm"
    variant="ghost"
    size="icon"
    onclick={copyCode}
  >
    {#if clipboard.status === "success"}
      <span in:scale>
        <Check class="!size-3.5 text-[#10B981]" />
      </span>
    {:else}
      <span in:scale>
        <Copy class="!size-3.5 opacity-50" />
      </span>
    {/if}
  </Button>
{/snippet}
