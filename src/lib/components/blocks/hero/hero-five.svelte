<script>
  import Button from "$lib/components/ui/button/button.svelte";
  import { ChevronRight } from "@lucide/svelte";
  import HeroHeader9 from "../header/HeroHeader9.svelte";
  import InfiniteSlider from "$lib/components/magic/Marquee.svelte";
  import ProgressiveBlur from "$lib/components/magic/ProgressiveBlur.svelte";
  import Marquee from "$lib/components/magic/Marquee.svelte";
</script>

<HeroHeader9 />
<main class="overflow-x-hidden">
  <section>
    <div class="py-24 md:pb-32 lg:pb-36 lg:pt-72">
      <div
        class="relative mx-auto flex max-w-7xl flex-col px-6 lg:block lg:px-12"
      >
        <div
          class="mx-auto max-w-lg text-center lg:ml-0 lg:max-w-full lg:text-left"
        >
          <h1
            class="mt-8 max-w-2xl text-balance text-5xl md:text-6xl lg:mt-16 xl:text-7xl"
          >
            Build 10x Faster with NS
          </h1>
          <p class="mt-8 max-w-2xl text-balance text-lg">
            Highly customizable components for building modern websites and
            applications you mean it.
          </p>

          <div
            class="mt-12 flex flex-col items-center justify-center gap-2 sm:flex-row lg:justify-start"
          >
            <Button
              size="lg"
              href="#"
              class="h-12 rounded-full pl-5 pr-3 text-base"
            >
              <span class="text-nowrap">Start Building</span>
              <ChevronRight class="ml-1" />
            </Button>
            <Button
              size="lg"
              variant="ghost"
              class="h-12 rounded-full px-5 text-base hover:bg-zinc-950/5 dark:hover:bg-white/5"
            >
              <a href="#link">
                <span class="text-nowrap">Request a demo</span>
              </a>
            </Button>
          </div>
        </div>
      </div>
      <div
        class="aspect-2/3 absolute inset-1 -z-10 overflow-hidden rounded-3xl border border-black/10 lg:aspect-video lg:rounded-[3rem] dark:border-white/5"
      >
        <video
          autoPlay
          loop
          class="size-full -scale-x-100 object-cover opacity-50 invert dark:opacity-35 dark:invert-0 dark:lg:opacity-75"
          src="https://res.cloudinary.com/dg4jhba5c/video/upload/v1741605033/dna_ttplyu.mp4"
        ></video>
      </div>
    </div>
  </section>
  <section class="bg-background pb-2">
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
          <ProgressiveBlur
            class="pointer-events-none absolute left-0 top-0 h-full w-20 z-50"
            direction="left"
            blurIntensity={1}
          />
          <ProgressiveBlur
            class="pointer-events-none absolute right-0 top-0 h-full w-20 z-50"
            direction="right"
            blurIntensity={1}
          />
        </div>
      </div>
    </div>
  </section>
</main>
