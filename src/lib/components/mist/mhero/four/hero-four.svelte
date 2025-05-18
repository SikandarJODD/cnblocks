<script lang="ts">
  import Button from "$lib/components/ui/button/button.svelte";
</script>

<main class="[--color-primary:var(--color-indigo-500)]">
  <section class="overflow-hidden">
    <div class="py-20 md:py-36">
      <div class="relative z-10 mx-auto max-w-5xl px-6">
        <div class="relative text-center">
          <h1
            class="mx-auto max-w-2xl text-balance text-4xl font-bold md:text-5xl"
          >
            Build Stunning Websites That Drive Results
          </h1>

          <p
            class="text-muted-foreground mx-auto my-6 max-w-2xl text-balance text-xl"
          >
            Craft. Build. Ship Modern Websites With AI Support.
          </p>

          <div
            class="flex flex-col items-center justify-center gap-3 *:w-full sm:flex-row sm:*:w-auto"
          >
            <Button variant='mdefault' href="#" size="lg">
              <span class="text-nowrap">Get Started</span>
            </Button>
            <Button href="#" size="lg" variant="outline">
              <span class="text-nowrap">View Demo</span>
            </Button>
          </div>
        </div>

        <div
          class="relative mx-auto mt-12 max-w-5xl overflow-hidden rounded-3xl bg-black/10 md:mt-20"
        >
          <img
            src="https://images.unsplash.com/photo-1637055972140-64608c1abe53?q=80&w=2942&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt=""
            class="absolute inset-0 size-full object-cover"
          />

          <div
            class="bg-background rounded-(--radius) relative m-4 overflow-hidden border border-transparent shadow-xl shadow-black/15 ring-1 ring-black/10 sm:m-8 md:m-12"
          >
            <img
              src="/mist/tailark-2.png"
              alt="app screen"
              width="2880"
              height="1842"
              class="object-top-left size-full object-cover"
            />
          </div>
        </div>

        <div class="mt-8">
          <p class="text-muted-foreground text-center">Trusted by teams at :</p>
          <div class="mt-4 flex items-center justify-center gap-12">
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
      </div>
    </div>
  </section>
</main>
