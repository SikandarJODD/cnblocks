<script>
  import Button from "$lib/components/ui/button/button.svelte";
  import Check from "@lucide/svelte/icons/check";
  let list = [
    "First premium advantage",
    "Second advantage weekly",
    "Third advantage donate to project",
    "Fourth, access to all components weekly",
  ];
</script>

<div class="relative py-16 md:py-32">
  <div class="mx-auto max-w-5xl px-6">
    <div class="mx-auto max-w-2xl text-center">
      <h2 class="text-balance text-3xl font-bold md:text-4xl lg:text-5xl">
        Start managing your company smarter today
      </h2>
    </div>
    <div class="mt-8 md:mt-20">
      <div
        class="bg-card relative rounded-3xl border shadow-2xl shadow-zinc-950/5"
      >
        <div
          class="grid items-center gap-12 divide-y p-12 md:grid-cols-2 md:divide-x md:divide-y-0"
        >
          <div class="pb-12 text-center md:pb-0 md:pr-12">
            <h3 class="text-2xl font-semibold">Suite Enterprise</h3>
            <p class="mt-2 text-lg">For your company of any size</p>
            <span class="mb-6 mt-12 inline-block text-6xl font-bold">
              <span class="text-4xl">$</span>234
            </span>

            <div class="flex justify-center">
              <Button href="#" size="lg">Get Started</Button>
            </div>

            <p class="text-muted-foreground mt-12 text-sm">
              Includes : Security, Unlimited Storage, Payment, Search engine,
              and all features
            </p>
          </div>
          <div class="relative">
            <ul role="list" class="space-y-4">
              {#each list as item}
                <li class="flex items-center gap-2">
                  <Check class="size-3" />
                  <span>{item}</span>
                </li>
              {/each}
            </ul>
            <p class="text-muted-foreground mt-6 text-sm">
              Team can be any size, and you can add or switch members as needed.
              Companies using our platform include:
            </p>
            <div
              class="mt-12 flex flex-wrap items-center justify-between gap-6"
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
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
