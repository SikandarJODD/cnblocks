<script lang="ts">
  import { Button } from "$lib/components/ui/veil/button";
  import { Card } from "$lib/components/ui/veil/card";
  import { ArrowRight, Check } from "@lucide/svelte";

  type Props = {
    title?: string;
    description?: string;
    benefits?: string[];
    price?: string;
    priceSuffix?: string;
    priceNote?: string;
    ctaLabel?: string;
    ctaHref?: string;
  };

  let {
    title = "Transform Your Workflow",
    description = "Experience the power of seamless integrations and watch your productivity soar.",
    benefits = [
      "14-day free trial",
      "No credit card required",
      "Cancel anytime",
      "24/7 support",
    ],
    price = "$0",
    priceSuffix = "/month",
    priceNote = "Free forever for individuals",
    ctaLabel = "Get Started Free",
    ctaHref = "#link",
  }: Props = $props();
</script>

<section class="bg-background @container py-24">
  <div class="mx-auto max-w-2xl px-6">
    <Card variant="outline" class="@xl:grid-cols-2 grid gap-8 p-6 md:p-8">
      <div>
        <h2 class="text-balance font-serif text-3xl font-medium">{title}</h2>
        <p class="text-muted-foreground mt-3 text-balance">{description}</p>
        <ul class="mt-6 space-y-2">
          {#each benefits as benefit, index (`${index}-${benefit}`)}
            <li class="text-muted-foreground flex items-center gap-2 text-sm">
              <Check class="text-primary size-4" />
              {benefit}
            </li>
          {/each}
        </ul>
      </div>
      <div class="bg-muted/50 flex flex-col justify-center rounded-xl border p-6">
        <p class="text-muted-foreground text-sm">Starting at</p>
        <p class="mt-1 font-serif text-4xl font-medium">
          {price}<span class="text-muted-foreground text-lg font-normal">{priceSuffix}</span>
        </p>
        <p class="text-muted-foreground mt-1 text-sm">{priceNote}</p>
        <Button href={ctaHref} class="mt-6 gap-2">
          {ctaLabel}
          <ArrowRight class="size-4" />
        </Button>
      </div>
    </Card>
  </div>
</section>
