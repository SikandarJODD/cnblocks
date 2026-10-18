<script>
	import Header from "#lib/components/blocks/header/header-eight.svelte";
	import Button from "#lib/components/ui/button/button.svelte";
	import Rocket from "@lucide/svelte/icons/rocket";
	import ArrowRight from "@lucide/svelte/icons/arrow-right";

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

<main class="overflow-hidden">
	<section>
		<div class="relative pt-24">
			<div class="mx-auto max-w-7xl px-6">
				<div class="max-w-3xl text-center sm:mx-auto lg:mt-0 lg:mr-auto lg:w-4/5">
					<a
						href="/"
						class="mx-auto flex w-fit items-center gap-2 rounded-(--radius) border p-1 pr-3"
					>
						<span
							class="rounded-[calc(var(--radius)-0.25rem)] bg-muted px-2 py-1 text-xs"
							>New</span
						>
						<span class="text-sm">Introduction Tailus UI Html</span>
						<span class="block h-4 w-px bg-border"></span>

						<ArrowRight class="size-4" />
					</a>

					<h1
						class="mt-8 text-4xl font-semibold text-balance md:text-5xl xl:text-6xl xl:leading-[1.125]"
					>
						Modern Software testing reimagined
					</h1>
					<p class="mx-auto mt-8 hidden max-w-2xl text-lg text-wrap sm:block">
						Tailwindcss highly customizable components for building modern websites and
						applications that look and feel the way you mean it.
					</p>
					<p class="mx-auto mt-6 max-w-2xl text-wrap sm:hidden">
						Highly customizable components for building modern websites and
						applications, with your personal spark.
					</p>

					<div class="mt-8">
						<Button size="lg" href="/">
							<Rocket class="relative size-4" />
							Start Building
						</Button>
					</div>
				</div>
			</div>
			<div class="relative mt-16">
				<div
					class="absolute inset-0 z-10 bg-linear-to-b from-transparent from-35% to-background"
				></div>
				<div class="relative mx-auto max-w-6xl overflow-hidden px-4">
					<img
						class="relative z-2 hidden rounded-2xl border border-border/25 dark:block"
						src="/music.png"
						alt="app screen"
						width={2796}
						height={2008}
					/>
					<img
						class="relative z-2 rounded-2xl border border-border/25 dark:hidden"
						src="/music-light.png"
						alt="app screen"
						width={2796}
						height={2008}
					/>
				</div>
			</div>
		</div>
	</section>
	<section class="relative z-10 bg-background pb-16">
		<div class="m-auto max-w-5xl px-6">
			<h2 class="text-center text-lg font-medium">
				Your favorite companies are our partners.
			</h2>
			<div
				class="mx-auto mt-20 flex max-w-4xl flex-wrap items-center justify-center gap-x-12 gap-y-8 **:fill-foreground sm:gap-x-16 sm:gap-y-12"
			>
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
			</div>
		</div>
	</section>
</main>
