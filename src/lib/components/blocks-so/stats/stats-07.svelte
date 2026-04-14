<script lang="ts">
	import { Card, CardContent } from "$lib/components/ui/card";
	import { ExternalLink } from "@lucide/svelte";

	const data = [
		{
			name: "Workspaces",
			capacity: 20,
			current: 1,
			allowed: 5,
			fill: "var(--chart-1)",
		},
		{
			name: "Dashboards",
			capacity: 10,
			current: 2,
			allowed: 20,
			fill: "var(--chart-2)",
		},
		{
			name: "Chart widgets",
			capacity: 30,
			current: 15,
			allowed: 50,
			fill: "var(--chart-3)",
		},
		{
			name: "Storage",
			capacity: 50,
			current: 25,
			allowed: 100,
			fill: "var(--chart-4)",
		},
	];

	function createRadialPath(percentage: number): string {
		const radius = 30;
		const circumference = 2 * Math.PI * radius;
		const strokeDasharray = circumference;
		const strokeDashoffset = circumference - (percentage / 100) * circumference;

		return `${strokeDasharray} ${strokeDashoffset}`;
	}
</script>

<div class="flex w-full items-center justify-center p-10">
	<div class="w-full">
		<h2 class="text-xl font-medium text-foreground">Plan overview</h2>
		<p class="mt-1 text-sm leading-6 text-muted-foreground">
			You are currently on the{" "}
			<span class="font-medium text-foreground">starter plan</span>.{" "}
			<a
				href="/"
				class="inline-flex items-center gap-1 text-primary hover:underline hover:underline-offset-4"
			>
				View other plans
				<ExternalLink class="size-4" aria-hidden={true} />
			</a>
		</p>
		<dl class="mt-6 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
			{#each data as item (item.name)}
				<Card class="p-4">
					<CardContent class="flex items-center space-x-4 p-0">
						<div class="relative flex items-center justify-center">
							<svg class="h-[80px] w-[80px] -rotate-90" viewBox="0 0 80 80">
								<circle
									cx="40"
									cy="40"
									r="30"
									stroke="hsl(var(--muted))"
									stroke-width="6"
									fill="none"
								/>
								<circle
									cx="40"
									cy="40"
									r="30"
									stroke="hsl(var(--primary))"
									stroke-width="6"
									fill="none"
									stroke-linecap="round"
									stroke-dasharray={createRadialPath(item.capacity)}
									class="transition-all duration-300 ease-in-out"
								/>
							</svg>
							<div class="absolute inset-0 flex items-center justify-center">
								<span class="text-base font-medium text-foreground">
									{item.capacity}%
								</span>
							</div>
						</div>
						<div>
							<dt class="text-sm font-medium text-foreground">
								{item.name}
							</dt>
							<dd class="text-sm text-muted-foreground">
								{item.current} of {item.allowed} used
							</dd>
						</div>
					</CardContent>
				</Card>
			{/each}
		</dl>
	</div>
</div>
