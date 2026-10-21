<script lang="ts">
	import { Button } from "#lib/components/ui/dusk/button/index.js";
	import Header from "./header.svelte";
	import LogoCloud from "./logo-cloud.svelte";
</script>

<Header />

<main class="overflow-x-hidden">
	<section class="pt-40 xl:pt-48">
		<div class="mx-auto max-w-7xl px-6">
			<div class="grid items-end gap-4 md:grid-cols-2 md:gap-6">
				<h1 class="text-4xl font-medium tracking-tight text-balance md:text-5xl">
					Build Software businesses can rely on
				</h1>
				<div class="flex max-w-md flex-col gap-4 md:mx-auto">
					<p class="text-lg text-balance text-muted-foreground">
						Leads, deals, tasks, and conversations.
					</p>
					<Button href="#" class="w-fit">Get Started</Button>
				</div>
			</div>

			<div
				class="relative mt-16 overflow-hidden rounded-xl bg-muted px-4 pt-6 max-lg:-mx-4 md:px-6 lg:px-8 lg:pt-16"
			>
				<div
					class="relative z-10 mx-auto flex aspect-3/2 max-w-5xl -space-x-12 sm:aspect-video lg:-space-x-56"
				>
					<div class="w-2/3 pt-6 lg:pt-16">
						<div
							class="h-full rounded-t-2xl bg-card shadow-2xl ring shadow-black/35 ring-foreground/6.5"
						></div>
					</div>
					<div
						class="relative h-full w-2/3 rounded-t-2xl bg-card shadow-2xl ring shadow-black/35 ring-foreground/6.5"
					></div>
				</div>

				<img
					src="https://images.unsplash.com/photo-1451337516015-6b6e9a44a8a3?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
					alt="Landscape"
					width="2215"
					height="1477"
					class="absolute inset-0 size-full object-cover"
				/>
			</div>
		</div>
	</section>

	<LogoCloud />
</main>
