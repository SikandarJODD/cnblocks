<script lang="ts">
	import ChevronRight from "@lucide/svelte/icons/chevron-right";
	import { Button } from "#lib/components/ui/dusk/button/index.js";
	import Header from "./header.svelte";
	import HeroVideo from "./hero-video.svelte";
	import LogoCloud from "./logo-cloud.svelte";
</script>

<Header />

<main class="overflow-x-hidden">
	<section>
		<div
			class="relative mx-auto flex aspect-square flex-col justify-end sm:aspect-3/2 lg:min-h-200 lg:aspect-auto xl:aspect-video min-[1996px]:max-h-240"
		>
			<div class="relative z-10 flex flex-col justify-end">
				<div class="mx-auto w-full max-w-7xl px-6 pb-6 lg:pb-12">
					<div class="flex flex-wrap items-end justify-between gap-4 lg:w-2/3">
						<h1 class="max-w-md text-5xl text-balance md:text-6xl">Build 10x Faster with Ada</h1>

						<div class="flex items-center gap-2">
							<Button href="#link" class="pr-2.5">
								<span class="text-nowrap">Start Building</span>
								<ChevronRight class="ml-1" />
							</Button>
						</div>
					</div>
				</div>
			</div>

			<div
				class="pointer-events-none absolute inset-0 mask-y-from-45% mask-b-to-90% 2xl:mask-x-from-90%"
			>
				<HeroVideo />
			</div>
		</div>
	</section>

	<LogoCloud />
</main>
