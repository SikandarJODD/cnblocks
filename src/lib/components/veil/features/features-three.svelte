<script lang="ts">
  import { ChevronRight, Cloud, Cpu, Shield } from "@lucide/svelte";
  import { Button } from "$lib/components/ui/veil/button";
  import { cn } from "$lib/utils";
  import {
    Clerk,
    Firebase,
    Linear,
    Slack,
    Supabase,
    Vercel,
  } from "$lib/svgs/index";

  type Feature =
    | "seamless-integrations"
    | "real-time-sync"
    | "developer-first"
    | "enterprise-ready";

  let feature = $state<Feature>("seamless-integrations");
</script>

<section class="bg-background @container py-24">
  <div class="@2xl:grid-cols-2 mx-auto grid max-w-3xl gap-6 px-6">
    <div>
      <div>
        <h2 class="text-balance font-serif text-4xl font-medium">
          Powerful Features for Modern Teams
        </h2>
        <p class="text-muted-foreground mb-6 mt-4 text-balance">
          Everything you need to build, connect, and scale your integrations
          effortlessly.
        </p>
        <Button href="#" variant="secondary" size="sm" class="gap-1 pr-1.5">
          Get started
          <ChevronRight />
        </Button>
      </div>
      <div class="mt-16 *:w-full *:cursor-pointer">
        <button
          type="button"
          onclick={() => (feature = "seamless-integrations")}
          data-selected={feature === "seamless-integrations"}
          class="not-data-[selected=true]:hover:text-foreground not-data-[selected=true]:text-muted-foreground flex items-center gap-3 py-2 text-sm"
        >
          <div class="flex size-4 items-center -space-x-2">
            <div class="size-3 shrink-0 rounded-full border border-current"></div>
            <div class="size-3 shrink-0 rounded-full border border-current"></div>
          </div>
          <span class="in-data-[selected=true]:text-shadow-[0.2px_0_0_currentColor]">
            Seamless Integrations
          </span>
        </button>
        <button
          type="button"
          onclick={() => (feature = "real-time-sync")}
          data-selected={feature === "real-time-sync"}
          class="not-data-[selected=true]:hover:text-foreground not-data-[selected=true]:text-muted-foreground flex items-center gap-3 py-2 text-sm"
        >
          <Cloud class="size-4" />
          <span class="in-data-[selected=true]:text-shadow-[0.2px_0_0_currentColor]">
            Real-time Sync
          </span>
        </button>
        <button
          type="button"
          onclick={() => (feature = "developer-first")}
          data-selected={feature === "developer-first"}
          class="not-data-[selected=true]:hover:text-foreground not-data-[selected=true]:text-muted-foreground flex items-center gap-3 py-2 text-sm"
        >
          <Cpu class="size-4" />
          <span class="in-data-[selected=true]:text-shadow-[0.2px_0_0_currentColor]">
            Developer-first
          </span>
        </button>
        <button
          type="button"
          onclick={() => (feature = "enterprise-ready")}
          data-selected={feature === "enterprise-ready"}
          class="not-data-[selected=true]:hover:text-foreground not-data-[selected=true]:text-muted-foreground flex items-center gap-3 py-2 text-sm"
        >
          <Shield class="size-4" />
          <span class="in-data-[selected=true]:text-shadow-[0.2px_0_0_currentColor]">
            Enterprise-ready
          </span>
        </button>
      </div>
    </div>
    <div class="@max-xl:-mx-6 not-dark:bg-linear-to-b not-dark:via-muted relative flex items-center overflow-hidden rounded-3xl *:w-full">
      <div
        aria-hidden
        class={cn(
          "*:bg-linear-to-r not-dark:opacity-50 mask-y-from-65% *:to-muted dark:*:to-foreground/2 absolute inset-0 grid grid-cols-4 duration-300",
          feature === "seamless-integrations" && "*:bg-linear-to-t grid-cols-1 grid-rows-12",
          feature === "developer-first" && "*:bg-linear-to-l grid-cols-2 dark:opacity-50",
          feature === "real-time-sync" && "*:opacity-35",
        )}
      >
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
      {#if feature === "seamless-integrations"}
        {@render IntegrationsIllustration()}
      {:else if feature === "real-time-sync"}
        {@render RealTimeIllustration()}
      {:else if feature === "developer-first"}
        {@render DeveloperIllustration()}
      {:else}
        {@render EnterpriseIllustration()}
      {/if}
    </div>
  </div>
</section>

{#snippet IntegrationsIllustration()}
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
{/snippet}

{#snippet RealTimeIllustration()}
  <div
    aria-hidden
    class="relative h-44 translate-y-6"
  >
    <div class="bg-foreground/15 absolute inset-0 mx-auto w-px"></div>
    <div class="absolute -inset-x-16 top-6 aspect-square rounded-full border"></div>
    <div class="border-primary mask-l-from-50% mask-l-to-90% mask-r-from-50% mask-r-to-50% absolute -inset-x-16 top-6 aspect-square rounded-full border"></div>
    <div class="absolute -inset-x-8 top-24 aspect-square rounded-full border"></div>
    <div class="mask-r-from-50% mask-r-to-90% mask-l-from-50% mask-l-to-50% absolute -inset-x-8 top-24 aspect-square rounded-full border border-lime-500"></div>
  </div>
{/snippet}

{#snippet EnterpriseIllustration()}
  <div
    aria-hidden
    class="relative flex size-44 items-center justify-center"
  >
    <Shield class="absolute inset-0 size-full stroke-[0.1px] opacity-15" />
    <Shield class="fill-card dark:fill-foreground/10 drop-shadow-black/3 stroke-border size-32 stroke-[0.2px] drop-shadow-xl" />
  </div>
{/snippet}

{#snippet DeveloperIllustration()}
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
{/snippet}
