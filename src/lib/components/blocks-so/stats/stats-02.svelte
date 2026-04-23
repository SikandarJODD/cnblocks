<script lang="ts">
	import { Badge } from "$lib/components/ui/badge";
	import { Card, CardContent, CardTitle } from "$lib/components/ui/card";
	import { cn } from "$lib/utils";
	import TrendingDown from "@lucide/svelte/icons/trending-down";
	import TrendingUp from "@lucide/svelte/icons/trending-up";

	const stats = [
		{
			metric: "Active Users",
			current: "128,456",
			previous: "115,789",
			difference: "10.9%",
			trend: "up",
		},
		{
			metric: "Conversion Rate",
			current: "5.32%",
			previous: "6.18%",
			difference: "0.86%",
			trend: "down",
		},
		{
			metric: "Avg. Session Duration",
			current: "3m 42s",
			previous: "3m 15s",
			difference: "13.8%",
			trend: "up",
		},
	];
</script>

<div class="flex items-center justify-center p-10">
	<div
		class="grid grid-cols-1 divide-y divide-border overflow-hidden rounded-lg bg-border md:grid-cols-3 md:divide-x md:divide-y-0"
	>
		{#each stats as item (item.metric)}
			<Card class="rounded-none border-0 py-0 shadow-sm">
				<CardContent class="p-4 sm:p-6">
					<CardTitle class="text-base font-normal">
						{item.metric}
					</CardTitle>
					<div class="mt-1 flex items-baseline gap-2 md:block lg:flex">
						<div class="flex items-baseline text-2xl font-semibold text-primary">
							{item.current}
							<span class="ml-2 text-sm font-medium text-muted-foreground">
								from {item.previous}
							</span>
						</div>

						<Badge
							variant="outline"
							class={cn(
								"inline-flex items-center px-1.5 py-0.5 ps-2.5 text-xs font-medium md:mt-2 lg:mt-0",
								item.trend === "up"
									? "bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400"
									: "bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-400"
							)}
						>
							{#if item.trend === "up"}
								<TrendingUp
									class="mr-0.5 -ml-1 h-5 w-5 shrink-0 self-center text-green-500"
								/>
							{:else}
								<TrendingDown
									class="mr-0.5 -ml-1 h-5 w-5 shrink-0 self-center text-red-500"
								/>
							{/if}

							<span class="sr-only">
								{item.trend === "up" ? "Increased" : "Decreased"} by
							</span>
							{item.difference}
						</Badge>
					</div>
				</CardContent>
			</Card>
		{/each}
	</div>
</div>
