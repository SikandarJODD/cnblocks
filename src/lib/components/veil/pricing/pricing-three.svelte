<script lang="ts">
  import ArrowRight from "@lucide/svelte/icons/arrow-right";
  import Check from "@lucide/svelte/icons/check";
  import { Button } from "$lib/components/ui/veil/button";
  import { Card } from "$lib/components/ui/veil/card";
  import { cn } from "$lib/utils";

  const plans = [
    {
      name: "Monthly",
      price: "$29",
      period: "/month",
      description: "Flexible month-to-month billing",
      features: [
        "All features included",
        "Cancel anytime",
        "No long-term commitment",
      ],
    },
    {
      name: "Annual",
      price: "$19",
      period: "/month",
      description: "Save 35% with annual billing",
      features: ["All features included", "2 months free", "Priority onboarding"],
      highlighted: true,
      badge: "Best Value",
    },
  ];
</script>

<section class="bg-background @container py-24">
  <div class="mx-auto max-w-2xl px-6">
    <div class="text-center">
      <h2 class="text-balance font-serif text-4xl font-medium">
        One Plan, Simple Pricing
      </h2>
      <p class="text-muted-foreground mx-auto mt-4 max-w-md text-balance">
        Everything you need to build powerful integrations. Choose your billing
        cycle.
      </p>
    </div>
    <div class="@xl:grid-cols-2 @xl:gap-3 mt-12 grid gap-6">
      {#each plans as plan (plan.name)}
        <Card
          variant={plan.highlighted ? "default" : "mixed"}
          class={cn("relative p-6", plan.highlighted && "ring-primary")}
        >
          <div class="mb-6">
            <h3 class="text-foreground font-medium">{plan.name}</h3>
            <p class="text-muted-foreground mt-1 text-sm">{plan.description}</p>
          </div>
          <div>
            <span class="font-serif text-5xl font-medium">{plan.price}</span>
            <span class="text-muted-foreground">{plan.period}</span>
          </div>
          <ul class="mt-6 space-y-3">
            {#each plan.features as feature (feature)}
              <li class="text-muted-foreground flex items-center gap-2 text-sm">
                <Check class="text-primary size-4" />
                {feature}
              </li>
            {/each}
          </ul>
          <Button
            href="#link"
            variant={plan.highlighted ? "default" : "outline"}
            class="mt-8 w-full gap-2"
          >
            Get Started
            <ArrowRight class="size-4" />
          </Button>
        </Card>
      {/each}
    </div>
    <p class="text-muted-foreground mt-8 text-center text-sm">
      All plans include a 14-day free trial. No credit card required.
    </p>
  </div>
</section>
