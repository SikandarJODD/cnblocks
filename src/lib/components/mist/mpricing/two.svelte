<script lang="ts">
	import { Card, CardHeader, CardTitle, CardDescription } from "$lib/components/ui/card";
	import Button from "$lib/components/ui/button/button.svelte";
	import Check from "@lucide/svelte/icons/check";
</script>

<div
	class="relative bg-muted py-16 [--color-primary:var(--color-indigo-500)] md:py-32 dark:bg-muted/30"
>
	<div class="mx-auto max-w-5xl px-6">
		<div class="mx-auto max-w-2xl text-center">
			<h2 class="text-3xl font-bold text-balance md:text-4xl lg:text-5xl">
				Pricing that scale with your business
			</h2>
			<p class="mx-auto mt-4 max-w-xl text-lg text-balance text-muted-foreground">
				Choose the perfect plan for your needs and start optimizing your workflow today
			</p>
		</div>
		<div class="@container relative mt-12 md:mt-20">
			<Card class="relative mx-auto max-w-sm @4xl:max-w-full">
				<div class="grid @4xl:grid-cols-3">
					<div>
						<CardHeader class="p-8">
							<CardTitle class="font-medium">Free</CardTitle>
							<span class="mt-2 mb-0.5 block text-2xl font-semibold">$0 / mo</span>
							<CardDescription class="text-sm">Per editor</CardDescription>
						</CardHeader>
						<div class="border-y px-8 py-4">
							<Button class="w-full" variant="neutral">Get Started</Button>
						</div>

						<ul role="list" class="space-y-3 p-8">
							{#each ["Basic Analytics Dashboard", "5GB Cloud Storage", "Email and Chat Support"] as item}
								<li class="flex items-center gap-2">
									<Check class="size-3 text-primary" strokeWidth={3.5} />
									{item}
								</li>
							{/each}
						</ul>
					</div>
					<div
						class=" -mx-1 rounded-(--radius) bg-background shadow ring-1 @3xl:mx-0 @3xl:-my-3 dark:border-x"
					>
						<div class="relative px-1 @3xl:px-0 @3xl:py-3">
							<CardHeader class="p-8">
								<CardTitle class="font-medium">Pro</CardTitle>
								<span class="mt-2 mb-0.5 block text-2xl font-semibold"
									>$19 / mo</span
								>
								<CardDescription class="text-sm">Per editor</CardDescription>
							</CardHeader>
							<div class="-mx-1 border-y px-8 py-4 @3xl:mx-0">
								<Button variant="mdefault" class="w-full">Get Started</Button>
							</div>

							<ul role="list" class="space-y-3 p-8">
								{#each ["Everything in Free Plan", "5GB Cloud Storage", "Email and Chat Support", "Access to Community Forum", "Single User Access", "Access to Basic Templates", "Mobile App Access", "1 Custom Report Per Month", "Monthly Product Updates", "Standard Security Features"] as item}
									<li class="flex items-center gap-2">
										<Check class="size-3 text-primary" strokeWidth={3.5} />
										{item}
									</li>
								{/each}
							</ul>
						</div>
					</div>
					<div>
						<CardHeader class="p-8">
							<CardTitle class="font-medium">Pro Plus</CardTitle>
							<span class="mt-2 mb-0.5 block text-2xl font-semibold">$49 / mo</span>
							<CardDescription class="text-sm">Per editor</CardDescription>
						</CardHeader>
						<div class="border-y px-8 py-4">
							<Button class="w-full" variant="neutral">Get Started</Button>
						</div>

						<ul role="list" class="space-y-3 p-8">
							{#each ["Everything in Pro Plan", "5GB Cloud Storage", "Email and Chat Support"] as item}
								<li class="flex items-center gap-2">
									<Check class="size-3 text-primary" strokeWidth={3.5} />
									{item}
								</li>
							{/each}
						</ul>
					</div>
				</div>
			</Card>
		</div>
	</div>
</div>
