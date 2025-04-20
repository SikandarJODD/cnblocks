<script>
  import Cpu from "@lucide/svelte/icons/cpu";
  import Lock from "@lucide/svelte/icons/lock";
  import Sparkles from "@lucide/svelte/icons/sparkles";
  import Zap from "@lucide/svelte/icons/zap";

</script>

<section class="overflow-hidden py-16 md:py-32">
  <div class="mx-auto max-w-5xl space-y-8 px-6 md:space-y-12">
    <div class="relative z-10 max-w-2xl">
      <h2 class="text-4xl font-semibold lg:text-5xl">
        Built for Scaling teams
      </h2>
      <p class="mt-6 text-lg">
        Empower your team with workflows that adapt to your needs, whether you
        prefer git synchronization or a AI Agents interface.
      </p>
    </div>
    <div class="relative -mx-4 rounded-3xl p-3 md:-mx-12 lg:col-span-3">
      <div class="perspective-midrange">
        <div class="rotate-x-6 -skew-2">
          <div class="aspect-88/36 relative">
            <div
              class="bg-radial-[at_75%_25%] to-background z-1 -inset-17 absolute from-transparent to-75%"
            ></div>
            <img
              src="/mail-upper.png"
              class="absolute inset-0 z-10"
              alt="payments illustration dark"
              width={2797}
              height={1137}
            />
            <img
              src="/mail-back.png"
              class="hidden dark:block"
              alt="payments illustration dark"
              width={2797}
              height={1137}
            />
            <img
              src="/mail-back-light.png"
              class="dark:hidden"
              alt="payments illustration light"
              width={2797}
              height={1137}
            />
          </div>
        </div>
      </div>
    </div>
    <div
      class="relative mx-auto grid grid-cols-2 gap-x-3 gap-y-6 sm:gap-8 lg:grid-cols-4"
    >
      <div class="space-y-3">
        <div class="flex items-center gap-2">
          <Zap class="size-4" />
          <h3 class="text-sm font-medium">Faaast</h3>
        </div>
        <p class="text-muted-foreground text-sm">
          It supports an entire helping developers and innovate.
        </p>
      </div>
      <div class="space-y-2">
        <div class="flex items-center gap-2">
          <Cpu class="size-4" />
          <h3 class="text-sm font-medium">Powerful</h3>
        </div>
        <p class="text-muted-foreground text-sm">
          It supports an entire helping developers and businesses.
        </p>
      </div>
      <div class="space-y-2">
        <div class="flex items-center gap-2">
          <Lock class="size-4" />
          <h3 class="text-sm font-medium">Security</h3>
        </div>
        <p class="text-muted-foreground text-sm">
          It supports an helping developers businesses innovate.
        </p>
      </div>
      <div class="space-y-2">
        <div class="flex items-center gap-2">
          <Sparkles class="size-4" />

          <h3 class="text-sm font-medium">AI Powered</h3>
        </div>
        <p class="text-muted-foreground text-sm">
          It supports an helping developers businesses innovate.
        </p>
      </div>
    </div>
  </div>
</section>
