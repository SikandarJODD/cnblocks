<script lang="ts">
  import { cn } from "$lib/utils";
  import { Pane, PaneGroup, PaneResizer, type PaneAPI } from "paneforge";
  import { onMount, tick } from "svelte";
  import * as RadioGroup from "$lib/components/ui/radio-group/index";

  interface BlockPreviewProps {
    code?: string;
    preview: string;
    title: string;
    category: string;
    previewOnly?: boolean;
  }

  let {
    code = "svcode",
    preview,
    title = "Hero Section",
    category = "Components",
    previewOnly,
  }: BlockPreviewProps = $props();

  const radioItem =
    "rounded-(--radius) duration-200 flex items-center justify-center h-8 px-2.5 gap-2 transition-[color] data-[state=checked]:bg-muted";

  const DEFAULTSIZE = 100;
  const SMSIZE = 30;
  const MDSIZE = 62;
  const LGSIZE = 82;

  let width = $state(DEFAULTSIZE);
  let mode = $state("preview");
  let iframeHeight = $state(0);
  let isLoading = $state(true);

  let codeCopied = $state(false);
  let cliCopied = $state(false);
  let copyCli = () => {
    cliCopied = true;
    navigator.clipboard.writeText(code);
    setTimeout(() => {
      cliCopied = false;
    }, 2000);
  };
  let copyCode = () => {
    codeCopied = true;
    navigator.clipboard.writeText(code);
    setTimeout(() => {
      codeCopied = false;
    }, 2000);
  };

  let ref: PaneAPI | undefined = $state(undefined);
  import { MediaQuery } from "svelte/reactivity";
  import Separator from "../ui/separator/separator.svelte";
  import Button from "../ui/button/button.svelte";
  import { Check, Code2, Copy, Eye, Maximize, Terminal } from "@lucide/svelte";

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
  $effect(() => {
    const iframe = iframeRef;
    if (iframe) {
      iframe.addEventListener("load", () => {
        isLoading = false;
        iframeHeight = iframe.contentWindow!.document.body.scrollHeight;
      });
    }
  });
</script>

<section
  class="group mb-16 border-b [--color-border:color-mix(in_oklab,var(--color-zinc-200)_75%,transparent)] dark:[--color-border:color-mix(in_oklab,var(--color-zinc-800)_60%,transparent)]"
>
  <div class="relative border-y">
    <div
      aria-hidden
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
      <div class="-ml-3 flex items-center gap-3">
        {#if code}
          <!-- <RadioGroup.Root class="flex gap-0.5">
            <RadioGroup.Item
              onclick={() => (mode = "preview")}
              aria-label="Block preview"
              value="100"
              checked={mode == "preview"}
              class={radioItem}
            >
              <Eye class="size-3.5 sm:opacity-50" />
              <span class="hidden text-[13px] sm:block">Preview</span>
            </RadioGroup.Item>

            <RadioGroup.Item
              onclick={() => (mode = "code")}
              aria-label="Code"
              value="0"
              checked={mode == "code"}
              class={radioItem}
            >
              <Code2 class="size-3.5 sm:opacity-50" />
              <span class="hidden text-[13px] sm:block">Code</span>
            </RadioGroup.Item>
          </RadioGroup.Root> -->

          <Separator orientation="vertical" class="hidden !h-4 lg:block" />
        {/if}
        {#if previewOnly}
          {" "}
          <span class="ml-2 text-sm capitalize">{title}</span>
          <Separator orientation="vertical" class="!h-4" />{" "}
        {/if}
        <Button
          variant="ghost"
          size="sm"
          class="size-8"
          href={preview}
          target="_blank"
        >
          <Maximize class="size-4" />
        </Button>
        <Separator orientation="vertical" class="hidden !h-4 lg:block" />
        <span class="text-muted-foreground hidden text-sm lg:block"
          >{width < MDSIZE
            ? "Mobile"
            : width < LGSIZE
              ? "Tablet"
              : "Desktop"}</span
        >{" "}
      </div>

      <div class="flex items-center gap-2">
        {#if code}
          <Button
            onclick={copyCode}
            size="sm"
            class="size-8 shadow-none md:w-fit"
            variant="outline"
            aria-label="copy code"
          >
            {#if cliCopied}
              <Check class="size-4" />
            {:else}
              <Terminal class="!size-3.5" />
            {/if}
            <!-- <span class="hidden font-mono text-xs md:block">
                              pnpm dlx shadcn@canary add {category}-{titleToNumber(title)}
                            </span> -->
          </Button>
          <Separator class="!h-4" orientation="vertical" />
          <Separator class="!h-4" orientation="vertical" />

          <Button
            onclick={copyCode}
            size="sm"
            variant="ghost"
            aria-label="copy code"
            class="size-8"
          >
            {#if codeCopied}
              <Check class="size-4" />
            {:else}
              <Copy class="!size-3.5" />
            {/if}
          </Button>
        {/if}
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
            defaultSize={DEFAULTSIZE}
            minSize={SMSIZE}
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
            ></iframe>
            {#if isLoading}
              <div
                class="bg-background absolute inset-0 right-2 flex items-center justify-center border-x"
              >
                <div
                  class="border-primary size-6 animate-spin rounded-full border-2 border-t-transparent"
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
              defaultSize={100 - DEFAULTSIZE}
              class="-mr-[0.5px] ml-px"
            ></Pane>
          {/if}
        </PaneGroup>
      </div>

      <div class="bg-white dark:bg-transparent">
        {#if mode === "code"}
          <!-- <CodeBlock
            code={code as string}
            lang="tsx"
            maxHeight={iframeHeight}
          /> -->
          code
        {/if}
      </div>
    </div>
  </div>
</section>
