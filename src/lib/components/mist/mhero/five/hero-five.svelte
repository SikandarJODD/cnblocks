<script lang="ts">
	import { Button } from "#lib/components/ui/mist/button/index.js";
	import MistKitLogo from "./mist-kit-logo.svelte";
	import TrustedLogos from "./trusted-logos.svelte";
</script>

<section class="py-20">
	<div class="relative z-10 mx-auto w-full max-w-2xl px-6 lg:px-0">
		<div class="relative text-center">
			<MistKitLogo class="mx-auto" />
			<h1 class="mx-auto mt-16 max-w-xl text-5xl font-medium text-balance">The Note App</h1>

			<p class="mx-auto mt-4 mb-6 text-xl text-balance text-muted-foreground">
				The Note App is a simple note app that allows you to create and manage your notes.
			</p>

			<div
				class="flex flex-col items-center gap-2 *:w-full sm:flex-row sm:justify-center sm:*:w-auto"
			>
				<Button href="#link" variant="neutral">Get Started</Button>
				<Button href="#link" variant="ghost">View Demo</Button>
			</div>
		</div>

		<div class="relative mt-12 overflow-hidden rounded-3xl bg-black/10 md:mt-16">
			<img
				src="https://images.unsplash.com/photo-1547623641-d2c56c03e2a7?q=80&w=3087&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
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

		<div class="mt-8 flex flex-wrap items-center gap-4">
			<p class="text-center text-muted-foreground">Trusted by teams at :</p>
			<TrustedLogos class="flex-wrap justify-center gap-8" />
		</div>
	</div>
</section>
