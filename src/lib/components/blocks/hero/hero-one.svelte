<script>
  import { ArrowRight, ChevronRight } from "@lucide/svelte";
  import Button from "$lib/components/ui/button/button.svelte";
  import HeroHeader from "../header/HeroHeader.svelte";
</script>

<div>
  <HeroHeader />
  <main class="overflow-hidden">
    <div
      class="absolute inset-0 isolate hidden opacity-65 contain-strict lg:block"
    >
      <div
        class="w-140 h-320 -translate-y-87.5 absolute left-0 top-0 -rotate-45 rounded-full bg-[radial-gradient(68.54%_68.72%_at_55.02%_31.46%,hsla(0,0%,85%,.08)_0,hsla(0,0%,55%,.02)_50%,hsla(0,0%,45%,0)_80%)]"
      ></div>
      <div
        class="h-320 absolute left-0 top-0 w-60 -rotate-45 rounded-full bg-[radial-gradient(50%_50%_at_50%_50%,hsla(0,0%,85%,.06)_0,hsla(0,0%,45%,.02)_80%,transparent_100%)] [translate:5%_-50%]"
      ></div>
      <div
        class="h-320 -translate-y-87.5 absolute left-0 top-0 w-60 -rotate-45 bg-[radial-gradient(50%_50%_at_50%_50%,hsla(0,0%,85%,.04)_0,hsla(0,0%,45%,.02)_80%,transparent_100%)]"
      ></div>
    </div>
    <section>
      <div class="relative pt-24 md:pt-36">
        <div class="absolute inset-0 -z-20">
          <img
            src="https://res.cloudinary.com/dg4jhba5c/image/upload/v1741605538/night-background_ni3vqb.jpg"
            alt="background"
            class="absolute inset-x-0 top-56 -z-20 hidden lg:top-32 dark:block"
            width="3276"
            height="4095"
          />
        </div>
        <div
          class="absolute inset-0 -z-10 size-full [background:radial-gradient(125%_125%_at_50%_100%,transparent_0%,var(--color-background)_75%)]"
        ></div>
        <div class="mx-auto max-w-7xl px-6">
          <div class="text-center sm:mx-auto lg:mr-auto lg:mt-0">
            <div>
              <a
                href="#link"
                class="hover:bg-background dark:hover:border-t-border bg-muted group mx-auto flex w-fit items-center gap-4 rounded-full border p-1 pl-4 shadow-md shadow-zinc-950/5 transition-colors duration-300 dark:border-t-white/5 dark:shadow-zinc-950"
              >
                <span class="text-foreground text-sm"
                  >Introducing Support for AI Models</span
                >
                <span
                  class="dark:border-background block h-4 w-0.5 border-l bg-white dark:bg-zinc-700"
                ></span>

                <div
                  class="bg-background group-hover:bg-muted size-6 overflow-hidden rounded-full duration-500"
                >
                  <div
                    class="flex w-12 -translate-x-1/2 duration-500 ease-in-out group-hover:translate-x-0"
                  >
                    <span class="flex size-6">
                      <ArrowRight class="m-auto size-3" />
                    </span>
                    <span class="flex size-6">
                      <ArrowRight class="m-auto size-3" />
                    </span>
                  </div>
                </div>
              </a>
            </div>

            <h1
              class="mt-8 text-balance text-6xl md:text-7xl lg:mt-16 xl:text-[5.25rem]"
            >
              Modern Solutions for Customer Engagement
            </h1>
            <p class="mx-auto mt-8 max-w-2xl text-balance text-lg">
              Highly customizable components for building modern websites and
              applications that look and feel the way you mean it.
            </p>

            <div
              class="mt-12 flex flex-col items-center justify-center gap-2 md:flex-row"
            >
              <div
                class="bg-foreground/10 border p-0.5"
                style="border-radius: calc(0.5rem + 0.125rem + 4px);"
              >
                <Button
                  href="#link"
                  size="lg"
                  class="rounded-xl px-5 text-base"
                >
                  <span class="text-nowrap">Start Building</span>
                </Button>
              </div>
              <Button size="lg" variant="ghost" class="rounded-xl px-5">
                Request a demo
              </Button>
            </div>
          </div>
        </div>

        <div
          class="relative -mr-56 mt-8 overflow-hidden px-2 sm:mr-0 sm:mt-12 md:mt-20"
        >
          <div
            class="bg-linear-to-b to-background absolute inset-0 z-10 from-transparent from-35%"
          ></div>
          <div
            class="inset-shadow-2xs ring-background dark:inset-shadow-white/20 bg-background relative mx-auto max-w-6xl overflow-hidden rounded-2xl border p-4 shadow-lg shadow-zinc-950/15 ring-1"
          >
            <img
              class="bg-background aspect-15/8 relative hidden rounded-2xl dark:block"
              src="/mail2.png"
              alt="app screen"
              width="2700"
              height="1440"
            />
            <img
              class="z-2 border-border/25 aspect-15/8 relative rounded-2xl border dark:hidden"
              src="/mail2-light.png"
              alt="app screen"
              width="2700"
              height="1440"
            />
          </div>
        </div>
      </div>
    </section>
    <section class="bg-background pb-16 pt-16 md:pb-32">
      <div class="group relative m-auto max-w-5xl px-6">
        <div
          class="absolute inset-0 z-10 flex scale-95 items-center justify-center opacity-0 duration-500 group-hover:scale-100 group-hover:opacity-100"
        >
          <a href="/" class="block text-sm duration-150 hover:opacity-75">
            <span> Meet Our Customers</span>

            <ChevronRight class="ml-1 inline-block size-3" />
          </a>
        </div>
        <div
          class="group-hover:blur-xs mx-auto mt-12 grid max-w-2xl grid-cols-4 gap-x-12 gap-y-8 transition-all duration-500 group-hover:opacity-50 sm:gap-x-16 sm:gap-y-14"
        >
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
        </div>
      </div>
    </section>
  </main>
</div>
