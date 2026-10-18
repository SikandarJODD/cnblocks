<script lang="ts">
	import Header from "#lib/components/blocks/header/header-four.svelte";
	import Button from "#lib/components/ui/button/button.svelte";
	import { ProgressiveBlur } from "#lib/components/magic/progressive-blur/index.js";
	import { Marquee } from "#lib/components/magic/marquee/index.js";

	export const GRADIENT_ANGLES = {
		top: 0,
		right: 90,
		bottom: 180,
		left: 270,
	};

	type ProgressiveBlurProps = {
		direction?: keyof typeof GRADIENT_ANGLES;
		blurLayers?: number;
		class?: string;
		blurIntensity?: number;
	};

	import {
		Beacon,
		Bolt,
		Cisco,
		Claude,
		Figma,
		FirebaseFull,
		Hulu,
		Spotify,
		SupabaseFull,
		VercelFull,
	} from "#lib/svgs/index.js";
</script>

<Header />
<main class="overflow-x-hidden">
	<section>
		<div class="pt-12 pb-24 md:pb-32 lg:pt-44 lg:pb-56">
			<div class="relative mx-auto flex max-w-6xl flex-col px-6 lg:block">
				<div class="mx-auto max-w-lg text-center lg:ml-0 lg:w-1/2 lg:text-left">
					<h1
						class="mt-8 max-w-2xl text-5xl font-medium text-balance md:text-6xl lg:mt-16 xl:text-7xl"
					>
						Ship 10x Faster with NS
					</h1>
					<p class="mt-8 max-w-2xl text-lg text-pretty">
						Highly customizable components for building modern websites and applications
						that look and feel the way you mean it.
					</p>

					<div
						class="mt-12 flex flex-col items-center justify-center gap-2 sm:flex-row lg:justify-start"
					>
						<Button href="/" size="lg" class="px-5 text-base">Start Building</Button>
						<Button size="lg" variant="ghost" class="px-5 text-base" href="/">
							Request a demo
						</Button>
					</div>
				</div>
			</div>
		</div>
	</section>
	<section class="border-t bg-background pt-4 pb-16 md:pb-32">
		<div class="group relative m-auto max-w-6xl px-6">
			<div class="flex flex-col items-center md:flex-row">
				<div class="md:max-w-44 md:border-r md:pr-6">
					<p class="text-end text-sm">Powering the best teams</p>
				</div>
				<div class="relative py-6 **:fill-foreground md:w-[calc(100%-11rem)]">
					<Marquee>
						<Bolt height={22} width={56} />
						<VercelFull height={22} width={84} />
						<SupabaseFull class="h-6" />
						<Hulu height={18} width={56} />
						<Spotify height={24} width={80} />
						<FirebaseFull height={24} width={80} />
						<Beacon height={24} width={80} />
						<Claude height={26} width={90} />
						<Figma height={24} width={24} />
						<Cisco height={30} width={60} />
					</Marquee>

					<div
						aria-hidden={true}
						class="absolute inset-y-0 left-0 w-20 bg-linear-to-r from-background"
					></div>
					<div
						aria-hidden={true}
						class="absolute inset-y-0 right-0 w-20 bg-linear-to-l from-background"
					></div>
					<ProgressiveBlur
						direction="left"
						blurIntensity={1}
						class="pointer-events-none absolute top-0 left-0 h-full w-20"
					/>
					<ProgressiveBlur
						direction="right"
						blurIntensity={1}
						class="pointer-events-none absolute top-0 right-0 h-full w-20"
					/>
				</div>
			</div>
		</div>
	</section>
</main>
