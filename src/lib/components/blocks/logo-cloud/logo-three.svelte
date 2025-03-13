<script>
  import Marquee from "$lib/components/magic/Marquee.svelte";
  import ProgressiveBlur from "$lib/components/magic/ProgressiveBlur.svelte";
</script>

<section class="bg-background overflow-hidden py-16">
  <div class="group relative m-auto max-w-7xl px-6">
    <div class="flex flex-col items-center md:flex-row">
      <div class="md:max-w-44 md:border-r md:pr-6">
        <p class="text-end text-sm">Powering the best teams</p>
      </div>
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
          class="pointer-events-none absolute left-0 top-0 h-full w-20"
          direction="left"
          blurIntensity={1}
        />
        <ProgressiveBlur
          class="pointer-events-none absolute right-0 top-0 h-full w-20"
          direction="right"
          blurIntensity={1}
        />
      </div>
    </div>
  </div>
</section>
