<script>
  import Zap from "@lucide/svelte/icons/zap";
  import Cpu from "@lucide/svelte/icons/cpu";
</script>

<section class="py-16 md:py-32">
  <div class="mx-auto max-w-5xl space-y-8 px-6 md:space-y-16">
    <h2 class="relative z-10 max-w-xl text-4xl font-medium lg:text-5xl">
      The Lyra ecosystem brings together our models.
    </h2>
    <div class="relative">
      <div class="relative z-10 space-y-4 md:w-1/2">
        <p class="text-body">
          Lyra is evolving to be more than just the models. <span
            class="text-title font-medium">It supports an entire ecosystem</span
          > — from products innovate.
        </p>
        <p>
          It supports an entire ecosystem — from products to the APIs and
          platforms helping developers and businesses innovate
        </p>

        <div class="grid grid-cols-2 gap-3 pt-6 sm:gap-4">
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
        </div>
      </div>
      <div class="mt-12 h-fit md:absolute md:-inset-y-12 md:inset-x-0 md:mt-0">
        <div
          class="bg-linear-to-l z-1 to-background absolute inset-0 hidden from-transparent to-55% md:block"
        ></div>
        <div
          class="border-border/50 relative rounded-2xl border border-dotted p-2"
        >
          <img
            src="/charts.png"
            class="hidden rounded-[12px] dark:block"
            alt="payments illustration dark"
            width={1207}
            height={929}
          />
          <img
            src="/charts-light.png"
            class="rounded-[12px] shadow dark:hidden"
            alt="payments illustration light"
            width={1207}
            height={929}
          />
        </div>
      </div>
    </div>
  </div>
</section>
