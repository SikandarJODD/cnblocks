<script lang="ts">
	import Check from "@lucide/svelte/icons/check";
	import Minus from "@lucide/svelte/icons/minus";
	import { Button } from "$lib/components/ui/veil/button";
	import { Card } from "$lib/components/ui/veil/card";

	type PlanKey = "basic" | "pro" | "team";

	const planKeys: PlanKey[] = ["basic", "pro", "team"];

	const plans = [
		{
			name: "Basic",
			price: "$9",
			period: "/month",
			cta: "Get Started",
			highlighted: false,
		},
		{
			name: "Pro",
			price: "$29",
			period: "/month",
			cta: "Start Free Trial",
			highlighted: true,
		},
		{
			name: "Team",
			price: "$79",
			period: "/month",
			cta: "Start Free Trial",
			highlighted: false,
		},
	];

	type FeatureRow = {
		name: string;
		basic: boolean | string;
		pro: boolean | string;
		team: boolean | string;
	};

	const features: FeatureRow[] = [
		{ name: "Integrations", basic: "5", pro: "Unlimited", team: "Unlimited" },
		{ name: "API Calls", basic: "10K/mo", pro: "100K/mo", team: "1M/mo" },
		{ name: "Team Members", basic: "1", pro: "5", team: "Unlimited" },
		{ name: "Support", basic: "Email", pro: "Priority", team: "Dedicated" },
		{ name: "Analytics", basic: true, pro: true, team: true },
		{ name: "Custom Webhooks", basic: false, pro: true, team: true },
		{ name: "SSO", basic: false, pro: false, team: true },
		{ name: "Audit Logs", basic: false, pro: false, team: true },
	];
</script>

<section class="@container bg-background py-24">
	<div class="mx-auto max-w-3xl px-6">
		<div class="text-center">
			<h2 class="font-serif text-4xl font-medium text-balance">Compare Plans</h2>
			<p class="mx-auto mt-4 max-w-md text-balance text-muted-foreground">
				Find the perfect plan for your team's needs.
			</p>
		</div>
		<Card variant="outline" class="mt-12 overflow-auto *:min-w-xl">
			<div class="grid grid-cols-4 border-b">
				<div class="p-4"></div>
				{#each plans as plan (plan.name)}
					<div
						class={`border-l p-4 text-center ${plan.highlighted ? "bg-primary/5" : ""}`}
					>
						<p class="font-medium text-foreground">{plan.name}</p>
						<p class="mt-1">
							<span class="font-serif text-2xl font-medium">{plan.price}</span>
							<span class="text-sm text-muted-foreground">{plan.period}</span>
						</p>
					</div>
				{/each}
			</div>

			{#each features as feature (feature.name)}
				<div class="grid grid-cols-4 border-b last:border-b-0">
					<div class="p-4 text-sm text-muted-foreground">{feature.name}</div>
					{#each planKeys as planKey, idx (planKey)}
						{@const value = feature[planKey]}
						<div
							class={`flex items-center justify-center border-l p-4 text-sm ${idx === 1 ? "bg-primary/5" : ""}`}
						>
							{#if typeof value === "boolean"}
								{#if value}
									<Check class="size-4 text-primary" />
								{:else}
									<Minus class="size-4 text-muted-foreground" />
								{/if}
							{:else}
								<span class="text-foreground">{value}</span>
							{/if}
						</div>
					{/each}
				</div>
			{/each}

			<div class="grid grid-cols-4 border-t">
				<div class="p-4"></div>
				{#each plans as plan (plan.name)}
					<div class={`border-l p-4 ${plan.highlighted ? "bg-primary/5" : ""}`}>
						<Button
							href="#link"
							variant={plan.highlighted ? "default" : "outline"}
							size="sm"
							class="w-full"
						>
							{plan.cta}
						</Button>
					</div>
				{/each}
			</div>
		</Card>
	</div>
</section>
