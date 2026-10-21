<script lang="ts">
	import ArrowRight from "@lucide/svelte/icons/arrow-right";
	import ChevronRight from "@lucide/svelte/icons/chevron-right";
	import { Button } from "#lib/components/ui/dusk/button/index.js";
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
	import Header from "./header.svelte";
</script>

<Header />

<main class="overflow-hidden">
	<section>
		<div class="relative pt-24 md:pt-36">
			<div class="mx-auto max-w-7xl">
				<div class="px-6 text-center sm:mx-auto lg:mt-0 lg:mr-auto">
					<a
						href="/"
						class="group mx-auto flex w-fit items-center gap-3 rounded-full p-1 pl-4 transition-colors duration-300"
					>
						<span class="text-sm font-medium">New:</span>
						<span class="text-sm text-muted-foreground"
							>Introducing the living customer graph</span
						>

						<span class="size-6 overflow-hidden rounded-full">
							<span
								class="flex w-12 -translate-x-1/2 transition-transform duration-500 ease-in-out group-hover:translate-x-0 motion-reduce:transition-none"
							>
								<span class="flex size-6">
									<ArrowRight class="m-auto size-3" />
								</span>
								<span class="flex size-6">
									<ArrowRight class="m-auto size-3" />
								</span>
							</span>
						</span>
					</a>

					<h1
						class="mx-auto mt-8 max-w-4xl text-5xl font-medium tracking-tight text-balance md:text-6xl lg:mt-12 xl:text-7xl"
					>
						Customer universe, beautifully connected
					</h1>
					<p class="mx-auto mt-4 max-w-2xl text-balance text-muted-foreground md:text-lg">
						Every account, signal, conversation, and next move in one living workspace
						that helps teams turn momentum into revenue.
					</p>

					<div class="mt-6 flex flex-col items-center justify-center gap-2 md:flex-row">
						<Button href="#">
							<span class="text-nowrap">Explore the graph</span>
						</Button>
						<Button href="#" variant="ghost">
							<span class="text-nowrap">Watch the flow</span>
						</Button>
					</div>
				</div>

				<div class="relative mt-8 overflow-hidden p-6 max-sm:-mr-56 sm:mt-16">
					<div
						class="absolute inset-0 rounded-4xl border bg-linear-to-b from-amber-200 to-orange-300 mask-t-from-25% mask-t-to-65% dark:from-transparent dark:to-zinc-600"
					></div>
					<div
						class="relative rounded-2xl bg-white p-2 ring ring-foreground/6.5 before:absolute before:-inset-px before:z-10 before:size-56 before:rounded-tl-2xl before:border-t before:border-l before:border-foreground/10 before:mask-radial-[100%_60%] before:mask-radial-from-65% before:mask-radial-at-top-left before:ring-foreground dark:bg-background dark:shadow-xl dark:shadow-black/50"
					>
						<div class="absolute inset-0 z-1 rounded-2xl bg-foreground/2"></div>
						<img
							class="relative hidden aspect-15/8 rounded-xl bg-background [corner-shape:superellipse(1.2)] dark:block"
							src="/mail2.png"
							alt="App screen showing the connected customer workspace"
							width="2700"
							height="1440"
						/>
						<img
							class="relative z-2 aspect-15/8 rounded-xl border border-border/25 [corner-shape:superellipse(1.2)] dark:hidden"
							src="/mail2-light.png"
							alt="App screen showing the connected customer workspace"
							width="2700"
							height="1440"
						/>
					</div>
				</div>
			</div>
		</div>
	</section>

	<section class="bg-background pt-6 pb-16 md:pb-32">
		<div class="group relative m-auto max-w-5xl px-6">
			<div
				class="absolute inset-0 z-10 flex scale-95 items-center justify-center opacity-0 transition-[transform,opacity] duration-500 group-hover:scale-100 group-hover:opacity-100 motion-reduce:transition-none"
			>
				<a href="/" class="block text-sm transition-opacity duration-150 hover:opacity-75">
					<span>See the network</span>
					<ChevronRight class="ml-1 inline-block size-3" />
				</a>
			</div>

			<div
				class="mx-auto mt-12 grid max-w-2xl grid-cols-3 gap-x-12 gap-y-8 transition-all duration-500 group-hover:opacity-50 group-hover:blur-xs motion-reduce:transition-none sm:gap-x-16 sm:gap-y-14 md:grid-cols-4 [&_svg]:fill-foreground"
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
				<div class="hidden items-center sm:flex">
					<Beacon class="mx-auto h-4 w-full" />
				</div>
				<div class="hidden items-center sm:flex">
					<Claude class="mx-auto h-5 w-full" />
				</div>
			</div>
		</div>
	</section>
</main>
