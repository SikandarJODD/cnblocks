<script>
  import Button from "$lib/components/ui/button/button.svelte";
  import { ArrowRight, Rocket } from "@lucide/svelte";
  import HeroHeader8 from "../header/HeroHeader8.svelte";
</script>

<HeroHeader8 />
<main class="overflow-hidden">
  <section>
    <div class="relative pt-24">
      <div class="mx-auto max-w-7xl px-6">
        <div
          class="max-w-3xl text-center sm:mx-auto lg:mr-auto lg:mt-0 lg:w-4/5"
        >
          <a
            href="/"
            class="rounded-(--radius) mx-auto flex w-fit items-center gap-2 border p-1 pr-3"
          >
            <span
              class="bg-muted rounded-[calc(var(--radius)-0.25rem)] px-2 py-1 text-xs"
              >New</span
            >
            <span class="text-sm">Introduction Tailus UI Html</span>
            <span class="bg-(--color-border) block h-4 w-px"></span>

            <ArrowRight class="size-4" />
          </a>

          <h1
            class="mt-8 text-balance text-4xl font-semibold md:text-5xl xl:text-6xl xl:[line-height:1.125]"
          >
            Modern Software testing reimagined
          </h1>
          <p class="mx-auto mt-8 hidden max-w-2xl text-wrap text-lg sm:block">
            Tailwindcss highly customizable components for building modern
            websites and applications that look and feel the way you mean it.
          </p>
          <p class="mx-auto mt-6 max-w-2xl text-wrap sm:hidden">
            Highly customizable components for building modern websites and
            applications, with your personal spark.
          </p>

          <div class="mt-8">
            <Button size="lg" href="#">
              <Rocket class="relative size-4" />
              <span class="text-nowrap">Start Building</span>
            </Button>
          </div>
        </div>
      </div>
      <div class="relative mt-16">
        <div
          class="bg-linear-to-b to-background absolute inset-0 z-10 from-transparent from-35%"
        ></div>
        <div class="relative mx-auto max-w-6xl overflow-hidden px-4">
          <img
            class="z-2 border-border/25 relative hidden rounded-2xl border dark:block"
            src="/music.png"
            alt="app screen"
            width={2796}
            height={2008}
          />
          <img
            class="z-2 border-border/25 relative rounded-2xl border dark:hidden"
            src="/music-light.png"
            alt="app screen"
            width={2796}
            height={2008}
          />
        </div>
      </div>
    </div>
  </section>
  <section class="bg-background relative z-10 pb-16">
    <div class="m-auto max-w-5xl px-6">
      <h2 class="text-center text-lg font-medium">
        Your favorite companies are our partners.
      </h2>
      <div
        class="mx-auto mt-12 flex max-w-4xl flex-wrap items-center justify-center gap-x-12 gap-y-8 sm:gap-x-16 sm:gap-y-12"
      >
        <img
          class="h-5 w-fit dark:invert"
          src="https://html.tailus.io/blocks/customers/nvidia.svg"
          alt="Nvidia Logo"
          height="20"
          width="auto"
        />
        <img
          class="h-4 w-fit dark:invert"
          src="https://html.tailus.io/blocks/customers/column.svg"
          alt="Column Logo"
          height="16"
          width="auto"
        />
        <img
          class="h-4 w-fit dark:invert"
          src="https://html.tailus.io/blocks/customers/github.svg"
          alt="GitHub Logo"
          height="16"
          width="auto"
        />
        <img
          class="h-5 w-fit dark:invert"
          src="https://html.tailus.io/blocks/customers/nike.svg"
          alt="Nike Logo"
          height="20"
          width="auto"
        />
        <img
          class="h-4 w-fit dark:invert"
          src="https://html.tailus.io/blocks/customers/laravel.svg"
          alt="Laravel Logo"
          height="16"
          width="auto"
        />
        <img
          class="h-7 w-fit dark:invert"
          src="https://html.tailus.io/blocks/customers/lilly.svg"
          alt="Lilly Logo"
          height="28"
          width="auto"
        />
        <img
          class="h-5 w-fit dark:invert"
          src="https://html.tailus.io/blocks/customers/lemonsqueezy.svg"
          alt="Lemon Squeezy Logo"
          height="20"
          width="auto"
        />
        <img
          class="h-6 w-fit dark:invert"
          src="https://html.tailus.io/blocks/customers/openai.svg"
          alt="OpenAI Logo"
          height="24"
          width="auto"
        />
        <img
          class="h-4 w-fit dark:invert"
          src="https://html.tailus.io/blocks/customers/tailwindcss.svg"
          alt="Tailwind CSS Logo"
          height="16"
          width="auto"
        />
        <img
          class="h-5 w-fit dark:invert"
          src="https://html.tailus.io/blocks/customers/vercel.svg"
          alt="Vercel Logo"
          height="20"
          width="auto"
        />
        <img
          class="h-5 w-fit dark:invert"
          src="https://html.tailus.io/blocks/customers/zapier.svg"
          alt="Zapier Logo"
          height="20"
          width="auto"
        />
      </div>
    </div>
  </section>
</main>
