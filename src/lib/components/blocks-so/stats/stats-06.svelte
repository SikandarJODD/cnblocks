<script lang="ts">
	import { Card, CardContent } from '$lib/components/ui/card';
	import { cn } from '$lib/utils';
	import { AlertTriangle, Check, ChevronRight, Eye } from '@lucide/svelte';

	const data = [
		{
			name: 'Europe',
			stat: '$10,023',
			goalsAchieved: 3,
			status: 'observe',
			href: '#'
		},
		{
			name: 'North America',
			stat: '$14,092',
			goalsAchieved: 5,
			status: 'within',
			href: '#'
		},
		{
			name: 'Asia',
			stat: '$113,232',
			goalsAchieved: 1,
			status: 'critical',
			href: '#'
		}
	];
</script>

<div class="flex w-full items-center justify-center p-10">
	<dl class="grid w-full grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
		{#each data as item (item.name)}
			<Card class="relative p-6">
				<CardContent class="p-0">
					<dt class="text-sm font-medium text-muted-foreground">
						{item.name}
					</dt>
					<dd class="text-3xl font-semibold text-foreground">
						{item.stat}
					</dd>
					<div
						class="group relative mt-6 flex items-center space-x-4 rounded-md bg-muted/60 p-2 hover:bg-muted"
					>
						<div class="flex w-full items-center justify-between truncate">
							<div class="flex items-center space-x-3">
								<span
									class={cn(
										'flex h-9 w-9 shrink-0 items-center justify-center rounded',
										item.status === 'within'
											? 'bg-emerald-500 text-white'
											: item.status === 'observe'
												? 'bg-yellow-500 text-white'
												: 'bg-red-500 text-white'
									)}
								>
									{#if item.status === 'within'}
										<Check class="size-4 shrink-0" aria-hidden={true} />
									{:else if item.status === 'observe'}
										<Eye class="size-4 shrink-0" aria-hidden={true} />
									{:else}
										<AlertTriangle class="size-4 shrink-0" aria-hidden={true} />
									{/if}
								</span>
								<dd>
									<p class="text-sm text-muted-foreground">
										<a href={item.href} class="focus:outline-none">
											<span class="absolute inset-0" aria-hidden={true} />
											{item.goalsAchieved}/5 goals
										</a>
									</p>
									<p
										class={cn(
											'text-sm font-medium',
											item.status === 'within'
												? 'text-emerald-800 dark:text-emerald-500'
												: item.status === 'observe'
													? 'text-yellow-800 dark:text-yellow-500'
													: 'text-red-800 dark:text-red-500'
										)}
									>
										{item.status}
									</p>
								</dd>
							</div>
							<ChevronRight
								class="size-5 shrink-0 text-muted-foreground/60 group-hover:text-muted-foreground"
								aria-hidden={true}
							/>
						</div>
					</div>
				</CardContent>
			</Card>
		{/each}
	</dl>
</div>
