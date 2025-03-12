<script>
  import { ArrowRight, ChevronRight } from "@lucide/svelte";
  import Button from "$lib/components/ui/button/button.svelte";
  import HeroHeader from "../header/HeroHeader.svelte";
</script>

<HeroHeader />
<main class="overflow-hidden">
  <div
    aria-hidden
    class="absolute inset-0 isolate hidden contain-strict lg:block"
  >
    <div
      class="w-140 h-320 -translate-y-87.5 absolute left-0 top-0 -rotate-45 rounded-full bg-[radial-gradient(68.54%_68.72%_at_55.02%_31.46%,hsla(0,0%,85%,.08)_0,hsla(0,0%,55%,.02)_50%,hsla(0,0%,45%,0)_80%)]"
    />
    <div
      class="h-320 absolute left-0 top-0 w-60 -rotate-45 rounded-full bg-[radial-gradient(50%_50%_at_50%_50%,hsla(0,0%,85%,.06)_0,hsla(0,0%,45%,.02)_80%,transparent_100%)] [translate:5%_-50%]"
    />
    <div
      class="h-320 -translate-y-87.5 absolute left-0 top-0 w-60 -rotate-45 bg-[radial-gradient(50%_50%_at_50%_50%,hsla(0,0%,85%,.04)_0,hsla(0,0%,45%,.02)_80%,transparent_100%)]"
    />
  </div>
  <section>
    <div class="relative pt-24">
      <div
        class="absolute inset-0 -z-10 size-full [background:radial-gradient(125%_125%_at_50%_100%,transparent_0%,var(--color-background)_75%)]"
      ></div>
      <div class="mx-auto max-w-5xl px-6">
        <div class="sm:mx-auto lg:mr-auto lg:mt-0">
          <h1
            class="mt-8 max-w-2xl text-balance text-5xl font-medium md:text-6xl lg:mt-16"
          >
            Build and Ship 10x faster with NS
          </h1>
          <p class="mt-8 max-w-2xl text-pretty text-lg">
            Tailwindcss highly customizable components for building modern
            websites and applications that look and feel the way you mean it.
          </p>

          <div class="mt-12 flex items-center gap-2">
            <div
              class="bg-foreground/10 border p-0.5 "
              style="border-radius: calc(var(--radius) + 4px + 0.125rem);"
            >
              <Button size="lg" class="rounded-xl px-5 text-base">
                <a href="#a">
                  <span class="text-nowrap">Start Building</span>
                </a>
              </Button>
            </div>
            <Button
              size="lg"
              variant="ghost"
              class="h-10.5 rounded-xl px-5 text-base"
            >
              <a href="#a">
                <span class="text-nowrap">Request a demo</span>
              </a>
            </Button>
          </div>
        </div>
      </div>
      <div>
        <div
          class="relative -mr-56 mt-8 overflow-hidden px-2 sm:mr-0 sm:mt-12 md:mt-20"
        >
          <div
            aria-hidden
            class="bg-linear-to-b to-background absolute inset-0 z-10 from-transparent from-35%"
          />
          <div
            class="inset-shadow-2xs ring-background dark:inset-shadow-white/20 bg-background relative mx-auto max-w-5xl overflow-hidden rounded-2xl border p-4 shadow-lg shadow-zinc-950/15 ring-1"
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
