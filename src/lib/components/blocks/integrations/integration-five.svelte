<script lang="ts">
  import IntegrationCardv5 from "./card/integration-cardv5.svelte";
  import {
    Gemini,
    GooglePaLM,
    MagicUI,
    VSCodium,
    Replit,
    MediaWiki,
  } from "../logos";
  import Logo from "$lib/components/web/Logo.svelte";
  import Button from "$lib/components/ui/button/button.svelte";
</script>

<section>
  <div class="py-24 md:py-32">
    <div class="mx-auto max-w-5xl px-6">
      <div
        class="aspect-16/10 group relative mx-auto flex max-w-[22rem] items-center justify-between sm:max-w-sm"
      >
        <div
          role="presentation"
          class="bg-linear-to-b border-foreground/5 absolute inset-0 z-10 aspect-square animate-spin items-center justify-center rounded-full border-t from-lime-500/15 to-transparent to-25% opacity-0 duration-[3.5s] group-hover:opacity-100 dark:from-white/5"
        ></div>
        <div
          role="presentation"
          class="bg-linear-to-b border-foreground/5 absolute inset-16 z-10 aspect-square scale-90 animate-spin items-center justify-center rounded-full border-t from-blue-500/15 to-transparent to-25% opacity-0 duration-[3.5s] group-hover:opacity-100"
        ></div>
        <div
          class="bg-linear-to-b from-muted-foreground/15 absolute inset-0 flex aspect-square items-center justify-center rounded-full border-t to-transparent to-25%"
        >
          <IntegrationCardv5
            class="-translate-x-1/6 absolute left-0 top-1/4 -translate-y-1/4"
          >
            <Gemini />
          </IntegrationCardv5>
          <IntegrationCardv5 class="absolute top-0 -translate-y-1/2">
            <Replit />
          </IntegrationCardv5>
          <IntegrationCardv5
            class="translate-x-1/6 absolute right-0 top-1/4 -translate-y-1/4"
          >
            <MagicUI />
          </IntegrationCardv5>
        </div>
        <div
          class="bg-linear-to-b from-muted-foreground/15 absolute inset-16 flex aspect-square scale-90 items-center justify-center rounded-full border-t to-transparent to-25%"
        >
          <IntegrationCardv5 class="absolute top-0 -translate-y-1/2">
            <VSCodium />
          </IntegrationCardv5>
          <IntegrationCardv5
            class="absolute left-0 top-1/4 -translate-x-1/4 -translate-y-1/4"
          >
            <MediaWiki />
          </IntegrationCardv5>
          <IntegrationCardv5
            class="absolute right-0 top-1/4 -translate-y-1/4 translate-x-1/4"
          >
            <GooglePaLM />
          </IntegrationCardv5>
        </div>
        <div
          class="absolute inset-x-0 bottom-0 mx-auto my-2 flex w-fit justify-center gap-2"
        >
          <div class="bg-muted relative z-20 rounded-full border p-1">
            <IntegrationCardv5
              class="shadow-black-950/10 dark:bg-background size-16 border-black/20 shadow-xl dark:border-white/25 dark:shadow-white/15"
              isCenter={true}
            >
              <Logo class="text-blue-500" />
            </IntegrationCardv5>
          </div>
        </div>
      </div>
      <div
        class="bg-linear-to-t from-background relative z-20 mx-auto mt-12 max-w-lg space-y-6 from-55% text-center"
      >
        <h2 class="text-balance text-3xl font-semibold md:text-4xl">
          Integrate with your favorite tools
        </h2>
        <p class="text-muted-foreground">
          Connect seamlessly with popular platforms and services to enhance your
          workflow.
        </p>

        <Button variant="outline" size="sm">Get started</Button>
      </div>
    </div>
  </div>
</section>
