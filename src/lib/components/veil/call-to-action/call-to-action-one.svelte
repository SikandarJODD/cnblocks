<script lang="ts">
  import { Button } from "$lib/components/ui/veil/button";
  import { ChevronRight } from "@lucide/svelte";

  type Props = {
    title?: string;
    description?: string;
    primaryLabel?: string;
    primaryHref?: string;
    secondaryLabel?: string;
    secondaryHref?: string;
  };

  let {
    title = "Ready to Get Started?",
    description = "Join thousands of teams already using our platform to build better products faster.",
    primaryLabel = "Start Free Trial",
    primaryHref = "#link",
    secondaryLabel = "Talk to Sales",
    secondaryHref = "#link",
  }: Props = $props();
</script>

<section class="bg-background @container py-24">
  <div class="mx-auto max-w-2xl px-6">
    <div class="text-center">
      <h2 class="text-balance font-serif text-4xl font-medium">{title}</h2>
      <p class="text-muted-foreground mx-auto mt-4 max-w-md text-balance">
        {description}
      </p>
      <div class="mt-6 flex flex-wrap justify-center gap-3">
        <Button href={primaryHref} class="pr-1.5">
          <span>{primaryLabel}</span>
          <ChevronRight class="opacity-50" />
        </Button>
        <Button variant="secondary" href={secondaryHref}>
          {secondaryLabel}
        </Button>
      </div>
    </div>
  </div>
</section>
