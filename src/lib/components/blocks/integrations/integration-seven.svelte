<script lang="ts">
  import IntegrationCardv7 from "./card/integration-cardv7.svelte";
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
  import Marquee from "$lib/components/magic/Marquee.svelte";
</script>

<section>
  <div class="bg-muted dark:bg-background py-24 md:py-32">
    <div class="mx-auto max-w-5xl px-6">
      <div
        class="bg-muted/25 group relative mx-auto max-w-[22rem] items-center justify-between space-y-6 [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_70%,transparent_100%)] sm:max-w-md"
      >
        <div
          role="presentation"
          class="absolute inset-0 -z-10 bg-[linear-gradient(to_right,var(--color-border)_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:32px_32px] opacity-50"
        ></div>
        <div>
          <Marquee>
            <IntegrationCardv7>
              <VSCodium />
            </IntegrationCardv7>
            <IntegrationCardv7>
              <MediaWiki />
            </IntegrationCardv7>
            <IntegrationCardv7>
              <GooglePaLM />
            </IntegrationCardv7>
            <IntegrationCardv7>
              <Gemini />
            </IntegrationCardv7>
            <IntegrationCardv7>
              <Replit />
            </IntegrationCardv7>
            <IntegrationCardv7>
              <MagicUI />
            </IntegrationCardv7>
          </Marquee>
        </div>

        <div>
          <!-- gap={24} speed={20} speedOnHover={10} -->
          <Marquee reverse>
            <IntegrationCardv7>
              <Gemini />
            </IntegrationCardv7>
            <IntegrationCardv7>
              <Replit />
            </IntegrationCardv7>
            <IntegrationCardv7>
              <MediaWiki />
            </IntegrationCardv7>
            <IntegrationCardv7>
              <MagicUI />
            </IntegrationCardv7>
            <IntegrationCardv7>
              <VSCodium />
            </IntegrationCardv7>
            <IntegrationCardv7>
              <GooglePaLM />
            </IntegrationCardv7>
          </Marquee>
        </div>
        <div>
          <Marquee>
            <IntegrationCardv7>
              <Replit />
            </IntegrationCardv7>
            <IntegrationCardv7>
              <MagicUI />
            </IntegrationCardv7>
            <IntegrationCardv7>
              <Gemini />
            </IntegrationCardv7>
            <IntegrationCardv7>
              <VSCodium />
            </IntegrationCardv7>
            <IntegrationCardv7>
              <MediaWiki />
            </IntegrationCardv7>
            <IntegrationCardv7>
              <GooglePaLM />
            </IntegrationCardv7>
          </Marquee>
        </div>
        <div class="absolute inset-0 m-auto flex size-fit justify-center gap-2">
          <IntegrationCardv7
            class="shadow-black-950/10 size-16 bg-white/25 shadow-xl backdrop-blur-md backdrop-grayscale dark:border-white/10 dark:shadow-white/15"
            isCenter={true}
          >
            <Logo />
          </IntegrationCardv7>
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
