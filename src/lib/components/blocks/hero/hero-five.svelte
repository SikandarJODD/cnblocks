<script>
	import Header from "#lib/components/blocks/header/header-five.svelte";
	import { Marquee } from "#lib/components/magic/marquee/index.js";
	import { ProgressiveBlur } from "#lib/components/magic/progressive-blur/index.js";
	import Button from "#lib/components/ui/button/button.svelte";
	import ChevronRight from "@lucide/svelte/icons/chevron-right";

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
		<div class="py-24 md:pb-32 lg:pt-72 lg:pb-36">
			<div class="relative mx-auto flex max-w-7xl flex-col px-6 lg:block lg:px-12">
				<div class="mx-auto max-w-lg text-center lg:ml-0 lg:max-w-full lg:text-left">
					<h1
						class="mt-8 max-w-2xl text-5xl text-balance md:text-6xl lg:mt-16 xl:text-7xl"
					>
						Build 10x Faster with NS
					</h1>
					<p class="mt-8 max-w-2xl text-lg text-balance">
						Highly customizable components for building modern websites and applications
						you mean it.
					</p>

					<div
						class="mt-12 flex flex-col items-center justify-center gap-2 sm:flex-row lg:justify-start"
					>
						<Button size="lg" href="/" class="h-12 rounded-full pr-3 pl-5 text-base">
							Start Building
							<ChevronRight class="ml-1" />
						</Button>
						<Button
							size="lg"
							variant="ghost"
							href="/"
							class="h-12 rounded-full px-5 text-base hover:bg-zinc-950/5 dark:hover:bg-white/5"
						>
							Request a demo
						</Button>
					</div>
				</div>
			</div>
			<!-- <div
        class="aspect-2/3 absolute inset-1 -z-10 overflow-hidden rounded-3xl border border-black/10 lg:aspect-video lg:rounded-[3rem] dark:border-white/5"
      >
        <video
          autoPlay
          loop
          class="size-full -scale-x-100 object-cover opacity-50 invert dark:opacity-35 dark:invert-0 dark:lg:opacity-75"
          src="https://res.cloudinary.com/dg4jhba5c/video/upload/v1741605033/dna_ttplyu.mp4"
        ></video>
      </div> -->
		</div>
	</section>
	<section class="bg-background py-6">
		<div class="group relative m-auto max-w-7xl px-6">
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
						class="absolute inset-y-0 left-0 w-20 bg-linear-to-r from-background"
					></div>
					<div
						class="absolute inset-y-0 right-0 w-20 bg-linear-to-l from-background"
					></div>
					<ProgressiveBlur
						class="pointer-events-none absolute top-0 left-0 z-50 h-full w-20"
						direction="left"
						blurIntensity={1}
					/>
					<ProgressiveBlur
						class="pointer-events-none absolute top-0 right-0 z-50 h-full w-20"
						direction="right"
						blurIntensity={1}
					/>
				</div>
			</div>
		</div>
	</section>
</main>
