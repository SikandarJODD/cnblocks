<script lang="ts">
	import ArrowLeftRight from "@lucide/svelte/icons/arrow-left-right";
	import Bell from "@lucide/svelte/icons/bell";
	import LineChart from "@lucide/svelte/icons/chart-line";
	import Users from "@lucide/svelte/icons/users";
</script>

<section class="py-16 md:py-20">
	<div class="mx-auto max-w-7xl space-y-12 px-6">
		<h2 class="relative z-10 max-w-4xl text-4xl font-medium tracking-tight text-balance text-muted-foreground lg:text-5xl"><span class="text-foreground">Your stack, connected.</span><br /> Git sync or AI agents, your way.</h2>
		<div class="relative -mx-6 overflow-hidden px-3 pt-3 md:-mx-8">
			<div class="absolute inset-3 z-1 size-64 rounded-tl-3xl border-t border-l mask-radial-at-top-left mask-radial-from-65% mask-radial-[100%_60%] md:size-96 lg:inset-4"></div>
			<div class="relative min-w-2xl aspect-88/36 overflow-hidden rounded-tl-3xl bg-white mask-b-from-75% mask-b-to-95% dark:bg-background">
				<img src="/mail-upper.png" class="absolute inset-0 z-10" alt="Mail interface foreground" width="2797" height="1137" />
				<img src="/mail-back.png" alt="Mail interface background" width="2797" height="1137" class="hidden opacity-75 dark:block" />
				<img src="/mail-back-light.png" alt="Mail interface background" width="2797" height="1137" class="dark:hidden" />
			</div>
		</div>
		<div class="mt-12 grid gap-3 *:max-w-xs max-sm:*:not-last:border-b max-sm:*:not-last:pb-3 sm:grid-cols-2 md:mt-16 md:gap-y-6 lg:mt-24 lg:grid-cols-4 lg:gap-6">
			<p class="text-balance text-muted-foreground"><span class="font-medium text-foreground"><ArrowLeftRight class="inline size-4 -translate-y-0.5" /> Seamless handoffs.</span> Ownership changes without resetting the relationship.</p>
			<p class="text-balance text-muted-foreground"><span class="font-medium text-foreground"><Bell class="inline size-4 -translate-y-0.5" /> Proactive alerts.</span> Surface renewals and quiet accounts before they slip.</p>
			<p class="text-balance text-muted-foreground"><span class="font-medium text-foreground"><Users class="inline size-4 -translate-y-0.5" /> Shared timeline.</span> Sales, success, and support work from one account view.</p>
			<p class="text-balance text-muted-foreground"><span class="font-medium text-foreground"><LineChart class="inline size-4 -translate-y-0.5" /> Forecast clarity.</span> Leaders see risk and momentum without chasing updates.</p>
		</div>
	</div>
</section>
