<script lang="ts">
	import ArrowUp from "@lucide/svelte/icons/arrow-up";
	import Mic2 from "@lucide/svelte/icons/mic-2";
	import Plus from "@lucide/svelte/icons/plus";
	import { Button } from "#lib/components/ui/dusk/button/index.js";
	import { Kbd } from "#lib/components/ui/kbd/index.js";
	import Header from "./header.svelte";
	import LogoCloud from "./logo-cloud.svelte";
</script>

<Header />

<main class="@container overflow-x-hidden">
	<section>
		<div class="pt-32 lg:pt-16">
			<div class="relative mx-auto grid max-w-7xl items-center px-6 md:grid-cols-2 md:gap-12">
				<div class="text-center md:text-left">
					<h1 class="mb-10 text-5xl font-medium tracking-tight text-balance">
						Build Software businesses can rely on
					</h1>

					<div class="flex gap-2 max-md:justify-center">
						<Button>Get Started</Button>
						<Button
							variant="ghost"
							aria-label="Download App"
							class="hover:bg-transparent"
						>
							<Kbd>D</Kbd>
							Download App
						</Button>
					</div>
				</div>

				<div class="relative flex h-100 items-center md:h-180">
					<div class="absolute inset-0 z-10 m-auto h-fit md:-translate-y-7 md:px-12">
						<div class="relative">
							<div
								class="mt-auto h-fit rounded-3xl bg-card p-3 shadow-xl ring shadow-black/25 ring-foreground/15"
							>
								<div class="p-2 pb-3 text-sm text-muted-foreground">
									Ask Tailark what you need...
								</div>
								<div class="flex justify-between gap-3">
									<div class="flex items-center gap-1">
										<button
											type="button"
											aria-label="Add attachment"
											class="flex size-7 cursor-pointer rounded-full hover:bg-muted"
										>
											<Plus class="m-auto size-4" />
										</button>
										<button
											type="button"
											aria-label="Use microphone"
											class="flex size-7 cursor-pointer rounded-full hover:bg-muted"
										>
											<Mic2 class="m-auto size-4" />
										</button>
									</div>

									<button
										type="button"
										aria-label="Send message"
										class="flex size-7 cursor-pointer rounded-full bg-foreground text-background hover:brightness-110"
									>
										<ArrowUp class="m-auto size-4" />
									</button>
								</div>
							</div>
						</div>
					</div>

					<img
						src="https://images.unsplash.com/photo-1618003787019-95b65cc875d2?q=80&w=2148&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
						alt="Abstract flower"
						class="size-full scale-90 mask-b-from-65% object-cover object-[25%_50%] mix-blend-lighten"
						width="2148"
						height="1611"
					/>
				</div>
			</div>
		</div>
	</section>

	<LogoCloud />
</main>
