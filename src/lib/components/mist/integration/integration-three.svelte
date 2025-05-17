<script lang="ts">
  import Gemini from "../logos/Gemini.svelte";
  import GooglePaLM from "../logos/GooglePaLM.svelte";
  import Replit from "../logos/Replit.svelte";
  import MediaWiki from "../logos/MediaWiki.svelte";
  import MagicUI from "../logos/MagicUI.svelte";
  import VSCodium from "../logos/VSCodium.svelte";
  import IntegrationCard from "./integration-card.svelte";
</script>

<section>
  <div class="py-32">
    <div class="mx-auto max-w-5xl px-6">
      <div>
        <h2 class="text-balance text-3xl font-semibold md:text-4xl">
          Integrate with your favorite tools
        </h2>
        <p class="text-muted-foreground mt-3 text-lg">
          Connect seamlessly with popular platforms and services to enhance your
          workflow.
        </p>
      </div>

      <div class="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        <IntegrationCard
          title="Google Gemini"
          description="Amet praesentium deserunt ex commodi tempore fuga voluptatem. Sit, sapiente."
        >
          <Gemini />
        </IntegrationCard>

        <IntegrationCard
          title="Replit"
          description="Amet praesentium deserunt ex commodi tempore fuga voluptatem. Sit, sapiente."
        >
          <Replit />
        </IntegrationCard>

        <IntegrationCard
          title="Magic UI"
          description="Amet praesentium deserunt ex commodi tempore fuga voluptatem. Sit, sapiente."
        >
          <MagicUI />
        </IntegrationCard>

        <IntegrationCard
          title="VSCodium"
          description="Amet praesentium deserunt ex commodi tempore fuga voluptatem. Sit, sapiente."
        >
          <VSCodium />
        </IntegrationCard>

        <IntegrationCard
          title="MediaWiki"
          description="Amet praesentium deserunt ex commodi tempore fuga voluptatem. Sit, sapiente."
        >
          <MediaWiki />
        </IntegrationCard>

        <IntegrationCard
          title="Google PaLM"
          description="Amet praesentium deserunt ex commodi tempore fuga voluptatem. Sit, sapiente."
        >
          <GooglePaLM />
        </IntegrationCard>
      </div>
    </div>
  </div>
</section>
