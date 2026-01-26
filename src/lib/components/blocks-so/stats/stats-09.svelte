<script lang="ts">
	import { Card, CardContent } from "$lib/components/ui/card";
	 import { Progress } from "$lib/components/ui/progress/index.js";

	const data = [
		{
			name: "Requests",
			stat: "996",
			limit: "10,000",
			percentage: 9.96
		},
		{
			name: "Credits",
			stat: "$672",
			limit: "$1,000",
			percentage: 67.2
		},
		{
			name: "Storage",
			stat: "1.85",
			limit: "10GB",
			percentage: 18.5
		},
		{
			name: "API Calls",
			stat: "4,328",
			limit: "5,000",
			percentage: 86.56
		}
	];
</script>

<div class="flex items-center justify-center p-10 w-full">
	<dl class="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4 w-full">
		{#each data as item (item.name)}
			<Card class="py-4">
				<CardContent class="">
					<dt class="text-sm text-muted-foreground">{item.name}</dt>
					<dd class="text-2xl font-semibold text-foreground">
						{item.stat}
					</dd>
					<Progress value={item.percentage} class="mt-6 h-2" />
					<dd class="mt-2 flex items-center justify-between text-sm">
						<span class="text-primary">{item.percentage}&#37;</span>
						<span class="text-muted-foreground">
							{item.stat} of {item.limit}
						</span>
					</dd>
				</CardContent>
			</Card>
		{/each}
	</dl>
</div>
