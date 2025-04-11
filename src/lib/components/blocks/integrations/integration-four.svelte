<script lang="ts">
  import IntegrationCardv4 from "./card/integration-cardv4.svelte";
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
  <div class="bg-muted dark:bg-background py-24 md:py-32">
    <div class="mx-auto max-w-5xl px-6">
      <div class="relative mx-auto flex max-w-sm items-center justify-between">
        <div class="space-y-6">
          <IntegrationCardv4 position="left-top">
            <Gemini />
          </IntegrationCardv4>
          <IntegrationCardv4 position="left-middle">
            <Replit />
          </IntegrationCardv4>
          <IntegrationCardv4 position="left-bottom">
            <MagicUI />
          </IntegrationCardv4>
        </div>
        <div class="mx-auto my-2 flex w-fit justify-center gap-2">
          <div class="bg-muted relative z-20 rounded-2xl border p-1">
            <IntegrationCardv4
              class="shadow-black-950/10 dark:bg-background size-16 border-black/25 shadow-xl dark:border-white/25 dark:shadow-white/10"
              isCenter={true}
            >
              <Logo />
            </IntegrationCardv4>
          </div>
        </div>
        <div
          role="presentation"
          class="absolute inset-1/3 bg-[radial-gradient(var(--dots-color)_1px,transparent_1px)] opacity-50 [--dots-color:black] [background-size:16px_16px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_70%,transparent_100%)] dark:[--dots-color:white]"
        ></div>

        <div class="space-y-6">
          <IntegrationCardv4 position="right-top">
            <VSCodium />
          </IntegrationCardv4>
          <IntegrationCardv4 position="right-middle">
            <MediaWiki />
          </IntegrationCardv4>
          <IntegrationCardv4 position="right-bottom">
            <GooglePaLM />
          </IntegrationCardv4>
        </div>
      </div>
      <div class="mx-auto mt-12 max-w-lg space-y-6 text-center">
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
