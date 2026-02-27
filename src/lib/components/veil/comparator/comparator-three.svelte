<script lang="ts">
  import { Check, Minus } from "@lucide/svelte";
  import { Button } from "$lib/components/ui/veil/button";
  import { Card } from "$lib/components/ui/veil/card";

  type FeatureKey =
    | "integrations"
    | "apiCalls"
    | "support"
    | "analytics"
    | "webhooks"
    | "sso";

  type PlanFeatureValues = Record<FeatureKey, boolean | string>;

  type Plan = {
    name: string;
    price: string;
    period: string;
    description: string;
    cta: string;
    highlighted?: boolean;
    features: PlanFeatureValues;
  };

  const plans: Plan[] = [
    {
      name: "Starter",
      price: "$0",
      period: "/month",
      description: "For individuals and small projects",
      cta: "Get Started",
      features: {
        integrations: "3",
        apiCalls: "1,000/mo",
        support: "Community",
        analytics: false,
        webhooks: false,
        sso: false,
      },
    },
    {
      name: "Pro",
      price: "$29",
      period: "/month",
      description: "For growing teams",
      cta: "Start Free Trial",
      highlighted: true,
      features: {
        integrations: "Unlimited",
        apiCalls: "100,000/mo",
        support: "Priority",
        analytics: true,
        webhooks: true,
        sso: false,
      },
    },
    {
      name: "Enterprise",
      price: "Custom",
      period: "",
      description: "For large organizations",
      cta: "Contact Sales",
      features: {
        integrations: "Unlimited",
        apiCalls: "Unlimited",
        support: "Dedicated",
        analytics: true,
        webhooks: true,
        sso: true,
      },
    },
  ];

  const featureLabels: Record<FeatureKey, string> = {
    integrations: "Integrations",
    apiCalls: "API Calls",
    support: "Support",
    analytics: "Analytics",
    webhooks: "Custom Webhooks",
    sso: "SSO / SAML",
  };

  const featureKeys: FeatureKey[] = [
    "integrations",
    "apiCalls",
    "support",
    "analytics",
    "webhooks",
    "sso",
  ];
</script>

<section class="bg-background @container py-24">
  <div class="mx-auto max-w-2xl px-6">
    <div class="text-center">
      <h2 class="text-balance font-serif text-4xl font-medium">Choose Your Plan</h2>
      <p class="text-muted-foreground mx-auto mt-4 max-w-md text-balance">
        Start free and scale as you grow.
      </p>
    </div>
    <div class="mt-12 space-y-4">
      {#each plans as plan (plan.name)}
        <Card
          variant={plan.highlighted ? "default" : "mixed"}
          class={`p-6 ${plan.highlighted ? "ring-primary" : ""}`}
        >
          <div class="@lg:flex-row @lg:items-start @lg:justify-between flex flex-col gap-6">
            <div class="@lg:max-w-xs">
              <h3 class="text-foreground font-medium">{plan.name}</h3>
              <p class="text-muted-foreground mt-1 text-sm">{plan.description}</p>
              <div class="mt-4">
                <span class="font-serif text-3xl font-medium">{plan.price}</span>
                {#if plan.period}
                  <span class="text-muted-foreground">{plan.period}</span>
                {/if}
              </div>
              <Button
                href="#link"
                variant={plan.highlighted ? "default" : "outline"}
                size="sm"
                class="mt-4"
              >
                {plan.cta}
              </Button>
            </div>
            <div class="@lg:w-64 w-full shrink-0">
              {#each featureKeys as featureKey (featureKey)}
                {@const value = plan.features[featureKey]}
                <div class="flex items-center justify-between border-b py-3 text-sm last:border-b-0">
                  <span class="text-muted-foreground">{featureLabels[featureKey]}</span>
                  {#if typeof value === "boolean"}
                    {#if value}
                      <Check class="text-primary size-4" />
                    {:else}
                      <Minus class="text-muted-foreground/50 size-4" />
                    {/if}
                  {:else}
                    <span class="text-foreground font-medium">{value}</span>
                  {/if}
                </div>
              {/each}
            </div>
          </div>
        </Card>
      {/each}
    </div>
  </div>
</section>
