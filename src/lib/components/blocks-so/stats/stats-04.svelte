<script lang="ts">
	import { Badge } from '$lib/components/ui/badge';
	import { Card, CardContent } from '$lib/components/ui/card';
	import { cn } from '$lib/utils';
	import { TrendingDown, TrendingUp } from '@lucide/svelte';

	const data = [
		{
			name: 'Daily active users',
			stat: '3,450',
			change: '+12.1%',
			changeType: 'positive'
		},
		{
			name: 'Weekly sessions',
			stat: '1,342',
			change: '-9.8%',
			changeType: 'negative'
		},
		{
			name: 'Duration',
			stat: '5.2min',
			change: '+7.7%',
			changeType: 'positive'
		}
	];
</script>

<div class="flex w-full items-center justify-center p-10">
	<dl class="grid w-full grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
		{#each data as item (item.name)}
			<Card class="w-full p-6 py-4">
				<CardContent class="p-0">
					<div class="flex items-center justify-between">
						<dt class="text-sm font-medium text-muted-foreground">
							{item.name}
						</dt>
						<Badge
							variant="outline"
							class={cn(
								'inline-flex items-center px-1.5 py-0.5 ps-2.5 text-xs font-medium',
								item.changeType === 'positive'
									? 'bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400'
									: 'bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-400'
							)}
						>
							{#if item.changeType === 'positive'}
								<TrendingUp class="mr-0.5 -ml-1 h-5 w-5 shrink-0 self-center text-green-500" />
							{:else}
								<TrendingDown class="mr-0.5 -ml-1 h-5 w-5 shrink-0 self-center text-red-500" />
							{/if}
							<span class="sr-only">
								{item.changeType === 'positive' ? 'Increased' : 'Decreased'} by
							</span>
							{item.change}
						</Badge>
					</div>
					<dd class="mt-2 text-3xl font-semibold text-foreground">
						{item.stat}
					</dd>
				</CardContent>
			</Card>
		{/each}
	</dl>
</div>
