<script lang="ts">
	import Button from "#lib/components/ui/dusk/button/button.svelte";
	import Check from "@lucide/svelte/icons/check";

	let starterItems: string[] = [
		"Basic Analytics Dashboard",
		"5GB Cloud Storage",
		"Email and Chat Support",
	];
	let proItems: string[] = [
		"Everything in Free Plan",
		"5GB Cloud Storage",
		"Email and Chat Support",
		"Access to Community Forum",
		"Single User Access",
		"Access to Basic Templates",
		"Mobile App Access",
		"1 Custom Report Per Month",
		"Monthly Product Updates",
		"Standard Security Features",
	];
	let startupItems: string[] = [
		"Everything in Pro Plan",
		"10GB Cloud Storage",
		"Email and Chat Support",
		"Access to Community Forum",
		"Single User Access",
		"Access to Basic Templates",
		"Mobile App Access",
		"1 Custom Report Per Month",
		"Monthly Product Updates",
		"Standard Security Features",
	];
</script>

<section class="py-16 md:py-20">
	<div class="mx-auto max-w-7xl px-6">
		<div class="max-w-md space-y-6">
			<h1
				class="text-4xl font-medium tracking-tight text-balance text-muted-foreground lg:text-5xl"
			>
				<span class="text-foreground">Start free.</span> <br /> Upgrade as you scale.
			</h1>
		</div>

		<div
			class="mt-12 grid gap-6 border *:p-8 max-lg:mx-auto max-lg:max-w-sm lg:mt-20 lg:grid-cols-3"
		>
			<div class="flex flex-col gap-8 max-lg:border-b lg:border-r">
				<div>
					<p class="text-lg font-medium">Starter</p>
					<p class="text-lg font-medium text-muted-foreground">For solo developers</p>

					<div class="my-8 block text-4xl font-medium tracking-tight">
						$0 <span class="text-lg text-muted-foreground">/mo</span>
					</div>

					<Button variant="outline" class="w-full" href="/">Get Started</Button>
				</div>

				<ul class="list-outside space-y-3 text-muted-foreground">
					{#each starterItems as item}
						<li class="flex items-center gap-3">
							<Check class="size-3 text-muted-foreground" />
							{item}
						</li>
					{/each}
				</ul>
			</div>

			<div class="relative flex flex-col gap-8 bg-card shadow-xl max-lg:border-y lg:border-x">
				<div
					class="absolute top-0 right-0 w-fit translate-x-px -translate-y-px rounded-bl bg-emerald-100 px-3 py-1 text-xs font-medium text-emerald-800 inset-ring inset-ring-emerald-950/10 [corner-shape:bevel] dark:bg-emerald-500/15 dark:text-emerald-200 dark:inset-ring-foreground/10"
				>
					Popular
				</div>
				<div>
					<p class="text-lg font-medium">Pro</p>
					<p class="text-lg font-medium text-muted-foreground">For ambitious founders</p>

					<div class="my-8 block text-4xl font-medium tracking-tight">
						$59 <span class="text-lg text-muted-foreground">/mo</span>
					</div>

					<Button class="w-full" href="/">Get Started</Button>
				</div>

				<ul class="list-outside space-y-3 text-muted-foreground">
					{#each proItems as item}
						<li class="flex items-center gap-3">
							<Check class="size-3 text-muted-foreground" />
							{item}
						</li>
					{/each}
				</ul>
			</div>

			<div class="flex flex-col gap-8 max-lg:border-t lg:border-l">
				<div>
					<p class="text-lg font-medium">Startup</p>
					<p class="text-lg font-medium text-muted-foreground">
						For growing businesses and teams
					</p>

					<div class="my-8 block text-4xl font-medium tracking-tight">
						$99 <span class="text-lg text-muted-foreground">/mo</span>
					</div>

					<Button class="w-full" variant="outline" href="/">Get Started</Button>
				</div>

				<ul class="list-outside space-y-3 text-muted-foreground">
					{#each startupItems as item}
						<li class="flex items-center gap-3">
							<Check class="size-3 text-muted-foreground" />
							{item}
						</li>
					{/each}
				</ul>
			</div>
		</div>
	</div>
</section>
