<script>
	import Zap from '@lucide/svelte/icons/zap';
	import Cpu from '@lucide/svelte/icons/cpu';
</script>

<section class="py-16 md:py-32">
	<div class="mx-auto max-w-5xl space-y-8 px-6 md:space-y-16">
		<h2 class="relative z-10 max-w-xl text-4xl font-medium lg:text-5xl">
			The Lyra ecosystem brings together our models.
		</h2>
		<div class="grid gap-6 sm:grid-cols-2 md:gap-12 lg:gap-24">
			<div class="relative space-y-4">
				<p class="text-muted-foreground">
					Gemini is evolving to be more than just the models. <span
						class="font-bold text-accent-foreground">It supports an entire ecosystem</span
					> — from products innovate.
				</p>
				<p class="text-muted-foreground">
					It supports an entire ecosystem — from products to the APIs and platforms helping
					developers and businesses innovate
				</p>

				<div class="grid grid-cols-2 gap-3 pt-6 sm:gap-4">
					<div class="space-y-3">
						<div class="flex items-center gap-2">
							<Zap class="size-4" />
							<h3 class="text-sm font-medium">Faaast</h3>
						</div>
						<p class="text-sm text-muted-foreground">
							It supports an entire helping developers and innovate.
						</p>
					</div>
					<div class="space-y-2">
						<div class="flex items-center gap-2">
							<Cpu class="size-4" />
							<h3 class="text-sm font-medium">Powerful</h3>
						</div>
						<p class="text-sm text-muted-foreground">
							It supports an entire helping developers and businesses.
						</p>
					</div>
				</div>
			</div>
			<div class="relative mt-6 sm:mt-0">
				<div
					class="relative aspect-67/34 rounded-2xl bg-linear-to-b from-zinc-300 to-transparent p-px dark:from-zinc-700"
				>
					<img
						src="/exercice-dark.png"
						class="hidden rounded-[15px] dark:block"
						alt="payments illustration dark"
						width={1206}
						height={612}
					/>
					<img
						src="/exercice.png"
						class="rounded-[15px] shadow dark:hidden"
						alt="payments illustration light"
						width={1206}
						height={612}
					/>
				</div>
			</div>
		</div>
	</div>
</section>
