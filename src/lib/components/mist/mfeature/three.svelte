<script lang="ts">
	import { ToggleGroup, ToggleGroupItem } from '$lib/components/ui/toggle-group';
	import Button from '$lib/components/ui/button/button.svelte';
	import Card from '$lib/components/ui/card/card.svelte';
	import { cn } from '$lib/utils';

	// Lucide Icons
	import BoldIcon from '@lucide/svelte/icons/bold';
	import Calendar1 from '@lucide/svelte/icons/calendar-1';
	import Ellipsis from '@lucide/svelte/icons/ellipsis';
	import Italic from '@lucide/svelte/icons/italic';
	import Strikethrough from '@lucide/svelte/icons/strikethrough';
	import Underline from '@lucide/svelte/icons/underline';

	type IllustrationProps = {
		_class?: string;
		variant?: 'elevated' | 'outlined' | 'mixed';
	};
</script>

<section
	class="[--color-primary:theme(color.indigo.500)] [--color-secondary-foreground:theme(color.indigo.600)] [--color-secondary:theme(color.indigo.100)] dark:[--color-primary:theme(color.indigo.400)] dark:[--color-secondary-foreground:theme(color.indigo.500)] dark:[--color-secondary:theme(color.indigo.400)]"
>
	<div class="py-24">
		<div class="mx-auto w-full max-w-5xl px-6">
			<div>
				<h2 class="mt-4 text-4xl font-semibold text-foreground">Personal AI, with you Anywhere</h2>
				<p class="mt-4 mb-12 text-lg text-balance text-muted-foreground">
					Quick AI lives a single hotkey away - ready to quickly appear as a floating window above
					your other apps. Get instant assistance whether you're browsing, coding, or writing
					documents.
				</p>
			</div>

			<div class="grid gap-4 sm:grid-cols-2">
				<Card variant="soft" class="p-6">
					<div class="flex aspect-video items-center justify-center">
						{@render CodeIllustration({
							_class: 'w-full'
						})}
					</div>
					<div class="text-center">
						<h3 class="text-xl font-semibold text-foreground">Marketing Campaigns</h3>
						<p class="mt-4 text-lg text-balance text-muted-foreground">
							Effortlessly plan and execute your marketing campaigns organized.
						</p>
					</div>
				</Card>
				<Card variant="soft" class="p-6">
					<div class="flex aspect-video items-center justify-center">
						<!-- <ScheduleIllustation class="border" /> -->
						{@render ScheduleIllustation({
							_class: 'border'
						})}
					</div>
					<div class="text-center">
						<h3 class="text-xl font-semibold text-foreground">AI Meeting Scheduler</h3>
						<p class="mt-4 text-lg text-balance text-muted-foreground">
							Effortlessly book and manage your meetings. Stay on top of your schedule.
						</p>
					</div>
				</Card>
			</div>
		</div>
	</div>
</section>

{#snippet ScheduleIllustation({ _class = '', variant = 'elevated' }: IllustrationProps)}
	<div class={cn('relative', _class)}>
		<div
			class={cn(
				'absolute flex -translate-x-1/8 -translate-y-[110%] items-center gap-2 rounded-lg bg-background p-1',
				{
					'shadow-black-950/10 shadow-lg': variant === 'elevated',
					'border border-foreground/10': variant === 'outlined',
					'border border-foreground/10 shadow-md shadow-black/5': variant === 'mixed'
				}
			)}
		>
			<Button variant="mdefault" size="sm" class="rounded-sm">
				<Calendar1 class="size-3" />
				<span class="text-sm font-medium">Schedule</span>
			</Button>
			<span class="block h-4 w-px bg-border"></span>
			<ToggleGroup type="multiple" size="sm" class="gap-0.5 *:rounded-md">
				<ToggleGroupItem value="bold" aria-label="Toggle bold">
					<BoldIcon class="size-4" />
				</ToggleGroupItem>
				<ToggleGroupItem value="italic" aria-label="Toggle italic">
					<Italic class="size-4" />
				</ToggleGroupItem>
				<ToggleGroupItem value="underline" aria-label="Toggle underline">
					<Underline class="size-4" />
				</ToggleGroupItem>
				<ToggleGroupItem value="strikethrough" aria-label="Toggle strikethrough">
					<Strikethrough class="size-4" />
				</ToggleGroupItem>
			</ToggleGroup>
			<span class="block h-4 w-px bg-border"></span>
			<Button size="icon" class="size-8" variant="ghost">
				<Ellipsis class="size-3" />
			</Button>
		</div>
		<span>
			<span class="bg-secondary py-1 text-sm text-secondary-foreground dark:bg-secondary/10"
				>Tomorrow 8:30 pm</span
			> is our priority.
		</span>
	</div>
{/snippet}

{#snippet CodeIllustration({ _class = '' }: { _class?: string })}
	<div
		class={cn(
			'[mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_50%,transparent_100%)]',
			_class
		)}
	>
		<ul class="mx-auto w-fit font-mono text-2xl font-medium text-muted-foreground">
			{#each ['Images', 'Variables', 'Pages', 'Components', 'Styles'] as item, index}
				<li
					class={cn(
						index == 2 &&
							"text-foreground before:absolute before:-translate-x-[110%] before:text-orange-500 before:content-['Import']"
					)}
				>
					{item}
				</li>
			{/each}
		</ul>
	</div>
{/snippet}
