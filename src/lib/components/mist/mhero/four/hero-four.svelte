<script lang="ts">
	import { Button } from "#lib/components/ui/mist/button/index.js";
	import TrustedLogos from "./trusted-logos.svelte";
	import Header from "./header.svelte";
</script>

<Header />
<main>
	<section class="overflow-hidden">
		<div class="py-20 md:py-36">
			<div class="relative z-10 mx-auto max-w-5xl px-6">
				<div class="relative text-center">
					<h1 class="mx-auto max-w-2xl text-4xl font-bold text-balance md:text-5xl">
						Build Stunning Websites That Drive Results
					</h1>

					<p class="mx-auto my-6 max-w-2xl text-xl text-balance text-muted-foreground">
						Craft. Build. Ship Modern Websites With AI Support.
					</p>

					<div
						class="flex flex-col items-center justify-center gap-3 *:w-full sm:flex-row sm:*:w-auto"
					>
						<Button href="#link" size="lg">Get Started</Button>
						<Button href="#link" size="lg" variant="outline">View Demo</Button>
					</div>
				</div>

				<div
					class="relative mx-auto mt-12 max-w-5xl overflow-hidden rounded-3xl bg-black/10 md:mt-20"
				>
					<img
						src="https://images.unsplash.com/photo-1637055972140-64608c1abe53?q=80&w=2942&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
						alt=""
						class="absolute inset-0 size-full object-cover"
					/>

					<div
					class="relative m-4 overflow-hidden rounded-(--radius) border border-transparent bg-background shadow-xl ring-1 shadow-black/15 ring-black/10 sm:m-8 md:m-12"
					>
						<img
							src="/mist/tailark-2.png"
							alt="app screen"
							width="2880"
							height="1842"
							class="size-full object-cover object-top-left"
						/>
					</div>
				</div>

				<div class="mt-8">
					<p class="text-center text-muted-foreground">Trusted by teams at :</p>
					<TrustedLogos class="mt-4 justify-center gap-12" />
				</div>
			</div>
		</div>
	</section>
</main>
