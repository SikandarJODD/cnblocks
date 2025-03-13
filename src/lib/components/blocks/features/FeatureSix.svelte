<script>
  import { Cpu, Lock, Sparkles, Zap } from "@lucide/svelte";
</script>

<section class="py-16 md:py-32">
  <div class="mx-auto max-w-5xl space-y-12 px-6">
    <div
      class="relative z-10 grid items-center gap-4 md:grid-cols-2 md:gap-12"
    >
      <h2 class="text-4xl font-semibold">
        The Lyra ecosystem brings together our models
      </h2>
      <p class="max-w-sm sm:ml-auto">
        Empower your team with workflows that adapt to your needs, whether you
        prefer git synchronization or a AI Agents interface.
      </p>
    </div>
    <div class="relative rounded-3xl p-3 md:-mx-8 lg:col-span-3">
      <div class="aspect-88/36 relative">
        <div
          class="bg-linear-to-t z-1 from-background absolute inset-0 to-transparent"
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
