<script lang="ts">
  import { Badge } from "$lib/components/ui/badge";
  import { Card, CardContent } from "$lib/components/ui/card";

  interface UsageItem {
    label: string;
    amount: number;
    percentage: number;
    color: "emerald" | "amber" | "rose";
  }

  const data: UsageItem[] = [
    { label: "Compute", amount: 450, percentage: 52.3, color: "emerald" },
    { label: "Storage", amount: 285, percentage: 33.1, color: "amber" },
    { label: "Bandwidth", amount: 125, percentage: 14.6, color: "rose" },
  ];

  const colorClasses = {
    emerald: "bg-emerald-500 dark:bg-emerald-400",
    amber: "bg-amber-500 dark:bg-amber-400",
    rose: "bg-rose-500 dark:bg-rose-400",
  };
</script>

<Card class="w-full max-w-sm shadow-none">
  <CardContent class="flex flex-col justify-between pt-0">
    <div>
      <div class="flex items-center gap-2">
        <h3 class="text-sm font-bold text-foreground">Usage</h3>
        <Badge
          variant="secondary"
          class="bg-amber-50 text-amber-700 ring-1 ring-amber-500/30 dark:bg-amber-400/10 dark:text-amber-300 dark:ring-amber-400/20"
        >
          +12.5%
        </Badge>
      </div>

      <p class="mt-2 flex items-baseline gap-2">
        <span class="text-xl text-foreground">$860</span>
        <span class="text-sm text-muted-foreground">this month</span>
      </p>

      <div class="mt-4">
        <p class="text-sm font-medium text-foreground">Resource breakdown</p>
        <div class="mt-2 flex items-center gap-0.5">
          {#each data as item, index (index)}
            <div
              class="{colorClasses[item.color]} h-1.5 rounded-xs"
              style="width: {item.percentage}%"
            />
          {/each}
        </div>
      </div>

      <ul role="list" class="mt-5 space-y-2">
        {#each data as item, index (index)}
          <li class="flex items-center gap-2 text-xs">
            <span
              class="{colorClasses[item.color]} size-2.5 rounded-xs"
              aria-hidden="true"
            />
            <span class="text-foreground">{item.label}</span>
            <span class="text-muted-foreground">
              (${item.amount} / {item.percentage}%)
            </span>
          </li>
        {/each}
      </ul>
    </div>

    <p class="mt-6 text-xs text-muted-foreground">
      Configure limits in{" "}
      <a
        href="#"
        class="text-emerald-600 hover:underline dark:text-emerald-400"
      >
        resource settings.
      </a>
    </p>
  </CardContent>
</Card>
