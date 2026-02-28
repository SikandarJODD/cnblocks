<script lang="ts">
  import { Card } from "$lib/components/ui/veil/card";
  import { Shield } from "@lucide/svelte";
  import {
    Clerk,
    Firebase,
    Linear,
    Slack,
    Supabase,
    Vercel,
  } from "$lib/svgs/index";
</script>

<section class="bg-background @container py-24">
  <div class="mx-auto max-w-2xl px-6">
    <div>
      <h2 class="text-balance font-serif text-4xl font-medium">
        Powerful Features for Modern Teams
      </h2>
      <p class="text-muted-foreground mt-4 text-balance">
        Everything you need to build, connect, and scale your integrations
        effortlessly.
      </p>
    </div>
    <div class="@xl:grid-cols-2 mt-12 grid gap-3 *:p-6">
      <Card variant="mixed" class="row-span-2 grid grid-rows-subgrid">
        <div class="space-y-2">
          <h3 class="text-foreground font-medium">Seamless Integrations</h3>
          <p class="text-muted-foreground text-sm">
            Connect your favorite tools and services with just a few clicks.
          </p>
        </div>
        <div
          aria-hidden
          class="**:fill-foreground flex h-44 flex-col justify-between pt-8"
        >
          <div class="relative flex h-10 items-center gap-12 px-6">
            <div class="bg-border absolute inset-0 my-auto h-px"></div>

            <div class="bg-card shadow-black/6.5 ring-border relative flex h-8 items-center rounded-full px-3 shadow-sm ring">
              <Vercel class="size-3.5" />
            </div>
            <div class="bg-card shadow-black/6.5 ring-border relative flex h-8 items-center rounded-full px-3 shadow-sm ring">
              <Slack class="size-3.5" />
            </div>
          </div>
          <div class="pl-17 relative flex h-10 items-center justify-between gap-12 pr-6">
            <div class="bg-border absolute inset-0 my-auto h-px"></div>

            <div class="bg-card shadow-black/6.5 ring-border relative flex h-8 items-center rounded-full px-3 shadow-sm ring">
              <Clerk class="size-3.5" />
            </div>
            <div class="bg-card shadow-black/6.5 ring-border relative flex h-8 items-center rounded-full px-3 shadow-sm ring">
              <Linear class="size-3.5" />
            </div>
          </div>
          <div class="relative flex h-10 items-center gap-20 px-8">
            <div class="bg-border absolute inset-0 my-auto h-px"></div>

            <div class="bg-card shadow-black/6.5 ring-border relative flex h-8 items-center rounded-full px-3 shadow-sm ring">
              <Supabase class="size-3.5" />
            </div>
            <div class="bg-card shadow-black/6.5 ring-border relative flex h-8 items-center rounded-full px-3 shadow-sm ring">
              <Firebase class="size-3.5" />
            </div>
          </div>
        </div>
      </Card>
      <Card variant="mixed" class="row-span-2 grid grid-rows-subgrid overflow-hidden">
        <div class="space-y-2">
          <h3 class="text-foreground font-medium">Real-time Sync</h3>
          <p class="text-muted-foreground text-sm">
            Keep your data synchronized across all platforms automatically.
          </p>
        </div>
        <div aria-hidden class="relative h-44 translate-y-6">
          <div class="bg-foreground/15 absolute inset-0 mx-auto w-px"></div>
          <div class="absolute -inset-x-16 top-6 aspect-square rounded-full border"></div>
          <div class="border-primary mask-l-from-50% mask-l-to-90% mask-r-from-50% mask-r-to-50% absolute -inset-x-16 top-6 aspect-square rounded-full border"></div>
          <div class="absolute -inset-x-8 top-24 aspect-square rounded-full border"></div>
          <div class="mask-r-from-50% mask-r-to-90% mask-l-from-50% mask-l-to-50% absolute -inset-x-8 top-24 aspect-square rounded-full border border-lime-500"></div>
        </div>
      </Card>
      <Card variant="mixed" class="row-span-2 grid grid-rows-subgrid overflow-hidden">
        <div class="space-y-2">
          <h3 class="text-foreground font-medium">Developer First</h3>
          <p class="text-muted-foreground mt-2 text-sm">
            Built with developers in mind, featuring comprehensive APIs and SDKs.
          </p>
        </div>
        <div
          aria-hidden
          class="*:bg-foreground/15 flex h-44 justify-between pb-6 pt-12 *:h-full *:w-px"
        >
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div class="bg-primary!"></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div class="bg-primary!"></div>
          <div></div>
          <div></div>
          <div></div>
          <div class="bg-primary!"></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div class="bg-primary!"></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div class="bg-primary!"></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div class="bg-primary!"></div>
        </div>
      </Card>
      <Card variant="mixed" class="row-span-2 grid grid-rows-subgrid">
        <div class="space-y-2">
          <h3 class="font-medium">Enterprise Ready</h3>
          <p class="text-muted-foreground text-sm">
            Scale confidently with enterprise-grade security and reliability.
          </p>
        </div>

        <div class="pointer-events-none relative -ml-7 flex size-44 items-center justify-center pt-5">
          <Shield class="absolute inset-0 top-2.5 size-full stroke-[0.1px] opacity-15" />
          <Shield class="size-32 stroke-[0.1px]" />
        </div>
      </Card>
    </div>
  </div>
</section>
