<script lang="ts">
	import Card from "$lib/components/ui/card/card.svelte";

	import Layout from "@lucide/svelte/icons/layout";
	import Target from "@lucide/svelte/icons/target";
	import CalendarCheck from "@lucide/svelte/icons/calendar-check";
	import Sparkles from "@lucide/svelte/icons/sparkles";
</script>

<section
	class="[--color-primary:theme(color.indigo.500)] [--color-secondary-foreground:theme(color.indigo.600)] [--color-secondary:theme(color.indigo.100)]"
>
	<div class="py-24">
		<div class="mx-auto w-full max-w-5xl px-6">
			<div class="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
				<Card variant="soft" class="col-span-full overflow-hidden pt-6 pl-6">
					<Layout class="size-5 text-primary" />
					<h3 class="mt-5 text-lg font-semibold text-foreground">AI Code Generation</h3>
					<p class="mt-3 max-w-xl text-balance text-muted-foreground">
						Our advanced AI models transform natural language into production-ready
						code, streamlining development workflows and enabling faster iteration.
					</p>
					<div class="-mt-2 mr-0.5 -ml-2 mask-b-from-95% pt-2 pl-2">
						<div
							class="relative mx-auto mt-8 h-96 overflow-hidden rounded-tl-(--radius) border border-transparent bg-background shadow ring-1"
						>
							<img
								src="/mist/tailark-3.png"
								alt="app screen"
								width="2880"
								height="1842"
								class="h-full object-cover object-top-left"
							/>
						</div>
					</div>
				</Card>
				<Card variant="soft" class="p-6">
					<Target class="size-5 text-primary" />
					<h3 class="mt-5 text-lg font-semibold text-foreground">AI Code Generation</h3>
					<p class="mt-3 text-balance text-muted-foreground">
						Our advanced AI models transform natural language into production-ready
						code.
					</p>
				</Card>

				<Card variant="soft" class="p-6">
					<CalendarCheck class="size-5 text-primary" />
					<h3 class="mt-5 text-lg font-semibold text-foreground">
						Intelligent Code Review
					</h3>
					<p class="mt-3 text-balance text-muted-foreground">
						Our AI analyzes your code for bugs, security issues, and optimization
						opportunities.
					</p>
				</Card>
				<Card variant="soft" class="p-6">
					<Sparkles class="size-5 text-primary" />
					<h3 class="mt-5 text-lg font-semibold text-foreground">
						Contextual AI Assistant
					</h3>
					<p class="mt-3 text-balance text-muted-foreground">
						A personalized AI companion that understands your codebase and helps solve
						complex...
					</p>
				</Card>
			</div>
		</div>
	</div>
</section>
