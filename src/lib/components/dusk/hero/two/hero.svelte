<script lang="ts">
	import { Button } from "#lib/components/ui/dusk/button/index.js";
	import Header from "./header.svelte";
	import LogoCloud from "./logo-cloud.svelte";
</script>

<Header />

<main class="overflow-hidden">
	<section class="pt-44">
		<div class="mx-auto max-w-7xl px-6">
			<div class="flex justify-between gap-6 max-md:flex-col md:items-end lg:mt-16">
				<h1 class="max-w-2xl text-5xl font-medium tracking-tight text-balance md:text-6xl">
					Build Software business can rely on
				</h1>

				<Button href="/" class="w-fit" size="lg">Get Started</Button>
			</div>

			<div
				class="relative -mx-2 mt-8 overflow-hidden rounded-3xl p-2 max-sm:-mr-56 sm:mt-12 dark:bg-black"
			>
				<div
					class="relative rounded-2xl bg-white p-2 ring ring-foreground/6.5 before:absolute before:-inset-px before:z-10 before:size-56 before:rounded-tl-2xl before:border-t before:border-l before:border-foreground/10 before:mask-radial-[100%_60%] before:mask-radial-from-65% before:mask-radial-at-top-left before:ring-foreground dark:bg-background dark:shadow-2xl dark:shadow-black/55"
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
	</section>

	<LogoCloud />
</main>
