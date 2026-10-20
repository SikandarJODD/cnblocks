<script lang="ts">
	import ArrowRight from "@lucide/svelte/icons/arrow-right";
	import { Button } from "#lib/components/ui/dusk/button/index.js";
	import Header from "./header.svelte";
	import LogoCloud from "./logo-cloud.svelte";
</script>

<Header />

<main class="overflow-x-hidden">
	<section class="pt-24 lg:pt-40">
		<div class="mx-auto max-w-7xl px-6">
			<a href="/" class="mx-auto flex w-fit items-center gap-2 font-medium">
				<span>New</span>
				<span class="text-muted-foreground">Introducing Tailark Dusk 1.0</span>
				<ArrowRight class="size-3.5" />
			</a>

			<div
				class="mx-auto mt-8 mb-12 flex max-w-3xl flex-col justify-center gap-6 text-center md:gap-8"
			>
				<h1 class="text-4xl font-medium tracking-tight text-balance md:text-5xl">
					Next gen CRM: Customer universe, beautifully connected
				</h1>
				<Button href="#" class="mx-auto w-fit" size="lg">Get Started</Button>
			</div>

			<div
				class="relative overflow-hidden rounded-3xl bg-muted px-4 pt-4 max-lg:-mx-4 md:px-6 md:pt-6 lg:px-8 lg:pt-8"
			>
				<div
					class="relative z-10 rounded-t-2xl bg-background p-2 shadow-lg ring ring-foreground/6.5 before:absolute before:-inset-px before:z-10 before:size-56 before:rounded-tl-2xl before:border-t before:border-l before:border-foreground/10 before:mask-radial-[100%_60%] before:mask-radial-from-65% before:mask-radial-at-top-left before:ring-foreground"
				>
					<img
						class="relative hidden aspect-15/8 rounded-t-2xl bg-background dark:block"
						src="/mail2.png"
						alt="App screen"
						width="2700"
						height="1440"
					/>
					<img
						class="relative z-2 aspect-15/8 rounded-t-2xl border border-border/25 dark:hidden"
						src="/mail2-light.png"
						alt="App screen"
						width="2700"
						height="1440"
					/>
				</div>

				<img
					src="https://images.unsplash.com/photo-1761798979849-ebb267341d50?q=80&w=2215&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
					alt="Background"
					width="2215"
					height="1477"
					class="absolute inset-0 size-full rounded-3xl object-cover object-bottom"
				/>
			</div>
		</div>
	</section>

	<LogoCloud />
</main>
