<script lang="ts">
  import Button from "$lib/components/ui/button/button.svelte";
  import { cn } from "$lib/utils";
  import BookOpen from "@lucide/svelte/icons/book-open";
</script>

<section class="py-20">
  <div class="relative z-10 mx-auto w-full max-w-2xl px-6 lg:px-0">
    <div class="relative text-center">
      <!-- <MistKitLogo class="mx-auto" /> -->
      {@render MistKitLogo({ _class: "mx-auto" })}
      <h1 class="mx-auto mt-16 max-w-xl text-balance text-5xl font-medium">
        The Note App
      </h1>

      <p class="text-muted-foreground mx-auto mb-6 mt-4 text-balance text-xl">
        The Note App is a simple note app that allows you to create and manage
        your notes.
      </p>

      <div
        class="flex flex-col items-center gap-2 *:w-full sm:flex-row sm:justify-center sm:*:w-auto"
      >
        <Button>
          <span class="text-nowrap">Get Started</span>
        </Button>
        <Button variant="ghost">
          <span class="text-nowrap">View Demo</span>
        </Button>
      </div>
    </div>

    <div
      class="relative mt-12 overflow-hidden rounded-3xl bg-black/10 md:mt-16"
    >
      <img
        src="https://images.unsplash.com/photo-1547623641-d2c56c03e2a7?q=80&w=3087&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
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

    <div class="mt-8 flex flex-wrap items-center gap-4">
      <p class="text-muted-foreground text-center">Trusted by teams at :</p>
      <div class="flex flex-wrap items-center justify-center gap-8">
        <div class="flex">
          <img
            class="mx-auto h-4 w-fit"
            src="https://html.tailus.io/blocks/customers/nvidia.svg"
            alt="Nvidia Logo"
            height="20"
            width="auto"
          />
        </div>

        <div class="flex">
          <img
            class="mx-auto h-3 w-fit"
            src="https://html.tailus.io/blocks/customers/column.svg"
            alt="Column Logo"
            height="16"
            width="auto"
          />
        </div>
        <div class="flex">
          <img
            class="mx-auto h-3 w-fit"
            src="https://html.tailus.io/blocks/customers/github.svg"
            alt="GitHub Logo"
            height="16"
            width="auto"
          />
        </div>
        <div class="flex">
          <img
            class="mx-auto h-4 w-fit"
            src="https://html.tailus.io/blocks/customers/nike.svg"
            alt="Nike Logo"
            height="20"
            width="auto"
          />
        </div>
      </div>
    </div>
  </div>
</section>
<!-- ring-black/10 === ring-1 -->
{#snippet MistKitLogo({ _class }: { _class?: string })}
  <div
    aria-hidden="true"
    class={cn(
      "border-background bg-linear-to-b rounded-(--radius) relative flex size-9 translate-y-0.5 items-center justify-center border from-yellow-300 to-orange-600 shadow-lg shadow-black/20 ring-1 ",
      _class
    )}
  >
    <BookOpen
      class="mask-b-from-25% size-6 fill-white stroke-white drop-shadow-sm"
    />
    <BookOpen
      class="absolute inset-0 m-auto size-6 fill-white stroke-white opacity-65 drop-shadow-sm"
    />
    <div
      class="z-1 h-4.5 absolute inset-2 m-auto w-px translate-y-px rounded-full bg-black/10"
    ></div>
  </div>
{/snippet}
