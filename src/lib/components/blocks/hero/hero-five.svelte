<script>
  import Marquee from "$lib/components/magic/Marquee.svelte";
  import ProgressiveBlur from "$lib/components/magic/ProgressiveBlur.svelte";
  import Button from "$lib/components/ui/button/button.svelte";

  // You can store Hero Header Component in seperate file
  // I have used snippet for better readability

  // Hero Header Component

  import { cn } from "$lib/utils";
  import ChevronRight from "@lucide/svelte/icons/chevron-right";
  import Menu from "@lucide/svelte/icons/menu";
  import X from "@lucide/svelte/icons/x";
  import { scrollY } from "svelte/reactivity/window";

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
</script>



<!-- Scroll below to see the snippet code  -->
{@render heroHeader()}

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
      <!-- <div
        class="aspect-2/3 absolute inset-1 -z-10 overflow-hidden rounded-3xl border border-black/10 lg:aspect-video lg:rounded-[3rem] dark:border-white/5"
      >
        <video
          autoPlay
          loop
          class="size-full -scale-x-100 object-cover opacity-50 invert dark:opacity-35 dark:invert-0 dark:lg:opacity-75"
          src="https://res.cloudinary.com/dg4jhba5c/video/upload/v1741605033/dna_ttplyu.mp4"
        ></video>
      </div> -->
    </div>
  </section>
  <section class="bg-background pb-2">
    <div class="group relative m-auto max-w-7xl px-6">
      <div class="flex flex-col items-center md:flex-row">
        <div class="md:max-w-44 md:border-r md:pr-6">
          <p class="text-end text-sm">Powering the best teams</p>
        </div>
        <!-- Checkout Logo Cloud Three  -->
        <!-- I have provided progresive blur snippet code & Marquee code -->
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

{#snippet heroHeader()}
  <header>
    <nav class="fixed z-20 w-full px-2">
      <div
        class={[
          "mx-auto max-w-7xl rounded-3xl px-6 transition-all duration-300 lg:px-12",
          isScrolled && "bg-background/50 backdrop-blur-2xl",
        ]}
      >
        <div
          class={[
            "relative flex flex-wrap items-center justify-between gap-6 py-3 lg:gap-0 lg:py-4",
            isScrolled && "lg:py-4",
          ]}
        >
          <div
            class="flex w-full items-center justify-between gap-12 lg:w-auto"
          >
            <a href="/" aria-label="home" class="flex items-center space-x-2">
              <svg
          xmlns="http://www.w3.org/2000/svg"
          width="22"
          height="22"
          viewBox="0 0 24 24"
          fill="none"
          role="img"
          color="currentColor"
        >
          <path
            d="M22 18C22 19.4001 22 20.1002 21.7275 20.635C21.4878 21.1054 21.1054 21.4878 20.635 21.7275C20.1002 22 19.4001 22 18 22C16.5999 22 15.8998 22 15.365 21.7275C14.8946 21.4878 14.5122 21.1054 14.2725 20.635C14 20.1002 14 19.4001 14 18C14 16.5999 14 15.8998 14.2725 15.365C14.5122 14.8946 14.8946 14.5122 15.365 14.2725C15.8998 14 16.5999 14 18 14C19.4001 14 20.1002 14 20.635 14.2725C21.1054 14.5122 21.4878 14.8946 21.7275 15.365C22 15.8998 22 16.5999 22 18Z"
            stroke="currentColor"
            stroke-width="1.5"
          ></path>
          <path
            d="M22 10C22 11.4001 22 12.1002 21.7275 12.635C21.4878 13.1054 21.1054 13.4878 20.635 13.7275C20.1002 14 19.4001 14 18 14C16.5999 14 15.8998 14 15.365 13.7275C14.8946 13.4878 14.5122 13.1054 14.2725 12.635C14 12.1002 14 11.4001 14 10C14 8.59987 14 7.8998 14.2725 7.36502C14.5122 6.89462 14.8946 6.51217 15.365 6.27248C15.8998 6 16.5999 6 18 6C19.4001 6 20.1002 6 20.635 6.27248C21.1054 6.51217 21.4878 6.89462 21.7275 7.36502C22 7.8998 22 8.59987 22 10Z"
            stroke="currentColor"
            stroke-width="1.5"
          ></path>
          <path
            d="M14 18C14 19.4001 14 20.1002 13.7275 20.635C13.4878 21.1054 13.1054 21.4878 12.635 21.7275C12.1002 22 11.4001 22 10 22C8.59987 22 7.8998 22 7.36502 21.7275C6.89462 21.4878 6.51217 21.1054 6.27248 20.635C6 20.1002 6 19.4001 6 18C6 16.5999 6 15.8998 6.27248 15.365C6.51217 14.8946 6.89462 14.5122 7.36502 14.2725C7.8998 14 8.59987 14 10 14C11.4001 14 12.1002 14 12.635 14.2725C13.1054 14.5122 13.4878 14.8946 13.7275 15.365C14 15.8998 14 16.5999 14 18Z"
            stroke="currentColor"
            stroke-width="1.5"
          ></path>
          <path
            opacity="0.4"
            d="M10 6C10 7.40013 10 8.1002 9.72752 8.63497C9.48783 9.10538 9.10538 9.48783 8.63498 9.72752C8.1002 10 7.40013 10 6 10C4.59987 10 3.8998 10 3.36502 9.72751C2.89462 9.48783 2.51217 9.10538 2.27248 8.63497C2 8.10019 2 7.40013 2 6C2 4.59987 2 3.8998 2.27248 3.36502C2.51217 2.89462 2.89462 2.51217 3.36502 2.27248C3.8998 2 4.59987 2 6 2C7.40013 2 8.1002 2 8.63498 2.27248C9.10538 2.51217 9.48783 2.89462 9.72752 3.36502C10 3.8998 10 4.59987 10 6Z"
            stroke="currentColor"
            stroke-width="1.5"
          ></path>
        </svg>
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

          <div class="absolute inset-0 m-auto hidden size-fit lg:block">
            <ul class="flex gap-8 text-sm">
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
            class={[
              "bg-background mb-6  w-full flex-wrap items-center justify-end space-y-8 rounded-3xl border p-6 shadow-2xl shadow-zinc-300/20 md:flex-nowrap lg:m-0 lg:flex lg:w-fit lg:gap-6 lg:space-y-0 lg:border-transparent lg:bg-transparent lg:p-0 lg:shadow-none dark:shadow-none dark:lg:bg-transparent",
              menuState ? "block lg:flex" : "hidden lg:flex",
            ]}
          >
            <div class="lg:hidden">
              <ul class="space-y-6 text-base">
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
              <Button
                variant="outline"
                size="sm"
                class={cn(isScrolled && "lg:hidden")}
                href="#"
              >
                Login
              </Button>
              <Button href="#" size="sm" class={cn(isScrolled && "lg:hidden")}>
                Sign Up
              </Button>
              <Button
                size="sm"
                href="#"
                class={cn(isScrolled ? "lg:inline-flex" : "hidden")}
              >
                Get Strated
              </Button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  </header>
{/snippet}
