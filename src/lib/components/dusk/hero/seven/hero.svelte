<script lang="ts">
	import ArrowRight from "@lucide/svelte/icons/arrow-right";
	import { Button } from "#lib/components/ui/dusk/button/index.js";
	import Header from "./header.svelte";
	import LogoCloud from "./logo-cloud.svelte";
</script>

<Header />

<main class="overflow-x-hidden">
	<section class="overflow-hidden">
		<div class="relative pt-24 md:pt-40 lg:pb-20 xl:pt-64">
			<div class="relative mx-auto grid max-w-7xl items-center gap-12 px-6 lg:grid-cols-2">
				<div>
					<a href="/" class="flex w-fit items-center gap-2 font-medium">
						<span class="text-sm">New</span>
						<span class="text-sm text-muted-foreground"
							>Introducing Tailark CRM 1.0</span
						>
						<ArrowRight class="size-3.5" />
					</a>

					<div class="mt-8 flex max-w-md flex-col gap-4">
						<h1 class="text-5xl font-medium tracking-tight text-balance md:text-6xl">
							One CRM. <span class="text-muted-foreground">Every customer.</span>
						</h1>

						<div class="flex max-w-md flex-col gap-6">
							<p class="text-muted-foreground">
								Leads, deals, tasks, and conversations — all through a single
								unified CRM. Start selling in seconds.
							</p>
							<div class="flex gap-3">
								<Button href="/" class="w-fit">Get Started</Button>
								<Button href="/" class="w-fit" variant="outline"
									>Talk to sales</Button
								>
							</div>
						</div>
					</div>
				</div>

				<div
					class="relative aspect-square overflow-hidden rounded-3xl sm:aspect-5/3 lg:ml-auto lg:aspect-5/4 lg:max-w-xl"
				>
					<div
						class="absolute top-6 left-6 z-10 min-w-3xl rounded-2xl bg-white p-2 ring ring-foreground/6.5 before:absolute before:-inset-px before:z-10 before:size-56 before:rounded-tl-2xl before:border-t before:border-l before:border-foreground/10 before:mask-radial-[100%_60%] before:mask-radial-from-65% before:mask-radial-at-top-left before:ring-foreground lg:top-8 lg:left-8 dark:bg-background dark:shadow-lg"
					>
						<div
							aria-hidden="true"
							class="absolute inset-0 z-1 rounded-2xl bg-white dark:bg-foreground/2"
						></div>
						<img
							class="relative hidden aspect-15/8 rounded-2xl dark:block dark:bg-background"
							src="/mail2.png"
							alt="App screen"
							width="2700"
							height="1440"
						/>
						<img
							class="relative z-2 aspect-15/8 rounded-2xl dark:hidden"
							src="/mail2-light.png"
							alt="App screen"
							width="2700"
							height="1440"
						/>
					</div>

					<img
						src="https://images.unsplash.com/photo-1772037440088-2ef162671434?q=80&w=1313&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
						alt="Background"
						width="1313"
						height="1000"
						class="size-full rotate-180 rounded-3xl object-cover object-bottom"
					/>
				</div>
			</div>
		</div>
	</section>

	<LogoCloud />
</main>
