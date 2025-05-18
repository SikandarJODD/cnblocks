<script lang="ts">
  import { cn } from "$lib/utils";
  import { Pane, PaneGroup, PaneResizer, type PaneAPI } from "paneforge";
  import { MediaQuery } from "svelte/reactivity";
  import Separator from "../ui/separator/separator.svelte";
  import Button from "../ui/button/button.svelte";
  import Maximize from "@lucide/svelte/icons/maximize";
  import Terminal from "@lucide/svelte/icons/terminal";
  import Check from "@lucide/svelte/icons/check";
  import CodeBlock from "./CodeBlock.svelte";
  import { CopyButton } from "../ui/copy-button";
  import { scale } from "svelte/transition";
  import { UseClipboard } from "$lib/hooks/use-clipboard.svelte";

  interface BlockPreviewProps {
    code: MistCode | MistCode[];
    preview: string;
    title: string;
    category: string;
    previewOnly?: boolean;
    slug: string;
  }

  export interface MistCode {
    code: string;
    lang?: string;
    hightlight?: string;
  }

  let {
    code,
    preview,
    title = "Hero Section",
    category = "Components",
    slug,
    previewOnly,
  }: BlockPreviewProps = $props();

  const radioItem =
    "rounded-(--radius) duration-200 flex items-center justify-center h-8 px-2.5 gap-2 transition-[color] data-[state=checked]:bg-muted";

  const DEFAULT_SIZE = 100;
  const SM_SIZE = 30;
  const MD_SIZE = 62;
  const LG_SIZE = 82;

  let width = $state(DEFAULT_SIZE);
  let mode = $state("preview");
  let iframeHeight = $state(0);
  let isLoading = $state(true);

  const clipboard = new UseClipboard({ delay: 2000 });

  let ref: PaneAPI | undefined = $state(undefined);

  let large = new MediaQuery("min-width: 1024px");

  let iframeRef = $state<HTMLIFrameElement | null>(null);
  // onMount(() => {
  //   if (iframeRef) {
  //     let iframe = iframeRef;
  //     setTimeout(() => {
  //       isLoading = false;
  //       let contentHeight = iframe!.contentWindow!.document.body.scrollHeight;
  //       iframeHeight = contentHeight + 20;
  //     }, 3000);
  //   }
  // });
  // $effect(() => {
  //   const iframe = iframeRef;
  //   if (iframe) {
  //     iframe.addEventListener("load", () => {
  //       isLoading = false;
  //       let contentHeight = iframe.contentWindow!.document.body.scrollHeight;
  //       iframeHeight = contentHeight + 20;
  //     });
  //   }
  // });

  import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,
  } from "$lib/components/ui/tooltip";
</script>

<section
  id="{category}-{title}"
  class="group mb-16 border-b [--color-border:color-mix(in_oklab,var(--color-zinc-200)_75%,transparent)] dark:[--color-border:color-mix(in_oklab,var(--color-zinc-800)_60%,transparent)]"
>
  <div class="relative border-y">
    <div
      class="absolute inset-x-4 -top-14 bottom-0 mx-auto max-w-7xl lg:inset-x-0"
    >
      <div
        class="to-(--color-border) absolute bottom-0 left-0 top-0 w-px bg-gradient-to-b from-transparent to-75%"
      ></div>
      <div
        class="to-(--color-border) absolute bottom-0 right-0 top-0 w-px bg-gradient-to-b from-transparent to-75%"
      ></div>
    </div>

    <div
      class="relative z-10 mx-auto flex max-w-7xl justify-between py-1.5 pl-8 pr-6 [--color-border:var(--color-zinc-200)] md:py-2 lg:pl-6 lg:pr-2 dark:[--color-border:var(--color-zinc-800)]"
    >
      <div class="-ml-3 flex items-center gap-2">
        {#if code}
          <div class="flex gap-0.5">
            <Button
              variant={mode === "preview" ? "secondary" : "ghost"}
              onclick={() => (mode = "preview")}
              class={radioItem}
              size="sm"
            >
              <!-- <Eye class="size-3 sm:opacity-50" /> -->
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                class="sm:opacity-80"
                color="currentColor"
              >
                <path
                  d="M21.544 11.045C21.848 11.4713 22 11.6845 22 12C22 12.3155 21.848 12.5287 21.544 12.955C20.1779 14.8706 16.6892 19 12 19C7.31078 19 3.8221 14.8706 2.45604 12.955C2.15201 12.5287 2 12.3155 2 12C2 11.6845 2.15201 11.4713 2.45604 11.045C3.8221 9.12944 7.31078 5 12 5C16.6892 5 20.1779 9.12944 21.544 11.045Z"
                  stroke="currentColor"
                  stroke-width="1.5"
                ></path>
                <path
                  opacity="0.4"
                  d="M15 12C15 10.3431 13.6569 9 12 9C10.3431 9 9 10.3431 9 12C9 13.6569 10.3431 15 12 15C13.6569 15 15 13.6569 15 12Z"
                  stroke="currentColor"
                  stroke-width="1.5"
                ></path>
              </svg>
              <span class="hidden text-[13px] sm:block">Preview</span>
            </Button>

            <Button
              variant={mode === "code" ? "secondary" : "ghost"}
              onclick={() => (mode = "code")}
              size="sm"
              class={radioItem}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="1.4"
                stroke-linecap="round"
                stroke-linejoin="round"
                ><path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path class="sm:opacity-50" d="M7 8l-4 4l4 4" />
                <path
                  class="sm:opacity-50"
                  stroke="currentColor"
                  d="M17 8l4 4l-4 4"
                />
                <path d="M14 4l-4 16" /></svg
              >
              <span class="hidden text-[13px] sm:block">Code</span>
            </Button>
          </div>
          <Separator orientation="vertical" class="hidden !h-4 lg:block" />
        {/if}
        <Button variant="ghost" class="size-8" href={preview} target="_blank">
          <Maximize strokeWidth={1.6} class="!size-4 sm:opacity-70" />
        </Button>
        <Separator orientation="vertical" class="hidden !h-4 lg:block" />
        <span class="text-muted-foreground hidden text-sm lg:block"
          >{width < MD_SIZE
            ? "Mobile"
            : width < LG_SIZE
              ? "Tablet"
              : "Desktop"}</span
        >
        <!-- {#if previewOnly} -->
        <Separator orientation="vertical" class="!h-4" />
        <span class="ml-0 text-sm capitalize">{title}</span>
        <!-- {/if} -->
      </div>

      <div class="flex items-center gap-2">
        {#key code}
          {#if code}
            <TooltipProvider delayDuration={0}>
              <Tooltip>
                <TooltipTrigger>
                  <Button
                    onclick={() =>
                      clipboard.copy(
                        `npx jsrepo add @sv/cnblocks/m${category}/${slug}`
                      )}
                    size="sm"
                    class="size-8 shadow-none md:w-fit relative"
                    variant="outline"
                    aria-label="copy code"
                  >
                    {#if clipboard.status === "success"}
                      <div in:scale>
                        <Check class="!size-3.5 text-[#10B981]" />
                      </div>
                    {:else}
                      <div in:scale>
                        <Terminal class="!size-3.5" />
                      </div>
                    {/if}
                    <span class="hidden font-mono text-xs md:block">
                      npx jsrepo add @sv/cnblocks/m{category}/{slug}
                    </span>
                  </Button>
                </TooltipTrigger>
                <TooltipContent align="start" class="px-2 py-1 text-[10px]"
                  >Copy CLI Command</TooltipContent
                >
              </Tooltip>
            </TooltipProvider>

            <Separator class="!h-4" orientation="vertical" />

            <!-- <CopyButton
              text={code.code}
              class="size-8 cursor-pointer [&_svg]:size-3.5"
              size="sm"
              variant="outline"
            /> -->
          {/if}
        {/key}
      </div>
    </div>
  </div>

  <div class="relative">
    <div
      class="absolute inset-x-4 -bottom-14 mx-auto h-14 max-w-7xl lg:inset-x-0"
    >
      <div
        class="from-(--color-border) absolute bottom-0 left-0 top-0 w-px bg-gradient-to-b"
      ></div>
      <div
        class="from-(--color-border) absolute bottom-0 right-0 top-0 w-px bg-gradient-to-b"
      ></div>
    </div>

    <div class="relative z-10 mx-auto max-w-7xl px-4 lg:border-r lg:px-0">
      <div
        class={cn("bg-white dark:bg-transparent", mode === "code" && "hidden")}
      >
        <PaneGroup direction="horizontal">
          <Pane
            bind:pane={ref}
            id={`block-${title}`}
            order={1}
            onResize={(size) => {
              width = Number(size);
            }}
            defaultSize={DEFAULT_SIZE}
            minSize={SM_SIZE}
            class="h-fit border-x"
          >
            <iframe
              loading="lazy"
              allowFullScreen
              bind:this={iframeRef}
              {title}
              height={iframeHeight}
              class="h-(--iframe-height) @starting:opacity-0 @starting:blur-xl block min-h-56 w-full duration-200 will-change-auto"
              src={preview}
              id={`block-${title}`}
              style="
                --iframe-height: {iframeHeight}px;"
              onload={() => {
                isLoading = false;
                let contentHeight =
                  iframeRef?.contentWindow?.document.body.scrollHeight;
                if (contentHeight) {
                  iframeHeight = contentHeight + 20;
                }
              }}
            ></iframe>
            {#if isLoading}
              <div
                class="bg-background absolute inset-0 right-2 flex items-center justify-center border-x"
              >
                <div
                  class="border-primary size-6 animate-spin rounded-full border border-t-transparent"
                ></div>
              </div>
            {/if}
          </Pane>
          {#if large}
            <PaneResizer
              class="relative w-2 before:absolute before:inset-0 before:m-auto before:h-12 before:w-1 before:rounded-full before:bg-zinc-300 before:transition-[height,background] hover:before:h-16 hover:before:bg-zinc-400 focus:before:bg-zinc-400 dark:before:bg-zinc-600 dark:hover:before:bg-zinc-500 dark:focus:before:bg-zinc-400"
            />
            <Pane
              id={`code-${title}`}
              order={2}
              defaultSize={100 - DEFAULT_SIZE}
              class="-mr-[0.5px] ml-px"
            ></Pane>
          {/if}
        </PaneGroup>
      </div>

      <div class="bg-white dark:bg-transparent">
        {#key code}
          {#if mode === "code"}
            {#if Array.isArray(code)}
              {#each code as codeItem}
                <CodeBlock code={codeItem.code} />
              {/each}
            {:else}
              <CodeBlock code={code.code} />
            {/if}
          {/if}
        {/key}
      </div>
    </div>
  </div>
</section>
