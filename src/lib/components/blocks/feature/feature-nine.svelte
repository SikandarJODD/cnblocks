<script>
  import Logo from "$lib/components/web/Logo.svelte";
  import { Activity, Map as MapIcon, MessageCircle } from "@lucide/svelte";
</script>

<section class="px-4 py-16 md:py-32">
  <div class="mx-auto grid max-w-5xl border md:grid-cols-2">
      <div>
          <div class="p-6 sm:p-12">
              <span class="text-muted-foreground flex items-center gap-2">
                  <MapIcon class="size-4" />
                  Real time location tracking
              </span>

              <p class="mt-8 text-2xl font-semibold">Advanced tracking system, Instantly locate all your assets.</p>
          </div>

          <div aria-hidden class="relative">
              <div class="absolute inset-0 z-10 m-auto size-fit">
                  <div class="rounded-(--radius) bg-background z-1 dark:bg-muted relative flex size-fit w-fit items-center gap-2 border px-3 py-1 text-xs font-medium shadow-md shadow-zinc-950/5">
                      <span class="text-lg">🇨🇩</span> Last connection from DR Congo
                  </div>
                  <div class="rounded-(--radius) bg-background absolute inset-2 -bottom-2 mx-auto border px-3 py-4 text-xs font-medium shadow-md shadow-zinc-950/5 dark:bg-zinc-900"></div>
              </div>

              <div class="relative overflow-hidden">
                  <div class="bg-radial z-1 to-background absolute inset-0 from-transparent to-75%"></div>
                  <!-- <Map /> -->
              </div>
          </div>
      </div>
      <div class="overflow-hidden border-t bg-zinc-50 p-6 sm:p-12 md:border-0 md:border-l dark:bg-transparent">
          <div class="relative z-10">
              <span class="text-muted-foreground flex items-center gap-2">
                  <MessageCircle class="size-4" />
                  Email and web support
              </span>

              <p class="my-8 text-2xl font-semibold">Reach out via email or web for any assistance you need.</p>
          </div>
          <div  class="flex flex-col gap-8">
              <div>
                  <div class="flex items-center gap-2">
                      <span class="flex size-5 rounded-full border">
                          <Logo class="m-auto size-3" />
                      </span>
                      <span class="text-muted-foreground text-xs">Sat 22 Feb</span>
                  </div>
                  <div class="rounded-(--radius) bg-background mt-1.5 w-3/5 border p-3 text-xs">Hey, I'm having trouble with my account.</div>
              </div>

              <div>
                  <div class="rounded-(--radius) mb-1 ml-auto w-3/5 bg-blue-600 p-3 text-xs text-white">Molestiae numquam debitis et ullam distinctio provident nobis repudiandae deleniti necessitatibus.</div>
                  <span class="text-muted-foreground block text-right text-xs">Now</span>
              </div>
          </div>
      </div>
      <!-- <div class="col-span-full border-y p-12">
          <p class="text-center text-4xl font-semibold lg:text-7xl">99.99% Uptime</p>
      </div> -->
  </div>
</section>