<script lang="ts">
  import IntegrationCardv7 from "./card/integration-cardv7.svelte";
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

  // Scroll below for Marquee component code
  import Marquee from "$lib/components/magic/Marquee.svelte";
</script>

<section>
  <div class="bg-muted dark:bg-background py-24 md:py-32">
    <div class="mx-auto max-w-5xl px-6">
      <div
        class="bg-muted/25 group relative mx-auto max-w-[22rem] items-center justify-between space-y-6 [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_70%,transparent_100%)] sm:max-w-md"
      >
        <div
          role="presentation"
          class="absolute inset-0 -z-10 bg-[linear-gradient(to_right,var(--color-border)_1px,transparent_1px),linear-gradient(to_bottom,var(--color-border)_1px,transparent_1px)] bg-[size:32px_32px] opacity-50"
        ></div>
        <div>
          <Marquee>
            <IntegrationCardv7>
              <VSCodium />
            </IntegrationCardv7>
            <IntegrationCardv7>
              <MediaWiki />
            </IntegrationCardv7>
            <IntegrationCardv7>
              <GooglePaLM />
            </IntegrationCardv7>
            <IntegrationCardv7>
              <Gemini />
            </IntegrationCardv7>
            <IntegrationCardv7>
              <Replit />
            </IntegrationCardv7>
            <IntegrationCardv7>
              <MagicUI />
            </IntegrationCardv7>
          </Marquee>
        </div>

        <div>
          <!-- gap={24} speed={20} speedOnHover={10} -->
          <Marquee reverse>
            <IntegrationCardv7>
              <Gemini />
            </IntegrationCardv7>
            <IntegrationCardv7>
              <Replit />
            </IntegrationCardv7>
            <IntegrationCardv7>
              <MediaWiki />
            </IntegrationCardv7>
            <IntegrationCardv7>
              <MagicUI />
            </IntegrationCardv7>
            <IntegrationCardv7>
              <VSCodium />
            </IntegrationCardv7>
            <IntegrationCardv7>
              <GooglePaLM />
            </IntegrationCardv7>
          </Marquee>
        </div>
        <div>
          <Marquee>
            <IntegrationCardv7>
              <Replit />
            </IntegrationCardv7>
            <IntegrationCardv7>
              <MagicUI />
            </IntegrationCardv7>
            <IntegrationCardv7>
              <Gemini />
            </IntegrationCardv7>
            <IntegrationCardv7>
              <VSCodium />
            </IntegrationCardv7>
            <IntegrationCardv7>
              <MediaWiki />
            </IntegrationCardv7>
            <IntegrationCardv7>
              <GooglePaLM />
            </IntegrationCardv7>
          </Marquee>
        </div>
        <div class="absolute inset-0 m-auto flex size-fit justify-center gap-2">
          <IntegrationCardv7
            class="shadow-black-950/10 size-16 bg-white/25 shadow-xl backdrop-blur-sm  dark:border-white/10 dark:shadow-white/15 backdrop-grayscale"
            isCenter={true}
          >
            <Logo />
          </IntegrationCardv7>
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

<!-- Marquee Component Code -->

<!-- <script lang="ts">
  import { cn } from "$lib/utils";
  import type { Snippet } from "svelte";

  type MarqueeProps = {
    pauseOnHover?: boolean;
    vertical?: boolean;
    repeat?: number;
    reverse?: boolean;
    class?: string;
    children?: Snippet;
  };
  let {
    pauseOnHover = false,
    vertical = false,
    repeat = 4,
    reverse = false,
    class: _class = "",
    children,
  }: MarqueeProps = $props();
</script>

<div
  class={cn(
    "group flex overflow-hidden p-2 [--duration:16s] [--gap:3rem] [gap:var(--gap)]",
    {
      "flex-row": !vertical,
      "flex-col": vertical,
    },
    _class
  )}
>
  {#each { length: repeat } as _, i (i)}
    <div
      class={cn("flex shrink-0 justify-around [gap:var(--gap)]", {
        "animate-marquee flex-row": !vertical,
        "animate-marquee-vertical flex-col": vertical,
        "group-hover:[animation-play-state:paused]": pauseOnHover,
      })}
      style="animation-direction:{reverse ? 'reverse':'normal'};
      "
    >
      {@render children?.()}
    </div>
  {/each}
</div>

<style>
  @keyframes marquee {
    0% {
      transform: translateX(0%);
    }
    100% {
      transform: translateX(-100%);
    }
  }

  @keyframes marquee-vertical {
    0% {
      transform: translateY(0%);
    }
    100% {
      transform: translateY(-100%);
    }
  }

  .animate-marquee {
    animation: marquee var(--duration) linear infinite;
  }

  .animate-marquee-vertical {
    animation: marquee-vertical var(--duration) linear infinite;
  }
</style>
 -->
