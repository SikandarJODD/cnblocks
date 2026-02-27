<script lang="ts">
  import { Button } from "$lib/components/ui/veil/button";
  import { Card } from "$lib/components/ui/veil/card";
  import { ArrowRight } from "@lucide/svelte";

  type Props = {
    eyebrow?: string;
    title?: string;
    description?: string;
    ctaLabel?: string;
    ctaHref?: string;
  };

  let {
    eyebrow = "Limited Time Offer",
    title = "Start Building Today",
    description = "Get 3 months free when you sign up for an annual plan. No credit card required to start.",
    ctaLabel = "Claim Your Offer",
    ctaHref = "#link",
  }: Props = $props();
</script>

<section class="bg-background @container py-24">
  <div class="mx-auto max-w-2xl px-6">
    <Card variant="outline" class="p-8 md:p-12">
      <div class="text-muted-foreground mb-6 text-sm font-medium">{eyebrow}</div>
      <h2 class="text-balance font-serif text-3xl font-medium md:text-4xl">{title}</h2>
      <p class="text-muted-foreground mt-4 max-w-md text-balance">
        {description}
      </p>
      <Button href={ctaHref} class="mt-8 gap-2">
        {ctaLabel}
        <ArrowRight class="size-4" />
      </Button>
    </Card>
  </div>
</section>
