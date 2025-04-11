<script lang="ts">
  // Scroll below for the component code
  import IntegrationCard from "./card/integration-card.svelte";
  import {
    Gemini,
    GooglePaLM,
    MagicUI,
    VSCodium,
    Replit,
    MediaWiki,
  } from "../logos/logos";
</script>

<section>
  <div class="py-32">
    <div class="mx-auto max-w-5xl px-6">
      <div class="text-center">
        <h2 class="text-balance text-3xl font-semibold md:text-4xl">
          Integrate with your favorite tools
        </h2>
        <p class="text-muted-foreground mt-6">
          Connect seamlessly with popular platforms and services to enhance your
          workflow.
        </p>
      </div>

      <div class="mt-12 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
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

<!-- Integration Card Component -->

<!-- <script lang="ts">
  import Button from "$lib/components/ui/button/button.svelte";
  import Card from "$lib/components/ui/card/card.svelte";
  import { ChevronRight } from "@lucide/svelte";
  import type { Snippet } from "svelte";

  type IntegrationCardProps = {
    title: string;
    description: string;
    link?: string;
    children?: Snippet;
  };
  let {
    children,
    title,
    description,
    link = "https://github.com/sikandarjodd/cnblocks",
  }: IntegrationCardProps = $props();
</script>

<Card class="p-6">
  <div class="relative">
    <div class="*:size-10">{@render children?.()}</div>
    <div class="space-y-2 py-6">
      <h3 class="text-base font-medium">{title}</h3>
      <p class="text-muted-foreground line-clamp-2 text-sm">{description}</p>
    </div>

    <div class="flex gap-3 border-t border-dashed pt-6">
      <Button
        variant="secondary"
        size="sm"
        class="gap-1 pr-2 shadow-none"
        href={link}
      >
        Learn More
        <ChevronRight class="ml-0 !size-3.5 opacity-50" />
      </Button>
    </div>
  </div>
</Card>
 -->
