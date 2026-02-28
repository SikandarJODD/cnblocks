<script lang="ts">
  import Check from "@lucide/svelte/icons/check";
  import { Button } from "$lib/components/ui/veil/button";
  import { Card } from "$lib/components/ui/veil/card";
  import { cn } from "$lib/utils";

  const plans = [
    {
      name: "Starter",
      description: "Perfect for individuals and small projects.",
      price: "$0",
      period: "/month",
      features: [
        "Up to 3 integrations",
        "1,000 API calls/month",
        "Community support",
        "Basic analytics",
      ],
      cta: "Get Started",
      highlighted: false,
    },
    {
      name: "Pro",
      description: "For growing teams that need more power.",
      price: "$29",
      period: "/month",
      features: [
        "Unlimited integrations",
        "100,000 API calls/month",
        "Priority support",
        "Advanced analytics",
        "Custom webhooks",
        "Team collaboration",
      ],
      cta: "Start Free Trial",
      highlighted: true,
    },
    {
      name: "Enterprise",
      description: "For organizations with advanced needs.",
      price: "Custom",
      period: "",
      features: [
        "Everything in Pro",
        "Unlimited API calls",
        "Dedicated support",
        "SLA guarantee",
        "Custom contracts",
        "On-premise option",
      ],
      cta: "Contact Sales",
      highlighted: false,
    },
  ];
</script>

<section class="bg-background @container py-24">
  <div class="mx-auto max-w-2xl px-6">
    <div class="text-center">
      <h2 class="text-balance font-serif text-4xl font-medium">
        Simple, Transparent Pricing
      </h2>
      <p class="text-muted-foreground mx-auto mt-4 max-w-md text-balance">
        Choose the plan that fits your needs. All plans include a 14-day free
        trial.
      </p>
    </div>
    <div class="@3xl:grid-cols-2 mt-12 grid gap-3">
      {#each plans as plan (plan.name)}
        <Card
          variant={plan.highlighted ? "default" : "mixed"}
          class={cn(
            "relative flex flex-col p-6 last:col-span-full",
            plan.highlighted && "ring-primary",
          )}
        >
          <div>
            <h3 class="text-foreground font-medium">{plan.name}</h3>
            <p class="text-muted-foreground mt-1 text-sm">{plan.description}</p>
          </div>
          <div class="mt-6">
            <span class="font-serif text-4xl font-medium">{plan.price}</span>
            <span class="text-muted-foreground">{plan.period}</span>
          </div>
          <ul class="mt-6 flex-1 space-y-3">
            {#each plan.features as feature (feature)}
              <li class="text-muted-foreground flex items-start gap-2 text-sm">
                <Check class="text-primary mt-0.5 size-4 shrink-0" />
                {feature}
              </li>
            {/each}
          </ul>
          <Button
            href="#link"
            variant={plan.highlighted ? "default" : "outline"}
            class="mt-8 w-full"
          >
            {plan.cta}
          </Button>
        </Card>
      {/each}
    </div>
  </div>
</section>

