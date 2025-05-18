<script lang="ts">
  import { Button } from "$lib/components/ui/button";
  import ChevronRight from "@lucide/svelte/icons/chevron-right";
  import CirclePlay from "@lucide/svelte/icons/circle-play";
  import Header from "./header.svelte";
</script>

<Header />
<main class="overflow-hidden [--color-primary:var(--color-indigo-500)]" >
  <section class="bg-linear-to-b to-muted from-background">
    <div class="relative py-36">
      <div class="relative z-10 mx-auto w-full max-w-5xl px-6">
        <div class="md:w-1/2">
          <div>
            <h1 class="max-w-md text-balance text-5xl font-medium md:text-6xl">
              Simple payments for startups
            </h1>
            <p
              class="text-muted-foreground my-8 max-w-2xl text-balance text-xl"
            >
              One tool that does it all. Search, generate, analyze, and
              chat—right inside Tailark.
            </p>

            <div class="flex items-center gap-3">
              <Button variant="mdefault" size="lg" class="pr-4.5">
                <span class="text-nowrap">Get Started</span>
                <ChevronRight class="opacity-50" />
              </Button>
              <Button href="#" size="lg" variant="outline" class="pl-5">
                <CirclePlay class="fill-primary/25 stroke-primary" />
                <span class="text-nowrap">Watch video</span>
              </Button>
            </div>
          </div>

          <div class="mt-10">
            <p class="text-muted-foreground">Trusted by teams at :</p>
            <div class="mt-6 grid max-w-sm grid-cols-3 gap-6">
              <div class="flex">
                <img
                  class="h-4 w-fit"
                  src="https://html.tailus.io/blocks/customers/column.svg"
                  alt="Column Logo"
                  height="16"
                  width="auto"
                />
              </div>
              <div class="flex">
                <img
                  class="h-5 w-fit"
                  src="https://html.tailus.io/blocks/customers/nvidia.svg"
                  alt="Nvidia Logo"
                  height="20"
                  width="auto"
                />
              </div>
              <div class="flex">
                <img
                  class="h-4 w-fit"
                  src="https://html.tailus.io/blocks/customers/github.svg"
                  alt="GitHub Logo"
                  height="16"
                  width="auto"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div
        class="perspective-near mt-24 translate-x-12 md:absolute md:-right-6 md:bottom-16 md:left-1/2 md:top-40 md:mt-0 md:translate-x-0"
      >
        <div
          class="before:border-foreground/5 before:bg-foreground/5 relative h-full before:absolute before:-inset-x-4 before:bottom-7 before:top-0 before:skew-x-6 before:rounded-[calc(var(--radius)+1rem)] before:border"
        >
          <div
            class="bg-background rounded-(--radius) shadow-foreground/10 relative h-full -translate-y-12 skew-x-6 overflow-hidden border border-transparent shadow-md ring-1"
          >
            <img
              src="/mist/tailark.png"
              alt="app screen"
              width="2880"
              height="1842"
              class="object-top-left size-full object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  </section>
</main>
