<script lang="ts">
  import Marquee from "$lib/components/magic/Marquee.svelte";
  import { cn } from "$lib/utils";

  export const GRADIENT_ANGLES = {
    top: 0,
    right: 90,
    bottom: 180,
    left: 270,
  };

  type ProgressiveBlurProps = {
    direction?: keyof typeof GRADIENT_ANGLES;
    blurLayers?: number;
    class?: string;
    blurIntensity?: number;
  };
</script>

<section class="bg-background overflow-hidden py-16">
  <div class="group relative m-auto max-w-7xl px-6">
    <div class="flex flex-col items-center md:flex-row">
      <div class="md:max-w-44 md:border-r md:pr-6">
        <p class="text-end text-sm">Powering the best teams</p>
      </div>
      <div class="relative py-6 md:w-[calc(100%-11rem)]">
        <Marquee>
          <div class="flex">
            <img
              class="mx-auto h-5 w-fit dark:invert"
              src="https://html.tailus.io/blocks/customers/nvidia.svg"
              alt="Nvidia Logo"
              height="20"
              width="auto"
            />
          </div>

          <div class="flex">
            <img
              class="mx-auto h-4 w-fit dark:invert"
              src="https://html.tailus.io/blocks/customers/column.svg"
              alt="Column Logo"
              height="16"
              width="auto"
            />
          </div>
          <div class="flex">
            <img
              class="mx-auto h-4 w-fit dark:invert"
              src="https://html.tailus.io/blocks/customers/github.svg"
              alt="GitHub Logo"
              height="16"
              width="auto"
            />
          </div>
          <div class="flex">
            <img
              class="mx-auto h-5 w-fit dark:invert"
              src="https://html.tailus.io/blocks/customers/nike.svg"
              alt="Nike Logo"
              height="20"
              width="auto"
            />
          </div>
          <div class="flex">
            <img
              class="mx-auto h-5 w-fit dark:invert"
              src="https://html.tailus.io/blocks/customers/lemonsqueezy.svg"
              alt="Lemon Squeezy Logo"
              height="20"
              width="auto"
            />
          </div>
          <div class="flex">
            <img
              class="mx-auto h-4 w-fit dark:invert"
              src="https://html.tailus.io/blocks/customers/laravel.svg"
              alt="Laravel Logo"
              height="16"
              width="auto"
            />
          </div>
          <div class="flex">
            <img
              class="mx-auto h-7 w-fit dark:invert"
              src="https://html.tailus.io/blocks/customers/lilly.svg"
              alt="Lilly Logo"
              height="28"
              width="auto"
            />
          </div>

          <div class="flex">
            <img
              class="mx-auto h-6 w-fit dark:invert"
              src="https://html.tailus.io/blocks/customers/openai.svg"
              alt="OpenAI Logo"
              height="24"
              width="auto"
            />
          </div>
        </Marquee>

        <div
          class="bg-linear-to-r from-background absolute inset-y-0 left-0 w-20"
        ></div>
        <div
          class="bg-linear-to-l from-background absolute inset-y-0 right-0 w-20"
        ></div>
        {@render progressiveBlur({
          direction: "left",
          blurIntensity: 1,
          class: "pointer-events-none absolute left-0 top-0 h-full w-20",
        })}
        {@render progressiveBlur({
          direction: "right",
          blurIntensity: 1,
          class: "pointer-events-none absolute right-0 top-0 h-full w-20",
        })}
      </div>
    </div>
  </div>
</section>

{#snippet progressiveBlur({
  direction = "bottom",
  blurLayers = 8,
  class: _class = "",
  blurIntensity = 0.25,
}: ProgressiveBlurProps)}
  {@const layers = Math.max(blurLayers, 2)}
  {@const segmentSize = 1 / (blurLayers + 1)}
  <div class={cn("relative", _class)}>
    {#each { length: layers } as _, index}
      {@const angle = GRADIENT_ANGLES[direction]}
      {@const gradientStops = [
        index * segmentSize,
        (index + 1) * segmentSize,
        (index + 2) * segmentSize,
        (index + 3) * segmentSize,
      ].map(
        (pos, posIndex) =>
          `rgba(255, 255, 255, ${posIndex === 1 || posIndex === 2 ? 1 : 0}) ${pos * 100}%`
      )}
      {@const gradient = `linear-gradient(${angle}deg, ${gradientStops.join(
        ", "
      )})`}

      <div
        class="pointer-events-none absolute inset-0 rounded-[inherit]"
        style="mask-image: {gradient};
  -webkit-mask-image: {gradient};
  backdrop-filter: blur({index * blurIntensity}px); z-index: {index * 10};"
      ></div>
    {/each}
  </div>
{/snippet}


<!-- Marquee Component Code - Save it in Another file as Marquee.svelte -->

<!--
<script lang="ts">
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
        "[animation-direction:reverse]": reverse,
      })}
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
