<script>
	import ArrowRight from "@lucide/svelte/icons/arrow-right";
	let stats = [
		{ value: "90+", label: "Integrations" },
		{ value: "56%", label: "Productivity Boost" },
		{ value: "24/7", label: "Customer Support" },
		{ value: "10k+", label: "Active Users" },
	];
</script>

<section>
	<div class="py-24">
		<div class="mx-auto max-w-5xl px-6">
			<div>
				<h2 class="text-2xl font-semibold">Tailark in numbers</h2>
				<p class="mt-4 text-lg text-balance text-muted-foreground">
					Our platform continues to grow with developers and businesses using our tools to
					create innovative solutions and enhance productivity.
				</p>
			</div>
			<ul role="list" class="mt-8 space-y-2 text-muted-foreground">
				{#each stats as stat, index}
					<li class="-ml-0.5 flex items-center gap-1.5">
						<ArrowRight class="size-4 opacity-50" />
						<span class="font-medium text-foreground">{stat.value}</span>
						{stat.label}
					</li>
				{/each}
			</ul>
		</div>
	</div>
</section>
