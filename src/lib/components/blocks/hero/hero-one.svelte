<script lang="ts">
	import Button from "#lib/components/ui/button/button.svelte";
	import Header from "#lib/components/blocks/header/header.svelte";
	import ArrowRight from "@lucide/svelte/icons/arrow-right";
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

<div>
	<Header />

	<main class="overflow-hidden">
		<div class="absolute inset-0 isolate hidden opacity-65 contain-strict lg:block">
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
			<div class="relative pt-24 md:pt-36">
				<div
					class="absolute inset-0 -z-10 size-full bg-radial-[125%_125%_at_50%_100%] from-transparent from-0% to-background to-75%"
				></div>
				<div class="mx-auto max-w-7xl px-6">
					<div class="text-center sm:mx-auto lg:mt-0 lg:mr-auto">
						<div>
							<a
								href="/"
								class="group mx-auto flex w-fit items-center gap-4 rounded-full border bg-muted p-1 pl-4 shadow-md shadow-zinc-950/5 transition-colors duration-300 hover:bg-background dark:border-t-white/5 dark:shadow-zinc-950 dark:hover:border-t-border"
							>
								<span class="text-sm text-foreground"
									>Introducing Support for AI Models</span
								>
								<span
									class="block h-4 w-0.5 border-l bg-white dark:border-background dark:bg-zinc-700"
								></span>

								<div
									class="size-6 overflow-hidden rounded-full bg-background transition-colors duration-500 group-hover:bg-muted"
								>
									<div
										class="flex w-12 -translate-x-1/2 transition-transform duration-500 ease-in-out group-hover:translate-x-0 motion-reduce:transition-none"
									>
										<span class="flex size-6">
											<ArrowRight class="m-auto size-3" />
										</span>
										<span class="flex size-6">
											<ArrowRight class="m-auto size-3" />
										</span>
									</div>
								</div>
							</a>
						</div>

						<h1
							class="mt-8 text-6xl text-balance md:text-7xl lg:mt-16 xl:text-[5.25rem]"
						>
							Modern Solutions for Customer Engagement
						</h1>
						<p class="mx-auto mt-8 max-w-2xl text-lg text-balance">
							Highly customizable components for building modern websites and
							applications that look and feel the way you mean it.
						</p>

						<div
							class="mt-12 flex flex-col items-center justify-center gap-2 md:flex-row"
						>
							<div
								class="border bg-foreground/10 p-0.5"
								style="border-radius: calc(0.5rem + 0.125rem + 4px);"
							>
								<Button href="/" size="lg" class="rounded-xl px-5 text-base">
									Start Building
								</Button>
							</div>
							<Button size="lg" variant="ghost" class="rounded-xl px-5">
								Request a demo
							</Button>
						</div>
					</div>
				</div>

				<div class="relative mt-8 -mr-56 overflow-hidden px-2 sm:mt-12 sm:mr-0 md:mt-20">
					<div
						class="absolute inset-0 z-10 bg-linear-to-b from-transparent from-35% to-background"
					></div>
					<div
						class="relative mx-auto max-w-6xl overflow-hidden rounded-2xl border bg-background p-4 shadow-lg inset-shadow-2xs shadow-zinc-950/15 ring-background dark:inset-shadow-white/20"
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
		</section>
		<section class="bg-background pt-16 pb-16 md:pb-32">
			<div class="group relative m-auto max-w-5xl px-6">
				<div
					class="absolute inset-0 z-10 flex scale-95 items-center justify-center opacity-0 transition-[transform,opacity] duration-500 group-hover:scale-100 group-hover:opacity-100 motion-reduce:transition-none"
				>
					<a
						href="/"
						class="block text-sm transition-opacity duration-150 hover:opacity-75"
					>
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
</div>
