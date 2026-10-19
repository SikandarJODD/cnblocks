<script>
	import Header from "#lib/components/blocks/header/header-two.svelte";
	import Button from "#lib/components/ui/button/button.svelte";
	import ChevronRight from "@lucide/svelte/icons/chevron-right";

	import {
		Beacon,
		Bolt,
		Claude,
		FirebaseFull,
		Hulu,
		Spotify,
		SupabaseFull,
		VercelFull,
	} from "#lib/svgs/index.js";
</script>

<Header />

<main class="overflow-hidden">
	<div class="absolute inset-0 isolate hidden contain-strict lg:block">
		<div
			class="absolute top-0 left-0 h-320 w-140 -translate-y-87.5 -rotate-45 rounded-full bg-[radial-gradient(68.54%_68.72%_at_55.02%_31.46%,hsla(0,0%,85%,.08)_0,hsla(0,0%,55%,.02)_50%,hsla(0,0%,45%,0)_80%)]"
		></div>
		<div
			class="absolute top-0 left-0 h-320 w-60 [translate:5%_-50%] -rotate-45 rounded-full bg-[radial-gradient(50%_50%_at_50%_50%,hsla(0,0%,85%,.06)_0,hsla(0,0%,45%,.02)_80%,transparent_100%)]"
		></div>
		<div
			class="absolute top-0 left-0 h-320 w-60 -translate-y-87.5 -rotate-45 bg-[radial-gradient(50%_50%_at_50%_50%,hsla(0,0%,85%,.04)_0,hsla(0,0%,45%,.02)_80%,transparent_100%)]"
		></div>
	</div>
	<section>
		<div class="relative pt-24">
			<div
				class="absolute inset-0 -z-10 size-full bg-radial-[125%_125%_at_50%_100%] from-transparent from-0% to-background to-75%"
			></div>
			<div class="mx-auto max-w-5xl px-6">
				<div class="sm:mx-auto lg:mt-0 lg:mr-auto">
					<h1
						class="mt-8 max-w-2xl text-5xl font-medium text-balance md:text-6xl lg:mt-16"
					>
						Build and Ship 10x faster with NS
					</h1>
					<p class="mt-8 max-w-2xl text-lg text-pretty">
						Tailwindcss highly customizable components for building modern websites and
						applications that look and feel the way you mean it.
					</p>

					<div class="mt-12 flex items-center gap-2">
						<div
							class="border bg-foreground/10 p-0.5"
							style="border-radius: calc(var(--radius) + 4px + 0.125rem);"
						>
							<Button href="/" size="lg" class="rounded-xl px-5 text-base">
								Start Building
							</Button>
						</div>
						<Button
							href="/"
							size="lg"
							variant="ghost"
							class="h-10.5 rounded-xl px-5 text-base"
						>
							Request a demo
						</Button>
					</div>
				</div>
			</div>
			<div>
				<div class="relative mt-8 -mr-56 overflow-hidden px-2 sm:mt-12 sm:mr-0 md:mt-20">
					<div
						class="absolute inset-0 z-10 bg-linear-to-b from-transparent from-35% to-background"
					></div>
					<div
						class="relative mx-auto max-w-5xl overflow-hidden rounded-2xl border bg-background p-4 shadow-lg ring-1 inset-shadow-2xs shadow-zinc-950/15 ring-background dark:inset-shadow-white/20"
					>
						<img
							class="relative hidden aspect-15/8 rounded-2xl bg-background dark:block"
							src="/mail2.png"
							alt="app screen"
							width="2700"
							height="1440"
						/>
						<img
							class="relative z-2 aspect-15/8 rounded-2xl border border-border/25 dark:hidden"
							src="/mail2-light.png"
							alt="app screen"
							width="2700"
							height="1440"
						/>
					</div>
				</div>
			</div>
		</div>
	</section>
	<section class="bg-background pt-16 pb-16 md:pb-32">
		<div class="group relative m-auto max-w-5xl px-6">
			<div
				class="absolute inset-0 z-10 flex scale-95 items-center justify-center opacity-0 transition-[transform,opacity] duration-500 group-hover:scale-100 group-hover:opacity-100 motion-reduce:transition-none"
			>
				<a href="/" class="block text-sm transition-opacity duration-150 hover:opacity-75">
					<span> Meet Our Customers</span>

					<ChevronRight class="ml-1 inline-block size-3" />
				</a>
			</div>
			<div
				class="mx-auto mt-12 grid max-w-2xl grid-cols-3 gap-x-12 gap-y-8 transition-[opacity,filter] duration-500 **:fill-foreground group-hover:opacity-50 group-hover:blur-xs motion-reduce:transition-none sm:gap-x-16 sm:gap-y-14 md:grid-cols-4"
			>
				<div class="flex items-center">
					<Bolt class="mx-auto h-5 w-full" />
				</div>
				<div class="flex items-center">
					<VercelFull class="mx-auto h-4 w-full" />
				</div>
				<div class="flex items-center">
					<SupabaseFull class="mx-auto h-6" />
				</div>
				<div class="flex items-center">
					<Hulu class="mx-auto h-4 w-full" />
				</div>
				<div class="flex items-center">
					<Spotify class="mx-auto h-6 w-full" />
				</div>
				<div class="flex items-center">
					<FirebaseFull class="mx-auto h-6 w-full" />
				</div>
				<div class="flex items-center">
					<Beacon class="mx-auto h-4 w-full" />
				</div>

				<div class="flex items-center">
					<Claude class="mx-auto h-5 w-full" />
				</div>
			</div>
		</div>
	</section>
</main>
