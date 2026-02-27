<script lang="ts">
  import { Check, Minus } from "@lucide/svelte";
  import { Button } from "$lib/components/ui/veil/button";
  import { Card } from "$lib/components/ui/veil/card";

  type FeatureRow = {
    name: string;
    free: boolean | string;
    pro: boolean | string;
  };

  const features: FeatureRow[] = [
    { name: "Integrations", free: "5", pro: "Unlimited" },
    { name: "API Calls", free: "10K/mo", pro: "500K/mo" },
    { name: "Team Members", free: "2", pro: "20" },
    { name: "Support", free: "Email", pro: "Priority" },
    { name: "Analytics Dashboard", free: false, pro: true },
    { name: "Custom Webhooks", free: false, pro: true },
    { name: "Advanced Security", free: false, pro: true },
    { name: "API Access", free: false, pro: true },
  ];
</script>

<section class="bg-background @container py-24">
  <div class="mx-auto max-w-2xl px-6">
    <div class="text-center">
      <h2 class="text-balance font-serif text-4xl font-medium">Free vs Pro</h2>
      <p class="text-muted-foreground mx-auto mt-4 max-w-md text-balance">
        See what you get with each plan.
      </p>
    </div>
    <Card variant="outline" class="@max-md:*:min-w-md mt-12 overflow-auto">
      <div class="grid grid-cols-3">
        <div class="p-4"></div>
        <div class="min-w-32 border-l p-4 text-center">
          <p class="text-foreground font-medium">Free</p>
          <p class="font-serif text-2xl font-medium">$0</p>
        </div>
        <div class="bg-primary/5 min-w-32 border-l p-4 text-center">
          <p class="text-foreground font-medium">Pro</p>
          <p class="font-serif text-2xl font-medium">$29</p>
        </div>
      </div>

      {#each features as feature (feature.name)}
        <div class="grid grid-cols-3 border-t">
          <div class="text-muted-foreground p-4 text-sm">{feature.name}</div>
          <div class="flex min-w-32 items-center justify-center border-l p-4 text-sm">
            {#if typeof feature.free === "boolean"}
              {#if feature.free}
                <Check class="text-primary size-4" />
              {:else}
                <Minus class="text-muted-foreground/50 size-4" />
              {/if}
            {:else}
              <span class="text-foreground">{feature.free}</span>
            {/if}
          </div>
          <div class="bg-primary/5 flex min-w-32 items-center justify-center border-l p-4 text-sm">
            {#if typeof feature.pro === "boolean"}
              {#if feature.pro}
                <Check class="text-primary size-4" />
              {:else}
                <Minus class="text-muted-foreground/50 size-4" />
              {/if}
            {:else}
              <span class="text-foreground font-medium">{feature.pro}</span>
            {/if}
          </div>
        </div>
      {/each}

      <div class="grid grid-cols-3 border-t">
        <div class="p-4"></div>
        <div class="min-w-32 border-l p-4">
          <Button href="#link" variant="outline" size="sm" class="w-full">
            Get Started
          </Button>
        </div>
        <div class="bg-primary/5 min-w-32 border-l p-4">
          <Button href="#link" size="sm" class="w-full">Upgrade</Button>
        </div>
      </div>
    </Card>
  </div>
</section>
