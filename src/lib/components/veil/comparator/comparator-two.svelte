<script lang="ts">
	import Check from "@lucide/svelte/icons/check";
	import Minus from "@lucide/svelte/icons/minus";
	import { Button } from "$lib/components/ui/veil/button";
	import { Card } from "$lib/components/ui/veil/card";

	type FeatureRow = {
		name: string;
		free: boolean | string;
		pro: boolean | string;
	};

	const features: FeatureRow[] = [
		{ name: "Integrations", free: "5", pro: "Unlimited" },
		{ name: "API Calls", free: "10K/mo", pro: "500K/mo" },
		{ name: "Team Members", free: "2", pro: "20" },
		{ name: "Support", free: "Email", pro: "Priority" },
		{ name: "Analytics Dashboard", free: false, pro: true },
		{ name: "Custom Webhooks", free: false, pro: true },
		{ name: "Advanced Security", free: false, pro: true },
		{ name: "API Access", free: false, pro: true },
	];
</script>

<section class="@container bg-background py-24">
	<div class="mx-auto max-w-2xl px-6">
		<div class="text-center">
			<h2 class="font-serif text-4xl font-medium text-balance">Free vs Pro</h2>
			<p class="mx-auto mt-4 max-w-md text-balance text-muted-foreground">
				See what you get with each plan.
			</p>
		</div>
		<Card variant="outline" class="mt-12 overflow-auto @max-md:*:min-w-md">
			<div class="grid grid-cols-3">
				<div class="p-4"></div>
				<div class="min-w-32 border-l p-4 text-center">
					<p class="font-medium text-foreground">Free</p>
					<p class="font-serif text-2xl font-medium">$0</p>
				</div>
				<div class="min-w-32 border-l bg-primary/5 p-4 text-center">
					<p class="font-medium text-foreground">Pro</p>
					<p class="font-serif text-2xl font-medium">$29</p>
				</div>
			</div>

			{#each features as feature (feature.name)}
				<div class="grid grid-cols-3 border-t">
					<div class="p-4 text-sm text-muted-foreground">{feature.name}</div>
					<div class="flex min-w-32 items-center justify-center border-l p-4 text-sm">
						{#if typeof feature.free === "boolean"}
							{#if feature.free}
								<Check class="size-4 text-primary" />
							{:else}
								<Minus class="size-4 text-muted-foreground/50" />
							{/if}
						{:else}
							<span class="text-foreground">{feature.free}</span>
						{/if}
					</div>
					<div
						class="flex min-w-32 items-center justify-center border-l bg-primary/5 p-4 text-sm"
					>
						{#if typeof feature.pro === "boolean"}
							{#if feature.pro}
								<Check class="size-4 text-primary" />
							{:else}
								<Minus class="size-4 text-muted-foreground/50" />
							{/if}
						{:else}
							<span class="font-medium text-foreground">{feature.pro}</span>
						{/if}
					</div>
				</div>
			{/each}

			<div class="grid grid-cols-3 border-t">
				<div class="p-4"></div>
				<div class="min-w-32 border-l p-4">
					<Button href="#link" variant="outline" size="sm" class="w-full"
						>Get Started</Button
					>
				</div>
				<div class="min-w-32 border-l bg-primary/5 p-4">
					<Button href="#link" size="sm" class="w-full">Upgrade</Button>
				</div>
			</div>
		</Card>
	</div>
</section>
