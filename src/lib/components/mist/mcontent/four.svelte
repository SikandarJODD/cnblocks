<script lang="ts">
	import ArrowRight from "@lucide/svelte/icons/arrow-right";
	let content = [
		{ value: "90+", label: "Integrations" },
		{ value: "56%", label: "Productivity Boost" },
		{ value: "24/7", label: "Customer Support" },
		{ value: "10k+", label: "Active Users" },
	];
</script>

<section>
	<div class="py-24">
		<div class="mx-auto w-full max-w-5xl px-6">
			<div class="@container mx-auto max-w-2xl">
				<div>
					<h2 class="text-4xl font-semibold text-foreground">
						Create Content with AI Assistance
					</h2>
					<p class="mt-4 mb-12 text-xl text-muted-foreground">
						Our AI assistant helps you create better content faster. Generate ideas,
						improve your writing, and design layouts with simple prompts.
					</p>
				</div>

				<div class="my-12 grid gap-6 @sm:grid-cols-2 @2xl:grid-cols-3">
					<div class="space-y-2">
						<span class="mb-4 block text-3xl">💡</span>
						<h3 class="text-xl font-medium">Generate Ideas</h3>
						<p class="text-muted-foreground">
							Spark creativity with AI-powered content suggestions and inspiration.
						</p>
					</div>
					<div class="space-y-2">
						<span class="mb-4 block text-3xl">✏️</span>
						<h3 class="text-xl font-medium">Improve Writing</h3>
						<p class="text-muted-foreground">
							Enhance your text with smart editing suggestions and style refinements.
						</p>
					</div>
					<div class="space-y-2">
						<span class="mb-4 block text-3xl">🎨</span>
						<h3 class="text-xl font-medium">Design Layouts</h3>
						<p class="text-muted-foreground">
							Create visually appealing layouts that capture your audience's
							attention.
						</p>
					</div>
				</div>

				<div class="border-t">
					<ul role="list" class="mt-8 space-y-2 text-muted-foreground">
						{#each content as stat, index}
							<li class="-ml-0.5 flex items-center gap-1.5">
								<ArrowRight class="size-4 opacity-50" />
								<span class="font-medium text-foreground">{stat.value}</span>
								{stat.label}
							</li>
						{/each}
					</ul>
				</div>
			</div>
		</div>
	</div>
</section>
