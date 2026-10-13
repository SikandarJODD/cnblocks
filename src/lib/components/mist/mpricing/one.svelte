<script lang="ts">
	import Card from "#lib/components/ui/mist/card/card.svelte";
	import Button from "#lib/components/ui/mist/button/button.svelte";
	import { Spotify, SupabaseFull, VercelFull } from "#lib/svgs/index.js";
	import Check from "@lucide/svelte/icons/check";
</script>

<div class="relative bg-muted py-16 md:py-20">
	<div class="mx-auto max-w-5xl px-6">
		<div class="mx-auto max-w-2xl text-center">
			<h2 class="text-3xl font-bold text-balance md:text-4xl lg:text-5xl">
				Pricing that scale with your business
			</h2>
			<p class="mx-auto mt-4 max-w-md text-lg text-balance text-muted-foreground">
				Choose the perfect plan for your needs and start optimizing your workflow today
			</p>
		</div>
		<div class="mt-8 md:mt-16">
			<Card class="relative">
				<div
					class="grid items-center gap-12 divide-y p-12 md:grid-cols-2 md:divide-x md:divide-y-0"
				>
					<div class="pb-12 text-center md:pr-12 md:pb-0">
						<h3 class="text-2xl font-semibold">Suite Enterprise</h3>
						<p class="mt-2 text-lg">For your company of any size</p>
						<span class="mt-12 mb-6 inline-block text-6xl font-bold">
							<span class="text-4xl">$</span>234
						</span>

						<div class="flex justify-center">
							<Button variant="default" size="lg">Get started</Button>
						</div>

						<p class="mt-12 text-sm text-muted-foreground">
							Includes : Security, Unlimited Storage, Payment, Search engine, and all
							features
						</p>
					</div>
					<div class="relative">
						<ul role="list" class="space-y-4">
							{#each ["First premium advantage", "Second advantage weekly", "Third advantage donate to project", "Fourth, access to all components weekly"] as item (item)}
								<li class="flex items-center gap-2">
									<Check class="size-3 text-primary" strokeWidth={3.5} />
									<span>{item}</span>
								</li>
							{/each}
						</ul>
						<p class="mt-6 text-sm text-muted-foreground">
							Team can be any size, and you can add or switch members as needed.
							Companies using our platform include:
						</p>
						<div class="mt-6 flex items-center gap-8 **:fill-foreground">
							<VercelFull class="h-5 w-[76px]" />
							<Spotify aria-label="Spotify" role="img" class="h-[22px] w-[73px]" />
							<SupabaseFull aria-label="Supabase" role="img" class="h-[22px] w-auto" />
						</div>
					</div>
				</div>
			</Card>
		</div>
	</div>
</div>
