<script lang="ts">
	import ArrowRight from "@lucide/svelte/icons/arrow-right";
	import { Button } from "#lib/components/ui/dusk/button/index.js";
	import Header from "./header.svelte";
	import LogoCloud from "./logo-cloud.svelte";
</script>

<Header />

<main class="overflow-x-hidden">
	<section class="overflow-hidden">
		<div class="relative pt-24 lg:pt-40">
			<div class="space-y-12 md:space-y-16">
				<div class="relative mx-auto max-w-7xl px-6">
					<a href="/" class="flex w-fit items-center gap-2 font-medium">
						<span>New</span>
						<span class="text-muted-foreground">Introducing Tailark Dusk 1.0</span>
						<ArrowRight class="size-3.5" />
					</a>

					<div class="mt-8 grid items-end gap-4 md:grid-cols-2 md:gap-6">
						<h1
							class="text-5xl font-medium tracking-tight text-balance md:text-6xl xl:text-7xl"
						>
							Agentic Creative canvas
						</h1>
						<div class="mx-auto flex max-w-md flex-col gap-6">
							<p class="text-lg text-balance text-muted-foreground">
								Modern websites and applications that look and feel the way you mean
								it.
							</p>
							<Button href="#" class="w-fit">Get Started</Button>
						</div>
					</div>
				</div>

				<div class="mx-auto max-w-7xl max-xl:px-2">
					<div
						class="relative aspect-square overflow-hidden rounded-3xl bg-muted md:aspect-5/3 lg:aspect-video"
					>
						<div
							class="absolute top-4 left-4 z-10 min-w-4xl rounded-2xl bg-background p-2 shadow-lg ring ring-foreground/6.5 before:absolute before:-inset-px before:z-10 before:size-56 before:rounded-tl-2xl before:border-t before:border-l before:border-foreground/10 before:mask-radial-[100%_60%] before:mask-radial-from-65% before:mask-radial-at-top-left before:ring-foreground lg:top-16 lg:left-16 lg:min-w-5xl xl:min-w-7xl"
						>
							<div
								aria-hidden="true"
								class="absolute inset-0 z-1 rounded-2xl bg-foreground/2"
							></div>
							<img
								class="relative aspect-15/8 rounded-2xl bg-background"
								src="/mail2.png"
								alt="App screen"
								width="2700"
								height="1440"
							/>
						</div>

						<img
							src="https://images.unsplash.com/photo-1772037440088-2ef162671434?q=80&w=1313&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
							alt=""
							width="1313"
							height="1000"
							class="size-full rotate-180 rounded-3xl object-cover object-bottom"
						/>
					</div>
				</div>
			</div>
		</div>
	</section>

	<LogoCloud />
</main>
