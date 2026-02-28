<script lang="ts">
  import ArrowRight from "@lucide/svelte/icons/arrow-right";
  import { Button } from "$lib/components/ui/veil/button";
  import { Card } from "$lib/components/ui/veil/card";
  import { cn } from "$lib/utils";

  const tiers = [
    {
      name: "Hobby",
      description: "For personal projects",
      price: "$0",
      period: "/month",
      limit: "1,000 requests/month",
    },
    {
      name: "Pro",
      description: "For professional use",
      price: "$20",
      period: "/month",
      limit: "50,000 requests/month",
      highlighted: true,
    },
    {
      name: "Scale",
      description: "For high-volume apps",
      price: "$100",
      period: "/month",
      limit: "500,000 requests/month",
    },
    {
      name: "Enterprise",
      description: "For large organizations",
      price: "Custom",
      period: "",
      limit: "Unlimited requests",
    },
  ];
</script>

<section class="bg-background @container py-24">
  <div class="mx-auto max-w-3xl px-6">
    <div class="text-center">
      <h2 class="text-balance font-serif text-4xl font-medium">
        Usage-Based Pricing
      </h2>
      <p class="text-muted-foreground mx-auto mt-4 max-w-md text-balance">
        Pay only for what you use. All plans include the same features.
      </p>
    </div>
    <div class="mt-12 space-y-3">
      {#each tiers as tier (tier.name)}
        <Card
          variant="outline"
          class={cn(
            "@2xl:flex-row @2xl:items-center @2xl:justify-between flex flex-col gap-4 p-4",
            tier.highlighted && "ring-primary",
          )}
        >
          <div class="@2xl:flex-row @2xl:items-center @2xl:gap-6 flex flex-col gap-2">
            <div class="@2xl:w-44 shrink-0">
              <h3 class="text-foreground font-medium">{tier.name}</h3>
              <p class="text-muted-foreground text-sm">{tier.description}</p>
            </div>
            <div class="@2xl:border-l @2xl:pl-6">
              <p class="text-muted-foreground text-sm">{tier.limit}</p>
            </div>
          </div>
          <div class="@2xl:flex-row @2xl:items-center flex flex-col gap-4">
            <div class="@2xl:text-right">
              <span class="font-serif text-2xl font-medium">{tier.price}</span>
              {#if tier.period}
                <span class="text-muted-foreground text-sm">{tier.period}</span>
              {/if}
            </div>
            <Button
              href="#link"
              variant={tier.highlighted ? "default" : "outline"}
              size="sm"
              class="gap-1"
            >
              {tier.price === "Custom" ? "Contact Us" : "Get Started"}
              <ArrowRight class="size-3.5" />
            </Button>
          </div>
        </Card>
      {/each}
    </div>
    <div class="bg-muted mt-8 rounded-xl p-6 text-center">
      <p class="text-foreground font-medium">Need more requests?</p>
      <p class="text-muted-foreground mt-1 text-sm">
        Additional requests are billed at $0.001 per request after your plan
        limit.
      </p>
    </div>
  </div>
</section>

