<script>
  import {
    Cpu,
    Fingerprint,
    Pencil,
    Settings2,
    Sparkles,
    Zap,
  } from "@lucide/svelte";
</script>
<section class="py-12 md:py-20">
  <div class="mx-auto max-w-5xl space-y-8 px-6 md:space-y-16">
      <div class="relative z-10 mx-auto max-w-xl space-y-6 text-center md:space-y-12">
          <h2 class="text-balance text-4xl font-medium lg:text-5xl">The foundation for creative teams management</h2>
          <p>Lyra is evolving to be more than just the models. It supports an entire to the APIs and platforms helping developers and businesses innovate.</p>
      </div>

      <div class="relative mx-auto grid max-w-4xl divide-x divide-y border *:p-12 sm:grid-cols-2 lg:grid-cols-3">
          <div class="space-y-3">
              <div class="flex items-center gap-2">
                  <Zap class="size-4" />
                  <h3 class="text-sm font-medium">Faaast</h3>
              </div>
              <p class="text-sm">It supports an entire helping developers and innovate.</p>
          </div>
          <div class="space-y-2">
              <div class="flex items-center gap-2">
                  <Cpu class="size-4" />
                  <h3 class="text-sm font-medium">Powerful</h3>
              </div>
              <p class="text-sm">It supports an entire helping developers and businesses.</p>
          </div>
          <div class="space-y-2">
              <div class="flex items-center gap-2">
                  <Fingerprint class="size-4" />

                  <h3 class="text-sm font-medium">Security</h3>
              </div>
              <p class="text-sm">It supports an helping developers businesses.</p>
          </div>
          <div class="space-y-2">
              <div class="flex items-center gap-2">
                  <Pencil class="size-4" />

                  <h3 class="text-sm font-medium">Customization</h3>
              </div>
              <p class="text-sm">It supports helping developers and businesses innovate.</p>
          </div>
          <div class="space-y-2">
              <div class="flex items-center gap-2">
                  <Settings2 class="size-4" />

                  <h3 class="text-sm font-medium">Control</h3>
              </div>
              <p class="text-sm">It supports helping developers and businesses innovate.</p>
          </div>
          <div class="space-y-2">
              <div class="flex items-center gap-2">
                  <Sparkles class="size-4" />

                  <h3 class="text-sm font-medium">Built for AI</h3>
              </div>
              <p class="text-sm">It supports helping developers and businesses innovate.</p>
          </div>
      </div>
  </div>
</section>