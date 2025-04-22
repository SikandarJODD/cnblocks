<script lang="ts">
  import Button from "$lib/components/ui/button/button.svelte";
  // Hero Header Component
  import Logo from "$lib/components/web/Logo.svelte";
  import { cn } from "$lib/utils";
  import Menu from "@lucide/svelte/icons/menu";
  import X from "@lucide/svelte/icons/x";
  import { scrollY } from "svelte/reactivity/window";
  import Marquee from "$lib/components/magic/Marquee.svelte";

  let menuItems = [
    { name: "Features", href: "#a" },
    { name: "Solution", href: "#a" },
    { name: "Pricing", href: "#a" },
    { name: "About", href: "#a" },
  ];
  let menuState = $state(false);
  let isScrolled = $derived.by(() => {
    if (scrollY.current !== undefined && scrollY.current > 50) {
      return true;
    }
    return false;
  });

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

{@render header()}
<main class="overflow-x-hidden">
  <section>
    <div class="pb-24 pt-12 md:pb-32 lg:pb-56 lg:pt-44">
      <div class="relative mx-auto flex max-w-6xl flex-col px-6 lg:block">
        <div class="mx-auto max-w-lg text-center lg:ml-0 lg:w-1/2 lg:text-left">
          <h1
            class="mt-8 max-w-2xl text-balance text-5xl font-medium md:text-6xl lg:mt-16 xl:text-7xl"
          >
            Ship 10x Faster with NS
          </h1>
          <p class="mt-8 max-w-2xl text-pretty text-lg">
            Highly customizable components for building modern websites and
            applications that look and feel the way you mean it.
          </p>

          <div
            class="mt-12 flex flex-col items-center justify-center gap-2 sm:flex-row lg:justify-start"
          >
            <Button href="#" size="lg" class="px-5 text-base">
              <span class="text-nowrap">Start Building</span>
            </Button>
            <Button size="lg" variant="ghost" class="px-5 text-base" href="#">
              <span class="text-nowrap">Request a demo</span>
            </Button>
          </div>
        </div>
        <!-- <img
          class="-z-10 order-first ml-auto h-56 w-full object-cover invert sm:h-96 lg:absolute lg:inset-0 lg:-right-20 lg:-top-96 lg:order-last lg:h-max lg:w-2/3 lg:object-contain dark:mix-blend-lighten dark:invert-0"
          src="https://res.cloudinary.com/dg4jhba5c/image/upload/v1741605150/abstract-bg_wq4f8w.jpg"
          alt="Abstract Object"
          height="4000"
          width="3000"
        /> -->
      </div>
    </div>
  </section>
  <section class="bg-background pb-16 md:pb-32">
    <div class="group relative m-auto max-w-6xl px-6">
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
          <!-- <ProgressiveBlur
              class="pointer-events-none absolute left-0 top-0 h-full w-20"
              direction="left"
              blurIntensity={1}
            />
            <ProgressiveBlur
              class="pointer-events-none absolute right-0 top-0 h-full w-20"
              direction="right"
              blurIntensity={1}
            /> -->
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
</main>

{#snippet header()}
  <header>
    <nav class="bg-background/50 fixed z-20 w-full border-b backdrop-blur-3xl">
      <div class="mx-auto max-w-5xl px-6 transition-all duration-300">
        <div
          class="flex flex-wrap lg:flex-nowrap items-center justify-between gap-6 py-3 lg:gap-6 lg:py-4"
        >
          <div class="flex w-full items-center justify-between lg:w-auto">
            <a href="/" aria-label="home" class="flex items-center space-x-2">
              <Logo />
            </a>

            <button
              onclick={() => (menuState = !menuState)}
              aria-label={menuState == true ? "Close Menu" : "Open Menu"}
              class="relative z-20 -m-2.5 -mr-4 block cursor-pointer p-2.5 lg:hidden"
            >
              <Menu
                class={[
                  "m-auto size-6 duration-200",
                  menuState && "rotate-180 scale-0 opacity-0",
                ]}
              />
              <X
                class={[
                  "absolute inset-0 m-auto size-6 -rotate-180 scale-0 opacity-0 duration-200",
                  menuState && "rotate-0 scale-100 opacity-100",
                ]}
              />
            </button>
          </div>

          <div
            class={[
              "bg-background mb-6 w-full flex-wrap items-center justify-end sm:justify-between space-y-8 rounded-3xl border p-6 shadow-2xl shadow-zinc-300/20 md:flex-nowrap lg:m-0 lg:flex  lg:gap-6 lg:space-y-0 lg:border-transparent lg:bg-transparent lg:p-0 lg:shadow-none dark:shadow-none dark:lg:bg-transparent",
              menuState ? "block lg:flex" : "hidden",
            ]}
          >
            <div class="lg:pr-4">
              <ul
                class="space-y-6 text-base lg:flex lg:gap-8 lg:space-y-0 lg:text-sm"
              >
                {#each menuItems as item, index}
                  <li>
                    <a
                      href={item.href}
                      class="text-muted-foreground hover:text-accent-foreground block duration-150"
                    >
                      <span>{item.name}</span>
                    </a>
                  </li>
                {/each}
              </ul>
            </div>

            <div
              class="flex w-full flex-col space-y-3 sm:flex-row sm:gap-3 sm:space-y-0 md:w-fit"
            >
              <Button variant="outline" size="sm">Login</Button>
              <Button size="sm">Sign Up</Button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  </header>
{/snippet}

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
