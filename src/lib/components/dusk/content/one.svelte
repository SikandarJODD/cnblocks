<script lang="ts">
	import Button from "#lib/components/ui/dusk/button/button.svelte";
	import ChevronRight from "@lucide/svelte/icons/chevron-right";
</script>

<section class="py-16 md:py-20">
	<div class="mx-auto max-w-7xl space-y-12 px-6 md:space-y-16">
		<div class="aspect-video">
			<img
				class="size-full rounded-xl object-cover grayscale"
				src="https://images.unsplash.com/photo-1530099486328-e021101a494a?q=80&w=2747&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
				alt="team img"
				height="1080"
				width="1920"
				loading="lazy"
			/>
		</div>

		<div class="grid gap-4 md:grid-cols-2 md:gap-6 lg:gap-12">
			<h2 class="max-w-md text-4xl font-medium tracking-tight text-balance lg:text-5xl">
				A CRM workspace for every customer relationship.
			</h2>
			<div class="space-y-6">
				<p class="text-lg text-balance text-muted-foreground">
					Tailark keeps pipeline, conversations, tasks, and account history connected so
					teams can spot the next best move, follow up with context, and turn every
					customer signal into momentum.
				</p>

				<p class="text-lg text-balance text-muted-foreground">
					Modern sales teams move faster when every account, conversation, and next step
					lives in one place.
				</p>
				<Button variant="secondary" size="sm" class="gap-1 pr-1.5" href="/">
					<span>Explore CRM</span>
					<ChevronRight class="size-2" />
				</Button>
			</div>
		</div>
	</div>
</section>
