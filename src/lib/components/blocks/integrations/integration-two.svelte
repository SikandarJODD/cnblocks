<script lang="ts">
  import IntegrationCardv2 from "./card/integration-cardv2.svelte";

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
      <div class="dark:bg-muted/50 relative mx-auto w-fit">
        <div
          role="presentation"
          class="bg-radial to-muted dark:to-background absolute inset-0 z-10 from-transparent to-75%"
        ></div>
        <div class="mx-auto mb-2 flex w-fit justify-center gap-2">
          <IntegrationCardv2>
            <Gemini />
          </IntegrationCardv2>
          <IntegrationCardv2>
            <Replit />
          </IntegrationCardv2>
        </div>
        <div class="mx-auto my-2 flex w-fit justify-center gap-2">
          <IntegrationCardv2>
            <MagicUI />
          </IntegrationCardv2>
          <IntegrationCardv2
            borderClassName="shadow-black-950/10 shadow-xl border-black/25 dark:border-white/25"
            class="dark:bg-white/10"
          >
            <Logo />
          </IntegrationCardv2>
          <IntegrationCardv2>
            <VSCodium />
          </IntegrationCardv2>
        </div>

        <div class="mx-auto flex w-fit justify-center gap-2">
          <IntegrationCardv2>
            <MediaWiki />
          </IntegrationCardv2>

          <IntegrationCardv2>
            <GooglePaLM />
          </IntegrationCardv2>
        </div>
      </div>
      <div class="mx-auto mt-6 max-w-lg space-y-6 text-center">
        <h2 class="text-balance text-3xl font-semibold md:text-4xl">
          Integrate with your favorite tools
        </h2>
        <p class="text-muted-foreground">
          Connect seamlessly with popular platforms and services to enhance your
          workflow.
        </p>

        <Button href="#" variant="outline" size="sm">
          Get started
        </Button>
      </div>
    </div>
  </div>
</section>
