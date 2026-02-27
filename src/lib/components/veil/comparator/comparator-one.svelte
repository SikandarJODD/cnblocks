<script lang="ts">
  import { Check, Minus } from "@lucide/svelte";
  import { Button } from "$lib/components/ui/veil/button";
  import { Card } from "$lib/components/ui/veil/card";

  type PlanKey = "basic" | "pro" | "team";

  const planKeys: PlanKey[] = ["basic", "pro", "team"];

  const plans = [
    {
      name: "Basic",
      price: "$9",
      period: "/month",
      cta: "Get Started",
      highlighted: false,
    },
    {
      name: "Pro",
      price: "$29",
      period: "/month",
      cta: "Start Free Trial",
      highlighted: true,
    },
    {
      name: "Team",
      price: "$79",
      period: "/month",
      cta: "Start Free Trial",
      highlighted: false,
    },
  ];

  type FeatureRow = {
    name: string;
    basic: boolean | string;
    pro: boolean | string;
    team: boolean | string;
  };

  const features: FeatureRow[] = [
    { name: "Integrations", basic: "5", pro: "Unlimited", team: "Unlimited" },
    { name: "API Calls", basic: "10K/mo", pro: "100K/mo", team: "1M/mo" },
    { name: "Team Members", basic: "1", pro: "5", team: "Unlimited" },
    { name: "Support", basic: "Email", pro: "Priority", team: "Dedicated" },
    { name: "Analytics", basic: true, pro: true, team: true },
    { name: "Custom Webhooks", basic: false, pro: true, team: true },
    { name: "SSO", basic: false, pro: false, team: true },
    { name: "Audit Logs", basic: false, pro: false, team: true },
  ];
</script>

<section class="bg-background @container py-24">
  <div class="mx-auto max-w-3xl px-6">
    <div class="text-center">
      <h2 class="text-balance font-serif text-4xl font-medium">Compare Plans</h2>
      <p class="text-muted-foreground mx-auto mt-4 max-w-md text-balance">
        Find the perfect plan for your team's needs.
      </p>
    </div>
    <Card variant="outline" class="*:min-w-xl mt-12 overflow-auto">
      <div class="grid grid-cols-4 border-b">
        <div class="p-4"></div>
        {#each plans as plan (plan.name)}
          <div class={`border-l p-4 text-center ${plan.highlighted ? "bg-primary/5" : ""}`}>
            <p class="text-foreground font-medium">{plan.name}</p>
            <p class="mt-1">
              <span class="font-serif text-2xl font-medium">{plan.price}</span>
              <span class="text-muted-foreground text-sm">{plan.period}</span>
            </p>
          </div>
        {/each}
      </div>

      {#each features as feature (feature.name)}
        <div class="grid grid-cols-4 border-b last:border-b-0">
          <div class="text-muted-foreground p-4 text-sm">{feature.name}</div>
          {#each planKeys as planKey, idx (planKey)}
            {@const value = feature[planKey]}
            <div class={`flex items-center justify-center border-l p-4 text-sm ${idx === 1 ? "bg-primary/5" : ""}`}>
              {#if typeof value === "boolean"}
                {#if value}
                  <Check class="text-primary size-4" />
                {:else}
                  <Minus class="text-muted-foreground size-4" />
                {/if}
              {:else}
                <span class="text-foreground">{value}</span>
              {/if}
            </div>
          {/each}
        </div>
      {/each}

      <div class="grid grid-cols-4 border-t">
        <div class="p-4"></div>
        {#each plans as plan (plan.name)}
          <div class={`border-l p-4 ${plan.highlighted ? "bg-primary/5" : ""}`}>
            <Button
              href="#link"
              variant={plan.highlighted ? "default" : "outline"}
              size="sm"
              class="w-full"
            >
              {plan.cta}
            </Button>
          </div>
        {/each}
      </div>
    </Card>
  </div>
</section>
