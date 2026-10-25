<script lang="ts">
	import { Card } from "#lib/components/ui/dusk/card/index.js";
	import ArrowLeftRight from "@lucide/svelte/icons/arrow-left-right";
	import Bell from "@lucide/svelte/icons/bell";
	import LineChart from "@lucide/svelte/icons/chart-line";
	import Users from "@lucide/svelte/icons/users";
</script>

<section class="py-16 md:py-20">
	<div class="mx-auto max-w-7xl px-6">
		<h2
			class="max-w-4xl text-4xl font-medium tracking-tight text-balance text-muted-foreground lg:text-5xl"
		>
			<span class="text-foreground">Every deal, one view.</span><br /> Stages and owners in
			one place.
		</h2>
		<div class="mt-8 grid gap-3 *:bg-background md:mt-16 md:grid-cols-2 lg:grid-cols-3">
			<Card class="p-8">
				<p class="max-w-xs text-lg font-medium text-muted-foreground">
					<span class="text-foreground">One pipeline view.</span> See every deal stage, owner,
					and next step without switching tabs.
				</p>
				<div class="my-16">
					<div aria-hidden="true" class="relative mx-auto aspect-square w-10/12 rounded-xl border bg-background">
						<div class="absolute right-0 bottom-0 aspect-square w-3/5 translate-x-8 translate-y-16 rounded-xl bg-card shadow-xl ring ring-foreground/6.5"></div>
					</div>
				</div>
			</Card>
			<Card class="lg:col-span-2">
				<div class="p-8">
					<p class="max-w-xs text-lg font-medium text-muted-foreground">
						<span class="text-foreground">Customer signals in context.</span> Notes, emails, and
						tasks stay linked to the account — not scattered across tools.
					</p>
				</div>
				<div class="mt-6 pt-2 mask-x-from-65%">
					<div aria-hidden="true" class="relative h-72 rounded-xl bg-linear-to-b from-foreground/5 shadow-xl ring ring-foreground/6.5"></div>
				</div>
			</Card>
		</div>

		<div class="mt-12 grid gap-3 *:max-w-xs max-sm:*:not-last:border-b max-sm:*:not-last:pb-3 sm:grid-cols-2 md:mt-16 md:gap-y-6 lg:mt-24 lg:grid-cols-4 lg:gap-6">
			<p class="text-balance text-muted-foreground"><span class="font-medium text-foreground"><ArrowLeftRight class="inline size-4 -translate-y-0.5" /> Pipeline visibility.</span> See every open deal and stage in one workspace.</p>
			<p class="text-balance text-muted-foreground"><span class="font-medium text-foreground"><Bell class="inline size-4 -translate-y-0.5" /> Account history.</span> Every email, note, and task stays on the record.</p>
			<p class="text-balance text-muted-foreground"><span class="font-medium text-foreground"><Users class="inline size-4 -translate-y-0.5" /> Team alignment.</span> Reps and managers work from shared customer context.</p>
			<p class="text-balance text-muted-foreground"><span class="font-medium text-foreground"><LineChart class="inline size-4 -translate-y-0.5" /> Forecast health.</span> Spot risk and momentum before the quarter slips away.</p>
		</div>
	</div>
</section>
