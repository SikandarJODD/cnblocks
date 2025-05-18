<script lang="ts">
  import Button from "$lib/components/ui/button/button.svelte";
  import Sparkle from "@lucide/svelte/icons/sparkle";
  import Header from "./header.svelte";
</script>

<Header />
<main class='[--color-primary:var(--color-indigo-500)]'>
  <section
    class="before:bg-muted border-e-foreground relative overflow-hidden before:absolute before:inset-1 before:h-[calc(100%-8rem)] before:rounded-2xl sm:before:inset-2 md:before:rounded-[2rem] lg:before:h-[calc(100%-14rem)]"
  >
    <div class="py-20 md:py-36">
      <div class="relative z-10 mx-auto max-w-5xl px-6 text-center">
        <div>
          <a
            href="#"
            class="hover:bg-foreground/5 mx-auto flex w-fit items-center justify-center gap-2 rounded-md py-0.5 pl-1 pr-3 transition-colors duration-150"
          >
            <div
              aria-hidden="true"
              class="border-background bg-linear-to-b dark:inset-shadow-2xs to-foreground from-primary relative flex size-5 items-center justify-center rounded border shadow-md shadow-black/20 ring-1 ring-black/10"
            >
              <div
                class="absolute inset-x-0 inset-y-1.5 border-y border-dotted border-white/25"
              ></div>
              <div
                class="absolute inset-x-1.5 inset-y-0 border-x border-dotted border-white/25"
              ></div>
              <Sparkle class="size-3 fill-white stroke-white drop-shadow" />
            </div>
            <span class="font-medium">Introducing Mist Agents</span>
          </a>
          <h1
            class="mx-auto mt-8 max-w-3xl text-balance text-4xl font-bold tracking-tight sm:text-5xl"
          >
            Build 10x Faster with Mist
          </h1>
          <p
            class="text-muted-foreground mx-auto my-6 max-w-xl text-balance text-xl"
          >
            Craft. Build. Ship Modern Websites With AI Support.
          </p>

          <div class="flex items-center justify-center gap-3">
            <Button variant='mdefault' size="lg">
              <span class="text-nowrap">Start Building</span>
            </Button>
            <Button size="lg" variant="outline">
              <span class="text-nowrap">Watch Video</span>
            </Button>
          </div>
        </div>
      </div>
      <div class="relative">
        <div class="relative z-10 mx-auto max-w-5xl px-6">
          <div class="mt-12 md:mt-16">
            <div
              class="bg-background rounded-(--radius) relative mx-auto overflow-hidden border border-transparent shadow-lg shadow-black/10 ring-1 ring-black/10"
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
    </div>
  </section>
</main>
