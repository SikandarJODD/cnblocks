<script lang="ts">
  import IntegrationCardv3 from "./card/integration-cardv3.svelte";
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
      <div class="grid items-center sm:grid-cols-2">
        <div class="dark:bg-muted/50 relative mx-auto w-fit">
          <div
            class="bg-radial to-muted dark:to-background absolute inset-0 z-10 from-transparent to-75%"
          ></div>
          <div class="mx-auto mb-2 flex w-fit justify-center gap-2">
            <IntegrationCardv3>
              <Gemini />
            </IntegrationCardv3>
            <IntegrationCardv3>
              <Replit />
            </IntegrationCardv3>
          </div>
          <div class="mx-auto my-2 flex w-fit justify-center gap-2">
            <IntegrationCardv3>
              <MagicUI />
            </IntegrationCardv3>
            <IntegrationCardv3
              borderClassName="shadow-black-950/10 shadow-xl border-black/25 dark:border-white/25"
              class="dark:bg-white/10"
            >
              <Logo />
            </IntegrationCardv3>
            <IntegrationCardv3>
              <VSCodium />
            </IntegrationCardv3>
          </div>

          <div class="mx-auto flex w-fit justify-center gap-2">
            <IntegrationCardv3>
              <MediaWiki />
            </IntegrationCardv3>

            <IntegrationCardv3>
              <GooglePaLM />
            </IntegrationCardv3>
          </div>
        </div>
        <div
          class="mx-auto mt-6 max-w-lg space-y-6 text-center sm:mt-0 sm:text-left"
        >
          <h2 class="text-balance text-3xl font-semibold md:text-4xl">
            Integrate with your favorite tools
          </h2>
          <p class="text-muted-foreground">
            Connect seamlessly with popular platforms and services to enhance
            your workflow.
          </p>

          <Button variant="outline" size="sm">
            Get started
          </Button>
        </div>
      </div>
    </div>
  </div>
</section>
