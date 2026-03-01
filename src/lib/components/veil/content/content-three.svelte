<script>
	import { Lightbulb, Pencil, PencilRuler } from '@lucide/svelte';
</script>

<section class="@container bg-background py-24">
	<div class="mx-auto max-w-2xl px-6">
		<div class="space-y-4">
			<h2 class="font-serif text-4xl font-medium text-balance">
				Create Content with AI Assistance
			</h2>
			<p class="text-muted-foreground">
				Our AI assistant helps you create better content faster. Generate ideas, improve your
				writing, and design layouts with simple prompts.
			</p>
		</div>
		<div class="mt-12 grid grid-cols-2 gap-6 text-sm @xl:grid-cols-3">
			<div class="space-y-3 border-t pt-6">
				<Lightbulb class="size-4 text-muted-foreground" />
				<p class="leading-5 text-muted-foreground">
					<span class="font-medium text-foreground">Generate Ideas</span> Spark creativity with AI-powered
					content suggestions and inspiration.
				</p>
			</div>

			<div class="space-y-3 border-t pt-6">
				<Pencil class="size-4 text-muted-foreground" />
				<p class="leading-5 text-muted-foreground">
					<span class="font-medium text-foreground">Improve Writing</span> Enhance your text with smart
					editing suggestions and style refinements.
				</p>
			</div>

			<div class="space-y-3 border-t pt-6">
				<PencilRuler class="size-4 text-muted-foreground" />
				<p class="leading-5 text-muted-foreground">
					<span class="font-medium text-foreground">Design Layouts</span> Create visually appealing layouts
					that capture your audience's attention.
				</p>
			</div>
		</div>
	</div>
</section>
