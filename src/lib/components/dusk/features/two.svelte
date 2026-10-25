<script lang="ts">
	import { Card } from "#lib/components/ui/dusk/card/index.js";
	import ArrowLeftRight from "@lucide/svelte/icons/arrow-left-right";
	import Bell from "@lucide/svelte/icons/bell";
	import LineChart from "@lucide/svelte/icons/chart-line";
	import Users from "@lucide/svelte/icons/users";
</script>

<section class="py-16 md:py-20">
	<div class="mx-auto max-w-7xl px-6">
		<h2 class="max-w-4xl text-4xl font-medium tracking-tight text-balance text-muted-foreground lg:text-5xl"><span class="text-foreground">Revenue, aligned.</span><br /> One timeline per customer.</h2>
		<div class="mt-8 grid gap-3 *:bg-background md:mt-16 md:grid-cols-2 lg:grid-cols-3">
			<Card class="p-8">
				<p class="max-w-xs text-lg font-medium text-muted-foreground"><span class="text-foreground">Account ownership, clarified.</span> Know who owns each relationship and what happened last.</p>
				<div class="my-16"><div aria-hidden="true" class="relative mx-auto aspect-square w-10/12"><div class="absolute inset-0 mask-b-from-75%"><div class="h-full rounded-xl border bg-background"></div></div><div class="absolute right-0 bottom-0 aspect-square w-3/5 translate-x-8 translate-y-16 rounded-xl bg-card shadow-xl shadow-black/5 ring ring-foreground/6.5"></div></div></div>
			</Card>
			<Card>
				<div class="p-8"><p class="max-w-xs text-lg font-medium text-muted-foreground"><span class="text-foreground">Follow-up without friction.</span> Tasks and reminders tied to real deal momentum, not busywork.</p></div>
				<div class="relative mt-6 pt-2 mask-x-from-65%"><div aria-hidden="true" class="relative h-72 rounded-xl bg-linear-to-b from-card to-background shadow-xl ring ring-foreground/6.5"></div></div>
			</Card>
			<Card class="p-8">
				<p class="max-w-xs text-lg font-medium text-muted-foreground"><span class="text-foreground">Revenue teams aligned.</span> Sales and success share one timeline per customer, from first touch to renewal.</p>
				<div class="mt-16 mask-b-from-75%"><div aria-hidden="true" class="relative mx-auto flex aspect-square flex-col justify-between rounded-xl border bg-background pb-6"><div class="flex gap-1 border-b p-3"><div class="size-1 rounded-full bg-foreground/10"></div><div class="size-1 rounded-full bg-foreground/10"></div><div class="size-1 rounded-full bg-foreground/10"></div></div><div class="mx-6 mt-auto aspect-video rounded-xl bg-card shadow-xl ring ring-foreground/6.5"></div></div></div>
			</Card>
		</div>
		<div class="mt-12 grid gap-3 *:max-w-xs max-sm:*:not-last:border-b max-sm:*:not-last:pb-3 sm:grid-cols-2 md:mt-16 md:gap-y-6 lg:mt-24 lg:grid-cols-4 lg:gap-6">
			<p class="text-balance text-muted-foreground"><span class="font-medium text-foreground"><ArrowLeftRight class="inline size-4 -translate-y-0.5" /> Lead routing.</span> Assign new accounts to the right owner automatically.</p>
			<p class="text-balance text-muted-foreground"><span class="font-medium text-foreground"><Bell class="inline size-4 -translate-y-0.5" /> Activity tracking.</span> Log calls, emails, and meetings without extra admin steps.</p>
			<p class="text-balance text-muted-foreground"><span class="font-medium text-foreground"><Users class="inline size-4 -translate-y-0.5" /> Renewal visibility.</span> Expansion and churn signals surface before contracts lapse.</p>
			<p class="text-balance text-muted-foreground"><span class="font-medium text-foreground"><LineChart class="inline size-4 -translate-y-0.5" /> Rep focus.</span> Less time updating the CRM, more time with customers.</p>
		</div>
	</div>
</section>
