<script lang="ts">
	import Cpu from "@lucide/svelte/icons/cpu";
	import Zap from "@lucide/svelte/icons/zap";
</script>

<section class="overflow-hidden py-16 md:py-20">
	<div class="mx-auto max-w-7xl space-y-8 px-6 md:space-y-16">
		<div class="max-w-2xl max-lg:pr-6">
			<h2 class="text-4xl font-medium tracking-tight text-balance md:text-5xl lg:text-6xl">
				Workspace for every customer relationship.
			</h2>
		</div>
		<div class="grid items-center gap-6 lg:grid-cols-3 lg:gap-20">
			<div class="relative mask-b-from-foreground max-lg:-mr-6 lg:col-span-2">
				<div class="relative overflow-hidden p-px max-sm:-mr-56">
					<div
						class="relative rounded-2xl bg-white p-2 ring ring-foreground/6.5 before:absolute before:-inset-px before:z-10 before:size-56 before:rounded-tl-2xl before:border-t before:border-l before:border-foreground/10 before:mask-radial-[100%_60%] before:mask-radial-from-65% before:mask-radial-at-top-left before:ring-foreground dark:bg-background dark:shadow-xl dark:shadow-black/50"
					>
						<div
							class="absolute inset-0 z-1 rounded-2xl bg-white dark:bg-foreground/2"
						></div>
						<img
							class="relative hidden aspect-15/8 rounded-2xl bg-background dark:block"
							src="/mail2.png"
							alt="App screen"
							width="2700"
							height="1440"
						/>
						<img
							class="relative z-2 aspect-15/8 rounded-xl border border-border/50 dark:hidden"
							src="/mail2-light.png"
							alt="App screen"
							width="2700"
							height="1440"
						/>
					</div>
				</div>
			</div>

			<div class="relative space-y-4">
				<p class="text-2xl text-balance text-muted-foreground">
					Tailark keeps pipeline, conversations, tasks, and account history connected so
					teams can spot the next best move.
				</p>

				<div class="grid gap-4 pt-6 sm:grid-cols-2">
					<p class="text-balance text-muted-foreground">
						<span class="font-medium text-foreground">
							<Zap class="inline size-4 -translate-y-0.5" /> Fast.
						</span>
						Move from signal to follow-up without losing context.
					</p>

					<p class="text-balance text-muted-foreground">
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
