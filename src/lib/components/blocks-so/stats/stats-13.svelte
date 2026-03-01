<script lang="ts">
	import { Card, CardContent } from '$lib/components/ui/card';
	import { cn } from '$lib/utils';

	interface Props {
		title?: string;
		used?: number;
		total?: number;
		usedLabel?: string;
		totalLabel?: string;
		segments?: {
			label: string;
			value: number;
			color: string;
		}[];
		class?: string;
	}

	const defaultSegments: NonNullable<Props['segments']> = [
		{ label: 'Documents', value: 2400, color: 'bg-blue-500' },
		{ label: 'Photos', value: 1800, color: 'bg-emerald-500' },
		{ label: 'Videos', value: 3200, color: 'bg-amber-500' },
		{ label: 'Music', value: 900, color: 'bg-purple-500' }
	];

	let {
		title = 'Using Storage',
		used = 8300,
		total = 15,
		usedLabel = 'MB',
		totalLabel = 'GB',
		segments = defaultSegments,
		class: className
	}: Props = $props();
</script>

<Card class={cn('w-full max-w-4xl shadow-sm', className)}>
	<CardContent class="py-0">
		<p class="mb-4 text-base text-muted-foreground">
			{title}{' '}
			<span class="font-semibold text-foreground tabular-nums">
				{used.toLocaleString(undefined, {
					minimumFractionDigits: 0,
					maximumFractionDigits: 2
				})}{' '}
				{usedLabel}
			</span>{' '}
			of {total}
			{totalLabel}
		</p>

		<div class="mb-4 flex h-2.5 w-full overflow-hidden rounded-full bg-muted">
			{#each segments as segment (segment.label)}
				{@const percentage = (segment.value / (total * 1000)) * 100}
				<div
					class={cn('h-full', segment.color)}
					style="width: {percentage}%"
					role="progressbar"
					aria-label={segment.label}
					aria-valuenow={segment.value}
					aria-valuemin={0}
					aria-valuemax={total * 1000}
				/>
			{/each}
		</div>

		<div class="flex flex-wrap items-center gap-x-8 gap-y-2">
			{#each segments as segment (segment.label)}
				<div class="flex items-center gap-2">
					<span class={cn('size-3 shrink-0 rounded', segment.color)} aria-hidden="true" />
					<span class="text-sm text-muted-foreground">
						{segment.label}
					</span>
					<span class="text-sm text-muted-foreground tabular-nums">
						{Math.round(segment.value)}
						{usedLabel}
					</span>
				</div>
			{/each}
			<div class="flex items-center gap-2">
				<span class="size-3 shrink-0 rounded-sm bg-muted" aria-hidden="true" />
				<span class="text-sm text-muted-foreground">Free</span>
				<span class="text-sm text-muted-foreground tabular-nums">
					{Math.round(total * 1000 - used)}
					{usedLabel}
				</span>
			</div>
		</div>
	</CardContent>
</Card>
