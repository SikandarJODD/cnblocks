<script lang="ts">
  // Scroll below for the IntegrationCardv4 component code
  import IntegrationCardv4 from "./card/integration-cardv4.svelte";
  import {
    Gemini,
    GooglePaLM,
    MagicUI,
    VSCodium,
    Replit,
    MediaWiki,
  } from "../logos/logos";
  import Logo from "$lib/components/web/Logo.svelte";
  import Button from "$lib/components/ui/button/button.svelte";
</script>

<section>
  <div class="bg-muted dark:bg-background py-24 md:py-32">
    <div class="mx-auto max-w-5xl px-6">
      <div class="relative mx-auto flex max-w-sm items-center justify-between">
        <div class="space-y-6">
          <IntegrationCardv4 position="left-top">
            <Gemini />
          </IntegrationCardv4>
          <IntegrationCardv4 position="left-middle">
            <Replit />
          </IntegrationCardv4>
          <IntegrationCardv4 position="left-bottom">
            <MagicUI />
          </IntegrationCardv4>
        </div>
        <div class="mx-auto my-2 flex w-fit justify-center gap-2">
          <div class="bg-muted relative z-20 rounded-2xl border p-1">
            <IntegrationCardv4
              class="shadow-black-950/10 dark:bg-background size-16 border-black/25 shadow-xl dark:border-white/25 dark:shadow-white/10"
              isCenter={true}
            >
              <Logo />
            </IntegrationCardv4>
          </div>
        </div>
        <div
          role="presentation"
          class="absolute inset-1/3 bg-[radial-gradient(var(--dots-color)_1px,transparent_1px)] opacity-50 [--dots-color:black] [background-size:16px_16px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_70%,transparent_100%)] dark:[--dots-color:white]"
        ></div>

        <div class="space-y-6">
          <IntegrationCardv4 position="right-top">
            <VSCodium />
          </IntegrationCardv4>
          <IntegrationCardv4 position="right-middle">
            <MediaWiki />
          </IntegrationCardv4>
          <IntegrationCardv4 position="right-bottom">
            <GooglePaLM />
          </IntegrationCardv4>
        </div>
      </div>
      <div class="mx-auto mt-12 max-w-lg space-y-6 text-center">
        <h2 class="text-balance text-3xl font-semibold md:text-4xl">
          Integrate with your favorite tools
        </h2>
        <p class="text-muted-foreground">
          Connect seamlessly with popular platforms and services to enhance your
          workflow.
        </p>

        <Button variant="outline" size="sm">Get started</Button>
      </div>
    </div>
  </div>
</section>

<!-- Integration Card V4 Component Code -->
<!-- <script lang="ts">
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
 -->
