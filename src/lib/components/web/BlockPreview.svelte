<script lang="ts">
  import { cn } from "$lib/utils";
  import { Pane, PaneGroup, PaneResizer, type PaneAPI } from "paneforge";
  import { onMount, tick } from "svelte";

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
  let mode: "preview" | "code" = $state("preview");
  let iframeHeight = $state(0);
  let isLoading = $state(true);

  let ref: PaneAPI | undefined = $state(undefined);
  import { MediaQuery } from "svelte/reactivity";

  let large = new MediaQuery("min-width: 1024px");

  let iframeRef = $state<HTMLIFrameElement | null>(null);
  onMount(() => {
    if (iframeRef) {
      let iframe = iframeRef;
      setTimeout(() => {
        isLoading = false;
        let contentHeight = iframe!.contentWindow!.document.body.scrollHeight;
        iframeHeight = contentHeight + 20;
      }, 3000);
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
  </div>
  <div class="relative">
    <div
      aria-hidden
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
      <div class={cn("bg-white dark:bg-transparent overflow-auto")}>
        <PaneGroup direction="horizontal">
          <Pane
            id={`block-${title}`}
            order={1}
            onResize={(size) => {
              width = Number(size);
            }}
            bind:pane={ref}
            defaultSize={DEFAULTSIZE}
            minSize={SMSIZE}
            class="h-fit border-x"
          >
            <!-- svelte-ignore element_invalid_self_closing_tag -->
            <iframe
              allowFullScreen
              bind:this={iframeRef}
              {title}
              height={iframeHeight}
              class="h-(--iframe-height) block min-h-56 w-full duration-200 will-change-auto overflow-y-hidden"
              src="/mint"
              id={`block-${title}`}
              style="
                --iframe-height: {iframeHeight}px;
              "
            />
            {#if isLoading}
              <div
                class="bg-background absolute inset-0 right-2 flex items-center justify-center border-x"
              >
                <div
                  class="border-primary size-6 animate-spin rounded-full border-2 border-t-transparent"
                />
              </div>
            {/if}
          </Pane>
          {#if large}
            <PaneResizer
              class="relative w-2 before:absolute before:inset-0 before:m-auto before:h-12 before:w-1 before:rounded-full before:bg-zinc-300 before:transition-[height,background] hover:before:h-16 hover:before:bg-zinc-400 focus:before:bg-zinc-400 dark:before:bg-zinc-600 dark:hover:before:bg-zinc-500 dark:focus:before:bg-zinc-400"
            />
          {/if}
        </PaneGroup>
      </div>
    </div>
  </div>
</section>
