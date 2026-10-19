<script lang="ts">
	import Card from "#lib/components/ui/mist/card/card.svelte";

	import ArrowUp from "@lucide/svelte/icons/arrow-up";
	import Globe from "@lucide/svelte/icons/globe";
	import Plus from "@lucide/svelte/icons/plus";
	import Sparkles from "@lucide/svelte/icons/sparkles";
	import Button from "#lib/components/ui/mist/button/button.svelte";

	const stats = [
		{ value: "90+", emoji: "⭐️", label: "Integrations" },
		{ value: "56%", emoji: "👨🏽‍💻", label: "Productivity Boost" },
		{ value: "24/7", emoji: "🦜", label: "Customer Support" },
	];
</script>

<section>
	<div class="py-24">
		<div class="mx-auto w-full max-w-3xl px-6">
			<h2 class="text-3xl font-semibold text-balance text-foreground md:text-4xl">
				<span class="text-muted-foreground">Empowering Marketing teams with</span> AI-driven solutions
			</h2>
			<div class="@container mt-12 space-y-12">
				<Card variant="soft" class="relative overflow-hidden p-0 sm:col-span-2">
					<img
						src="https://images.unsplash.com/photo-1635776062043-223faf322554?q=80&w=3132&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
						alt=""
						class="absolute inset-0 size-full object-cover"
					/>
					<div class="m-auto max-w-md p-4 sm:p-12">
						{@render AIAssistantIllustration()}
					</div>
				</Card>
				<div class="grid gap-6 @sm:grid-cols-2 @2xl:grid-cols-3">
					<div class="space-y-2">
						<h3 class="text-xl font-medium">Generate Ideas</h3>
						<p class="text-muted-foreground">
							Spark creativity with AI-powered content suggestions and inspiration.
						</p>
					</div>
					<div class="space-y-2">
						<h3 class="text-xl font-medium">Improve Writing</h3>
						<p class="text-muted-foreground">
							Enhance your text with smart editing suggestions and style refinements.
						</p>
					</div>
					<div class="space-y-2">
						<h3 class="text-xl font-medium">Design Layouts</h3>
						<p class="text-muted-foreground">
							Create visually appealing layouts that capture your audience's
							attention.
						</p>
					</div>
				</div>
			</div>
		</div>
	</div>
</section>

{#snippet AIAssistantIllustration()}
	<Card aria-hidden inert class="relative space-y-4 p-6">
		<div class="w-fit">
			<Sparkles class="size-3.5 fill-purple-300 stroke-purple-300" />
			<p class="mt-2 line-clamp-2 text-sm">
				How can I optimize my neural network to reduce inference time while maintaining
				accuracy?
			</p>
			<ul role="list" class="mt-3 space-y-2 text-sm text-muted-foreground">
				{#each stats as stat (stat.label)}
					<li class="-ml-0.5 flex items-center gap-2">
						<span>{stat.emoji}</span>
						<span
							><span class="font-medium text-foreground">{stat.value}</span>
							{stat.label}</span
						>
					</li>
				{/each}
			</ul>
		</div>
		<div class="-mx-3 -mb-3 space-y-3 rounded-lg bg-foreground/5 p-3">
			<div class="text-sm text-muted-foreground">Ask AI Assistant</div>

			<div class="flex justify-between">
				<div class="flex gap-2">
					<Button
						variant="outline"
						size="icon"
						class="size-7 rounded-2xl bg-transparent shadow-none"
					>
						<Plus />
					</Button>
					<Button
						variant="outline"
						size="icon"
						class="size-7 rounded-2xl bg-transparent shadow-none"
					>
						<Globe />
					</Button>
				</div>

				<Button size="icon" class="size-7 rounded-2xl bg-black">
					<ArrowUp strokeWidth={3} />
				</Button>
			</div>
		</div>
	</Card>
{/snippet}
