<script lang="ts">
	import Cpu from "@lucide/svelte/icons/cpu";
	import Zap from "@lucide/svelte/icons/zap";
</script>

<section class="py-16 md:py-20">
	<div class="mx-auto max-w-7xl px-6">
		<div class="grid gap-4 md:grid-cols-2 md:gap-6 lg:gap-12">
			<h2 class="max-w-md text-4xl font-medium tracking-tight text-balance lg:text-5xl">
				A CRM workspace for every customer relationship.
			</h2>
			<div class="space-y-6 lg:space-y-12">
				<p class="text-lg text-balance text-muted-foreground">
					Tailark keeps pipeline, conversations, tasks, and account history connected so
					teams can spot the next best move, follow up with context, and turn every
					customer signal into momentum.
				</p>

				<div class="grid gap-4 pt-6 sm:grid-cols-2">
					<p class="text-lg text-balance text-muted-foreground">
						<span class="font-medium text-foreground">
							<Zap class="inline size-4 -translate-y-0.5" /> Fast.
						</span>
						Move from signal to follow-up without losing context.
					</p>

					<p class="text-lg text-balance text-muted-foreground">
						<span class="font-medium text-foreground">
							<Cpu class="inline size-4 -translate-y-0.5" /> Powerful.
						</span>
						Unify pipeline, tasks, and account history.
					</p>
				</div>
			</div>
		</div>
	</div>
</section>
