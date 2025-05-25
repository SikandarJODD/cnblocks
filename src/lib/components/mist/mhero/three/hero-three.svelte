<script>
  import Button from "$lib/components/ui/button/button.svelte";
  import Header from "./header.svelte";
</script>

<Header />
<main
  class="bg-muted/50 overflow-hidden [--color-primary:theme(colors.indigo.500)]"
>
  <section>
    <div class="relative py-24">
      <div class="mx-auto max-w-5xl px-6">
        <div>
          <h1
            class="mt-8 max-w-2xl text-balance text-5xl font-bold lg:text-6xl"
          >
            Build 10x Faster with Mist
          </h1>
          <p class="text-foreground my-6 max-w-2xl text-balance text-2xl">
            Craft. Build. Ship Modern Websites With AI Support.
          </p>

          <div
            class="flex flex-col items-center gap-3 *:w-full sm:flex-row sm:*:w-fit"
          >
            <Button variant="mdefault" href="/" size="lg">
              <span class="text-nowrap">Start Building</span>
            </Button>
            <Button href="/" size="lg" variant="outline">
              <span class="text-nowrap">Request a demo</span>
            </Button>
          </div>
        </div>

        <div class="mt-8">
          <p class="text-muted-foreground font-medium">Trusted by teams at :</p>
          <div class="mt-4 flex items-center gap-12">
            <div class="flex">
              <img
                class="mx-auto h-5 w-fit"
                src="https://html.tailus.io/blocks/customers/nvidia.svg"
                alt="Nvidia Logo"
                height="20"
                width="auto"
              />
            </div>

            <div class="flex">
              <img
                class="mx-auto h-4 w-fit"
                src="https://html.tailus.io/blocks/customers/column.svg"
                alt="Column Logo"
                height="16"
                width="auto"
              />
            </div>
            <div class="flex">
              <img
                class="mx-auto h-4 w-fit"
                src="https://html.tailus.io/blocks/customers/github.svg"
                alt="GitHub Logo"
                height="16"
                width="auto"
              />
            </div>
            <div class="flex">
              <img
                class="mx-auto h-5 w-fit"
                src="https://html.tailus.io/blocks/customers/nike.svg"
                alt="Nike Logo"
                height="20"
                width="auto"
              />
            </div>
          </div>
        </div>

        <div class="relative -mr-56 mt-16 sm:mr-0">
          <div
            class="bg-background rounded-(--radius) relative mx-auto overflow-hidden border border-transparent shadow-lg shadow-black/10 ring-black/10"
          >
            <img
              src="/mist/tailark-2.png"
              alt="app screen"
              width="2880"
              height="1842"
            />
          </div>
        </div>
      </div>
    </div>
  </section>
</main>
