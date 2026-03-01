<script lang="ts">
	import { Button } from "$lib/components/ui/veil/button";
	import { Card } from "$lib/components/ui/veil/card";
	import { ArrowRight, Check } from "@lucide/svelte";

	type Props = {
		title?: string;
		description?: string;
		benefits?: string[];
		price?: string;
		priceSuffix?: string;
		priceNote?: string;
		ctaLabel?: string;
		ctaHref?: string;
	};

	let {
		title = "Transform Your Workflow",
		description = "Experience the power of seamless integrations and watch your productivity soar.",
		benefits = [
			"14-day free trial",
			"No credit card required",
			"Cancel anytime",
			"24/7 support",
		],
		price = "$0",
		priceSuffix = "/month",
		priceNote = "Free forever for individuals",
		ctaLabel = "Get Started Free",
		ctaHref = "#link",
	}: Props = $props();
</script>

<section class="@container bg-background py-24">
	<div class="mx-auto max-w-2xl px-6">
		<Card variant="outline" class="grid gap-8 p-6 md:p-8 @xl:grid-cols-2">
			<div>
				<h2 class="font-serif text-3xl font-medium text-balance">{title}</h2>
				<p class="mt-3 text-balance text-muted-foreground">{description}</p>
				<ul class="mt-6 space-y-2">
					{#each benefits as benefit, index (`${index}-${benefit}`)}
						<li class="flex items-center gap-2 text-sm text-muted-foreground">
							<Check class="size-4 text-primary" />
							{benefit}
						</li>
					{/each}
				</ul>
			</div>
			<div class="flex flex-col justify-center rounded-xl border bg-muted/50 p-6">
				<p class="text-sm text-muted-foreground">Starting at</p>
				<p class="mt-1 font-serif text-4xl font-medium">
					{price}<span class="text-lg font-normal text-muted-foreground"
						>{priceSuffix}</span
					>
				</p>
				<p class="mt-1 text-sm text-muted-foreground">{priceNote}</p>
				<Button href={ctaHref} class="mt-6 gap-2">
					{ctaLabel}
					<ArrowRight class="size-4" />
				</Button>
			</div>
		</Card>
	</div>
</section>
