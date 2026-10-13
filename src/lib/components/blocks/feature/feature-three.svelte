<script>
	import { Card, CardContent, CardHeader } from "#lib/components/ui/card/index.js";
	import Zap from "@lucide/svelte/icons/zap";
	import Settings2 from "@lucide/svelte/icons/settings-2";
	import Sparkles from "@lucide/svelte/icons/sparkles";
	import CardDecorator from "./card-decorator.svelte";
</script>

<section class="bg-zinc-50 py-16 md:py-32 dark:bg-transparent">
	<div class="mx-auto max-w-5xl px-6">
		<div class="text-center">
			<h2 class="text-4xl font-semibold text-balance lg:text-5xl">
				Built to cover your needs
			</h2>
			<p class="mt-4">
				Libero sapiente aliquam quibusdam aspernatur, praesentium iusto repellendus.
			</p>
		</div>
		<Card
			class="mx-auto mt-8 grid max-w-sm divide-y overflow-hidden shadow-zinc-950/5 *:text-center md:mt-16 lg:max-w-full lg:grid-cols-3 lg:divide-x lg:divide-y-0"
		>
			<div class="group shadow-zinc-950/5">
				<CardHeader class="pb-3">
					<CardDecorator>
						<Zap class="size-6" aria-hidden={true} />
					</CardDecorator>
					<h3 class="mt-6 font-medium">Customizable</h3>
				</CardHeader>

				<CardContent>
					<p class="text-sm">
						Extensive customization options, allowing you to tailor every aspect to meet
						your specific needs.
					</p>
				</CardContent>
			</div>

			<div class="group shadow-zinc-950/5">
				<CardHeader class="pb-3">
					<CardDecorator>
						<Settings2 class="size-6" aria-hidden={true} />
					</CardDecorator>

					<h3 class="mt-6 font-medium">You have full control</h3>
				</CardHeader>

				<CardContent>
					<p class="mt-3 text-sm">
						From design elements to functionality, you have complete control to create a
						unique and personalized experience.
					</p>
				</CardContent>
			</div>

			<div class="group shadow-zinc-950/5">
				<CardHeader class="pb-3">
					<CardDecorator>
						<Sparkles class="size-6" aria-hidden={true} />
					</CardDecorator>

					<h3 class="mt-6 font-medium">Powered By AI</h3>
				</CardHeader>

				<CardContent>
					<p class="mt-3 text-sm">
						Elements to functionality, you have complete control to create a unique
						experience.
					</p>
				</CardContent>
			</div>
		</Card>
	</div>
</section>
