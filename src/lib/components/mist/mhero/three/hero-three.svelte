<script lang="ts">
	import { Button } from "#lib/components/ui/mist/button/index.js";
	import TrustedLogos from "./trusted-logos.svelte";
	import Header from "./header.svelte";
</script>

<Header />
<main class="overflow-hidden bg-muted/50">
	<section>
		<div class="relative py-24">
			<div class="mx-auto max-w-5xl px-6">
				<div>
					<h1 class="mt-8 max-w-2xl text-5xl font-bold text-balance lg:text-6xl">
						Build 10x Faster with Mist
					</h1>
					<p class="my-6 max-w-2xl text-2xl text-balance text-foreground">
						Craft. Build. Ship Modern Websites With AI Support.
					</p>

					<div class="flex flex-col items-center gap-3 *:w-full sm:flex-row sm:*:w-fit">
						<Button href="#link" size="lg">Start Building</Button>
						<Button href="#link" size="lg" variant="outline">Request a demo</Button>
					</div>
				</div>

				<div class="mt-8">
					<p class="font-medium text-muted-foreground">Trusted by teams at :</p>
					<TrustedLogos class="mt-4 gap-12" />
				</div>

				<div class="relative mt-16 -mr-56 sm:mr-0">
					<div
					class="relative mx-auto overflow-hidden rounded-(--radius) border border-transparent bg-background shadow-lg ring-1 shadow-black/10 ring-black/10"
					>
						<img
							src="/mist/tailark-2.png"
							alt="app screen"
							width="2880"
							height="1842"
						/>
					</div>
				</div>
			</div>
		</div>
	</section>
</main>
