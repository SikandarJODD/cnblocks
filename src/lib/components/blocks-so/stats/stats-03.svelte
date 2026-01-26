<script lang="ts">
	import { Card, CardContent } from "$lib/components/ui/card";
	import { cn } from "$lib/utils";

	const data = [
		{
			name: "Unique visitors",
			stat: "10,450",
			change: "-12.5%",
			changeType: "negative"
		},
		{
			name: "Bounce rate",
			stat: "56.1%",
			change: "+1.8%",
			changeType: "positive"
		},
		{
			name: "Visit duration",
			stat: "5.2min",
			change: "+19.7%",
			changeType: "positive"
		},
		{
			name: "Conversion rate",
			stat: "3.2%",
			change: "-2.4%",
			changeType: "negative"
		}
	];
</script>

<div class="flex items-center justify-center p-10 w-full">
	<dl class="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4 w-full">
		{#each data as item (item.name)}
			<Card class="p-6 py-4">
				<CardContent class="p-0">
					<dt class="text-sm font-medium text-muted-foreground">
						{item.name}
					</dt>
					<dd class="mt-2 flex items-baseline space-x-2.5">
						<span class="text-3xl font-semibold text-foreground">
							{item.stat}
						</span>
						<span
							class={cn(
								item.changeType === "positive"
									? "text-green-800 dark:text-green-400"
									: "text-red-800 dark:text-red-400",
								"text-sm font-medium"
							)}
						>
							{item.change}
						</span>
					</dd>
				</CardContent>
			</Card>
		{/each}
	</dl>
</div>
